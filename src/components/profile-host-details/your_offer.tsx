"use client";
import Image from "next/image";
import Text from "../ui/text";
import Title from "../ui/title";
import shared_room from "../../assets/images/shared_room.png";
import shared_room_light from "../../assets/images/shared_room_light.png";
import breakfast_dining_outline from "../../assets/images/breakfast-dining-outline.png";
import wifi from "../../assets/images/Wifi.png";
import wifi_light from "../../assets/images/wifi_light.png";
import breakfast_dark from "../../assets/images/breakfast_dark.png";
import lunch from "../../assets/images/lunch.png";
import lunch_dark from "../../assets/images/lunch_dark.png";
import dinner_dark from "../../assets/images/dinner_dark.png";
import dinner_light from "../../assets/images/cil_dinner.png";
import bike_dark from "../../assets/images/bike_dark.png";
import bike_ligth from "../../assets/images/bike_ligth.png";
import pick_up_dark from "../../assets/images/pick_up_dark.png";
import pick_up_light from "../../assets/images/pick_up_light.png";
import tv_dark from "../../assets/images/tv.png";
import tv_light from "../../assets/images/tv_light.png";

import { Button } from "../ui/button";
import { Field, Form, Formik } from "formik";

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import React, { useState } from "react";
import { tabsType } from "@/types";
import {
  useAddOfferMutation,
  useGetAllOffersQuery,
} from "@/lib/services/positionApi";
import { Loader } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";

export default function YourOffer({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const [AddOffer, { isLoading: offerIsLoading }] = useAddOfferMutation();
  const { data, isLoading: isGetAllLoading } = useGetAllOffersQuery();

  // const [accommodationValue, setAccommodationValue] = React.useState<string[]>(
  //   []
  // );

  const resetintialState = data?.map((offer:any)=>{
    const updatedOffer={...offer}
    updatedOffer.options=[]
    return updatedOffer
  });
   
  return (
    <>
      <Title
        title="What do you offer?"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      {isGetAllLoading ? (
        <div className="mx-auto">
          <Loader className="mx-auto my-10" />
        </div>
      ) : (
        <Formik
          initialValues={{
            //   offers: [
            //   {
            //     category: "Accommodation",
            //     options: [],
            //   },
            //   {
            //     category: "Meals",
            //     options: [],
            //   },
            // ]
            offers: resetintialState,
          }}
          onSubmit={async(values, { resetForm }) => {
           const getOptions = values.offers.map((offer:any)=>offer.options)
           const flatOptions=getOptions.flat() 
           try {
            const response = await AddOffer(flatOptions).unwrap()
            toast.success('Offer Created Successfuly', {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });
            onSetActiveTab(nextValue)
            resetForm()
  
           } catch (error:any) {
            toast.error(error.data.detail, {
              hideProgressBar: true,
              position: "top-center",
              autoClose: 2000,
            });            
           }
          }}
        >
          {({ values, setFieldValue, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              {data.map((offer: any, offerindex: any) => {
                return (
                  <>
                    <div className="my-8">
                      <Text
                        text={offer?.category}
                        paragraph={"p-bold"}
                        className={"mb-2"}
                        color="#000000"
                      />
                      <div className="flex gap-4">
                        <Field name={`offers[${offerindex}].options`}>
                          {({ field }: any) => (
                            <ToggleGroup
                              onValueChange={(value) => {
                                console.log("field.name", field.name);
                                console.log("value", value);
                                if (value) setFieldValue(field.name, value);
                              }}
                              type="multiple"
                              className="gap-x-5"
                            >
                              {offer.options.map((item: any, index: any) => (
                                <ToggleGroupItem
                                  key={index}
                                  variant={"outline"}
                                  className="rounded-full"
                                  value={item.id}
                                >
                                  {item.option}
                                </ToggleGroupItem>
                              ))}
                            </ToggleGroup>
                          )}
                        </Field>
                      </div>
                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  </>
                );
              })}

              {/* <div className="my-8">
                <Text
                  text={values?.offers[1]?.category}
                  paragraph={"p-bold"}
                  className={"mb-2"}
                  color="#000000"
                />
                <div className="flex gap-4">
                <Field name="offers[1].options">
                {({ field }:any) => (
                  <ToggleGroup 
                   onValueChange={(value) => {
                    console.log("value",value)
                     if (value) setFieldValue(field.name,value);
                   }}
                  type="multiple" className="gap-x-5">
                    <ToggleGroupItem
                      variant={"outline"}
                      className="rounded-full"
                      value="Break-fast"
                    >
                       Break Fast
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      variant={"outline"}
                      className="rounded-full"
                      value="lunch"
                    >
                     Lanch
                    </ToggleGroupItem>
                  </ToggleGroup> 
                )}
                </Field>
                </div>
              </div> */}
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
                  {offerIsLoading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {offerIsLoading && <p>Please wait</p>}
                  {!offerIsLoading && <p>Next</p>}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
