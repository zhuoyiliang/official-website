import Image from "next/image";
import TileImg from "@/ui/TitleImg";
const cards = [
  {
    title: "社区健康服务中心",
    content:
      "查询公卫工作指标，监督和考核健康档案各项要求，进一步推进社区基本公共卫生服务项目工作。",
  },
  {
    title: "卫生院-公卫科",
    content: "协助基层医疗卫生机构建档、签约，并及时监督和更新健康档案信息。",
  },
  {
    title: "卫生站",
    content:
      "基层医疗卫生机构通过系统与居民签约，为签约的居民建档、体检、随访、健教。",
  },
];

export default function Page() {
  return (
    <div>
      <TileImg
        title="智能公卫升级"
        subTitle=""
        imgSrc="/images/common/image1.png"
      />

      <div className="container xl:my-12 mx-auto xl:px-56 p-4 indent-8 text-xl">
        以“智能机器人+公卫系统”为核心，严格按照《国家基本公共卫生服务规范（第三版）》，为县域基层医疗机构打造高效公卫解决方案。通过机器人替代卫生院及村站重复性人力操作，实现自动化处理居民健康随访、数据多端协同与智能质控，精准破解基层公卫“数据不准、人力不足、效率低下”难题。产品以“低门槛交互+高精度协作”为特色，支持智能纠错、智能提醒及跨平台联动，在确保服务规范的同时，大幅减少人为操作负荷，推动公卫人员从“事务性消耗”转向慢性病管理、健康干预等核心服务，助力县域实现“数据更准、响应更快、服务更专”的公卫升级目标。
      </div>

      <div className="bg-[#F1F9FF]">
        <h3 className="text-2xl mx-auto w-fit pt-12">可应用于不同部门</h3>
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
              {/* <p className="text-gray-500">{item.content}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
