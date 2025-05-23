"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const banners = [
  {
    id: 0,
    src: "/images/banner0.png",
    title: "构建完整的智慧医疗系统生态",
    desc: "敏迪医疗专注智慧医疗信息化",
  },
  {
    id: 1,
    src: "/images/banner1.png",
    title: "聚焦深耕紧密型县域医共体",
    desc: "根植县域，赋能医共体",
  },
  {
    id: 2,
    src: "/images/banner2.png",
    title: "以病人为中心提高医疗质量、服务质量",
    desc: "优化医疗资源配置、提高医疗机构运营效率",
  },
];

export default function App() {
  return (
    <>
      <div className="h-[70vh] relative">
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
              <img src={banner.src} alt={`Banner ${banner.id}`} />
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-black max-w-[40%]">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-lg">{banner.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[1024px] mx-auto">
        <div className="flex items-center justify-center gap-12">
          <img
            src="/images/index/image1.png"
            alt=""
            className="h-96 aspect-square"
          />
          <div className="h-full flex justify-around flex-col">
            <h3 className="text-3xl my-6">敏迪医疗卫生综合平台</h3>
            <p>
              以最新信息技术运用到医疗机构与公共卫生的各项业务系统中，对医疗机构、公共卫生
              系统进行流程化管理，实现特定的业务功能，提高医疗机构的工作效率和服务质量。
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-12 flex-row-reverse">
          <img
            src="/images/index/image2.png"
            alt=""
            className="h-96 aspect-square"
          />
          <div className="h-full flex justify-around flex-col">
            <h3 className="text-3xl my-6">敏迪医疗卫生综合平台</h3>
            <p>
             是互联网在医疗领域的新应用，同时覆盖诊前、诊中、诊后各环节，包括问诊咨询、复诊续方、双向转诊、电子健康档案、家庭医生、疾病风险预估、在线健康管理（包括慢病管理）等。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
