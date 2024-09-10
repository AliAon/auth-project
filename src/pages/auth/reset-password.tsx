'use client'
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
import { useCreateUserMutation, useLoginUserMutation, useResetPasswordMutation } from "@/lib/services/userApi";
import { toast } from "react-toastify";
import { authuser, usertoken } from "@/lib/features/authSlice";
import { useDispatch } from "react-redux";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useParams, useSearchParams } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function ResetPassword() {
  const [changeType, setPasswordType] = useState(false);
  const searchParams = useSearchParams()
  const token=searchParams.get('token')
  const [ResetPassword,{isLoading}]=useResetPasswordMutation()
  const validationSchema = Yup.object().shape({
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
      <div className="grid lg:grid-cols-2 sm:my-0 my-10 gap-x-10 items-center grid-cols-1">
        <div className="flex flex-col gap-4">
          <Card >
            <CardContent>
              <div className="mb-10">
                <Title
                  title="Reset Password"
                  className={
                    "text-[#006263]  lg:text-left mb-2 text-center font-PoppinsSemiBold"
                  }
                  heading={"h4"}
                />
             
              </div>
              <div className="login-form ">
                <Formik
                  initialValues={{ 
                    token:"",          
                    password: "",
                  }}
                  onSubmit={async (values,{resetForm,setSubmitting}) => {
                    console.log("values", values);
                    try {
                        const response = await ResetPassword({
                            token:token,          
                            password: values.password,
                        }).unwrap()
                        toast.success(response.message, {
                         hideProgressBar: true,
                         position: "top-center",
                         autoClose: 2000,
                         });
                         console.log('response',response)
                        resetForm()
                         
                       } catch (error:any) {
                         toast.error(error?.data?.detail, {
                           hideProgressBar: true,
                           position: "top-center",
                           autoClose: 2000,
                         });
                         resetForm()                      
                       } finally{
                         setSubmitting(false)
                         resetForm()
                       }
                    
                 
                  }}
                  validationSchema={validationSchema}
                >
                  {(props: any) => (
                    <Form className="mx-auto" onSubmit={props.handleSubmit}>
                     

                      <div className="password_input mb-4">
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
                      <div className="password_input mb-4">
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

                        {props.errors.confirmPassword && props.touched.confirmPassword && (
                          <div
                            id="feedback"
                            className="text-[12px] text-red-500	"
                          >
                            {props.errors.confirmPassword}
                          </div>
                        )}
                      </div>
                  
                      <Button
                        type="submit"
                        disabled={isLoading}
                        variant={"secondary"}
                        className="w-full my-5 p-6"
                      >
                           {isLoading &&  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}  
                             {isLoading && <p>Please wait</p>}
                             {!isLoading && <p>Reset</p>}

                      </Button>
                      
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
            className="min-h-screen gap-y-5 p-8 relative rounded-lg flex justify-end flex-col"
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
