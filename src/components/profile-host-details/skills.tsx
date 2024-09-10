"use client"
import Image from "next/image";
import Text from "../ui/text";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { tabsType } from "@/types";
import { Form, Formik } from "formik";
import { useAddUserSkilMutation, useGetAllSkillsQuery } from "@/lib/services/skillsApi";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";
export default function Skills({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const [skills, setSkillValue] = useState<string[]>([]);
  const { data, isLoading } = useGetAllSkillsQuery();
  const [AddUserSkil,{isLoading:isLoadingUser}]=useAddUserSkilMutation()
  console.log("skills", skills);
  return (
    <>
      <Title title="Skills" heading={"h4"} className={"text-[#006263] mb-4"} />
      <Title
        title="What skills you need help with for this position?"
        heading={"h5"}
        className={"text-[#006263] mb-2"}
      />
      <Text
        paragraph={"p"}
        text="Select 1 to 4 skills that better describe all the tasks a worldpacker will be doing."
        color="#000000"
      />
      <Formik
        initialValues={{
          skills:skills
        }}
        enableReinitialize
        onSubmit={async(values:any) => {
          try {
            const response=await AddUserSkil(values.skills).unwrap()
            console.log("response", response);
            toast.success(response.messages[0].message, {   
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
           onSetActiveTab(nextValue);
          } catch (error:any) {
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
          <Form onSubmit={handleSubmit}>
            <div>
              {
                isLoading ? <div className="mx-auto"><Loader className="mx-auto my-10"/></div> :
              
              <ToggleGroup
              onValueChange={(value) => setSkillValue(value)}
              className="flex flex-wrap gap-y-4 gap-x-2 my-10" type="multiple">
                {data?.map((item:any,index:number) => (
                  <ToggleGroupItem
                   key={index}
                    value={item.id}
                    className="py-10" 
                    aria-label="Toggle bold"
                  >
                    <div className="flex w-[275px] py-4 items-center">
                      <div className="  w-[90px] relative h-[50px] rounded-full">
                        <Image
                          className=" rounded-full mx-auto w-16 h-16 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
                          src={item.image}
                          alt="skill_img"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="flex  flex-col ">
                        <Text
                          text={item.title}
                          paragraph={"p-small-bold"}
                          color={skills.includes(item.id) ? "#ffffff": "#34B876"}
                        />
                        <Text
                          text={item.description}
                          align={"left"}
                          color={skills.includes(item.id) ? "#ffffff":"#808080"}
                          paragraph={"p-small"}
                        />
                      </div>
                    </div>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              }
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                type="submit"
                variant={"secondary"}
                size={"lg"}
                className="rounded-full sm:px-32"
              >
                
                {isLoadingUser && (
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {isLoadingUser && <p>Please wait</p>}
                        {!isLoadingUser && <p>Next</p>}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
