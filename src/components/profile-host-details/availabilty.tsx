"use client";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { Field, Form, Formik } from "formik";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import Text from "../ui/text";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { tabsType } from "@/types";
import { toast } from "react-toastify";
import { useAddavailabilityMutation } from "@/lib/services/positionApi";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Availability({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const [Addavailability,{isLoading}]=useAddavailabilityMutation()

  const [date, setDate] = React.useState<any>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <>
      <Title
        title="Availability"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <Text
        color="#000000"
        text="Get applications when you really need them by managing how volunteers see your position availability."
        paragraph={"p-small"}
      />
      <Formik
        initialValues={{
          availability_start_date: "",
          availability_end_date: "",
          availability_status: "",
      
        }}
        onSubmit={async(values:any) => {

         const updatedValues={...values,
          availability_start_date:format(date?.to, 'yyyy-MM-dd'),
          availability_end_date:format(date?.from, 'yyyy-MM-dd')
         }
         try {
          const response =await Addavailability(updatedValues).unwrap()
          toast.success("Availbity Added Successfuly", {
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
          console.log("updatedValues", updatedValues);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <div className="my-5">
              <label
                htmlFor={`username`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                1. Choose one of the availability options
              </label>
              <RadioGroup
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                id="availability_status"
                name="availability_status"
                className="flex my-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="UNAVAILABLE" id="r1_availability_status" />
                  <Label htmlFor="r1_availability_status">Unavailable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="AVAILABLE" id="r2_availability_status" />
                  <Label htmlFor="r2_availability_status">Available</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="HIGHTDEMAND" id="r3_availability_status" />
                  <Label htmlFor="r3_availability_status">High demand</Label>
                </div>
              </RadioGroup>
            
            </div>
            <div className="my-10">
              <label
                htmlFor={`username`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                2. Pick a start and end date to update the availability
              </label>
              <Text
                text="Availability Dates"
                color="#006263"
                className={"my-4"}
                paragraph={"p-bold"}
              />
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
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
                type="submit"
                disabled={isLoading}
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
