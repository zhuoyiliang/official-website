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
    src: "/images/banner0.png",
    title: "数据互联互通",
    desc: "信息共享",
  },
  {
    id: 1,
    src: "/images/banner1.png",
    title: "聚焦深耕\n紧密型县域医共体信息化建设",
    desc: "根植县域，赋能医共体",
  },
  {
    id: 2,
    src: "/images/banner2.png",
    title: "智能公卫升级",
    desc: "优化医疗资源配置、提高医疗机构运营效率",
  },
];

export default function App() {
  return (
    <>
      <div className="h-[70vh] relative select-none">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-black max-w-[40%]">
                {/* <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-lg text-start">{banner.desc}</p> */}

                {banner.title.split("\n").map((line, index) => (
                  <h2
                    key={index}
                    className="text-4xl font-bold mb-4 text-start"
                  >
                    {line}
                  </h2>
                ))}
                {banner.desc.split("\n").map((line, index) => (
                  <p key={index} className="text-lg text-start">
                    {line}
                  </p>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[1024px] mx-auto">
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
            <p className="indent-8">
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
            <p className="indent-8">
              可实现“县-镇-村”三级医疗机构之间信息互联互通，医共体内检验检查结果互认影像信息共享，双向转诊，分级诊疗，慢病管理，电子处方流转到第三方药房数据统计，总物资管理，设备管理等功能。{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
