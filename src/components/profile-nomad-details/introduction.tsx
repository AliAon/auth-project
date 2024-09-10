"use client";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { Field, Form, Formik } from "formik";
import React from "react";
import Text from "../ui/text";
import InputField from "../input-field";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { tabsType } from "@/types";
import { useAddDescriptionMutation, useGetAllLanguagesQuery } from "@/lib/services/positionApi";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useCreateNomadIntoductionMutation } from "@/lib/services/nomadApi";

export default function Introduction({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const { data, isLoading } = useGetAllLanguagesQuery();
  const [CreateNomadIntoduction,{isLoading:descriptionLoading }] = useCreateNomadIntoductionMutation();

  console.log('languages',data?.languages)

  return (
    <>
      <Title
        title="Introduction"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />

      <Formik
        initialValues={{
            intro: "",
            about_me: "",
            reason_to_house_sit: "",
        }}
        onSubmit={async(values:any) => {
            console.log("values",values)
          try {
            const response =await CreateNomadIntoduction(values).unwrap()
            toast.success("Introduction Added Successfuly", {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
            onSetActiveTab(nextValue)
          } catch (error: any) {
            toast.error(error?.data?.detail, {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
          } 

        }}
      >
         {(props) => (
        <Form onSubmit={props.handleSubmit}>
      
          <>
          <div className="flex flex-col gap-y-4">
           
            <div>
              <label
                htmlFor={`intro`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Intro
              </label>
              <Textarea
                name="intro"
                rows={5}
                onChange={props.handleChange}
                value={props.values.intro}
                onBlur={props.handleBlur}
                placeholder="Write a summary in 450 character or less"
              />
            </div>
            <div>
              <label
                htmlFor={`about_me`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                About Me
              </label>
              <Textarea
                name="about_me"
                rows={5}
                onChange={props.handleChange}
                value={props.values.about_me}
                onBlur={props.handleBlur}
                placeholder="Write a summary in 450 character or less"
              />
            </div>
            <div>
              <label
                htmlFor={`about_me`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Reason To House Sit
              </label>
              <Textarea
                name="reason_to_house_sit"
                rows={5}
                onChange={props.handleChange}
                value={props.values.reason_to_house_sit}
                onBlur={props.handleBlur}
                placeholder="Write a summary in 450 character or less"
              />
            </div>
     
         
          </div>

          <div className="flex flex-wrap mt-10 justify-center gap-4">
          
            <Button
              // onClick={() => onSetActiveTab(nextValue)}
              variant={"secondary"}
              size={"lg"}
              type="submit"
              className="rounded-full sm:px-32"
            >
              {descriptionLoading && (
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {descriptionLoading && <p>Please wait</p>}
                        {!descriptionLoading && <p>Next</p>}
            </Button>
          </div>
          </>
      
        </Form>
         )}
      </Formik>
    </>
  );
}
