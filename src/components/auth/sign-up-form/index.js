import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { signUp } from "../../../ducks/auth";

const SignUpForm = ({ signUp }) => {
  const handleSubmit = ({ email, password }) => signUp(email, password);

  return (
    <div>
      <h3>Sign Up</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          email:
          <Field type="email" name="email" />
          <Field
            type="password"
            name="password"
            validate={(password) =>
              password && password.length >= 8
                ? undefined
                : "Password too short"
            }
          >
            {({ field, meta }) => (
              <div>
                password: <input {...field} type="password" />
                {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default connect(null, { signUp })(SignUpForm);
