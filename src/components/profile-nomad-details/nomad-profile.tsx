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
import {
  useAddDescriptionMutation,
  useGetAllLanguagesQuery,
} from "@/lib/services/positionApi";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useCreateNomadDescriptionMutation, useCreateNomadIntoductionMutation, useCreateNomadOccupationMutation } from "@/lib/services/nomadApi";

export default function NomadProfile({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const { data, isLoading } = useGetAllLanguagesQuery();
  const [CreateNomadOccupation, { isLoading: descriptionLoading }] =
  useCreateNomadOccupationMutation();

  console.log("languages", data?.languages);

  return (
    <>
      <Title
        title="Introduction"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />

      <Formik
        initialValues={{
            occupation: "",
        
        }}
        onSubmit={async (values: any) => {
          console.log("values", values);
          try {
            const response = await CreateNomadOccupation(values).unwrap();
            toast.success("Description Added Successfuly", {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
            onSetActiveTab(nextValue);
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
                  htmlFor={`occupation`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Occupation
                </label>
                <Field name="occupation" placeholder="" type="text" as={InputField} />
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
