import {
  FieldArray,
  FormikFormProps,
  FormikProps,
  useFormikContext,
} from "formik";
import React from "react";
import { Textarea } from "../ui/textarea";
import { CircleX, Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function Questions() {
  const { values, setFieldValue, handleChange, handleBlur } =
    useFormikContext<any>();

  return (
    <>
      <FieldArray
        name="questions"
        render={(arrayHelpers) =>
          values.questions?.map((item: any, index: any) => {
            return (
              <div key={index}>
                <div>
                  <label
                    htmlFor={`question`}
                    className="block  text-[#003939] text-sm font-bold "
                  >
                    Question (optional)
                  </label>
                  <div className="flex items-center gap-x-4">
                    <Textarea
                      rows={5}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name={`questions[${index}]`}
                      className="my-4"
                      placeholder="After reading all of the information about this position and project, let us know: do you have any questions?"
                    />

                    <Button
                      onClick={() => arrayHelpers.remove(index)}
                      variant="outline"
                      size="icon"
                      type="button"
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
      <Button
        onClick={() => setFieldValue("questions", [...values.questions, ""])}
        className="w-fit"
        type="button"
        variant={"secondary"}
      >
        <Plus className="mr-2 h-4 w-4" /> Add another question
      </Button>
    </>
  );
}
