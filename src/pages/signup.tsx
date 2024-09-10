import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import { Field, Form, Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import * as Yup from "yup";
import { useState } from "react";
import google_logo from "../assets/images/google_logo.png";
import InputField from "@/components/input-field";
import { Card, CardContent } from "@/components/ui/card";
import {
  useCreateUserMutation,
  useLoginUserMutation,
} from "@/lib/services/userApi";
import { toast } from "react-toastify";
import { authuser, usertoken } from "@/lib/features/authSlice";
import { useDispatch } from "react-redux";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  const [changeType, setPasswordType] = useState(false);
  const [CreateUser, { isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Provide Name "),
    username: Yup.string().required("Provide Username "),
    email: Yup.string()
      .email("Invalid Email")
      .required("Provide Email Address"),
    password: Yup.string()
      // check minimum characters
      .min(8, "Password at least character")
      .required("Please Provide Password"),
    confirmPassword: Yup.string()
      .required("Please Re-Type Password")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  return (
    <main className="2xl:w-[70%] lg:w-[80%] md:w-[70%] w-[90%]  mx-auto">
      <div className="grid lg:grid-cols-2 gap-x-10 items-center grid-cols-1">
        <div className="flex flex-col gap-4">
          <Card>
            <CardContent>
              <div className="mb-4">
                <Title
                  title="Signup"
                  className={
                    "text-[#006263]  lg:text-left mb-2 text-center font-PoppinsSemiBold"
                  }
                  heading={"h4"}
                />
             
              </div>
              <div className="login-form ">
                <Formik
                  initialValues={{
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                  }}
                  onSubmit={async (values, { resetForm, setSubmitting }) => {
                    console.log("values", values);
                    try {
                      const response = await CreateUser({
                        name: values.name,
                        username: values.username,
                        email: values.email,
                        password: values.password,
                      }).unwrap();
                      toast.success("User Created Successfully", {
                        hideProgressBar: true,
                        position: "top-center",
                        autoClose: 2000,
                      });
                      resetForm();
                      router.push("/");
                    } catch (error: any) {
                      toast.error(error?.data?.detail, {
                        hideProgressBar: true,
                        position: "top-center",
                        autoClose: 2000,
                      });
                      resetForm();
                    } finally {
                      setSubmitting(false);
                      resetForm();
                    }
                  }}
                  validationSchema={validationSchema}
                >
                  {(props: any) => (
                    <Form className="mx-auto" onSubmit={props.handleSubmit}>
                      <div className="grid grid-cols-2 gap-2">
                      <div className="name_input ">
                        <div className="relative mb-2">
                          <label className="block mb-2 text-[#003939] text-sm font-bold ">
                            Name
                          </label>
                          <Field
                            name="name"
                            placeholder="ex Jon Doe"
                            type="text"
                            as={InputField}
                          />
                        </div>
                        {props.errors.name && props.touched.name && (
                          <div
                            id="feedback"
                            className="text-[12px]  text-red-500	"
                          >
                            {props.errors.name}
                          </div>
                        )}
                      </div>
                      <div className="username_input ">
                        <div className="relative mb-2">
                          <label className="block mb-2 text-[#003939] text-sm font-bold ">
                            Username
                          </label>
                          <Field
                            name="username"
                            placeholder="ex Jon"
                            type="text"
                            as={InputField}
                          />
                        </div>

                        {props.errors.username && props.touched.username && (
                          <div
                            id="feedback"
                            className="text-[12px]  text-red-500	"
                          >
                            {props.errors.username}
                          </div>
                        )}
                      </div>
                      </div>
                      <div className="email_input">
                        <div className="relative mb-2">
                          <label className="block mb-2 text-[#003939] text-sm font-bold ">
                            Email
                          </label>
                          <Field
                            name="email"
                            placeholder="sample@gamil.com"
                            type="text"
                            as={InputField}
                          />
                        </div>

                        {props.errors.email && props.touched.email && (
                          <div
                            id="feedback"
                            className="text-[12px]  text-red-500	"
                          >
                            {props.errors.email}
                          </div>
                        )}
                      </div>
                      <div className="password_input">
                        <label
                          htmlFor={`password`}
                          className="block mb-2 text-[#003939] text-sm font-bold "
                        >
                          Password
                        </label>
                        <div className="relative mb-2">
                          <div className="absolute inset-y-0 top-0 start-0  flex items-center ps-3.5 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                              />
                            </svg>
                          </div>
                          <Field
                            name="password"
                            placeholder="***************************"
                            type={changeType ? "text" : "password"}
                            as={InputField}
                          />

                          <div className="absolute right-5   top-[50%] -translate-y-[50%]">
                            {changeType ? (
                              <Eye
                                onClick={() => setPasswordType((pre) => !pre)}
                              />
                            ) : (
                              <EyeOff
                                onClick={() => setPasswordType((pre) => !pre)}
                              />
                            )}
                          </div>
                        </div>

                        {props.errors.password && props.touched.password && (
                          <div
                            id="feedback"
                            className="text-[12px] text-red-500	"
                          >
                            {props.errors.password}
                          </div>
                        )}
                      </div>
                      <div className="password_input">
                        <label
                          htmlFor={`password`}
                          className="block mb-2 text-[#003939] text-sm font-bold "
                        >
                          Confirm Password
                        </label>
                        <div className="relative mb-2">
                          <div className="absolute inset-y-0 top-0 start-0  flex items-center ps-3.5 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                              />
                            </svg>
                          </div>
                          <Field
                            name="confirmPassword"
                            placeholder="***************************"
                            type={changeType ? "text" : "password"}
                            as={InputField}
                          />

                          <div className="absolute right-5   top-[50%] -translate-y-[50%]">
                            {changeType ? (
                              <Eye
                                onClick={() => setPasswordType((pre) => !pre)}
                              />
                            ) : (
                              <EyeOff
                                onClick={() => setPasswordType((pre) => !pre)}
                              />
                            )}
                          </div>
                        </div>

                        {props.errors.confirmPassword &&
                          props.touched.confirmPassword && (
                            <div
                              id="feedback"
                              className="text-[12px] text-red-500	"
                            >
                              {props.errors.confirmPassword}
                            </div>
                          )}
                      </div>
                      <div className="grid grid-cols-1">
                        <div className="flex items-start mb-5">
                          <div className="flex  pr-2 h-5">
                            <input
                              id={`terms`}
                              type="checkbox"
                              value=""
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            />
                          </div>

                          <p className="text-sm text-[#003939]">
                            I agree to all the Terms and Privacy Policies
                          </p>
                        </div>
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        variant={"secondary"}
                        className="w-full  p-6"
                      >
                        {isLoading && (
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {isLoading && <p>Please wait</p>}
                        {!isLoading && <p>SignUp</p>}
                      </Button>
                      <p className="font-PoppinsMedium flex items-center justify-center text-black  text-right my-4  text-base">
                        Already have an account?{" "}
                        <Button
                          type="button"
                          variant={"ghost"}
                          className="text-[#FF8682]"
                          onClick={() => router.push("/login")}
                        >
                          Login
                        </Button>
                      </p>
                      <div className="flex justify-center items-center">
                        <hr className="h-px my-5 sm:w-[35%] w-[30%] bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="sm:w-[30%] w-[40] text-sm text-center">
                          Or Signup with
                        </span>
                        <hr className="h-px my-5 sm:w-[35%] w-[30%] bg-gray-200 border-0 dark:bg-gray-700" />
                      </div>
                      <div>
                        <div className="text-center">
                          <Button
                            size={"lg"}
                            variant={"outline"}
                            className="gap-x-4 w-full"
                          >
                            <Image src={google_logo} alt="" className="w-5" />
                            Continue with Google
                          </Button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="py-5  lg:block hidden">
          <div
            id="landing"
            className="h-[700px] gap-y-5 p-8 relative rounded-lg flex justify-end flex-col"
          >
            <div className="absolute z-0 top-0  rounded-lg left-0 w-full h-full bg-black/20"></div>
            <div className="z-20">
              <Title
                title="Stay Adventure "
                className="text-white"
                heading={"h2"}
              />
              <p className={`text-base font-normal mt-3 text-white`}>
                Stay Connected
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
