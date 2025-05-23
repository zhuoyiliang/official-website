import Image from "next/image";

const msg1 =
  "广州敏迪医疗科技有限公司，专注于智慧医疗信息化，是国内领先的“互联网+医疗”解决方案提供商和运营服务商。公司以技术创新为基础，构建了医疗大数据应用的生态体系，实现医院临床数据标准化与业务系统的互联互通。全面推动卫健部门与医疗机构的业务信息平台升级，助力提高医疗机构运营效率，优化医疗资源配置，改善群众就医体验，让群众看病更省心。敏迪医疗作为高新技术企业，汇集了一批专注医疗健康、临床、影像、公共卫生等相关领域的专家，深度洞悉医疗行业特点，在临床医疗方面极具竞争优势。敏迪医疗将实践智慧医疗、技术创新、人文关怀的理念，以卓越品质服务客户，为客户创造价值，不懈的致力于智慧医疗信息化建设的技术研究和产品开发！";
export default function Page() {
  return (
    <div>
      <div className="relative mb-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold z-10">
          广州敏迪医疗科技有限公司
          <p className="text-xl text-gray-500 ">专注于智慧医疗信息化</p>
        </div>
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
      <div className="container my-12 mx-auto lg:px-56 indent-8">
        <h3 className="text-2xl indent-0 my-2 font-semibold">公司简介</h3>
        {msg1}
      </div>
      <div className="mt-12 h-[600px]">
        <Image
          src="/images/about/image1.png"
          className="w-full h-full object-cover"
          alt="示例"
          width={5120}
          height={940}
        />
      </div>
    </div>
  );
}
