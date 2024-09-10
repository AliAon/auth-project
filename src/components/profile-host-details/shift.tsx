import Text from "../ui/text";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { Field, Form, Formik, useFormikContext } from "formik";
import InputField from "../input-field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { tabsType } from "@/types";
import { useCreateHostShiftMutation } from "@/lib/services/userApi";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";
const HoursPerWeek=({name='hours_per_week'})=>{
  const  {setFieldValue}=useFormikContext()
  return(
    <Field name={name}>
    {({ field }:any) => (
    <Select
      name={field.name}
      value={field.value}
      onValueChange={(value) => setFieldValue(field.name, value)}
    >
      <SelectTrigger className="lg:min-w-[300px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="40">40 hours</SelectItem>
          <SelectItem value="70">70 hours</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>)}
    </Field>
  )

}



export default function Shift({
  onSetActiveTab,
  activeValue,
  prevValue,
  nextValue,
}: tabsType) {
  const [CreateHostShift,{isLoading}]=useCreateHostShiftMutation()
  return (
    <>
      <Title
        title="Shift Detail"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <Formik
        initialValues={{
          hours_per_week: 0,
          days_off_per_week: 0,
          ideal_length_of_stay_min: 0,
          ideal_length_of_stay_max: 0,
          max_hours_per_week: 0,
          min_hours_per_week: 0,
        }}
        onSubmit={async(values,{resetForm}) => {
          console.log("values", values);
         try {
          const response = await CreateHostShift(values).unwrap()
          resetForm()   
          toast.success('Shift Details Added', {
            hideProgressBar: true,
            position: "top-center",
            autoClose: 2000,
          });
          onSetActiveTab(nextValue)

         } catch (error:any) {
          toast.error(error.data.detail, {
            hideProgressBar: true,
            position: "top-center",
            autoClose: 2000,
          });
          resetForm()   
          
         }

        }}
      >
        {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
            <div>
              <label
                htmlFor={`username`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                Hours Per Week
              </label>
              <HoursPerWeek name="hours_per_week"/>
        
            </div>

            <div>
              <label
                htmlFor={`username`}
                className="block mb-2 text-[#003939] text-sm font-bold "
              >
                How many days off (without helping) per week?
              </label>
              <Field
                  name="days_off_per_week"
                  placeholder=""
                  type="text"
                  as={InputField}
                />
      
            </div>
          </div>
          <div className="my-8">
            <Text
              text="What's the ideal length of stay for volunteers?"
              paragraph={"p-bold"}
              className={"mb-2"}
              color="#000000"
            />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
              <div>
                <label
                  htmlFor={`ideal_length_of_stay_min`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Stay for at least
                </label>
                <Field
                  name="ideal_length_of_stay_min"
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
                  Max Hours in week
                </label>
                <HoursPerWeek name="max_hours_per_week"/>
                
              </div>
              <div>
                <label
                  htmlFor={`ideal_length_of_stay_max`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Stay no more than
                </label>
                <Field
                  name="ideal_length_of_stay_max"
                  placeholder=""
                  type="text"
                  as={InputField}
                />
              </div>
              <div>
                <label
                  htmlFor={`no_more`}
                  className="block mb-2 text-[#003939] text-sm font-bold "
                >
                  Min Hours in week
                </label>
                <HoursPerWeek name="min_hours_per_week"/>

              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={"outline"}
              onClick={() => onSetActiveTab(prevValue)}
              size={"lg"}
              className="rounded-full"
            >
              Previous
            </Button>
            <Button
              variant={"secondary"}
              size={"lg"}
              type="submit"
              // onClick={() => onSetAc/tiveTab(nextValue)}
              className="rounded-full sm:px-32 px-16"
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
