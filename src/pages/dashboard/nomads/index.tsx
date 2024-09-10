"use client";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/search-box";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { Avatar } from "@radix-ui/react-avatar";
import nomad_user from "../../../assets/images/nomad-user.png";
import Text from "@/components/ui/text";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
export default function ViewAllNomad() {
  const [query, setQuery] = useState();
  const [search, onSearch] = useState();
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-[#FAFBFC] h-screen">
        <div className="2xl:w-[80%] w-[95%] mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap  items-center gap-x-8 gap-y-4 py-5">
            <div className="grow">
              <SearchBox
                onSearch={onSearch}
                query={query}
                searchArray={["item 1", "item 2", "item 3"]}
                setQuery={setQuery}
              />
            </div>
            <div className="flex flex-wrap gap-3 grow">
              <Button
                size={"lg"}
                className="rounded-full text-[#475569] py-6 px-6"
                variant="outline"
              >
                Dates
              </Button>
              <Button
                size={"lg"}
                className="rounded-full text-[#475569] py-6 px-6"
                variant="outline"
              >
                Duration
              </Button>
              <Button
                size={"lg"}
                className="rounded-full text-[#475569] py-6 px-6"
                variant="outline"
              >
                Jobs
              </Button>
              <Button
                size={"lg"}
                className="rounded-full text-[#475569] py-6 px-6"
                variant="outline"
              >
                Local Filters
              </Button>
              <Button
                size={"lg"}
                className="rounded-full flex gap-x-1 text-[#475569] py-6 px-6"
                variant="outline"
              >
                <SlidersHorizontal size={16} />
                Filter
              </Button>
            </div>
          </div>
          {/* Filters End */}
          <div>
            <Card className="bg-[#FFFFFF]  px-4">
              <div className="flex justify-center flex-wrap gap-4 gap-y-10">
                {Array.from({ length: 12 }, (v, i) => {
                  return (
                    <div key={i} className=" flex flex-col gap-2 max-w-48 justify-center">
                      <Avatar>
                        <Image
                          src={nomad_user}
                          className="w-[50%] mx-auto"
                          alt=""
                        />
                      </Avatar>
                      <div onClick={()=>{router.push('/dashboard/nomads/view-nomad')}}>
                      <Text
                      className={'cursor-pointer'}
                        text="Bill (Philip)"
                        paragraph={"p-bold"}
                        align={"center"}
                        color="#003939"
                      />
                      </div>
                      <Text
                        text="London, United Kingdom"
                        paragraph={"p-small"}
                        align="center"
                        color="#000000"
                      />
                      <ul className="flex items-center justify-center gap-x-2">
                        <li>
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
                        </li>
                        <li>
                          <Text
                            text="112"
                            paragraph={"p-bold"}
                            align={"center"}
                            color="#FFCF00"
                          />
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="my-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              </div>

            </Card>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
