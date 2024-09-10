import React from "react";
import { Card } from "./ui/card";
import Logo from "./logo";
import { Button } from "./ui/button";
import Image from "next/image";
import messagequestion from "../assets/images/message-question.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Text from "./ui/text";
import {
  ChevronDown,
  ChevronDownCircle,
  ChevronRightIcon,
  CircleChevronDown,
  CircleUser,
  List,
  LogOut,
  Mail,
  Menu,
  Star,
  TableOfContents,
  UserPen,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/router";
import UserAvatar from "./user-avatar";
import { useGetUserRoleQuery } from "@/lib/services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { logout } from "@/lib/features/authSlice";

export default function Navbar() {
  const router = useRouter();
  const user_type=useSelector((state:any)=>state.auth.type)
  const host=useSelector((state:any)=>state.auth.host)
  const nomad=useSelector((state:any)=>state.auth.nomad)


  const dispatch=useDispatch()

  return (
    <Card className="rounded-b-[40px] rounded-t-none">
      <div className="2xl:w-[80%] w-[95%] mx-auto">
        <div className="flex   justify-between">
          <div className="flex gap-x-8">
            <Logo />
            <div className="bg-[#00626314]  xl:flex hidden items-center space-x-2 px-2      rounded-full">
              <Button onClick={()=>{
                router.push('/dashboard/nomads')
              }} className="rounded-full" variant={"ghost"}>
                Find a nomad
              </Button>
              <Button
               onClick={()=>{
                router.push('/dashboard/hosts')
              }}
              className="rounded-full px-8" variant={"secondary"}>
                Find a host
              </Button>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="xl:flex hidden items-center gap-x-4 ">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" size="icon">
                    <List />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel
                    className="font-normal cursor-pointer"
                    onClick={() =>
                      router.push("/dashboard/profile-host-details")
                    }
                  >
                    Create Position
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
              <Image
                src={messagequestion}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt=""
              />
              <div className="flex items-center gap-x-2 ">
                <UserAvatar imgSrc="https://github.com/shadcn.png" />
                {user_type=="host" && host.isHost && <Text text={host?.data.username} paragraph={"p-bold"} color="#404040" /> }
                {user_type=="nomad" && nomad.isNomad && <Text text={nomad?.data.username} paragraph={"p-bold"} color="#404040" /> }
                
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <CircleChevronDown strokeWidth={0.5} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => router.push("/dashboard/profile")}
                      className="gap-2 cursor-pointer"
                    >
                      <CircleUser color="#565656" />
                      Profile
                    </DropdownMenuItem>
                    {user_type==="host" &&<>
                    <DropdownMenuItem
                      onClick={() =>
                        router.push("/dashboard/profile-host-details/basic-information")
                      }
                      className="gap-2 cursor-pointer"
                    >
                      <UserPen color="#565656" />
                     Basic Info
                    </DropdownMenuItem>

                    

                    <DropdownMenuItem
                      onClick={() =>
                        router.push("/dashboard/profile-host-details")
                      }
                      className="gap-2 cursor-pointer"
                    >
                      <UserPen color="#565656" />
                      Edit Host
                    </DropdownMenuItem>
                    </>
                    }
                     {user_type==="nomad" &&

                    <DropdownMenuItem
                      onClick={() =>
                        router.push("/dashboard/profile-nomad-details")
                      }
                      className="gap-2 cursor-pointer"
                    >
                      <UserPen color="#565656" />
                      Edit Nomad
                    </DropdownMenuItem>}

                    <DropdownMenuItem className="gap-2 cursor-pointer">
                      <Star color="#565656" />
                      Reviews
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 cursor-pointer">
                      <Mail color="#565656" />
                      Inbox
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>{
                      signOut({
                        redirect:false
                      })
                      dispatch(logout())
                      localStorage.clear()
                      router.push('/')
                    }} className="gap-2 cursor-pointer">
                      <LogOut color="#565656" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button className="rounded-full" variant={"secondary"}>
                Choose a plan <ChevronDown />
              </Button>
            </div>
            <Button className="xl:hidden" variant="ghost" size="icon">
              <Menu strokeWidth={0.5} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
