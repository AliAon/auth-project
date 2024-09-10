/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { Inter } from "next/font/google";
import Title from "@/components/ui/title";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, StarIcon } from "lucide-react";
import trusted from "../../assets/images/trusted.png";
import { MdStar } from "react-icons/md";
import { useRouter } from "next/router";
import { useUpdateUserRoleMutation } from "@/lib/services/userApi";
import { toast } from "react-toastify";
import { getUserId } from "@/lib/helper";
import axios from "axios"
import { BASE_URL } from "@/lib/constant";
import { getSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHost, fetchNomad, fetchUserType } from "@/lib/features/authAction";
import { getToken } from "next-auth/jwt";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const router = useRouter();
  const [UpdateUserRole, { isLoading }] = useUpdateUserRoleMutation();
  const userId = getUserId();
  const dispatch=useDispatch()

  return (
    <main id="landing" className="relative">
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="2xl:w-[80%] w-[95%] z-10 relative mx-auto">
        <div className="flex flex-col py-5 justify-between h-screen">
          <Title
            className={"text-center text-white"}
            title="Host A nomad"
            heading={"h2"}
          />
          <div>
            <Title
              className={"text-center text-white pb-10"}
              title="Stay Adventure Stay Connected"
              heading={"h3"}
            />

            <div className="flex flex-end">
              <Card className="xl:w-[45%] lg:w-[60%] md:w-[70%]  ml-auto ">
                <CardContent>
                  <div className="md:block hidden">
                    <Text
                      text="Discover free & unique homestays around the world, in exchange for caring for adorable pets"
                      paragraph={"p"}
                      className={"text-[#003939]"}
                      color="#003939"
                    />
                  </div>
                  <div className="md:hidden ">
                    <Text
                      text="Discover free & unique homestays around the world, in exchange for caring for adorable pets"
                      paragraph={"p"}
                      align="center"
                      className={"text-[#003939]"}
                      color="#003939"
                    />
                  </div>

                  <div className="flex md:justify-start justify-center gap-y-2 flex-wrap mt-4 gap-x-4">
                    <Button
                      onClick={async () => {
                        try {
                          const response = await UpdateUserRole({
                            user_type: "host",
                          }).unwrap();
                          dispatch(fetchUserType())
                          dispatch(fetchHost())

                          toast.success(response.message, {
                            hideProgressBar: true,
                            position: "top-center",
                            autoClose: 2000,
                          });
                          router.push("dashboard/nomads/");
                        } catch (error: any) {
                          console.log("error", error);
                          toast.error(error?.data?.detail, {
                            hideProgressBar: true,
                            position: "top-center",
                            autoClose: 2000,
                          });
                        }
                      }}
                      size={"lg"}
                      variant={"default"}
                    >
                      Become a host
                      <ChevronRightIcon className="h-4 ml-2 w-4" />
                    </Button>
                    <Button
                      onClick={async () => {
                        try {
                          const response = await UpdateUserRole({
                            user_type: "nomad",
                          }).unwrap();
                          toast.success(response.message, {
                            hideProgressBar: true,
                            position: "top-center",
                            autoClose: 2000,
                            });
                            dispatch(fetchUserType())
                            dispatch(fetchNomad())


                          router.push("/dashboard/hosts");
                        } catch (error: any) {
                          console.log("error", error);
                          toast.error(error?.data?.detail, {
                            hideProgressBar: true,
                            position: "top-center",
                            autoClose: 2000,
                          });
                        }
                      }}
                      size={"lg"}
                      variant={"default"}
                    >
                      Become a nomad{" "}
                      <ChevronRightIcon className="h-4 ml-2 w-4" />
                    </Button>
                  </div>
                  <div className="pt-2 flex  md:justify-start justify-center flex-wrap space-x-2">
                    <Text
                      text="Excellent "
                      paragraph={"p"}
                      className={"text-[#003939]"}
                      color="#003939"
                    />
                    <Image src={trusted} width="100" height="50" alt="" />
                    <Text
                      text="18,939 review on  "
                      paragraph={"p"}
                      className={"text-[#003939]"}
                      color="#003939"
                    />
                    <MdStar color="#34B876" size={22} />

                    <Text
                      text="Trustpilot"
                      paragraph={"p"}
                      className={"text-[#003939]"}
                      color="#003939"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export async function getServerSideProps(context:any) {
  const session = await getSession(context);
  const token:any=await getToken(context)
  const isToken=token?.accessToken
  console.log("token",token)  
  console.log("session",session)  

  if (!isToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

