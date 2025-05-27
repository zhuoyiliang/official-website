"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const banners = [
  {
    id: 0,
    src: "/images/banner1.png",
    title: "聚焦深耕紧密型\n县域医共体信息化建设",
    desc: "根植县域，赋能医共体",
  },
  {
    id: 1,
    src: "/images/banner0.png",
    title: "数据互联互通\n信息共享",
    desc: "",
  },
  {
    id: 2,
    src: "/images/banner2.png",
    title: "智能公卫升级",
    desc: "优化医疗资源配置、提高医疗机构运营效率",
  },
];

export default function App() {
  console.log(process.env.NODE_ENV, "log");
  console.error(process.env.NODE_ENV, "error");
  return (
    <>
      <div className="h-[70vh] relative select-none">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          className="mySwiper"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id} className="relative">
              <Image
                src={banner.src}
                alt={`Banner ${banner.id}`}
                width={2560}
                height={906}
              />
              <div className="absolute left-[10%] lg:left-[5%] right-[40%] bottom-0 top-1/2 -translate-y-1/2 text-black flex flex-col justify-center">
                <div className="w-fit">
                {banner.title.split("\n").map((line, index) => (
                  <h1
                    key={index}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[65px] mb-4 text-start"
                  >
                    {line}
                  </h1>
                ))}
                {banner.desc.split("\n").map((line, index) => (
                  <p
                    key={index}
                    className="text-2xl text-start mt-8"
                  >
                    {line}
                  </p>
                ))} 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <Image
            src="/images/index/image1.png"
            alt=""
            width={960}
            height={720}
          />
          <div className="h-full flex  flex-col p-4  justify-center">
            <h3 className="text-3xl my-4">
              可对接各个业务系统，实现数据互联互通
            </h3>
            <p className="indent-8 text-lg">
              解决医疗机构之间“信息孤岛”的问题,实现数据互联互通，信息共享，提高医疗机构之间的工作效率和服务质量。
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 md:[direction:rtl]">
          <Image
            src="/images/index/image2.png"
            alt=""
            width={960}
            height={720}
          />
          <div className="h-full flex flex-col  p-4 [direction:ltr] justify-center">
            <h3 className="text-3xl my-4">医共体信息化平台</h3>
            <p className="indent-8 text-lg">
              可实现“县-镇-村”三级医疗机构之间信息互联互通，医共体内检验检查结果互认影像信息共享，双向转诊，分级诊疗，慢病管理，电子处方流转到第三方药房数据统计，总物资管理，设备管理等功能。{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
