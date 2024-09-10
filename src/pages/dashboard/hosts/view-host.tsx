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
import fi_sr_umbrella from "../../../assets/images/fi-sr-umbrella (1).png";
import fi_sr_truck_side from "../../../assets/images/fi-sr-truck-side.png";
import city from "../../../assets/images/city.png";
import host_user from "../../../assets/images/host_user.png";
import mail_envelop from "../../../assets/images/mail-envelop.png";
import octicon_link from "../../../assets/images/octicon_link-16.png";
import ri_whatsapp from "../../../assets/images/ri_whatsapp-fill.png";
import fe_facebook from "../../../assets/images/fe_facebook.png";
import admin from "../../../assets/images/Vector (7).png";
import gallery_1 from "../../../assets/images/gallery-1.jpg";
import gallery_2 from "../../../assets/images/gallery-2.jpg";
import gallery_3 from "../../../assets/images/gallery-3.jpg";
import gallery_4 from "../../../assets/images/gallery-4.jpg";
import flags from "../../../assets/images/flags.jpg";
import Wifi from "../../../assets/images/Wifi.png";
import parking_area_circle from "../../../assets/images/parking-area-circle.png";
import fi_rr_terrace from "../../../assets/images/fi-rr-terrace.png";
import fi_rr_e_learning from "../../../assets/images/fi-rr-e-learning.png";
import fi_rr_football from "../../../assets/images/fi-rr-football.png";
import { ChevronRightIcon, MoveLeft, MoveRight } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import HostMap from "@/components/host-map";
import VideoGallery from "@/components/video-gallery";

