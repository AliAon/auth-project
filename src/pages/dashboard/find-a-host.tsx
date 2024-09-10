import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Title from "@/components/ui/title";
import { Field, Form, Formik } from "formik";
import { colourOptions } from "../../data/data";
import Select from "react-select";
import { DatePickerWithRange } from "@/components/date-range-input";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

export default function HostANomad() {
  const router=useRouter()
  return (
    <div className="w-[90%]  mx-auto">
      <div className="grid grid-cols-2">
        <div>
          <Logo />
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 h-screen ">
        <div className="flex flex-col justify-center	items-center content-center	">
          <Card className="w-fit p-6 ">
              <Title
                fontFamily={"PoppinsBold"}
                className={"text-center text-[#006263]"}
                title="Let’s find your ideal work experience"
                heading="h2"
              />
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                  router.push('/dashboard/nomads')
                }}
              >
                <Form className="flex my-10 gap-y-6 flex-col">
                  <div>
                    <label htmlFor="places" className="text-lg font-PoppinsMedium text-[#003939]">
                      Where would you like to go?
                    </label>
                    <Select
                      id="places"
                      // defaultValue={[colourOptions[2], colourOptions[3]]}
                      name="colors"
                      options={colourOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Search..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jobs"
                      className="text-lg  font-PoppinsMedium  text-[#003939]"
                    >
                     Dates
                    </label>
                    <DatePickerWithRange/>
                  
                  </div>
                  <div>
                    <label
                      htmlFor="jobs"
                      className="text-lg  font-PoppinsMedium  text-[#003939]"
                    >
                      Type of Job
                    </label>
                    <Select
                      // defaultValue={[colourOptions[2], colourOptions[3]]}
                      isMulti
                      id="jobs"
                      name="colors"
                      options={colourOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Search..."
                    />
                  </div>
                  <Button size={"lg"} variant={"secondary"} type="submit">
                    Take me there
                  </Button>
                </Form>
              </Formik>
          </Card>
        </div>
      </div>
    </div>
  );
}


// export async function getServerSideProps(context:any) {
//   const session = await getSession(context);
//   console.log("session",session)

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }