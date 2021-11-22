import React, { useState } from "react";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { register } from "../../action/auth";

const Register = () => {
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
  const dispatch = useDispatch();
  const { signInId } = useParams();

  const handlerRegisterForm = (e) => {
    e.preventDefault();
    dispatch(register(userRegister));
    setUserRegister({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
    // history.push("/");
  };

  return (
    <div className="register-bg">
      <div className="form-bg ">
        <h2 className={!signInId ? " pb-4 register" : "pb-4 signIn"}>
          {signInId ? <> Sign in </> : <> Create Your Free Account </>}
        </h2>

        <div className="form-center">
          <Link className="google-icon-login-or-reg mb-2" type="submit">
            <FcGoogle className="icons-login-or-reg" />
            {signInId ? <> Continue </> : <> Sign up </>}
            with Google
          </Link>
          <Link className="facebook-icon-login-or-reg" type="submit">
            <ImFacebook2 className="icons-login-or-reg" />
            {signInId ? <> Continue </> : <> Sign up </>}
            with Facebook
          </Link>
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
