import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { WiDirectionRight, WiDirectionDown } from "react-icons/wi";
import "./PostForm.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSharedRide } from "../../action";
import { postInDBSharedRide } from "../../action/postSharedRide";
import { useHistory } from "react-router";
import { format } from "date-fns";
export const PostForm = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const state = useSelector((state) => state);
  const [post, setPost] = useState({
    ...state.postSharedRide,
    airlineName: "",
    flightNumber: "",
    serviceDate: "",
    haveFlight: "Yes",
  });

  const handlerInput = (key, value) => {
    if (key === "serviceDate") {
      setStartDate(value);
    }
    setPost({
      ...post,
      [key]: value,
    });
  };

  const history = useHistory();
  const handlerSubmit = async (e) => {
    try {
      e.preventDefault();

      await dispatch(postInDBSharedRide(post));

      await dispatch(
        fetchSharedRide(post.pickLocation, post.dropLocation, post.serviceDate)
      );

      await history.push("/searchSharedRide");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="">
      <div className="directions-info">
        <Row>
          <Col>
            <p>{state.postSharedRide?.pickLocation}</p>
          </Col>

          <WiDirectionRight className="direction-icon" />

          <WiDirectionDown className="direction-icon-down" />
          <Col>
            <p>{state.postSharedRide?.dropLocation}</p>
          </Col>
        </Row>
      </div>
      <Form onSubmit={handlerSubmit} className="mt-5 post-form">
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => handlerInput("name", e.target.value)}
              defaultValue={state?.auth.name}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => handlerInput("surname", e.target.value)}
              defaultValue={state?.auth.surname}
              type="text"
              placeholder="Enter last name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => handlerInput("email", e.target.value)}
            defaultValue={state?.auth.email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            When someone leaves a comment, you will be notified by email at the
            following address.
          </Form.Text>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Do you have a flight</Form.Label>
            <Form.Control
              onChange={(e) => handlerInput("haveFlight", e.target.value)}
              as="select"
              value={post.haveFlight}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Passenger</Form.Label>
            <Form.Control
              onChange={(e) => handlerInput("passenger", e.target.value)}
              as="select"
              value={state.postSharedRide?.passenger}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Label as={Col}>
            Date
            <DatePicker
              className="post-date border"
              showTimeSelect
              // timeFormat="HH:mm"
              selected={startDate}
              // timeInputLabel="T:"
              // selected={dataToSend.arrivalDate}

              // onChange={(date) => setStartDate(date)}
              onChange={(date) => handlerInput("serviceDate", date)}
              // setPost({ serviceDate: date });
              // timeClassName={handleColor}
              minDate={new Date()}
              maxDate={new Date("02-29-2024")}
              showPopperArrow={false}
              showMonthDropdown
              showYearDropdown
              yearDropdownItemNumber={1}
              scrollableYearDropdown
              dropdownMode="select"
              // dateFormat="eee d, MMM  yyyy "
              // peekNextMonth
              // scrollableYearDropdown
              strictParsing
              timeIntervals={10}
              dateFormat="eee d, MMM  yyyy h:mm aa"
              // dateFormat="Pp"
              withPortal
              portalId="root-portal"
              required
              // value={dataToSend.arrivalDate}
              // onChange={(e) => handlerData("arrivalDate", e.target.value)}
            />
          </Form.Label>

          {post.haveFlight === "Yes" && (
            <>
              <Form.Group
                as={Col}
                onChange={(e) => handlerInput("airlineName", e.target.value)}
                defaultValue={post.airlineName}
              >
                <Form.Label>AirlineName</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group
                onChange={(e) => handlerInput("flightNumber", e.target.value)}
                defaultValue={post.flightNumber}
                as={Col}
              >
                <Form.Label>FlightNumber</Form.Label>
                <Form.Control />
              </Form.Group>
            </>
          )}
        </Form.Row>

        <Button className="post-btn" type="submit">
          Post your share ride
        </Button>
      </Form>
    </Container>
  );
};
