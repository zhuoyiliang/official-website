import Image from "next/image";

const cards = [
  {
    title: "卫生计生管理部门/卫健部门",
    content:
      "查询公卫工作指标，监督和考核健康档案各项要求，进一步推进社区基本公共卫生服务项目工作。",
  },
  {
    title: "乡镇卫生院",
    content: "协助基层医疗卫生机构建档、签约，并及时监督和更新健康档案信息。",
  },
  {
    title: "村卫生站/社区卫生服务中心",
    content:
      "基层医疗卫生机构通过系统与居民签约，为签约的居民建档、体检、随访、健教。",
  },
];

export default function Page() {
  return (
    <div>
      <div className="relative xl:mb-12">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold z-10">
          智能公卫升级
        </h2>
        <Image
          src="/images/common/image1.png"
          alt=""
          className="h-[45vh] w-full object-cover"
          width={1024}
          height={500}
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

      <div className="container xl:my-12 mx-auto xl:px-56 p-4 indent-8">
        以“智能机器人+公卫系统”为核心，严格按照《国家基本公共卫生服务规范（第三版）》，为县域基层医疗机构打造高效公卫解决方案。通过机器人替代卫生院及村站重复性人力操作，实现自动化处理居民健康随访、数据多端协同与智能质控，精准破解基层公卫“数据不准、人力不足、效率低下”难题。产品以“低门槛交互+高精度协作”为特色，支持智能纠错、智能提醒及跨平台联动，在确保服务规范的同时，大幅减少人为操作负荷，推动公卫人员从“事务性消耗”转向慢性病管理、健康干预等核心服务，助力县域实现“数据更准、响应更快、服务更专”的公卫升级目标。
      </div>

      <div className="bg-[#F1F9FF]">
        <h3 className="text-2xl mx-auto w-fit pt-12">不同部门协作</h3>
        <div className="container 2xl:px-56 mx-auto py-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {cards.map((item) => (
            <div
              key={item.title}
              className="w-full lg:aspect-video rounded-xl bg-white p-6 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-base font-semibold mb-3 flex flex-wrap">
                <Image
                  src="/images/common/image2.png"
                  alt=""
                  width={18}
                  height={20}
                />
                {item.title}
              </div>
              <p className="text-gray-500">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
