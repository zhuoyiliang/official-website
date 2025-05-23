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
      <div className="relative mb-24">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold z-10">
          加入我们
        </h2>
        <img
          src="/images/common/image1.png"
          alt=""
          className="h-[45vh] w-full object-cover"
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
      <div className="container my-28 mx-auto lg:px-56">
        <div className="w-full flex gap-2 items-center">
          <img
            src="/images/join/image1.png"
            alt=""
            className="rounded-xl p-1"
          />
          <div className="">
            <h3 className="text-2xl my-2">人文理念</h3>
            <p className="indent-8">
              一、家庭文化:
              公司建立以家庭为基础的文化，促进员工之间的沟通和交流，营造家庭般的温馨氛围，强化员工的团队合作意识和责任心。
            </p>
            <p className="indent-8">
              二、尊重人的价值，开发人的潜能:
              公司秉承以人为本的管理理念，尊重每一位员工的独特价值和潜力。鼓励员工在工作中发掘自己的潜能提高自我价值。
            </p>
          </div>
        </div>

        <div className="w-full flex gap-2 flex-row-reverse items-center">
          <img
            src="/images/join/image2.png"
            alt=""
            className="rounded-xl p-1"
          />
          <div className="">
            <h3 className="text-2xl my-2">人文理念</h3>
            <p className="indent-8">
              一、家庭文化:
              公司建立以家庭为基础的文化，促进员工之间的沟通和交流，营造家庭般的温馨氛围，强化员工的团队合作意识和责任心。
            </p>
            <p className="indent-8">
              二、尊重人的价值，开发人的潜能:
              公司秉承以人为本的管理理念，尊重每一位员工的独特价值和潜力。鼓励员工在工作中发掘自己的潜能提高自我价值。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
