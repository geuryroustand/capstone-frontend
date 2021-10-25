import React from "react";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="register-bg">
      <div className="form-bg ">
        <h2 className="pb-4 create-account">Create Your Free Account</h2>

        <div className="form-center">
          <Link className="google-icon-login-or-reg mb-2" type="submit">
            <FcGoogle className="icons-login-or-reg" />
            Sing up with Google
          </Link>
          <Link className="facebook-icon-login-or-reg" type="submit">
            <ImFacebook2 className="icons-login-or-reg" />
            Sing up with with Facebook
          </Link>
          <hr />
          <p className="or">or</p>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                className="input-form"
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formGroupSurname">
              {/* <Form.Label>Surname</Form.Label> */}
              <Form.Control
                className="input-form"
                type="text"
                placeholder="Enter Surname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                className="input-form"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                className="input-form"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button className="btn-create-account mb-3" type="submit">
              Create Free Account
            </Button>
          </Form>
          <p className="p-footer">
            By creating an account, you are agreeing to our <br />
            <Link className="  links-color p-footer pr-1 ">
              Terms of Service
            </Link>
            and
            <Link className=" pl-1 links-color p-footer">Privacy Policy</Link>
          </p>
          <p className="p-footer">Already have an account?</p>
          <p className="p-footer">
            <Link className="links-color  "> Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
