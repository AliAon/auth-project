import Image from "next/image";
import Text from "../ui/text";
import Title from "../ui/title";
import seo_1 from "../../assets/images/seo_1.png";
import seo_2 from "../../assets/images/seo_2.png";
import { Button } from "../ui/button";
import { tabsType } from "@/types";
import { Field, Form, Formik } from "formik";
import { Loader, Lock } from "lucide-react";
import InputField from "../input-field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAddBacisInfoMutation, useGetAllCountryQuery } from "@/lib/services/basicApi";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";
export default function BasicInfo({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {

  const {data}=useGetAllCountryQuery()
  const [AddBacisInfo,{isLoading:descriptionLoading}]=useAddBacisInfoMutation()



  return (
    <>
      <Title
        title="Basic Info"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <div className="flex flex-wrap gap-y-4 ">
        <div className="flex gap-2 items-center">
          <div className=" rounded-full">
            <Lock />
          </div>
          <Text
            text="This information is private and will only be made available to our team and your confirmed volunteers."
            align={"left"}
            color="#000000"
            paragraph={"p"}
          />
        </div>
      </div>
      <Formik
        initialValues={{
          property_name: "",
          address: "",
          city: "",
          state: "",
          country_id: ""
        }}
        onSubmit={async(values) => {
          console.log("values", values);
          try {
            const response = await AddBacisInfo(values).unwrap();
            toast.success("Basic Info Added Successfuly", {
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <div className="grid lg:grid-cols-2 grid-cols-1 my-5 gap-x-5 gap-y-5">
              {/* Property name */}
              <div>
                <label
                  htmlFor={`property_name`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Property name
                </label>
                <Field name="property_name" placeholder="" type="text" as={InputField} />
              </div>
              {/* Country */}
              <div>
                <label
                  htmlFor={`contact_language_id`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Select Country
                </label>
               
                <Field name="country_id">
                  {({ field, form }: any) => (
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    >
                      <SelectTrigger className="lg:min-w-[300px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {data?.length>0 && data?.map((contry: any, index: any) => {
                            return (
                              <SelectItem key={index} value={contry.id}>
                                {contry.name}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
                
              </div>
              {/* Address */}
              <div>
                <label
                  htmlFor={`address`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Address
                </label>
                <Field name="address" placeholder="" type="text" as={InputField} />
              </div>
              {/* City */}
              <div>
                <label
                  htmlFor={`city`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  City
                </label>
                <Field name="city" placeholder="" type="text" as={InputField} />
              </div>
              {/* State */}
              <div>
                <label
                  htmlFor={`state`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  State
                </label>
                <Field name="state" placeholder="" type="text" as={InputField} />
              </div>
              {/* Property type */}
              <div>
                <label
                  htmlFor={`property_type`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Property type
                </label>
                <Field name="property_type" placeholder="" type="text" as={InputField} />
              </div>
              {/* If You selected other  Optional */}
              <div>
                <label
                  htmlFor={`property_name`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  If You selected other Optional
                </label>
                <Field name="text" placeholder="" type="text" as={InputField} />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                type="submit"
                variant={"secondary"}
                size={"lg"}
                className="rounded-full sm:px-32"
              >
                  {descriptionLoading && (
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {descriptionLoading && <p>Please wait</p>}
                        {!descriptionLoading && <p>Next</p>}
                
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
