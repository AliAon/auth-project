"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slide_1 from "../../../assets/images/image_1.jpg";
import slide_2 from "../../../assets/images/host.jpg";
import host_user from "../../../assets/images/host_user.png";
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

export default function ViewNomad() {
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
      <main className="bg-[#FAFBFC]">
        <div className="2xl:w-[80%] w-[97%] mx-auto">
          <div className="grid gap-x-5 sm:grid-cols-12 grid-cols-1 gap-y-5  py-5">
            <div className="md:col-span-4 col-span-12 flex flex-col gap-y-2">
              {/* slider */}
              <div className="relative mb-3">
                <Slider ref={sliderRef} {...settings}>
                  <div>
                    <Image
                      alt=""
                      className="rounded-md"
                      src={slide_1}
                      style={{
                        height: "270px",
                      }}
                    />
                  </div>
                  <div>
                    <Image
                      alt=""
                      style={{
                        height: "270px",
                      }}
                      className="rounded-md"
                      src={slide_2}
                    />
                  </div>
                </Slider>
                <Button
                  className="absolute top-[50%] translate-y-[-50%] left-[-20px] rounded-full"
                  onClick={previous}
                  variant="outline"
                  size="icon"
                >
                  <MoveLeft className="h-4 w-4" />
                </Button>
                <Button
                  className="absolute top-[50%] translate-y-[-50%] right-[-20px] rounded-full"
                  onClick={next}
                  variant="outline"
                  size="icon"
                >
                  <MoveRight className="h-4 w-4" />
                </Button>
              </div>
              <Text text="Introduction" paragraph={"p-bold"} color="#006263" />
              <Text
                text="We are Maria and Jim, two Americans who decided to retire to Portugal 7 years ago. We love to travel and have often left our beloved Ozzie (cat) with friends. But we prefer her to be home, so look forward to meeting someone who shares our ..."
                paragraph={"p-small"}
              />
              <p className="underline text-sm mr-auto">Read more</p>
              <Card className="flex flex-col gap-y-2 p-4 px-8">
                <ul className="flex flex-wrap text-[#757575] list-disc gap-x-6">
                  <li>Guest reception</li>
                  <li>Cleaning</li>
                  <li>Gardening</li>
                  <li>General maintenance</li>
                  <li>Construction</li>
                  <li>Cooking</li>
                  <li>Bartending</li>
                  <li>Gardening</li>
                  <li>General maintenance</li>
                  <li>Photography and videography </li>
                  <li>Social Media</li>
                  <li>Bartending</li>
                </ul>
              </Card>
              <div className="my-6">
                <Text
                  text="Reviews (112)"
                  paragraph={"p-bold"}
                  color="#006263"
                />
                <Card className="flex  flex-col gap-y-2 p-4">
                  <div className="flex   gap-x-2 items-center">
                    <Avatar>
                      <Image src={host_user} alt="" />
                    </Avatar>
                    <div className="flex flex-col my-4 ">
                      <Text
                        text="Bill (Philip)"
                        align={"left"}
                        paragraph={"p-bold"}
                        color="#003939"
                      />
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Text
                    text="Shrewsbury, United Kingdom · 02 Jun - 07 Jun 2024"
                    align={"left"}
                    color="#808080"
                    paragraph={"p-small"}
                  />{" "}
                  <Text
                    text="We feel very privileged to have Dianne to look after our 2 older cats for 5 days. Such a friendly, kind, thoughtful and considerate person! She arrived a day ..."
                    align={"left"}
                    color="#808080"
                    paragraph={"p-small"}
                  />{" "}
                  <p className="underline text-sm mr-auto">Read more</p>
                </Card>
              </div>
            </div>
            <div className="md:col-span-8  col-span-12">
              <div className="flex xl:flex-nowrap flex-wrap gap-2 ">
                <div className="xl:basis-[37%] flex flex-col gap-y-2">
                  <Card className="flex flex-col gap-y-2 p-4">
                    <div className="flex mb-2 justify-between gap-x-4">
                      <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-2 items-center">
                          <Avatar>
                            <Image src={host_user} alt="" />
                          </Avatar>
                          <div className="flex flex-col ">
                            <Text
                              text="Bill (Philip)"
                              align={"left"}
                              paragraph={"p-bold"}
                              color="#003939"
                            />
                          </div>
                        </div>
                        <Text
                          text="A trustworthy sitter with over 112 five-star sit reviews living & sitting in UK"
                          align={"left"}
                          color="#757575"
                          paragraph={"p-small"}
                        />
                        <Text
                          text="Shrewsbury, United Kingdom "
                          align={"left"}
                          color="#757575"
                          paragraph={"p-small"}
                        />
                      </div>
                    </div>
                    <div className="flex gap-x-2">
                      <div className="flex  items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 ms-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <Text
                        text="Reviews (112)"
                        paragraph={"p-bold"}
                        color="#006263"
                      />
                    </div>
                    <ul className="flex flex-wrap items-center gap-2 ">
                      <li className="flex items-center gap-x-2 text-[#757575]">
                        <Check size={20} strokeWidth={3} color="#2AA2A3" />
                        Email verified
                      </li>
                      <li className="flex items-center gap-x-2 text-[#757575]">
                        <Check size={20} strokeWidth={3} color="#2AA2A3" />
                        Phone verified
                      </li>
                      <li className="flex items-center gap-x-2 text-[#757575]">
                        <Check size={20} strokeWidth={3} color="#2AA2A3" />
                        ID verified
                      </li>
                      <li className="flex items-center gap-x-2 text-[#757575]">
                        <Check size={20} strokeWidth={3} color="#2AA2A3" />3
                        external references
                      </li>
                    </ul>
                    <Button variant={"secondary"} className="mt-2" size={"lg"}>
                      Choose a plan
                    </Button>
                  </Card>
                </div>
                <div className="xl:basis-[63%] flex flex-col gap-y-2">
                  <Card className="flex flex-col gap-y-3">

                    <Text text="About " paragraph={"p-bold"} color="#006263" />
                    <Text
                      text="I've travelled and lived in many different countries very much all my life, since I was 2 years old. It was a way of life my siblings and I got used to growing up. In all that constant moving and transfers, we had one form of stability ..."
                      align={"left"}
                      color="#757575"
                      paragraph={"p-small"}
                    />
                    <p className="underline text-sm mr-auto">Read more</p>
                    <Text
                      text="Why I want to house sit
 "
                      paragraph={"p-bold"}
                      color="#006263"
                    />
                    <Text
                      text="I like being a universal nomad, having done it all my life. Trusted Housesitters allows me to continue to travel and explore new places or revisit favorites. The freedom to immerse in diverse cultures and experience the world from different perspectives is invigorating. This lifestyle enriches my life with unforgettable memories and connections."
                      align={"left"}
                      color="#006263"
                      paragraph={"p-small"}
                    />
                  </Card>
                </div>
              </div>
              <div className="flex xl:flex-nowrap flex-wrap gap-y-2 gap-x-2 mt-2">
                <Card>
                  <Text
                    text="Preffered Countries "
                    paragraph={"p-bold"}
                    color="#006263"
                  />
                  <ul className="flex flex-wrap items-center gap-4 mt-5">
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Australia
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Austria
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Balcony
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Belgium
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Canada
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Denmark
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Denmark
                      </Badge>
                    </li>{" "}
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Denmark
                      </Badge>
                    </li>{" "}
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        Denmark
                      </Badge>
                    </li>
                    <li className="flex gap-x-1 items-center">
                      <Text
                        text="View All "
                        className={"cursor-pointer "}
                        paragraph={"p-small-bold-link"}
                        color="#006263"
                      />
                      <ArrowUpRight className="w-[20px]" color="#006263" />
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="flex xl:flex-nowrap flex-wrap gap-y-2 gap-x-2 mt-2">
                <Card className="flex flex-col gap-2">
                  <Text
                    text="Profile Detail"
                    paragraph={"p-bold"}
                    color="#006263"
                  />
                  <Text
                    text="Occupation"
                    align={"left"}
                    color="#000000"
                    paragraph={"p-small-bold"}
                  />
                  <Text
                    text="Successful career with international hotel chains (Hyatt Int'l, Meridian, Pan Pacific and Goodwood Park)and in the media industry in a regional capacity .( International Herald Tribune & CNBC Business News Channel)"
                    align={"left"}
                    color="#808080"
                    paragraph={"p-small"}
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
