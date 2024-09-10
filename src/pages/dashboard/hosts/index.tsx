"use client";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/search-box";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import host from "../../../assets/images/host.jpg";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import fluent_bed from "../../../assets/images/fluent_bed.png";
import HostMap from "@/components/host-map";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useRouter } from "next/router";
export default function ViewAllHost() {
  const [query, setQuery] = useState();
  const [search, onSearch] = useState();
  const router=useRouter()

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-[#FAFBFC]">
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
            <Card className="bg-[#FFFFFF] px-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-8 col-span-12">
                  <div className="grid lg:grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-2 grid-cols-1">
                     { [1,2,3,4,5,6].map((item,index)=><Card key={index}  className="p-0">
                        <Image
                          alt=""
                          className="rounded-t-2xl"
                          src={host}
                          style={{
                            width: "100%",
                          }}
                        />
                        <div className="px-2 py-2">
                          <Text
                            className={"font-bold mb-1"}
                            text="Give us a hand in our guesthouse in Oxford"
                            paragraph={"p-trancate"}
                            color="#006263"
                          />
                          <Text
                            text="Administration . Gardening . Cleaning . Housekeeping 25 hours/week . 3 days off/week . 4 weeks"
                            paragraph={"p-small"}
                          />
                          <div className="flex justify-between">

                          
                          <ul className="flex items-center mt-1">
                            <li className="flex items-center gap-x-1">
                              <Image
                                style={{
                                  width: "25px",
                                }}
                                src={fluent_bed}
                                alt=""
                              />
                              <Text text="02" paragraph={"p-small"} />
                            </li>
                          </ul>
                          <Button size={'sm'} className="text-[12px]" onClick={()=>router.push('/dashboard/hosts/view-host')} variant={'secondary'} >
                            Apply
                          </Button>
                          </div>
                        </div>
                      </Card>)}
                  
                  </div>
                  {/* Paginations */}
                  <div className="py-4">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious  href="#" />
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
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <HostMap />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

