import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import icon_skill from "../../../assets/images/icon_skill.png";
import Text from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import Skills from "@/components/profile-host-details/skills";
import Shift from "@/components/profile-host-details/shift";
import YourOffer from "@/components/profile-host-details/your_offer";
import Requirements from "@/components/profile-host-details/requirements";
import Availability from "@/components/profile-host-details/availabilty";
import Description from "@/components/profile-host-details/description";
import ScreenOptions from "@/components/profile-host-details/screen-option";
import CoverPhoto from "@/components/profile-host-details/cover-photo";
import { getSession } from "next-auth/react";

export default function ProfileHostDetails() {
  const [activeTab, setActiveTab] = useState("skills");
  console.log("activeTab",activeTab)
  return (
    <>
      <header className="bg-[#f6f7f8]">
        <Navbar />
      </header>
      <main className="bg-[#f6f7f8] ">
        <div className="2xl:w-[80%] w-[95%] mx-auto">
          <div className="overflow-x-scroll pt-10 pb-2">
            <div className="flex min-w-[1300px] justify-center	 gap-4 ">
              <div className="bg-[#FDFDFF] py-6  px-5 border-t-[#3749A6] border-t-8 border-[#FDFDFF] rounded-sm">
                <Image src={icon_skill} alt="" className="w-16 py-2 mx-auto" />
                <Text
                  text="Improving website & SEO"
                  align={"center"}
                  paragraph={"p-bold"}
                  color="#292525"
                />
              </div>
              <div className="bg-[#FDFDFF] py-6  px-5 border-t-[#FFCF00] border-t-8 border-[#FDFDFF] rounded-sm">
                <Image src={icon_skill} alt="" className="w-16 py-2 mx-auto" />
                <Text
                  text="Improving website & SEO"
                  align={"center"}
                  paragraph={"p-bold"}
                  color="#292525"
                />
              </div>
              <div className="bg-[#FDFDFF] py-6  px-5 border-t-[#3749A6] border-t-8 border-[#FDFDFF] rounded-sm">
                <Image src={icon_skill} alt="" className="w-16 py-2 mx-auto" />
                <Text
                  text="Improving website & SEO"
                  align={"center"}
                  paragraph={"p-bold"}
                  color="#292525"
                />
              </div>
              <div className="bg-[#FDFDFF] py-6  px-5 border-t-[#FFCF00] border-t-8 border-[#FDFDFF] rounded-sm">
                <Image src={icon_skill} alt="" className="w-16 py-2 mx-auto" />
                <Text
                  text="Improving website & SEO"
                  align={"center"}
                  paragraph={"p-bold"}
                  color="#292525"
                />
              </div>
              <div className="bg-[#FDFDFF] py-6  px-5 border-t-[#3749A6] border-t-8 border-[#FDFDFF] rounded-sm">
                <Image src={icon_skill} alt="" className="w-16 py-2 mx-auto" />
                <Text
                  text="Improving website & SEO"
                  align={"center"}
                  paragraph={"p-bold"}
                  color="#292525"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-nowrap py-8 flex-wrap justify-center gap-4">
            <div className="lg:basis-1/4 basis-full">
              <Card>
                <CardContent className="px-1 flex flex-col gap-2">
                  <Button
                    onClick={() => setActiveTab("skills")}
                    variant={activeTab === "skills" ? "secondary" : "ghost"}
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Skills
                  </Button>
                  <Button
                    variant={activeTab === "shift" ? "secondary" : "ghost"}
                    size={"lg"}
                    onClick={() =>  setActiveTab("shift")}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Shift
                  </Button>
                  <Button
                    variant={activeTab === "your_offer" ? "secondary" : "ghost"}
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                    onClick={() => setActiveTab("your_offer")}
                  >
                    Your Offer
                  </Button>
                  <Button
                    variant={
                      activeTab === "requirements" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                    onClick={() => setActiveTab("requirements")}
                  >
                    Requirements
                  </Button>
                  <Button
                    size={"lg"}
                    variant={
                      activeTab === "availabilty" ? "secondary" : "ghost"
                    }
                    className="w-[300px] text-left justify-start ps-5"
                    onClick={() => setActiveTab("availabilty")}
                  >
                    Availability
                  </Button>
                  <Button
                    variant={
                      activeTab === "description" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    onClick={() => setActiveTab("description")}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Description
                  </Button>
                  
                  <Button
                    variant={
                      activeTab === "screen_option" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    onClick={() => setActiveTab("screen_option")}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Screening Questions
                  </Button>
                  <Button
                    variant={
                      activeTab === "cover_photo" ? "secondary" : "ghost"
                    }
                    onClick={() => setActiveTab("cover_photo")}

                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Cover photo
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="lg:basis-3/4 basis-full">
              <Card>
                <CardContent className="px-2">
                  <Tabs value={activeTab} defaultValue="skills">
                    {/* Skills Tab */}
                    <TabsContent value="skills">
                      <Skills nextValue="shift" prevValue="" onSetActiveTab={setActiveTab} activeValue="skills"/>
                    </TabsContent>

                    {/* Shift Tab */}
                    <TabsContent value="shift" >
                      <Shift nextValue="your_offer" prevValue="skills" onSetActiveTab={setActiveTab} activeValue="shift" />
                    </TabsContent>
                    {/* Your Offer Tab */}
                    <TabsContent value="your_offer">
                      <YourOffer nextValue="requirements" prevValue="shift" onSetActiveTab={setActiveTab} activeValue="your_offer" />
                    </TabsContent>
                    {/* Requirements Tab */}
                    <TabsContent value="requirements">
                      <Requirements nextValue="availabilty" prevValue="your_offer" onSetActiveTab={setActiveTab} activeValue="requirements"/>
                    </TabsContent>
                    {/* Availabilty Tab */}
                    <TabsContent value="availabilty">
                      <Availability nextValue="description" prevValue="requirements" onSetActiveTab={setActiveTab} activeValue="availabilty"/>
                    </TabsContent>
                    {/* Availabilty Tab */}
                    <TabsContent value="description">
                      <Description onSetActiveTab={setActiveTab} nextValue="screen_option" prevValue="availabilty" activeValue="description"/>
                    </TabsContent>
                    {/* ScreenOptions Tab */}
                    <TabsContent value="screen_option">
                      <ScreenOptions onSetActiveTab={setActiveTab} nextValue="cover_photo" prevValue="description" activeValue="screen_option" />
                    </TabsContent>
                    {/* Cover Photo */}
                    <TabsContent value="cover_photo">
                      <CoverPhoto onSetActiveTab={setActiveTab} prevValue="screen_option" nextValue="" activeValue="cover_photo"/>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
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