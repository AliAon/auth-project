"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slide_1 from "../assets/images/image_1.jpg";
import slide_2 from "../assets/images/host.jpg";
import host_user from "../assets/images/host_user.png";

import {
  ArrowUpRight,
  Check,
  ChevronRightIcon,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import HostMap from "@/components/host-map";
import { getSession } from "next-auth/react";

export default function Pricing() {
  const sliderRef = useRef<Slider | null>(null);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-[#FAFBFC] h-full">
        <div className="2xl:w-[80%] py-10 sm:w-[80%] w-[95%] mx-auto">
          <div className="flex lg:flex-nowrap flex-wrap gap-y-5 justify-center gap-x-5">
            <div className="max-w-[340px]">
              <Card className="bg-[#FFFFFF] py-16 2xl:h-[60vh] h-[90vh]  flex flex-col justify-between items-center px-4 ">
           
                  <Title
                  title="Basic Combined "
                  heading={'h4'}
                  className={'text-[#006263] font-PoppinsSemiBold'}
                />
                <div>
                  <Title
                    className={"text-center text-[#6434D6] py-5"}
                    title="Free"
                    heading={"h2"}
                  />
                  <li className="flex items-center justify-start gap-x-2 text-[#000]">
                    <Check size={20} strokeWidth={3} color="#2AA2A3" />
                    Unlimited nomad opportunities
                  </li>
                </div>
                <Button variant={"outline"} className="mt-2 w-full" size={"lg"}>
                  Choose a plan
                </Button>
              </Card>
            </div>
            <div className="max-w-[340px]">
              <Card className="bg-[#FFFFFF] 2xl:h-[60vh] h-[90vh] pb-16  flex flex-col justify-between items-center px-4 ">
               <div className="bg-[#5935D5] py-1 rounded w-full">
               <Text
                  text="MOST POPULAR"
                  align={"center"}
                  paragraph={"p-bold"}
                  color="#ffffff"   
                />           
              </div>
                <Title
                  title="Standard Combined"
                  heading={'h4'}
                  className={'text-[#006263] font-PoppinsSemiBold'}
                />
                <div>
                 
                  <div className="flex items-center justify-center">
                    <Title
                    className={"text-center text-[#6434D6] py-5"}
                    title="£10"
                    heading={"h2"}
                  />
                    <Text
                      text=" /per month"
                      align={"left"}
                      color="#006263"
                      paragraph={"p-small"}
                    />
                    </div>
                  <ul>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Unlimited nomad opportunities
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Boost Listing in Search Results
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Task management software to manage nomad task
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      See who saves your listing
                    </li>
                  </ul>
                </div>

                <Button
                  variant={"secondary"}
                  className="mt-2 w-full"
                  size={"lg"}
                >
                  Choose a plan
                </Button>
              </Card>
            </div>
            <div className="max-w-[340px]">
              <Card className="bg-[#FFFFFF]  2xl:h-[60vh] py-16 h-[90vh] flex flex-col justify-between items-center px-4 ">
             
                
                <Title
                  title="Premium Combined"
                  heading={'h4'}
                  className={'text-[#006263] font-PoppinsSemiBold'}
                />
                <div>
                    <div className="flex items-center justify-center">
                    <Title
                    className={"text-center text-[#6434D6] py-5"}
                    title="£30"
                    heading={"h2"}
                  />
                    <Text
                      text=" /per month"
                      align={"left"}
                      color="#006263"
                      paragraph={"p-small"}
                    />
                    </div>
                
                  <ul>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Unlimited nomad opportunities
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Boost Listing in Search Results
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Task management software to manage nomad task
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      See who saves your listing
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Up to $1mln Home & Contents Insurance Plan
                    </li>
                    <li className="flex items-center gap-x-2 text-[#000]">
                      <Check size={20} strokeWidth={3} color="#2AA2A3" />
                      Premium Badge on Listing
                    </li>
                  </ul>
                </div>
                <Button variant={"outline"} className="mt-2 w-full" size={"lg"}>
                  Choose a plan
                </Button>
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