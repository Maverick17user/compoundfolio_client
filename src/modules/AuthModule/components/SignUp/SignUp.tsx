import initialSignUpFormValues from "@modules/AuthModule/consts/initialSignUpFormValues";
import { SignView } from "@modules/AuthModule/views";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import getStaticSignUpProps from "./getStaticSignUpProps";


export const getStaticProps = getStaticSignUpProps;

export default function SignUp() {
  // TODO: Validation
  const {
    values,
    // errors,
    // setErrors,
    // setFieldError,
    handleChange,
    handleSubmit,
  } = useFormik({
    // validationSchema,
    initialValues: initialSignUpFormValues,
    validateOnChange: false,
    onSubmit: ({ email, name, password }) => {

    },
  }); 

  const { email, name, password } = values

  return (
    <SignView isSignUp handleSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Email"
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        placeholder="Name"
        label="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        placeholder="Password"
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
    </SignView>
  );
}
