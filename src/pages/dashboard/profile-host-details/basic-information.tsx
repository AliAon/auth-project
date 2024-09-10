import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import icon_skill from "../../../assets/images/icon_skill.png";
import Text from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Skills from "@/components/profile-host-details/skills";
import BasicInfo from "@/components/profile-host-details/basic_info";
import References from "@/components/profile-nomad-details/refferences";
import { getSession } from "next-auth/react";
import ContactInfo from "@/components/profile-host-details/contact_info";

export default function ProfileHostDetails() {
  const [activeTab, setActiveTab] = useState("basic_info");
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
                    onClick={() => setActiveTab("basic_info")}
                    variant={activeTab === "basic_info" ? "secondary" : "ghost"}
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Basic Info
                  </Button>
                  <Button
                    onClick={() => setActiveTab("contact_info")}
                    variant={
                      activeTab === "contact_info" ? "secondary" : "ghost"
                    }
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    Contact Info
                  </Button>
                  <Button
                    onClick={() => setActiveTab("references")}
                    variant={activeTab === "references" ? "secondary" : "ghost"}
                    size={"lg"}
                    className="w-[300px] text-left justify-start ps-5"
                  >
                    References
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="lg:basis-3/4 basis-full">
              <Card>
                <CardContent className="px-2">
                  <Tabs value={activeTab} defaultValue="basic_info">
                    {/*Basic Info Tab */}
                    <TabsContent value="basic_info">
                      <BasicInfo
                        nextValue="contact_info"
                        prevValue=""
                        onSetActiveTab={setActiveTab}
                        activeValue="basic_info"
                      />
                    </TabsContent>
                    {/*Contact Info Tab */}
                    <TabsContent value="contact_info">
                      <ContactInfo
                        nextValue="references"
                        prevValue="basic_info"
                        onSetActiveTab={setActiveTab}
                        activeValue="contact_info"
                      />
                    </TabsContent>
                    <TabsContent value="references">
                      <References
                        nextValue=""
                        prevValue="contact_info"
                        onSetActiveTab={setActiveTab}
                        activeValue="references"
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
