import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { format, parse, parseISO } from "date-fns";
import { fetchSharedRide } from "../../action/index.js";
import { WiDirectionRight } from "react-icons/wi";
import { FaUserFriends } from "react-icons/fa";
import "./FindSharedRide.css";

const FindSharedRide = () => {
  let query = new URLSearchParams(useLocation().search);

  let pickupLocation = query.get("pickupLocation");
  let dropLocation = query.get("dropLocation");
  let serviceDate = query.get("serviceDate");
  // let passengers = query.get("passengers");

  const dispatch = useDispatch();

  const { searchSharedRide } = useSelector((state) => state?.searchSharedRide);

  // const getInUser = useSelector(
  //   (state) => state?.searchSharedRide.searchSharedRide
  // );

  // const findUser = getInUser.map((el) => el.user);

  // const user = findUser.flatMap((u) => u);

  // console.log("a", findUser);
  // useEffect(() => {
  //   dispatch(
  //     fetchSharedRide(
  //       pickupLocation,
  //       dropLocation,
  //       format(new Date(serviceDate), "EEEE d, MMM  yyyy")
  //     )
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const clickHandler = (e) => {
    console.log(e);
  };

  return (
    <Container>
      {searchSharedRide?.map((sharedTransfer, i) => (
        <Row
          key={i}
          onClick={(e) => clickHandler(sharedTransfer)}
          className="shared-ride-card"
        >
          <Col>
            <div className="d-flex sharedLocationName">
              <p>
                {pickupLocation ? pickupLocation : sharedTransfer.pickLocation}
              </p>
              <WiDirectionRight className="direction-icon" />
              <p>{dropLocation ? dropLocation : sharedTransfer.dropLocation}</p>
            </div>

            {/* <p>
              Depart at: <span className="bold-info"> 13:20 </span>
            </p> */}

            <div className="d-flex">
              <div>
                <p>
                  Date:{" "}
                  <span className="bold-info">
                    {format(
                      parseISO(sharedTransfer.serviceDate),
                      "PPPPpp"
                      // "EEEE d, MMM  yyyy"
                      // "eee d, MMM  yyyy  h:mm aa"
                    )}
                  </span>
                </p>

                {sharedTransfer.airlineName && (
                  <p>
                    Airline Name:{" "}
                    <span className="bold-info">
                      {sharedTransfer.airlineName}{" "}
                    </span>{" "}
                  </p>
                )}
                <p>
                  {" "}
                  Flight Number:{" "}
                  <span className="bold-info">
                    {" "}
                    {sharedTransfer.flightNumber}{" "}
                  </span>
                </p>
                <div className="profile">
                  <img
                    className="userProfileImg"
                    src={sharedTransfer.user?.avatar}
                    alt=""
                  />
                  <p className="bold-info ml-3">
                    {sharedTransfer.user?.name} {sharedTransfer.user?.surname}
                  </p>
                </div>
              </div>

              <div className="sharedTransferPrice">
                <p>${sharedTransfer.totalPrice}</p>

                <p>
                  {" "}
                  <FaUserFriends /> {sharedTransfer.passenger}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FindSharedRide;
