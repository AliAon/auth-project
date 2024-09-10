import Text from "../ui/text";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { tabsType } from "@/types";
import { Field, Form, Formik } from "formik";
import { CirclePlus, Lock, MonitorDot } from "lucide-react";
import BookingSites from "./booking-sites";
import SocialMedia from "./social-media";
import YourWebsite from "./your-website";
import InputField from "../input-field";
import { Card } from "../ui/card";
import { useState } from "react";
import { useAddRefferenceMutation } from "@/lib/services/basicApi";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function References({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const [selectedFileBusinessPhotos, setSelectedBusinessPhotosFile] =
    useState<any>();
  const [filepathBusinessPhotos, setfilepathBusinessPhotos] = useState<any>([]);
  const [AddRefference, { isLoading }] = useAddRefferenceMutation();

  const handleImageChangePersonalDocuments = async (event: any) => {
    const inputElement = event.target as any;
    if (inputElement.files) {
      const files: FileList = inputElement.files;
      setSelectedBusinessPhotosFile(files[0]);
      console.log(inputElement.name);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setfilepathBusinessPhotos((pre: any) => {
          return [...pre, reader.result];
        });
      };
    }
  };
  return (
    <>
      <Title
        title="References"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <div className="flex flex-wrap gap-y-4 ">
        <div className="flex gap-2 items-center">
          <div className=" rounded-full">
            <Lock />
          </div>
          <Text
            text="This information is private and will only be used by our team to approve your account."
            align={"left"}
            color="#000000"
            paragraph={"p"}
          />
        </div>
      </div>
      <div className="my-5">
        <Formik
          initialValues={{
            booking_site: "",
            social_media_1: "",
            social_media_2: "",
            social_media_3: "",
            website: "",
            personal_document_url: "",
            file: null,
          }}
          onSubmit={async (values) => {
            console.log("file",selectedFileBusinessPhotos)
            const formdata=new FormData()
            formdata.append('booking_site',values.booking_site)
            formdata.append('social_media_1',values.social_media_1)
            formdata.append('social_media_2',values.social_media_2)
            formdata.append('social_media_3',values.social_media_3)
            formdata.append('website',values.website)
            formdata.append('personal_document_url',values.personal_document_url)
            formdata.append('file',selectedFileBusinessPhotos)
            try {
              const response = await AddRefference(formdata).unwrap();
              toast.success("References Added Successfuly", {
                hideProgressBar: true,
                position: "top-center",
                autoClose: 2000,
              });
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
              <div className="my-5">
                <div>
                  <label
                    htmlFor={`occupation`}
                    className="block mb-2 text-[#003939] text-sm font-bold "
                  >
                    Booking sites (Booking.com, Airbnb, etc)
                  </label>
                  <Field
                    placeholder="ex. http://www.tripadvisor.co.uk/"
                    type="url"
                    name="booking_site"
                    as={InputField}
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    htmlFor={`social_media_1`}
                    className="block mb-2 text-[#003939] text-sm font-bold "
                  >
                    Social media (Instagram, Facebook, etc)
                  </label>
                  <Field
                    name="social_media_1"
                    placeholder="ex https://instagram.com/theoaks.uk"
                    type="url"
                    as={InputField}
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    htmlFor={`social_media_2`}
                    className="block mb-2 text-[#003939] text-sm font-bold "
                  >
                    Social media (Instagram, Facebook, etc)
                  </label>
                  <Field
                    name="social_media_2"
                    placeholder="ex https://instagram.com/theoaks.uk"
                    type="url"
                    as={InputField}
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    htmlFor={`social_media_3`}
                    className="block mb-2 text-[#003939] text-sm font-bold "
                  >
                    Social media (Instagram, Facebook, etc)
                  </label>
                  <Field
                    name="social_media_3"
                    placeholder="ex https://instagram.com/theoaks.uk"
                    type="url"
                    as={InputField}
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    htmlFor={`website`}
                    className="block mb-2 text-[#003939] text-sm font-bold "
                  >
                    Your website
                  </label>
                  <Field
                    name="website"
                    placeholder="ex https://theoaks.uk"
                    type="url"
                    as={InputField}
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    htmlFor={`personal_document_url`}
                    className="block mb-2 text-[#003939] text-sm font-bold "
                  >
                    Personal Document Url
                  </label>
                  <Field
                    name="personal_document_url"
                    placeholder="ex https://theoaks.uk"
                    type="url"
                    as={InputField}
                  />
                </div>
              </div>
              <div className="my-5">
                <label
                  htmlFor={`personal_document_url`}
                  className="block  text-[#003939] text-sm font-bold "
                >
                  Personal documents (Identity Document or Passport)
                </label>
                <div className="border border-[#D3D3D3] py-3 px-2 rounded-md">
                  <input
                    type="file"
                    onChange={handleImageChangePersonalDocuments}
                    name="file"
                    className="custom-file-input"
                    placeholder="Select File"
                  />
                </div>
              </div>
              <div className="my-5 flex  flex-wrap gap-5">
                <Card className="px-20 py-16 relative">
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <MonitorDot className="mx-auto" color="#787486" size={40} />
                    <Text
                      text="Booking Sites"
                      align={"center"}
                      className={"text-center"}
                      paragraph={"p-small"}
                    />
                  </div>
                </Card>
                <Card className=" w-fit px-20 py-16 relative">
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <MonitorDot className="mx-auto" color="#787486" size={40} />
                    <Text
                      text="Social media"
                      align={"center"}
                      className={"text-center"}
                      paragraph={"p-small"}
                    />
                  </div>
                </Card>
                <Card className=" w-fit px-20 py-16 relative">
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <MonitorDot className="mx-auto" color="#787486" size={40} />
                    <Text
                      text="Your website"
                      align={"center"}
                      className={"text-center"}
                      paragraph={"p-small"}
                    />
                  </div>
                </Card>
                <Card className=" w-fit px-20 py-16 relative">
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <MonitorDot className="mx-auto" color="#787486" size={40} />
                    <Text
                      text="Personal documents"
                      align={"center"}
                      className={"text-center"}
                      paragraph={"p-small"}
                    />
                  </div>
                </Card>
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
                  variant={"secondary"}
                  size={"lg"}
                  type="submit"
                  className="rounded-full sm:px-32"
                >
                  {isLoading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading && <p>Please wait</p>}
                  {!isLoading && <p>Submit</p>}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
