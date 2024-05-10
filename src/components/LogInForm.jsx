/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../schemas/login.js";
import * as CryptoJS from "crypto-js";

export default function LogInForm(props) {
  const navigate = useNavigate();
  //
  const checkingDetails = (values) => {
    const decryptedPassword= CryptoJS.AES.decrypt(JSON.parse(localStorage.getItem(values.email)).password,"secret!3#%@").toString(CryptoJS.enc.Utf8);
    if ( values.password=== decryptedPassword) {
      navigate("/home");
    } else {
      console.log(JSON.parse(localStorage.getItem(values.email)).password)
      console.log(decryptedPassword);
    }
  };

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      checkingDetails(values);
    },
  });

  return (
    <>
      <div className="login-form">
        <form className=" mx-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formik.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="name@gmail.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="error mt-1 ml-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={formik.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            {formik.touched.password && formik.errors.password ? (
              <div className="error mt-1 ml-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="create-account mb-5">
            <p>
              Don't Have Account?{" "}
              <Link to="/signUp" className="Sign-Up">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
