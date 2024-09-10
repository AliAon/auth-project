import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { getSession } from "next-auth/react";
import Introduction from "@/components/profile-nomad-details/introduction";
import NomadDescription from "@/components/profile-nomad-details/nomad-description";
import PreferredCountries from "@/components/profile-nomad-details/preffered-countries";
import NomadProfile from "@/components/profile-nomad-details/nomad-profile";
import Skills from "@/components/profile-host-details/skills";

export default function ProfileHostDetails() {
  const [activeTab, setActiveTab] = useState("introduction");
  console.log("activeTab", activeTab);
  return (
    <>
      <header className="bg-[#f6f7f8]">
        <Navbar />
      </header>
      <main className="bg-[#f6f7f8] ">
        <div className="2xl:w-[80%] w-[95%] mx-auto">
          <div className="flex md:flex-nowrap py-8 flex-wrap justify-center gap-4">
            <div className="lg:basis-1/4 basis-full">
              <Card>
                <CardContent className="px-1 flex flex-col gap-2">
                <Button
                    onClick={() => setActiveTab("skills")}
                    variant={
                      activeTab === "skills" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Skills
                  </Button>
                  <Button
                    onClick={() => setActiveTab("introduction")}
                    variant={
                      activeTab === "introduction" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Introduction
                  </Button>
                  <Button
                    onClick={() => setActiveTab("description")}
                    variant={
                      activeTab === "description" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Nomad Description
                  </Button>
                  <Button
                    onClick={() => setActiveTab("preffer_countries")}
                    variant={
                      activeTab === "preffer_countries" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Preferred Countries
                  </Button>
                  <Button
                    onClick={() => setActiveTab("occupation")}
                    variant={activeTab === "occupation" ? "secondary" : "ghost"}
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Nomad Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="lg:basis-3/4 basis-full">
              <Card>
                <CardContent className="px-2">
                  <Tabs value={activeTab} defaultValue="introduction">
                    {/*Basic Skill Tab */}
                    <TabsContent value="skills">
                      <Skills
                        nextValue="introduction"
                        prevValue=""
                        onSetActiveTab={setActiveTab}
                        activeValue="skills"
                      />
                    </TabsContent>

                    {/*Basic Info Tab */}
                    <TabsContent value="introduction">
                      <Introduction
                        nextValue="description"
                        prevValue="skills"
                        onSetActiveTab={setActiveTab}
                        activeValue="introduction"
                      />
                    </TabsContent>
                    <TabsContent value="description">
                      <NomadDescription
                        nextValue="description"
                        prevValue=""
                        onSetActiveTab={setActiveTab}
                        activeValue="description"
                      />
                    </TabsContent>
                    <TabsContent value="preffer_countries">
                      <PreferredCountries
                        nextValue="description"
                        prevValue=""
                        onSetActiveTab={setActiveTab}
                        activeValue="preffer_countries"
                      />
                    </TabsContent>
                    <TabsContent value="occupation">
                      <NomadProfile
                        nextValue="occupation"
                        prevValue=""
                        onSetActiveTab={setActiveTab}
                        activeValue="occupation"
                      />
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
// export async function getServerSideProps(context: any) {
//   const session = await getSession(context);
//   console.log("session", session);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
