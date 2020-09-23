import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import RingLoader from "../components/loader";
import Head from "next/head";
import SweetAlert from "react-bootstrap-sweetalert";
import axiosInstance from "../utils/axios";
import axios from 'axios'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(/^[a-zA-Z ]{2,30}$/, "Invalid First Name")
    .required("FirstName Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .matches(/^[a-zA-Z ]{2,30}$/, "Invalid Last Name")
    .required("LastName Required"),
  email: Yup.string().email("Invalid email address").required("Email Required"),
  date: Yup.date().max(new Date(),"Please select valid date").required("Select Date"),
  contact: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid Number")
    .required("Contact Required"),
});

const SignupForm = () => {
  const [showAlert, setSweetAlert] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      contact: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      
      new Promise(async (resolve, reject) => {
        try {
          await axiosInstance.get('/');
          resolve();
        } catch (err) {
          reject(err);
        }
      }).then(
        setTimeout(()=>{
          setSweetAlert(true)
        },4000)
      );
      resetForm();
      // setTimeout(() => {
      // formik.setSubmitting(false);
      // alert("Data Submitted");
      // }, 5000);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>User Form</title>
      </Head>
      <RingLoader />
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto p-2 col-12 col-md-5"
      >
        {}
        <div className="form-group">
          <label htmlFor="firstName">First Name :</label>
          <input
            className="form-control"
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <small className="form-text text-danger">
              {formik.errors.firstName}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name :</label>
          <input
            className="form-control"
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <small className="form-text text-danger">
              {formik.errors.lastName}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="form-text text-danger">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="contact">Mobile :</label>
          <div className="input-group">
            <input
              className="form-control"
              id="contact"
              type="text"
              {...formik.getFieldProps("contact")}
            />
          </div>
          {formik.touched.contact && formik.errors.contact ? (
            <small className="form-text text-danger">
              {formik.errors.contact}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            className="form-control"
            id="date"
            type="date"
            {...formik.getFieldProps("date")}
          />
          {formik.touched.date && formik.errors.date ? (
            <small className="form-text text-danger">
              {formik.errors.date}
            </small>
          ) : null}
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={
            !formik.errors.email &&
            !formik.errors.firstName &&
            !formik.errors.lastName &&
            !formik.errors.date &&
            formik.touched.email &&
            formik.touched.firstName &&
            formik.touched.date &&
            formik.touched.lastName
              ? false
              : true
          }
        >
          Submit
        </button>
        {formik.isSubmitting && <RingLoader />}
        {showAlert && <SweetAlert success onConfirm={()=>{setSweetAlert(false)}}>Data Saved Succesfully</SweetAlert>}
        {/* {!form.isSubmitting&& } */}
      </form>

      <form>
        <button onClick={()=>{
          // axiosInstance.get('/',{headers: {
          //   'Access-Control-Allow-Origin' : '*',
          //   'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          // }}).then((res)=>{
          //   console.log(res);
          // })
          // console.log(res);
          const proxyUrl="https://cors-anywhere.herokuapp.com"
          axios.get(proxyUrl+"https://maps.googleapis.com/maps/api/place/autocomplete/json?input=wework&key=AIzaSyB7fVn0yK-0GSBwfYOhgth6KAiW-dOLnBQ&sessiontoken=1234567890&components=country:IN")
          .then((res)=>{
            console.log(res);
          })          
        }}>Hit Api</button>
      </form>

    </>
  );
};

export default SignupForm;
