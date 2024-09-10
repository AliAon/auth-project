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
import { useForgetPasswordMutation, useLoginUserMutation } from "@/lib/services/userApi";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { authuser, usertoken } from "@/lib/features/authSlice";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function ForgetPassword() {
  const [ForgetPassword,{isLoading}]=useForgetPasswordMutation()
  const dispatch=useDispatch()
  const router=useRouter()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Provide Email Address"),
 
  });
  return (
    <main className="2xl:w-[70%] lg:w-[80%] md:w-[70%] w-[90%]  mx-auto">
      <div className="grid lg:grid-cols-2 sm:my-0 my-10 gap-x-10 items-center grid-cols-1">
        <div className="flex flex-col gap-4">
        <Card className="min-h-screen flex items-center justify-center">
        <CardContent className="w-full">
              <div className="mb-10">
                <Title
                  title="Forget Password"
                  className={
                    "text-[#006263]  lg:text-left mb-2 text-center font-PoppinsSemiBold"
                  }
                  heading={"h4"}
                />
                
              </div>
              <div className="login-form w-full">
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  onSubmit={async (values,{resetForm,setSubmitting}) => {
                    console.log("values", values);
                    resetForm()

                    try {
                     const response = await ForgetPassword(values).unwrap()
                     toast.success(response.message, {
                      hideProgressBar: true,
                      position: "top-center",
                      autoClose: 2000,
                      });
                      router.push('/')
                      console.log('response',response)
                      resetForm()
                      
                    } catch (error:any) {
                      toast.error(error.data.detail, {
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
                      <div className="email_input   mb-6">
                        <div className="relative mb-2">
                          <label
                            htmlFor={`email`}
                            className="block mb-2 text-[#003939] text-sm font-bold "
                          >
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

                  
                      <Button
                      disabled={isLoading}
                        type="submit"
                        variant={"secondary"}
                        className="w-full my-5 p-6"
                      >
                             {isLoading &&  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}  
                             {isLoading && <p>Please wait</p>}
                             {!isLoading && <p>Submit</p>}     
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
