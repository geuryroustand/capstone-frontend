import React, { useState } from "react";
import "./Register.css";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { signIn, register, verifyUser } from "../../action/auth";

import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 7,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#F0A500",

  // Class name used for the progress bar element.
  className: "bar-of-progress",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 80,
});

const Register = () => {
  const state = useSelector((state) => state.auth.login);
  const history = useHistory();
  const dispatch = useDispatch();

  const query = new URLSearchParams(useLocation().search);

  let signInId = query.get("signIn");

  const [userRegister, setUserRegister] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const getUserRegisterInfo = (key, value) => {
    setUserRegister({
      ...userRegister,
      [key]: value,
    });
  };

  const handlerRegisterForm = async (e) => {
    e.preventDefault();
    if (signInId) {
      progress.start();
      const response = await fetch(
        `${process.env.REACT_APP_API_PROD_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userRegister.email,
            password: userRegister.password,
          }),
        }
      );

      if (response.ok) {
        setTimeout(() => {
          progress.finish();
        }, 200);

        const data = await response.json();

        dispatch(
          signIn({
            name: data.name,
            surname: data.surname,
            avatar: data.avatar,
          })
        );

        localStorage.setItem("accessToken", data.accessToken);
        const lastPath = localStorage.getItem("lastPath");

        if (lastPath) {
          dispatch(verifyUser(data.accessToken));
          history.push(`${lastPath}`);
          return;
        }
        history.push("/");
      }
    } else {
      progress.start();
      const response = await fetch(
        `${process.env.REACT_APP_API_PROD_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userRegister),
        }
      );

      if (response.ok) {
        setTimeout(() => {
          progress.finish();
        }, 200);
        const data = await response.json();

        dispatch(
          register({
            name: data.name,
            surname: data.surname,
            avatar: data.avatar,
          })
        );

        localStorage.setItem("accessToken", data.accessToken);

        history.push("/");
      }
    }
  };

  return (
    <div className="register-bg">
      <div className="form-bg ">
        <h2 className={!signInId ? " pb-4 register" : "pb-4 signIn"}>
          {signInId ? <> Sign in </> : <> Create Your Free Account </>}
        </h2>

        <div className="form-center">
          <a
            href="https://vacationstaxi.herokuapp.com/users/googleLogin"
            type="submit"
            className="google-icon-login-or-reg mb-2"
          >
            <FcGoogle className="icons-login-or-reg" />
            {signInId ? <> Continue </> : <> Sign up </>}
            with Google
          </a>
          <a
            href="https://vacationstaxi.herokuapp.com/users/facebookLogin"
            className="facebook-icon-login-or-reg"
            type="submit"
          >
            <ImFacebook2 className="icons-login-or-reg" />
            {signInId ? <> Continue </> : <> Sign up </>}
            with Facebook
          </a>
          <hr />
          <p className="or">or</p>

          <Form onSubmit={handlerRegisterForm}>
            {!signInId && (
              <>
                <Form.Group className="mb-3" controlId="formGroupName">
                  {/* <Form.Label>Name</Form.Label> */}
                  <Form.Control
                    className="input-form"
                    type="text"
                    placeholder="Enter Name"
                    value={userRegister.name}
                    onChange={(e) =>
                      getUserRegisterInfo("name", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formGroupSurname">
                  {/* <Form.Label>Surname</Form.Label> */}
                  <Form.Control
                    className="input-form"
                    type="text"
                    placeholder="Enter Surname"
                    value={userRegister.surname}
                    onChange={(e) =>
                      getUserRegisterInfo("surname", e.target.value)
                    }
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                className="input-form"
                type="email"
                placeholder="Enter email"
                value={userRegister.email}
                onChange={(e) => getUserRegisterInfo("email", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                className="input-form"
                type="password"
                placeholder="Password"
                value={userRegister.password}
                autoComplete="true"
                onChange={(e) =>
                  getUserRegisterInfo("password", e.target.value)
                }
              />
            </Form.Group>

            <Button className="btn-create-account mb-3" type="submit">
              {signInId ? <>Sign in</> : <>Continue</>}
              {state && (
                <>
                  <Spinner
                    className="ml-2"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    variant="warning"
                  />
                  <span className="sr-only">Loading...</span>
                </>
              )}
            </Button>
          </Form>

          {!signInId ? (
            <>
              <p className="p-footer">
                By creating an account, you are agreeing to our <br />
                <Link className="  links-color p-footer pr-1 " to="/#">
                  Terms of Service
                </Link>
                and
                <Link className=" pl-1 links-color p-footer" to="/#">
                  Privacy Policy
                </Link>
              </p>
              <p className="p-footer">Already have an account?</p>
              <p className="p-footer">
                <Link className="links-color" to="/signIn">
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="p-footer">Don't have an account?</p>
              <p className="p-footer">
                <Link className="links-color" to="/register">
                  Create one
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
