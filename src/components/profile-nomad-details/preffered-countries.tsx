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
import {
  useCreateNomadDescriptionMutation,
  useCreateNomadIntoductionMutation,
  useCreateNomadPrefferedCountryMutation,
} from "@/lib/services/nomadApi";
import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { ToggleGroupItem } from "../ui/toggle-group";

export default function PreferredCountries({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const { data, isLoading } = useGetAllLanguagesQuery();
  const [CreateNomadPrefferedCountry, { isLoading: descriptionLoading }] =
    useCreateNomadPrefferedCountryMutation();

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
          country_names: "",
        }}
        onSubmit={async (values: any) => {
          console.log("values", values);
          try {
            const response = await CreateNomadPrefferedCountry(values).unwrap();
            toast.success("Country Names Added Successfuly", {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
            // onSetActiveTab(nextValue);
          } catch (error: any) {
            toast.error(error?.data?.detail, {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
          }
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <>
              <div className="flex flex-col gap-y-4">
                <div className="my-8">
                  <Text
                    text={"Preffered Countries"}
                    paragraph={"p-bold"}
                    className={"mb-2"}
                    color="#000000"
                  />
                  <div className="flex gap-4">
                    <Field name={`country_names`}>
                      {({ field }: any) => (
                        <ToggleGroup
                          onValueChange={(value) => {
                            if (value) setFieldValue(field.name, value);
                          }}
                          type="multiple"
                          className="gap-x-2 flex "
                        >
                          <ToggleGroupItem
                            variant={"outline"}
                            className="rounded-full"
                            value={"english"}
                          >
                            English
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            variant={"outline"}
                            className="rounded-full"
                            value={"spanish"}
                          >
                            Spanish
                          </ToggleGroupItem>
                        </ToggleGroup>
                      )}
                    </Field>
                  </div>
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
