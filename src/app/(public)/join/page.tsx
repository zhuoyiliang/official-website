import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="relative mb-24">
        <h1 className="select-none text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[65px] mb-4 text-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black  z-10">
          加入我们
        </h1>
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
      <div className="max-w-[1024px] my-12 mx-auto  ">
        <div className="w-full  grid md:grid-cols-2 grid-cols-1">
          <Image
            src="/images/join/image1.png"
            alt=""
            className="rounded-xl mx-auto"
            width={620}
            height={470}
          />
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-2xl my-2">人文理念</h3>
            <p className="indent-8">
              一、公司文化:
              公司促进员工之间的沟通和交流，营造家庭般的温馨氛围，强化员工的团队合作意识和责任心。
            </p>
            <p className="indent-8">
              二、尊重人的价值，开发人的潜能:
              公司秉承以人为本的管理理念，尊重每一位员工的独特价值和潜力。鼓励员工在工作中发掘自己的潜能提高自我价值。
            </p>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:[direction:rtl]">
          <Image
            src="/images/join/image2.png"
            alt=""
            className="rounded-xl mx-auto"
            width={620}
            height={470}
          />
          <div className="p-4 flex flex-col justify-center [direction:ltr]">
            <h3 className="text-2xl my-2">专业的培训体系</h3>
            <p className="indent-8">
              1. 完善培训课程体系重点开发业务技能与服务意识培训课程和职业素质培训课程。
            </p>
            <p className="indent-8">
              2. 大力开展员工培训、系统专业培训、营销培训、管理培训、储备人才培训等相关培训。
            </p>
            <p className="indent-8">
            3. 做好培训项目的策划和宣传工作精心的培训项目策划和宣传工作，营造良好的培训氛围，提高培训的有效性。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
