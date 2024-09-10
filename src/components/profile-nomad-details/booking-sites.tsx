import {
  Field,
  FieldArray,
  FormikFormProps,
  FormikProps,
  useFormikContext,
} from "formik";
import React from "react";
import { Textarea } from "../ui/textarea";
import { CircleX, Plus } from "lucide-react";
import { Button } from "../ui/button";
import InputField from "../input-field";

export default function BookingSites() {
  const { values, setFieldValue, handleChange, handleBlur } =
    useFormikContext<any>();

  return (
    <>
      <FieldArray
        name="bookingsites"
        render={(arrayHelpers) =>
          values.bookingsites?.map((item: any, index: any) => {
            return (
              <div key={index}>
                <div>
                  <label
                    htmlFor={`question`}
                    className="block  text-[#003939] text-sm font-bold "
                  >
                    Booking sites (Booking.com, Airbnb, etc)
                  </label>
                  <div className="flex items-center gap-x-4">
                    <Field
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name={`bookingsites[${index}]`}
                      placeholder=""
                      type="text"
                      as={InputField}
                    />

                    <Button
                      onClick={() => arrayHelpers.remove(index)}
                      variant="outline"
                      size="icon"
                    >
                      <CircleX className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        }
      />
      {/* <Button
        onClick={() => setFieldValue("questions", [...values.questions, ""])}
        className="w-fit"
        variant={"secondary"}
      >
        <Plus className="mr-2 h-4 w-4" /> Add another question
      </Button> */}
    </>
  );
}
