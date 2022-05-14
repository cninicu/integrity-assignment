import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { string } from "yup";
import { useSignIn, useSignInRedirect } from "../hooks";

import "../../App.css";

export const SignIn: React.FC = () => {
  useSignInRedirect();
  const signIn = useSignIn();

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: string().required("Required"),
  });

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          signIn(values.name);
        }}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          isValid,
          handleChange,
          handleBlur,
          values,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" rowGap={2}>
              <Box alignSelf="start">
                <Typography
                  style={{
                    fontSize: 21,
                    fontWeight: 600,
                  }}
                >
                  Please enter your name
                </Typography>
              </Box>
              <Box width={400}>
                <Field
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  label="Full name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  // error={errors.name}
                  id="name"
                />
              </Box>
              <Box width={400} alignSelf="center">
                <Button
                  variant="outlined"
                  type="submit"
                  fullWidth
                  disabled={!isValid}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
