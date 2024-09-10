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

export default function Description({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const { data, isLoading } = useGetAllLanguagesQuery();
  const [AddDescription,{isLoading:descriptionLoading }] = useAddDescriptionMutation();

  console.log('languages',data?.languages)

  return (
    <>
      <Title
        title="Describe the position"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />

      <Formik
        initialValues={{
          title: "",
          description: "",
          contact_language_id: "",
          role: "",
          responsibilities: "",
          rules: "",
        }}
        onSubmit={async(values:any) => {
          try {
            const response =await AddDescription(values).unwrap()
            toast.success("Description Added Successfuly", {
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
                htmlFor={`title`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Title
              </label>
              <Field
                name="title"
                placeholder="Write a title"
                type="text"
                as={InputField}
              />
            </div>
            <div>
              <label
                htmlFor={`description`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Description
              </label>
              <Textarea
                name="description"
                rows={5}
                onChange={props.handleChange}
                value={props.values.description}
                onBlur={props.handleBlur}
                placeholder="Write a summary in 450 character or less"
              />
            </div>
            <div>
              <label
                htmlFor={`contact_language_id`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Select Language
              </label>
              <Field name="contact_language_id">
                {({ field,form }: any) => (
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={(value) => form.setFieldValue(field.name, value)}
                  >
                    <SelectTrigger className="lg:min-w-[300px]">
                      <SelectValue placeholder="Select"  />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {data?.languages.map((language:any,index:any)=>{
                          return(<SelectItem key={index} value={language.id}>{language.name}</SelectItem>)
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              </Field>
            </div>
            <div>
              <label
                htmlFor={`role`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Role
              </label>
              <Textarea
                name="role"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.role}
                rows={5}
                placeholder="Write a summary in 450 character or less"
              />
            </div>
            <div>
              <label
                htmlFor={`username`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Responsibilities
              </label>
              <Textarea
                rows={5}
                name="responsibilities"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.responsibilities}
                placeholder="Write a summary in 450 character or less"
              />
            </div>
            <div>
              <label
                htmlFor={`username`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Rules
              </label>
              <Textarea
                rows={5}
                name="rules"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.rules}
                placeholder="Write a summary in 450 character or less"
              />
            </div>
          </div>

          <div className="flex flex-wrap mt-10 justify-center gap-4">
            <Button
              onClick={() => onSetActiveTab(prevValue)}
              variant={"outline"}
              size={"lg"}
              className="rounded-full"
            >
              Previous
            </Button>
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
