import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../api/apiFunctions"; // Import the loginUser function
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const notify = () => toast.error("Enter correct email and password");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="w-full m-0 h-[70rem] relative [background:linear-gradient(180deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] overflow-hidden flex flex-row items-start justify-center pt-[5.5rem] px-[1.25rem] pb-[5.438rem] box-border leading-[normal] tracking-[normal]">
      <ToastContainer />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("Form values:", values); // Log form values

          try {
            const { success, token, user, error } = await loginUser(values.email, values.password);
            
            if (!success) {
              notify();
              console.error("Login error:", error); // Log the error for debugging
              return;
            }

            // Navigate to the home page upon successful login
            navigate("/");
          } catch (error) {
            notify();
            console.error("Error logging in:", error.message);
          } finally {
            setSubmitting(false); // Reset submitting state
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            className="m-0 w-[30.813rem] rounded-13xl bg-gray-600 flex flex-col items-start justify-start pt-[1.75rem] pb-[3.813rem] pr-[3.625rem] pl-[3.688rem] box-border gap-[0.875rem] max-w-full z-[1] mq650:pl-[1.813rem] mq650:pr-[1.813rem] mq650:box-border mq725:pt-[2.438rem] mq725:pb-[2.5rem] mq725:box-border"
          >
            <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[0.188rem]">
              <img
                className="h-[6.188rem] w-[13.75rem] relative object-cover z-[2]"
                loading="lazy"
                alt="Logo"
                src="/image-2023-06-10t12-20-26-626z-11@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[1.19rem] relative gap-[0.25rem] z-[3]">
              <label
                className="relative text-[1.25rem] font-heading-heading-4 text-background-2 text-left inline-block min-w-[5.813rem] z-[2] mq450:text-[1rem]"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full bg-background-2 ring-blue-500 ring-2 ring-opacity-50 self-stretch h-[48px] rounded-3xs flex flex-row items-start justify-start py-[13px] px-[18px] box-border font-gilroy font-light text-[1.125rem] text-silver-300 min-w-[300px] z-[1]"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="self-stretch w-full flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[1.19rem] relative gap-[0.25rem] z-[3]">
              <label
                className="relative text-[1.25rem] font-heading-heading-4 text-background-2 text-left inline-block min-w-[5.813rem] z-[2] mq450:text-[1rem]"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full bg-background-2 ring-blue-500 ring-2 ring-opacity-50 self-stretch h-[48px] rounded-3xs flex flex-row items-start justify-start py-[13px] px-[18px] box-border font-gilroy font-light text-[1.125rem] text-silver-300 min-w-[300px] z-[1]"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute z-50 right-0 mr-[12px] cursor-pointer focus:outline-none"
              >
                <img
                  className="w-[1.625rem] h-[0.938rem]"
                  alt="Toggle Password Visibility"
                  src="/vector1.svg"
                />
              </button>
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="self-stretch flex no-underline flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] box-border max-w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 rounded-3xs bg-royalblue-200 shadow-[0px_4px_5px_rgba(0,_0,_0,_0.15)] box-border flex flex-row items-start justify-center py-[1.063rem] px-[1.25rem] max-w-full z-[2] border-[1.5px] border-solid border-dodgerblue"
              >
                <div className="relative text-[1.125rem] font-heading-heading-4 text-background-2 text-left inline-block min-w-[2.938rem] z-[1]">
                  Login
                </div>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
