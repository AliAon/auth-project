"use client";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Title from "./ui/title";
export default function Logo() {
  return (
    <div className="flex gap-x-2 py-2 items-center">
      <Image src={logo} width={40} alt="logo_host_nomad" />
      <Title heading="h5"  className={'text-[#006263] font-PoppinsSemiBold'} title="Host a Nomad" />
    </div>
  );
}
