import Image from "next/image";
import TileImg from "@/ui/TitleImg";
const cards = [
  {
    title: "卫生院",
    content:
      "",
  },
  {
    title: "社区健康服务中心",
    content: "。",
  },
  {
    title: "总院\n（上级医院）",
    content:
      "",
  },
];

export default function Page() {
  return (
    <div>
      <TileImg
        title="影像信息共享"
        subTitle=""
        imgSrc="/images/common/image1.png"
      />

      <div className="container xl:my-12 mx-auto xl:px-56 p-4 indent-8 text-xl">
      基层医院（卫生院、社区健康服务中心）向总院（区/县医院）发送检查片子，总院医生出诊断意见给基 层医院；方便患者就近就医，避免耽误病情，从而提高基层医院的诊断效率。实现首诊在基层和上下联动
       </div>

      <div className="bg-[#F1F9FF]">
        {/* <h3 className="text-2xl mx-auto w-fit pt-12"></h3> */}
        <div className="container 2xl:px-64 xl:px-48 lg:px-32 md:px-16 px-0 mx-auto py-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-16  md:gap-8 gap-4">
          {cards.map((item) => (
            <div
              key={item.title}
              className="w-full lg:aspect-video rounded-xl bg-white p-6 
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
