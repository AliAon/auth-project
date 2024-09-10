"use client";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import InputField from "../input-field";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { tabsType } from "@/types";
import { useAddRequirementsMutation } from "@/lib/services/positionApi";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Requirements({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const [AddRequirements,{isLoading}]=useAddRequirementsMutation()
  return (
    <>
      <Title
        title="Requirements to apply for this position"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <Formik
        initialValues={{
          language_requirements: [
            {
              language: "",
              proficiency: "",
            },
            {
              language: "",
              proficiency: "",
            },
          ],
          age_requirement: {
            min_age: "",
            max_age: "",
          },
          couple_requirement: {
            accept_couples: true,
          },
          region_requirements: [
            {
              region: "",
            },
          ],
          video_requirement: {
            mandatory: true,
          },
          fee_requirement: {
            fee_required: true,
          },
          document_requirements: [],
        }}
        onSubmit={async(values:any,{resetForm}) => {
          console.log("values", values);
          try {
            const response =await AddRequirements(values).unwrap()
            resetForm()   
            toast.success("Requirments Added Successfuly", {
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
            <div className="grid lg:grid-cols-2 grid-cols-1 my-8 gap-x-10 gap-y-5">
              <div>
                <label
                  htmlFor={`username`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Languages (Optional)
                </label>
                <Field
                  name="language_requirements[0].language"
                  placeholder=""
                  type="text"
                  as={InputField}
                />
              </div>
              <div>
                <label
                  htmlFor={`username`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Select in proficiency
                </label>
                <Field name="language_requirements[0].proficiency">
                  {({ field, form }: any) => (
                    <Select
                      onValueChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    >
                      <SelectTrigger className="lg:min-w-[300px]">
                        <SelectValue placeholder="Select " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="BEGINNER">BEGINNER</SelectItem>
                          <SelectItem value="INTERMEDIATE">
                            INTERMEDIATE
                          </SelectItem>
                          <SelectItem value="ADVANCED">ADVANCED</SelectItem>
                          <SelectItem value="FLUENT">FLUENT</SelectItem>
                          <SelectItem value="NATIVE">NATIVE</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  my-8 gap-x-10 gap-y-5">
              <div>
                <label
                  htmlFor={`language`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Languages (Optional)
                </label>
                <Field
                  name="language_requirements[1].language"
                  placeholder=""
                  type="text"
                  as={InputField}
                />
              </div>
              <div>
                <label
                  htmlFor={`proficiency`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Select in proficiency
                </label>
                <Field name="language_requirements[1].proficiency">
                  {({ field, form }: any) => (
                    <Select
                      onValueChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    >
                      <SelectTrigger className="lg:min-w-[300px]">
                        <SelectValue placeholder="Select " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="BEGINNER">BEGINNER</SelectItem>
                          <SelectItem value="INTERMEDIATE">
                            INTERMEDIATE
                          </SelectItem>
                          <SelectItem value="ADVANCED">ADVANCED</SelectItem>
                          <SelectItem value="FLUENT">FLUENT</SelectItem>
                          <SelectItem value="NATIVE">NATIVE</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
              </div>
            </div>
            <div className=" flex  my-8">
              <ToggleGroup defaultValue="i" defaultChecked={true} type="single">
                <ToggleGroupItem variant={"outline"} value="i">
                  One of the languages is required
                </ToggleGroupItem>
                <ToggleGroupItem variant={"outline"} value="j">
                  Both languages is required
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="grid lg:grid-cols-2  my-8 grid-cols-1 gap-x-10 gap-y-5">
              <div>
                <label
                  htmlFor={`minimum_age`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Minimum age (optional)
                </label>
                <Field
                  name="age_requirement.min_age"
                  placeholder="Minimum Age"
                  type="text"
                  as={InputField}
                />
              </div>
              <div>
                <label
                  htmlFor={`maximum_age`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Maximum age (Optional)
                </label>
                <Field
                  name="age_requirement.max_age"
                  placeholder=""
                  type="text"
                  as={InputField}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2  my-8 grid-cols-1 gap-x-10 gap-y-5">
              <div>
                <label
                  htmlFor={`accept_couples`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Do you accept applications from couples/pairs of volunteers?
                </label>
                <RadioGroup
                  id="accept_couples"
                  name="couple_requirement.accept_couples"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  defaultValue="true"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="r1" />
                    <Label htmlFor="r1">I accept couples/pairs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="r2" />
                    <Label htmlFor="r2">I dont accept couples/pairs</Label>
                  </div>
                </RadioGroup>
              </div>
              <div></div>
            </div>
            <div className="grid lg:grid-cols-2  my-8 grid-cols-1 gap-x-10 gap-y-5">
              <div>
                <label
                  htmlFor={`region_requirements`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Region
                </label>
                <RadioGroup
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  id="region_requirements"
                  name="region_requirements[0].region"
                  defaultValue="no-restrictions"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no-restrictions"
                      id="region_requirements_r1"
                    />
                    <Label htmlFor="region_requirements_r1">
                      No restrictions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="only-foreigners"
                      id="region_requirements_r2"
                    />
                    <Label htmlFor="region_requirements_r2">
                      Only foreigners
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="only-from-my-country"
                      id="region_requirements_r3"
                    />
                    <Label htmlFor="region_requirements_r3">
                      Only from my country
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <label className="block mb-2 text-[#003939] text-sm font-bold ">
                  Required documents
                </label>
                <div role="group"  className="flex flex-col" aria-labelledby="checkbox-group">
                  <label className="flex gap-2">
                    <Field type="checkbox" name="document_requirements" value="European Union passport" />
                    European Union passport
                  </label>
                  <label className="flex gap-2">
                    <Field type="checkbox" name="document_requirements" value="United states Visa" />
                    United states Visa
                  </label>
                  <label className="flex gap-2">
                    <Field type="checkbox" name="document_requirements" value="Travel insurance" />
                    Travel insurance
                  </label>
                </div>
              </div>
              <div></div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div>
              <label
                htmlFor={`video_requirement`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Volunteer introduction video?
              </label>
              <RadioGroup
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                id="video_requirement"
                name="video_requirement.mandatory"
                defaultValue="true"
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="r1_video_requirement" />
                  <Label htmlFor="r1_video_requirement">Mandatory</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="r2_video_requirement" />
                  <Label htmlFor="r2_video_requirement">Optional</Label>
                </div>
              </RadioGroup>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div>
              <label
                htmlFor={`fee_requirement`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Do travelers need to pay an additional fee to volunteer with you
              </label>

              <RadioGroup
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                id="fee_requirement"
                name="fee_requirement.fee_required"
                defaultValue="true"
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="r1_fee_requirement" />
                  <Label htmlFor="r1_fee_requirement">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="r2_fee_requirement" />
                  <Label htmlFor="r2_fee_requirement">No</Label>
                </div>
              </RadioGroup>
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
                variant={"secondary"}
                size={"lg"}
                disabled={isLoading}
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
    </>
  );
}
