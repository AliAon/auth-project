"use client";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { Field, FieldArray, Form, Formik, useFormikContext } from "formik";
import React from "react";
import Text from "../ui/text";
import Questions from "./questions";
import { tabsType } from "@/types";
import { useAddScreeningQuestionsMutation } from "@/lib/services/positionApi";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function ScreenOptions({onSetActiveTab,activeValue,prevValue,nextValue}:tabsType) {
  const [AddScreeningQuestions,{isLoading}]=useAddScreeningQuestionsMutation()
  return (
    <>
      <Title
        title="Screening Questions"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <Text
        color="#000000"
        text="Add questions that the worldpackers have to answer to apply to this position"
        paragraph={"p"}
      />
      <div className="my-5">
      <Formik
        initialValues={{
          questions: [""],
        }}
        onSubmit={async(values: any) => {
          console.log("values", values);
          try {
            const response =await AddScreeningQuestions(values).unwrap()
            toast.success("Screen Questions Added Successfuly", {
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
            <Questions />
            <div className="flex flex-wrap mt-10 justify-center gap-4">
              <Button 
              onClick={()=>onSetActiveTab(prevValue)}
              variant={"outline"} size={"lg"} className="rounded-full">
                Previous
              </Button>
              <Button
                variant={"secondary"}
                size={"lg"}
                type="submit"
                className="rounded-full sm:px-32"
              >
                 {isLoading && (
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {isLoading && <p>Please wait</p>}
                        {!isLoading && <p>Next</p>}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </>
  );
}
