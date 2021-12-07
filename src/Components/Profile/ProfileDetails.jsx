import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./ProfileDetails.css";
import configureStore from "../../store";

import { useSelector } from "react-redux";
import { userUpdated } from "../../action/auth";
import { useDispatch } from "react-redux";

const ProfileDetails = () => {
  const dispatch = useDispatch();

  console.log("", configureStore.getState());
  configureStore.subscribe(() => {
    this.forceUpdate();
  });
  const { avatar, name, surname, email } = useSelector((state) => state.auth);

  const [newUserInfo, setNewUserInfo] = useState({
    email,
    name,
    surname,
  });

  const [clickLabelNameAndSurName, setClickLabelNameAndSurName] = useState();
  const [clickLabelEmail, setClickLabelEmail] = useState();

  // useEffect(() => {
  //   setNewUserInfo(newUserInfo);
  // }, [newUserInfo]);
  // Handle userName And SurName

  const handlerNameAndSurnameClick = (e) => {
    e.preventDefault();
    setClickLabelNameAndSurName(!clickLabelNameAndSurName);
  };

  // EMAIL Handler

  const handlerEmailClick = (e) => {
    e.preventDefault();
    setClickLabelEmail(!clickLabelEmail);
  };
  const handlerUserTypingNewInfo = (key, value) => {
    setNewUserInfo({
      ...newUserInfo,
      [key]: value,
    });
  };

  // const unsubscribe = configureStore.subscribe(() => configureStore.getState());
  // unsubscribe();
  const handlerSubmitNewUserInfo = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("accessToken");

      const response = await fetch(
        `${process.env.REACT_APP_API_PROD_URL}/users/me`,
        {
          method: "PATCH",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newUserInfo),
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(userUpdated(data));

        // configureStore.subscribe(() => {
        //   if (configureStore.getState().auth) {
        //     email = email.data;
        //   }
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <h3 className="profile-title">Personal details</h3>
      <Form className="profile-form" onSubmit={handlerSubmitNewUserInfo}>
        <div className="profile-avatar-center">
          <img className="profile-avatar" src={avatar} alt="" />
        </div>

        <hr />

        <Col className=" d-flex profile-name-and-surname">
          <p className="mr-4">Name</p>

          <div className="ml-4">
            {!clickLabelNameAndSurName && (
              <p type="input" className="profile-name">
                {name} {surname}
              </p>
            )}

            {clickLabelNameAndSurName && (
              <Row>
                <Col md={6}>
                  <Form.Label className="profile-label">Name</Form.Label>
                  <Form.Control
                    value={newUserInfo.name}
                    onChange={(e) =>
                      handlerUserTypingNewInfo("name", e.target.value)
                    }
                    placeholder="Name"
                  />
                </Col>
                <Col md={6}>
                  <Form.Label className="profile-label">Surname</Form.Label>

                  <Form.Control
                    value={newUserInfo.surname}
                    onChange={(e) =>
                      handlerUserTypingNewInfo("surname", e.target.value)
                    }
                    placeholder="Surname"
                  />
                </Col>
              </Row>
            )}
          </div>

          <div className="all-btn-profile">
            {clickLabelNameAndSurName && (
              <div>
                <button
                  className="ml-4 d-flex profile-cancel-btn "
                  onClick={handlerNameAndSurnameClick}
                >
                  Cancel
                </button>
                <button
                  className="ml-4 mt-3 profile-save-btn "
                  // onClick={handlerNameAndSurnameClick}
                >
                  Save
                </button>
              </div>
            )}

            {!clickLabelNameAndSurName && (
              <button
                className={
                  clickLabelEmail
                    ? "ml-4 profile-edit-btn profile-btn-disabled  "
                    : "ml-4 profile-edit-btn "
                }
                onClick={handlerNameAndSurnameClick}
              >
                Edit
              </button>
            )}
          </div>
        </Col>

        <hr />

        {/* second */}

        <Col className=" d-flex profile-name-and-surname">
          <p className="mr-4">Email address</p>

          <div>
            {!clickLabelEmail && (
              <p type="input" className="profile-email-address">
                {email}
              </p>
            )}

            {clickLabelEmail && (
              <>
                <Form.Label className="profile-label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={newUserInfo.email}
                  onChange={(e) =>
                    handlerUserTypingNewInfo("email", e.target.value)
                  }
                />
              </>
            )}
          </div>

          <div className="all-btn-profile ">
            {clickLabelEmail && (
              <div>
                <button
                  className="ml-4 d-flex profile-cancel-btn "
                  onClick={handlerEmailClick}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 mt-3 profile-save-btn "
                  // onClick={handlerSaveInfo}
                  // onSubmit={handlerSubmitNewUserInfo}
                >
                  Save
                </button>
              </div>
            )}

            {!clickLabelEmail && (
              <button
                className={
                  clickLabelNameAndSurName
                    ? "ml-4 profile-edit-btn profile-btn-disabled   "
                    : "ml-4 profile-edit-btn"
                }
                onClick={handlerEmailClick}
              >
                Edit
              </button>
            )}
          </div>
        </Col>
        <hr />
      </Form>
    </Container>
  );
};

export default ProfileDetails;
