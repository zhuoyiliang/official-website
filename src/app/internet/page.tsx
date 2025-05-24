import Image from "next/image";

const msg2 =
  "科室医生通过PC端或移动端，利用在线视频、语音、图文的形式为复诊、图文咨询、视频咨询患者提供线上门诊诊疗服务，方便患者利用移动端随时随地找医生问诊。通过对接医院HIS系统，将患者的病历信息、医嘱信息、检验检查等诊疗数据进行整合，有助于实现互联网医院与医院信息系统数据的高度共享和互联互通，从而便于医生在互联网诊疗中经患者授权下调阅就诊历史。";

export default function Page() {
  return (
    <div>
      <div className="relative xl:mb-24">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold z-10">
          互联网医院
        </h2>
        <Image
          src="/images/common/image1.png"
          alt=""
          className="h-[45vh] w-full object-cover"
          width={5120}
          height={872}
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            width={56}
            height={56}
            fill="#ffffff"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#c7c6c6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="max-w-[1024px]  xl:my-12 mx-auto   p-4">
        敏迪--互联网医院以实体医院为依托，利用互联网技术对接院内部信息系统，向患者提供基于互联网的线上复诊、就医服务、医患互动、病情管理和疾病诊治等全面的医疗健康互联网服务，打造一个线上线下服务一体化、诊前诊中诊后服务一体化的互联网医院。
      </div>
      <div className="max-w-[1024px] mx-auto  mx-auto  flex items-center max-md:flex-wrap">
        <Image
          src="/images/internet/image1.png"
          alt=""
          className="rounded-xl transition-all duration-300"
          width={480}
          height={420}
        />
        <p className=" indent-8 p-4">{msg2}</p>
      </div>
    </div>
  );
}
