import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import Text from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import VideoGallery from "@/components/video-gallery";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Paintbrush } from "lucide-react";
import profile_bg from "../../../assets/images/profile-bg.png";
import UserAvatar from "@/components/user-avatar";
import avatar from "../../../assets/images/Avatar.png";
import { getSession } from "next-auth/react";

export default function ProfileHostDetails() {
  const [activeTab, setActiveTab] = useState("skills");
  console.log("activeTab", activeTab);
  return (
    <>
      <header className="bg-[#f6f7f8]">
        <Navbar />
      </header>
      <main className="bg-[#f6f7f8]">
        <div className="2xl:w-[80%] w-[95%] mx-auto">
          <div className="flex md:flex-nowrap py-8 flex-wrap justify-center gap-4">
            <div className="lg:basis-1/4 basis-full flex flex-col gap-4">
              <Card className="p-0">
                <CardContent className="p-0 flex flex-col gap-3">
                  <Image src={profile_bg} alt="" />
                  <div className="px-4 pb-4 flex flex-col gap-4">
                    <div className="-mt-10 text-center">
                      <UserAvatar imgSrc={"https://github.com/shadcn.png"} />
                    </div>
                    <div>
                      <Title
                        title="Adela Parkson"
                        heading={"h5"}
                        className={"text-[#006263] text-center"}
                      />
                      <Text
                        text="Product Designer"
                        paragraph={"p-small"}
                        align={"center"}
                      />
                    </div>
                    <div>
                      <Text
                        text="Age"
                        paragraph={"p-bold"}
                        color="#006263"
                        align={"left"}
                      />
                      <Text
                        text="Stanford University"
                        paragraph={"p-bold"}
                        color="#787486"
                        align={"left"}
                      />
                    </div>
                    <div>
                      <Text
                        text="Languages"
                        paragraph={"p-bold"}
                        color="#006263"
                        align={"left"}
                      />
                      <Text
                        text="English, Spanish, Italian"
                        paragraph={"p-bold"}
                        color="#787486"
                        align={"left"}
                      />
                    </div>
                    <div>
                      <Text
                        text="Nationality United Kingdom"
                        paragraph={"p-bold"}
                        color="#006263"
                        align={"left"}
                      />
                      <Text
                        text="English, Spanish, Italian"
                        paragraph={"p-bold"}
                        color="#787486"
                        align={"left"}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <VideoGallery />
            </div>
            <div className="lg:basis-3/4 flex flex-col gap-4 basis-full">
              <Card>
                <CardContent className="px-2 flex flex-col gap-3">
                  <Title
                    title="About me "
                    heading={"h5"}
                    className={"text-[#006263]"}
                  />
                  <Text
                    text="Growing up near the ocean has shaped my entire life. I love the water so much. It makes me very happy and calm and I want to explore all 7 seas. I also have a strong desire to help improve and clean the ocean to protect, save and improve all of the marine life inside. To me traveling means being able to explore the world I live in and understand what else is outside of my own world. I travel so that I can expand my knowledge and greater understand my role and impact on the world."
                    align={"left"}
                    color="#000000D1"
                    paragraph={"p-small"}
                  />
                  <Button variant={"outline"} className="gap-4 w-fit">
                    <Text
                      text="Social Media"
                      color="#006263"
                      paragraph={"p-bold"}
                    />
                    Instagram
                    <InstagramLogoIcon />
                  </Button>
                  <div className="mt-5 ">
                    <div className="flex flex-col gap-2">
                      <Text
                        text="Education "
                        paragraph={"p-small-bold"}
                        color="#006263"
                      />
                      <Text
                        text="I have a New York State advanced regents diploma from high school. I am currently attending a New York public university for media studies. I am learning about content creation and how the media works.
Work experience"
                        align={"left"}
                        color="#757575"
                        paragraph={"p-small"}
                      />
                    </div>
                  </div>
                  <div className="mt-5 ">
                    <div className="flex flex-col gap-2">
                      <Text
                        text="Work experience "
                        paragraph={"p-small-bold"}
                        color="#006263"
                      />
                      <Text
                        text="I have a New York State advanced regents diploma from high school. I am currently attending a New York public university for media studies. I am learning about content creation and how the media works.
Work experience"
                        align={"left"}
                        color="#757575"
                        paragraph={"p-small"}
                      />
                    </div>
                  </div>
                  <div className="mt-5 ">
                    <div className="flex flex-col gap-2">
                      <Text
                        text="Travel experience "
                        paragraph={"p-small-bold"}
                        color="#006263"
                      />
                      <Text
                        text="I have a New York State advanced regents diploma from high school. I am currently attending a New York public university for media studies. I am learning about content creation and how the media works.
Work experience"
                        align={"left"}
                        color="#757575"
                        paragraph={"p-small"}
                      />
                    </div>
                  </div>
                  <div className="mt-5 ">
                    <div className="flex flex-col gap-2">
                      <Text
                        text="Other volunteer experiences "
                        paragraph={"p-small-bold"}
                        color="#006263"
                      />
                      <Text
                        text="I have a New York State advanced regents diploma from high school. I am currently attending a New York public university for media studies. I am learning about content creation and how the media works.
Work experience"
                        align={"left"}
                        color="#757575"
                        paragraph={"p-small"}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="px-2 flex flex-col gap-3">
                  <Text text="Skills" paragraph={"p-bold"} color="#006263" />
                  <div className="flex gap-4">
                    <Text
                      text="I am Expert"
                      paragraph={"p-small"}
                      color="#787486"
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
                  <ul className="flex flex-wrap items-center gap-4">
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Text
                        text="Show All 33 amenities"
                        paragraph={"p-bold"}
                        color="#006263"
                      />
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="px-2 flex flex-col gap-3">
                  <Text
                    text="I want to learn it"
                    paragraph={"p-bold"}
                    color="#006263"
                  />
                  <div className="flex gap-4">
                    <Text
                      text="I am Expert"
                      paragraph={"p-small"}
                      color="#787486"
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
                  <ul className="flex flex-wrap items-center gap-4">
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Text
                        text="Show All 33 amenities"
                        paragraph={"p-bold"}
                        color="#006263"
                      />
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="px-2 flex flex-col gap-3">
                  <Text
                    text="Additional information"
                    paragraph={"p-bold"}
                    color="#006263"
                  />
                  <div className="flex gap-4">
                    <Text
                      text="I am Expert"
                      paragraph={"p-small"}
                      color="#787486"
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
                  <ul className="flex flex-wrap items-center gap-4">
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Badge
                        variant="outline"
                        className="py-2 px-3 bg-[#F3F5F5] text-base font-normal"
                      >
                        <Paintbrush />
                        Cleaning
                      </Badge>
                    </li>
                    <li>
                      <Text
                        text="Show All 33 amenities"
                        paragraph={"p-bold"}
                        color="#006263"
                      />
                    </li>
                  </ul>
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