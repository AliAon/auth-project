"use client";
import Navbar from "@/components/navbar";
import "slick-carousel/slick/slick.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "slick-carousel/slick/slick-theme.css";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import marie from "../../assets/images/marie.png";
import b_phlip from "../../assets/images/b_phlip.png";
import cover_photo from "../../assets/images/cover_photo.jpg";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import { Clock } from "lucide-react";
import { getSession } from "next-auth/react";
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const CustomEvent = ({ event }: any) => {
  console.log("imageUrl", event.imageUrl);
  return (
    <div
      style={{
        display: "flex ",
        alignItems: "center",
        background: "#34B876",
        border: "#34B876",
        outline: "none",
        height: "60px",
        padding: "10px",
      }}
    >
      <Image
        src={event.imageUrl}
        alt={event.title}
        style={{
          width: "50px",
          height: "50px",
          marginRight: "8px",
        }}
      />
      <div>
        <span className="block">{event.title}</span>
        <span className="block">{event.date}</span>
      </div>
    </div>
  );
};
export default function AddAVolunteer() {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("calender");

  useEffect(() => {
    // Example user data
    const users = [
      {
        id: 1,
        name: "Marie",
        imageUrl: marie,
        signupTime: new Date(2024, 7, 20, 9, 0), // August 20, 2024, 9:00 AM
        logoutTime: new Date(2024, 7, 22, 17, 0), // August 24, 2024, 5:00 PM
      },
      {
        id: 2,
        name: "Jane Smith",
        imageUrl: b_phlip,
        signupTime: new Date(2024, 7, 21, 10, 0), // August 21, 2024, 10:00 AM
        logoutTime: new Date(2024, 7, 22, 16, 0), // August 29, 2024, 4:00 PM
      },
    ];

    // Map users to events
    const userEvents: any = users.map((user) => ({
      start: user.signupTime,
      end: user.logoutTime,
      title: `${user.name} `,
      imageUrl: user.imageUrl,
      date: "Jul/01/2024 - Jul/31/2024",
    }));

    setEvents(userEvents);
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-[#FAFBFC] h-full">
        <div className="2xl:w-[80%] w-[97%] mx-auto">
          <div className="flex flex-wrap gap-4 justify-between sm:py-10 py-5">
              <div className="flex flex-wrap gap-4   items-center      rounded-full">
                <Button
                  onClick={() => setActiveTab("calender")}
                  className="rounded-full"
                  variant={activeTab === "calender" ? "secondary" : "outline"}
                >
                  Add a Volunteer
                </Button>
                <Button
                  onClick={() => setActiveTab("create_position")}
                  className="rounded-full px-8"
                  variant={
                    activeTab === "create_position" ? "secondary" : "outline"
                  }
                >
                  Create a Position
                </Button>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="lg:min-w-[300px]">
                    <SelectValue placeholder="All Positions " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="english">User</SelectItem>
                      <SelectItem value="udru">Admin</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
          </div>
          <div>
            <Card className="px-4">
              <Tabs value={activeTab} defaultValue="calender">
                <TabsContent value="calender">
                  <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    views={{ month: true }}
                    style={{ height: 900 }}
                    components={{
                      event: CustomEvent, // Use the custom event component
                    }}
                  />
                </TabsContent>
                <TabsContent value="create_position">
                  <Text
                    text="Volunteer Positions "
                    paragraph={"p-bold"}
                    color="#006263"
                  />
                  <Text
                    text="Manage and keep track of all your volunteer positions."
                    paragraph={"p"}
                    color="#787486"
                  />
                  <div className="flex flex-wrap gap-5 my-5">
                    <div className="">
                      <Image src={cover_photo} alt="" className="lg:max-w-[300px]" />
                    </div>
                    <div className="grow flex flex-col gap-4">
                      <Title
                        title="Give us a hand in our guesthouse in Oxford "
                        heading={"h5"}
                        className={"text-[#006263]"}
                      />
                      <Text
                        text="Administration . Gardening . Cleaning . Housekeeping 25 hours/week . 3 days off/week . 4 weeks"
                        paragraph={"p-small"}
                        color="#000000"
                      />
                      <Button
                        variant={"outline"}
                        className="rounded-full w-fit px-20"
                      >
                        Live
                      </Button>
                    </div>
                    <div className=" flex flex-col gap-4">
                      <Button
                        variant={"secondary"}
                        className="rounded-full"
                      >
                        Calendar & Availability
                      </Button>
                      <Button
                        variant={"outline"}
                        className="rounded-full text-[#DC5362] font-PoppinsMedium gap-2 "
                      >
                        <Clock color="#DC5362" />
                        Activate Last Minute
                      </Button>
                      <Button
                        variant={"outline"}
                        className="rounded-full text-[#787486] font-PoppinsMedium "
                      >
                        Edit Positions
                      </Button>
                      <Text text="Edit Screening Questions" align={'center'} paragraph={'p-small-bold'} color="#006263" className={'text-center text-[#006263]'} />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </main>
    </>
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