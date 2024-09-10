import Text from "../ui/text";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { tabsType } from "@/types";
import { Field, Form, Formik } from "formik";
import { Lock } from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { useState } from "react";
import InputField from "../input-field";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAddContactInfoMutation } from "@/lib/services/basicApi";
import { toast } from "react-toastify";
export default function ContactInfo({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const [guest_house_phone, setGuestHousePhoneValue] = useState<any>();
  const [personal_phone, setPersonalPhoneValue] = useState<any>();

  const [AddContactInfo, { isLoading: descriptionLoading }] =
    useAddContactInfoMutation();

  return (
    <>
      <Title
        title="Contact Info"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <div className="flex flex-wrap gap-y-4 ">
        <div className="flex gap-2 items-center">
          <div className=" rounded-full">
            <Lock />
          </div>
          <Text
            text="This information is private and will only be used by our team to approve your account and get in contact with you."
            align={"left"}
            color="#000000"
            paragraph={"p"}
          />
        </div>
      </div>
      <Formik
        initialValues={{
          guest_house_phone: "",
          personal_phone: "",
          notification_email: "",
          confirm_notification_email: "",
        }}
        onSubmit={async (values) => {
          console.log("values", values);
          try {
            const response = await AddContactInfo({
              guest_house_phone: guest_house_phone,
              personal_phone: personal_phone,
              notification_email: values.notification_email,
              confirm_notification_email: values.confirm_notification_email,
            }).unwrap();
            toast.success("Contact Info Added Successfuly", {
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
            <div className="grid grid-cols-2 gap-5 my-5">
              <div>
                <label
                  htmlFor={`guest_house_phone`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Guest House phone
                </label>
                <div className="border border-[#D3D3D3] py-3 px-2 rounded-md">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={guest_house_phone}
                    defaultCountry="US"
                    onChange={setGuestHousePhoneValue}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor={`personal_phone`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Personal Phone
                </label>
                <div className="border border-[#D3D3D3] py-3 px-2 rounded-md">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={personal_phone}
                    defaultCountry="US"
                    onChange={setPersonalPhoneValue}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor={`notification_email`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Whats the best e-mail for you to receive notifications?
                </label>
                <Field
                  name="notification_email"
                  placeholder=""
                  type="email"
                  as={InputField}
                />
              </div>
              <div>
                <label
                  htmlFor={`house_phone`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Confirm your notification e-mail
                </label>
                <Field
                  name="confirm_notification_email"
                  placeholder=""
                  type="email"
                  as={InputField}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
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
          </Form>
        )}
      </Formik>
    </>
  );
}