export default function ViewHost() {
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
              <Title
                title="Give us a hand in our guesthouse in sunny Portugal"
                heading={"h6"}
                className={"text-[#006263]"}
              />
              <Text
                text="Tavira, Portugal"
                color="#000000"
                paragraph={"p-bold"}
              />
              <Button size={"sm"} className=" w-fit px-10" variant={"default"}>
                Apply
              </Button>
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
              <div className="my-4">
                <Text text="Role" paragraph={"p-bold"} color="#006263" />
                <Text
                  text="Description... and Jim, two Americans who decided to retire to Portugal 7 years ago. We love to travel and have often left our beloved Ozzie (cat) with friends. But we prefer her to be home, so look forward to meeting someone who shares our ..."
                  paragraph={"p-small"}
                />
                <p className="underline text-sm mr-auto">Read more</p>
              </div>
              <div className="my-4">
                <Text
                  text="Nomad Accommodation"
                  paragraph={"p-bold"}
                  color="#006263"
                />
              </div>
              {/* slider */}
              <div className="relative mb-3">
                <Slider ref={sliderRef} {...settings}>
                  <div>
                    <Image
                      alt=""
                      className="rounded-lg"
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
                      className="rounded-lg"
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
              <Text
                text="Description... and Jim, two Americans who decided to retire to Portugal 7 years ago. We love to travel and have often left our beloved Ozzie (cat) with friends. But we prefer her to be home, so look forward to meeting someone who shares our ..."
                paragraph={"p-small"}
              />
              <p className="underline text-sm mr-auto">Read more</p>
              <ul className="flex flex-wrap gap-4 mt-5">
                <li>
                  <Badge
                    variant="outline"
                    className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                  >
                    {" "}
                    <Image
                      src={fi_sr_umbrella}
                      alt=""
                      style={{
                        width: "25px",
                        marginRight: 10,
                      }}
                    />
                    Beach
                  </Badge>
                </li>
                <li>
                  <Badge
                    variant="outline"
                    className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                  >
                    {" "}
                    <Image
                      src={city}
                      alt=""
                      style={{
                        width: "25px",
                        marginRight: 10,
                      }}
                    />
                    City
                  </Badge>
                </li>
                <li>
                  <Badge
                    variant="outline"
                    className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                  >
                    {" "}
                    <Image
                      src={fi_sr_truck_side}
                      alt=""
                      style={{
                        width: "25px",
                        marginRight: 10,
                      }}
                    />
                    Accessible by public transport
                  </Badge>
                </li>
              </ul>
            </div>
            <div className="md:col-span-8  col-span-12">
              <div className="flex xl:flex-nowrap flex-wrap gap-2 ">
                <div className="xl:basis-[37%] flex flex-col gap-y-2">
                  <Card className="flex flex-col gap-y-2 p-4">
                    <div className="flex mb-6 justify-between gap-x-4">
                      <div>
                        <div className="flex gap-x-2 items-center">
                          <Avatar>
                            <Image src={host_user} alt="" />
                          </Avatar>
                          <div className="flex flex-col ">
                            <Text
                              text="Jim"
                              align={"left"}
                              paragraph={"p-bold"}
                              color="#003939"
                            />
                            <Text
                              text="Owner"
                              align={"left"}
                              color="#003939"
                              paragraph={"p-small"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="underline text-[#467886] text-sm mr-auto">
                          jim@gmail.com
                        </p>
                        <p className="underline  text-[#467886] text-sm mr-auto">
                          +33 712 5555
                        </p>
                      </div>
                    </div>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="flex justify-between">
                      <Text
                        text="References (3)"
                        paragraph={"p-bold"}
                        color="#006263"
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
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="mb-4">
                      <Text
                        text="Know someone who'd love this sit?"
                        paragraph={"p-bold"}
                        color="#006263"
                      />
                      <Text text="Share this listing" paragraph={"p-small"} />
                      <div className="flex mt-2 gap-2 flex-wrap">
                        <Button
                          variant="outline"
                          className="rounded-full border-[#5FA299]"
                          size="icon"
                        >
                          <Image
                            src={mail_envelop}
                            alt=""
                            className="w-[20px]"
                          />
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-[#5FA299]"
                          size="icon"
                        >
                          <Image
                            src={octicon_link}
                            className="w-[20px]"
                            alt=""
                          />
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-[#5FA299]"
                          size="icon"
                        >
                          <Image
                            src={ri_whatsapp}
                            className="w-[20px]"
                            alt=""
                          />
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full border-[#5FA299]"
                          size="icon"
                        >
                          <Image
                            src={fe_facebook}
                            className="w-[20px]"
                            alt=""
                          />
                        </Button>
                      </div>
                    </div>
                  </Card>
                  <VideoGallery/>
               
                </div>
                <div className="xl:basis-[63%] flex flex-col gap-y-2">
                  <Card>
                    <Text
                      text="Skill Needed"
                      paragraph={"p-bold"}
                      color="#006263"
                    />
                    <div className="py-4">
                      <div className="flex sm:flex-nowrap flex-wrap    mb-4 gap-x-4 gap-2">
                        <div className="grid grid-cols-12  items-center">
                          <div className="bg-[#7AB966] sm:col-span-3 col-span-2 w-[50px] relative h-[50px] rounded-full">
                            <Image
                              className="w-[27px] mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
                              src={admin}
                              alt=""
                            />
                          </div>
                          <div className="flex sm:col-span-9 col-span-10 flex-col ">
                            <Text
                              text="Administration"
                              paragraph={"p-small-bold"}
                              color="#006263"
                            />
                            <Text
                              text="Help with booking systems and payments."
                              align={"left"}
                              color="#808080"
                              paragraph={"p-small"}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-12  items-center">
                          <div className="bg-[#7AB966] sm:col-span-3 col-span-2 w-[50px] relative h-[50px] rounded-full">
                            <Image
                              className="w-[27px] mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
                              src={admin}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col sm:col-span-9 col-span-10">
                            <Text
                              text="Administration"
                              paragraph={"p-small-bold"}
                              color="#006263"
                            />
                            <Text
                              text="Help with booking systems and payments."
                              align={"left"}
                              color="#808080"
                              paragraph={"p-small"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-x-4 sm:flex-nowrap flex-wrap gap-2">
                        <div className=" grid grid-cols-12  items-center">
                          <div className="bg-[#7AB966] sm:col-span-3 col-span-2  w-[50px] relative h-[50px] rounded-full">
                            <Image
                              className="w-[27px] mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
                              src={admin}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col  sm:col-span-9 col-span-10">
                            <Text
                              text="Administration"
                              paragraph={"p-small-bold"}
                              color="#006263"
                            />
                            <Text
                              text="Help with booking systems and payments."
                              align={"left"}
                              color="#808080"
                              paragraph={"p-small"}
                            />
                          </div>
                        </div>
                        <div className="gap-x-2 grid grid-cols-12  items-center">
                          <div className="bg-[#7AB966] sm:col-span-3 col-span-2 w-[50px]  relative h-[50px] rounded-full">
                            <Image
                              className="w-[27px] mx-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
                              src={admin}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col sm:col-span-9 col-span-10">
                            <Text
                              text="Administration"
                              paragraph={"p-small-bold"}
                              color="#006263"
                            />
                            <Text
                              text="Help with booking systems and payments."
                              align={"left"}
                              color="#808080"
                              paragraph={"p-small"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <Text
                      text="Availability Dates"
                      paragraph={"p-bold"}
                      color="#006263"
                    />
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </Card>
                </div>
              </div>
              <div className="flex xl:flex-nowrap flex-wrap gap-y-2 gap-x-2 mt-2">
                <Card className="xl:basis-3/4">
                  <Text text="Amenities" paragraph={"p-bold"} color="#006263" />
                  <ul className="flex flex-wrap items-center gap-4 mt-5">
                    <li>
                      <Badge
                        variant="outline"
                        className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        {" "}
                        <Image
                          src={Wifi}
                          alt=""
                          style={{
                            width: "25px",
                            marginRight: 10,
                          }}
                        />
                        Free Wi-Fi
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        {" "}
                        <Image
                          src={parking_area_circle}
                          alt=""
                          style={{
                            width: "25px",
                            marginRight: 10,
                          }}
                        />
                        Free on-street parkign
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        {" "}
                        <Image
                          src={fi_rr_terrace}
                          alt=""
                          style={{
                            width: "25px",
                            marginRight: 10,
                          }}
                        />
                        Balcony
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        {" "}
                        <Image
                          src={fi_rr_e_learning}
                          alt=""
                          style={{
                            width: "25px",
                            marginRight: 10,
                          }}
                        />
                        Dedicated workspace (Desk)
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-3 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        {" "}
                        <Image
                          src={fi_rr_football}
                          alt=""
                          style={{
                            width: "25px",
                            marginRight: 10,
                          }}
                        />
                        Ai Conditioning
                      </Badge>
                    </li>
                    <li>
                      <Text
                        text="Show All 33 amenities"
                        className={"cursor-pointer "}
                        paragraph={"p-small-bold-link"}
                        color="#006263"
                      />
                    </li>
                  </ul>
                </Card>
                <Card className="xl:basis-1/4">
                  <Text
                    text="Language Spoken"
                    paragraph={"p-bold"}
                    color="#006263"
                  />
                  <div className="mt-5">
                    <Image src={flags} alt="" className=" my-2" />
                    <Text
                      text="Shift Detail"
                      paragraph={"p-bold"}
                      color="#006263"
                      className={"mt-4"}
                    />
                    <Text
                      text="25 hours per week"
                      align={"left"}
                      color="#808080"
                      paragraph={"p-small"}
                    />
                    <Text
                      text="4 days on / 3 days off"
                      align={"left"}
                      color="#808080"
                      paragraph={"p-small"}
                    />
                  </div>
                </Card>
              </div>
         
              <div className="mt-2">
              <Card >
                  <Text text="Location Map" paragraph={"p-bold"} color="#006263" />
                  <HostMap />

                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
