import React from "react";
import { Card, CardContent } from "./ui/card";
import Text from "./ui/text";
import Image from "next/image";
import gallery_1 from "../assets/images/gallery-1.jpg";
import gallery_2 from "../assets/images/gallery-2.jpg";
import gallery_3 from "../assets/images/gallery-3.jpg";
import gallery_4 from "../assets/images/gallery-4.jpg";
import icons_video_fill from "../assets/images/lets-icons_video-fill.png";

export default function VideoGallery() {
  return (
    <Card className="p-0">
      <CardContent className="flex flex-col gap-y-2 p-4 ">
        <div className="flex justify-between">
          <Text text="Video Gallery" paragraph={"p-bold"} color="#006263" />
        </div>
        <div className="grid gap-2  grid-cols-2">
          <div className="relative">
            <Image src={gallery_1} className="rounded" alt="" />
            <Image
              src={icons_video_fill}
              alt=""
              className="absolute w-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] "
            />
          </div>
          <div className="relative">
            <Image src={gallery_2} className="rounded" alt="" />
            <Image
              src={icons_video_fill}
              alt=""
              className="absolute  w-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] "
            />
          </div>
          <div className="relative">
            <Image src={gallery_3} className="rounded" alt="" />
            <Image
              src={icons_video_fill}
              alt=""
              className="absolute  w-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] "
            />
          </div>
          <div className="relative">
            <Image src={gallery_4} className="rounded" alt="" />
            <Image
              src={icons_video_fill}
              alt=""
              className="absolute  w-10 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] "
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
