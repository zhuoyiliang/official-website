import Image from "next/image";
import TileImg from "@/ui/TitleImg";
const msg2 =
  "医生通过PC端或移动端，利用在线语音、图文的形式为患者提供线上诊疗服务，方便患者随时找医生问诊。通过对接医院HIS系统，医生可查看患者在区/县域内的历史就诊数据，帮助医生更好地了解患者的情况";

const cards = [
  {
    title: "医生端\n(PC端/移动端)",
    content:
      "查询公卫工作指标，监督和考核健康档案各项要求，进一步推进社区基本公共卫生服务项目工作。",
  },
  {
    title: "患者端\n(移动端)",
    content: "协助基层医疗卫生机构建档、签约，并及时监督和更新健康档案信息。",
  },
  {
    title: "医院管理后台",
    content:
      "基层医疗卫生机构通过系统与居民签约，为签约的居民建档、体检、随访、健教。",
  },
];

export default function Page() {
  return (
    <div>
      <TileImg
        title="互联网医院"
        subTitle=""
        imgSrc="/images/common/image1.png"
      />

      <div className="max-w-[1024px] xl:my-12 mx-auto p-4 indent-8 text-2xl">
        互联网医院以实体医院为依托，利用互联网技术对接医院内部信息系统，可将电子处方流转到第三方社会药房，打造一个线上线下服务一体化、诊前诊中诊后服务一体化的互联网医院。
      </div>
      <div className="max-w-[1248px] mx-auto  flex items-center max-md:flex-wrap">
        <Image
          src="/images/internet/image1.png"
          alt=""
          className="rounded-xl transition-all duration-300"
          width={480}
          height={420}
        />
        <p className=" indent-8 p-4 text-xl">{msg2}</p>
      </div>

      <div className="bg-[#F1F9FF]">
        {/* <div className="container 2xl:px-48 xl:px-24 lg:px-8 px-0 mx-auto py-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-16  md:gap-8 gap-4">
          {cards.map((item) => (
            <div
              key={item.title}
              className="w-full md:aspect-video rounded-xl bg-white p-6
              transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="font-semibold lg:mb-3 h-full flex flex-col flex-wrap items-center gap-4 text-xl">
                <Image
                  src="/images/common/image2.png"
                  alt=""
                  width={18}
                  height={20}
                />
                {item.title.split("\n").map((line, index) => (
                  <span key={line}>{line}
                    {index !== item.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="container 2xl:px-64 xl:px-48 md:px-16 px-0 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-8 gap-4">
          {cards.map((item) => (
            <div
              key={item.title}
              className="w-full rounded-xl bg-white p-6 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="font-semibold mb-3 h-full flex flex-col flex-wrap justify-center items-center gap-4 text-2xl lg:text-xl">
                <Image
                  src="/images/common/image2.png"
                  alt=""
                  width={18}
                  height={20}
                />
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
