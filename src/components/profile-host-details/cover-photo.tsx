"use client";
import Title from "../ui/title";
import { Button } from "../ui/button";
import { Field, FieldArray, Form, Formik, useFormikContext } from "formik";
import React, { useState } from "react";
import Text from "../ui/text";
import Image from "next/image";
import cover_photo from "../../assets/images/cover_photo.jpg";
import { Card } from "../ui/card";
import { CirclePlus, Loader, Plus } from "lucide-react";
import icons_video_fill from "../../assets/images/lets-icons_video-fill.png";
import { tabsType } from "@/types";
import { toast } from "react-toastify";
import axios from "axios"
import { useAddFileSocialMediaHandlesMutation, useAddFileUploadBussinessPhotoMutation, useAddFileUploadNomadAccomodationsMutation, useAddFileUploadVideoGalleriesMutation } from "@/lib/services/positionApi";
import { getToken } from "@/lib/helper";

export default function CoverPhoto({
  onSetActiveTab,
  activeValue,
  prevValue,
}: tabsType) {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [filepath, setfilepath] = useState<any>([]);
  const token=getToken()
  const [selectedFileBusinessPhotos    , setSelectedBusinessPhotosFile] = useState<any>();
  const [filepathBusinessPhotos, setfilepathBusinessPhotos] = useState<any>([]);
  const [socialHandleselectedFile    , setSelectedSocialHandleFile] = useState<any>();
  const [socialHandleFilepath, setSocialHandlesetFilepath] = useState<any>([]);
  const [uploadVideoGalleriesSelectedFile    , setUploadVideoGalleriesSelectedFile] = useState<any>();
  const [uploadVideoGalleriesFilepath, setUploadVideoGalleriesFilepath] = useState<any>([]);
  const [AddFileUploadNomadAccomodations,{isLoading}]=useAddFileUploadNomadAccomodationsMutation()
  const [AddFileUploadBussinessPhoto,{isLoading:isLoadingBussinessPhoto}]=useAddFileUploadBussinessPhotoMutation()
  const [AddFileSocialMediaHandles,{isLoading:socialMediaPhotoIsLoading}]=useAddFileSocialMediaHandlesMutation()
  const [AddFileUploadVideoGalleries,{isLoading:UploadVideoGalleryIsLoading}]=useAddFileUploadVideoGalleriesMutation()




  const handleChangeimg = async(event: any) => {
    const inputElement = event.target as any;
    if (inputElement.files) {
      console.log('files',inputElement.files)
      const files: FileList = inputElement.files;
      setSelectedFile(files[0]);
      console.log(inputElement.name);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setfilepath((pre:any)=>{
          return [...pre,reader.result]
        });
      };
      try {
        const formdata = new FormData();
        formdata.append("cover_photo", files[0]);
        const response =await AddFileUploadNomadAccomodations(formdata).unwrap()
        toast.success("Accomodations File Upload Successfuly", {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } catch (error: any) {
        toast.error(error?.data?.detail, {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } 
    }
   

  };
  const handleChangeimgBusinessPhoto = async(event: any) => {
    const inputElement = event.target as any;
    if (inputElement.files) {
      const files: FileList = inputElement.files;
      setSelectedBusinessPhotosFile(files[0]);
      console.log(inputElement.name);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setfilepathBusinessPhotos((pre:any)=>{
          return [...pre,reader.result]
        });
      };
      try {
        const formdata = new FormData();
        formdata.append("photo", files[0]);
        const response =await AddFileUploadBussinessPhoto(formdata).unwrap()
        toast.success("Business Photo File Upload Successfuly", {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } catch (error: any) {
        toast.error(error?.data?.detail, {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } 
    }
   

  };
  const socialMediaHandlesHandleChangeImg = async(event: any) => {
    const inputElement = event.target as any;
    if (inputElement.files) {
      const files: FileList = inputElement.files;
      setSelectedSocialHandleFile(files[0]);
      console.log(inputElement.name);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setSocialHandlesetFilepath((pre:any)=>{
          return [...pre,reader.result]
        });
      };
      try {
        const formdata = new FormData();
        formdata.append("photo", files[0]);
        const response =await AddFileSocialMediaHandles(formdata).unwrap()
        toast.success("Business Photo File Upload Successfuly", {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } catch (error: any) {
        toast.error(error?.data?.detail, {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } 
    }
   

  };
  const uploadVideoGalleriesHanldeChangeVideo = async(event: any) => {
    const inputElement = event.target as any;
    if (inputElement.files) {
      const files: FileList = inputElement.files;
      setUploadVideoGalleriesSelectedFile(files[0]);
      console.log(inputElement.name);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setUploadVideoGalleriesFilepath((pre:any)=>{
          return [...pre,reader.result]
        });
      };
      try {
        const formdata = new FormData();
        formdata.append("video", files[0]);
        const response =await AddFileUploadVideoGalleries(formdata).unwrap()
        toast.success("Video Gallery Upload Successfuly", {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } catch (error: any) {
        toast.error(error?.data?.detail, {
          hideProgressBar: true,
          position: "top-center",
          autoClose: 2000,
        });
      } 
    }
   

  };
  return (
    <>
      <Title
        title="Cover Photo"
        heading={"h4"}
        className={"text-[#006263] mb-4"}
      />
      <Text
        color="#000000"
        text="Add questions that the worldpackers have to answer to apply to this position"
        paragraph={"p"}
      />
      {/* Accommodation */}
      <div className="flex flex-col my-5">
        <Text
          text="Nomad Accommodation"
          paragraph={"p-bold"}
          className={"mb-2"}
          color="#000000"
        />
        <div className="flex gap-4">
          {filepath.map((path:string,index:number)=>{
            return(    <div key={index} className="basis-1/3 flex items-center">
              <Image  alt=""  className="rounded-md" width={300} height={300} src={path} />
            </div>)

          })}
      
          <div className="basis-1/3">
            <label
              htmlFor="dropzone-front"
              className={`flex flex-col items-center justify-center w-full border-[2px] border-[#616C60] border-dashed rounded-lg cursor-pointer`}
            >
              <input
                id="dropzone-front"
                type="file"
                name="front"
                className="hidden"
                onChange={handleChangeimg}
              />
              <Card className="py-28 w-full relative">
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  {isLoading ? <Loader/> :<>
                  
                  <CirclePlus className="mx-auto" color="#787486" size={40} /> 
                  <Text
                    text="Add New"
                    align={"center"}
                    className={"text-center"}
                    paragraph={"p-small"}
                  />
                  </>
                  }
                </div>
              </Card>
            </label>
          </div>
        </div>
      </div>
       {/* Business */}
       <div className="flex flex-col my-5">
        <Text
          text="Business Photos"
          paragraph={"p-bold"}
          className={"mb-2"}
          color="#000000"
        />
        <div className="flex gap-4">
          {filepathBusinessPhotos.map((path:string,index:number)=>{
            return(    <div key={index} className="basis-1/3 flex items-center">
              <Image  alt=""  className="rounded-md" width={300} height={300} src={path} />
            </div>)

          })}
      
          <div className="basis-1/3">
            <label
              htmlFor="business_photo"
              className={`flex flex-col items-center justify-center w-full border-[2px] border-[#616C60] border-dashed rounded-lg cursor-pointer`}
            >
              <input
                id="business_photo"
                type="file"
                name="business_photo"
                className="hidden"
                onChange={handleChangeimgBusinessPhoto}
              />
              <Card className="py-28 w-full relative">
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {isLoadingBussinessPhoto ? <Loader/> : <><CirclePlus className="mx-auto" color="#787486" size={40} />
                <Text
                    text="Add New"
                    align={"center"}
                    className={"text-center"}
                    paragraph={"p-small"}
                  />
                </>} 
                
                </div>
              </Card>
            </label>
          </div>
        </div>
      </div>
    
      {/* video gallery */}
      <div className="flex flex-col my-5">
        <Text
          text="Video Gallery"
          paragraph={"p-bold"}
          className={"mb-2"}
          color="#000000"
        />
        <div className="flex gap-4">
        {uploadVideoGalleriesFilepath.map((path:string,index:number)=>{
            return(    <div key={index} className="basis-1/3 flex items-center">
              <Image  alt=""  className="rounded-md" width={300} height={300} src={path} />
            </div>)

          })}
       
          <div className="basis-1/3">
          <label
              htmlFor="video_gallery"
              className={`flex flex-col items-center justify-center w-full border-[2px] border-[#616C60] border-dashed rounded-lg cursor-pointer`}
            >
              <input
                id="video_gallery"
                type="file"
                name="video_gallery"
                className="hidden"
                onChange={uploadVideoGalleriesHanldeChangeVideo}
              />
              <Card className="py-28 w-full relative">
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {UploadVideoGalleryIsLoading ? <Loader/> :<>

                <CirclePlus className="mx-auto" color="#787486" size={40} />
                <Text
                  text="Add New"
                  align={"center"}
                  className={"text-center"}
                  paragraph={"p-small"}
                />
                </>}
              </div>
            </Card>
            </label>
          </div>
        </div>
      </div>
       {/* Social Media Handles/ Public Profile */}
       <div className="flex flex-col my-5">
        <Text
          text="Social Media Handles/ Public Profile  "
          paragraph={"p-bold"}
          className={"mb-2"}
          color="#000000"
        />
        <div className="flex gap-4">
          {socialHandleFilepath.map((path:string,index:number)=>{
            return(    <div key={index} className="basis-1/3 flex items-center">
              <Image  alt=""  className="rounded-md" width={300} height={300} src={path} />
            </div>)

          })}
      
          <div className="basis-1/3">
            <label
              htmlFor="dropzone_social_handles"
              className={`flex flex-col items-center justify-center w-full border-[2px] border-[#616C60] border-dashed rounded-lg cursor-pointer`}
            >
              <input
                id="dropzone_social_handles"
                type="file"
                name="dropzone_social_handles"
                className="hidden"
                onChange={socialMediaHandlesHandleChangeImg}
              />
              <Card className="py-28 w-full relative">
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {socialMediaPhotoIsLoading ? <Loader/> : <><CirclePlus className="mx-auto" color="#787486" size={40} />
                  <Text
                    text="Add New"
                    align={"center"}
                    className={"text-center"}
                    paragraph={"p-small"}
                  />
                  </>
                  }
                </div>
              </Card>
            </label>
          </div>
        </div>
      </div>
    
    
      <div className="flex flex-wrap mt-10 justify-center gap-4">
        <Button
          onClick={() => onSetActiveTab(prevValue)}
          variant={"outline"}
          size={"lg"}
          className="rounded-full"
        >
          Previous
        </Button>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="rounded-full sm:px-32"
        >
          Upload
        </Button>
      </div>
    </>
  );
}
