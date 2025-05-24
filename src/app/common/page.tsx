import Image from "next/image";

const lines = [
  {
    time: "2015.06",
    content:
      "《国务院办公厅关于全面推开县级公立医院综合改革的实施意见》国办发〔2015〕33号，旨在推动县级公立医院综合改革，提升对县级公立医院的管理和服务能力，推动医疗资源集约化配置，提高医疗卫生服务水平。加快医疗体制改革的步伐，推进健康中国建设。",
  },

  {
    time: "2016.12",
    content:
      "《国家卫生计生委关于开展医疗联合体建设试点工作的指导意见》国卫医发【2016】75号文指出，城市建立医疗集团，由三级医院牵头，联合二级、社区卫生机构、护理院、专业康复机构等，形成资源共享，分工协作的管理模式；县域建立医共体，“以县医院卫龙头，乡镇卫生院为枢纽，村卫生室为基础”的县乡一体化管理。逐步建立“基层首诊、双向转诊、急慢分治、上下联动”的分级诊疗模式。",
  },
  {
    time: "2017.04",
    content:
      "《国务院办公厅关于推进医疗联合体建设和发展的指导意见》国办发【2017】32号文明确指出，到2020年，要求所有二级公立医院和政府办基层医疗卫生机构全部参与医疗联合体建设和发展，形成服务、责任、利益、管理四个共同体；服务模式由以“治病为中心”向以“健康为中心”的转变。",
  },
  {
    time: "2018.07",
    content:
      "《关于印发医疗联合体综合绩效考核工作方案（试行）的通知》国卫医发【2018】26号文指出进一步加强医联体绩效考核，规范医联体建设发展，调动医疗机构积极性。加强对医联体建设工作的统筹规划与指导，规范医联体建设与管理。",
  },
  {
    time: "2018.08",
    content:
      "《关于进一步做好分级诊疗制度建设有关重点工作的通知》国卫医发〔2018〕28号提出了推动分级诊疗落地的“四分开”举措，即以区域医疗中心建设为重点推进分级诊疗区域分开；以县医院能力建设为重点推进分级诊疗城乡分开；以重大疾病单病种管理为重点推进分级诊疗上下分开；以三级医院日间服务为重点推进分级诊疗急慢分开。",
  },
  {
    time: "2019.05",
    content:
      "《关于推进紧密型县域医疗卫生共同体建设的通知》国卫基层函〔2019〕121号，指出通过建设紧密型医共体，既有利于进一步完善县域医疗卫生服务体系 ，提高县域医疗卫生资源配置和使用效率，加快提升基层医疗卫生服务能力，推动构建分级诊疗、合理诊治和有序就医的新秩序。也有利于贯彻落实“以人民健康为中心”的理念，为广大居民提供连续性、高质量的医疗卫生服务。",
  },
  {
    time: "2019.08",
    content:
      "《关于开展城市医疗联合体建设试点工作的通知》国卫医函〔2019〕125号指出，推进分级诊疗制度建设和医疗联合体建设，构建优质高效的医疗卫生服务体系，逐步实现城市医联体网格化布局管理，国家卫生健康委、国家中医药局决定开展城市医联体建设试点工作。",
  },
  {
    time: "2020.08",
    content:
      "《关于印发紧密型县域医疗卫生共同体建设评判标准和监测指标体系（试行）的通知》国卫办基层发〔2020〕12号明确了紧密型县域医共体建设的评判标准和监测指标。其中，评判标准由责任共同体、管理共同体、服务共同体、利益共同体4个维度11条评判标准构成；监测指标体系由有序就医格局基本形成、县域医疗卫生服务能力提升、医疗卫生资源有效利用、医保基金使用效能提升4个方面26条指标构成。",
  },
];

const conetnt2 = [
  " 医共体是基层开展医联体建设的主要模式，致力建设“以县医院为医共体总院，乡镇卫生院为枢纽，村卫生站为基础”的县乡一体化管理，充分发挥县医院的城乡纽带作用，贯彻实行医共体人财物六统一，形成县乡村医疗卫生机构分工协作机制，构建县乡村三级联动的县域医疗服务体系。",
  " 敏迪--县域医共体，遵循国家医改大方向，积极推动紧密型县域医共体的相关政策，以先进的信息技术助力整合型医疗卫生服务体系构建。利用互联网技术手段，搭建",
  "1、医共体医疗平台，通过远程联合门诊、远程会诊、开方取药、检验检查预约、双向转诊等服务，开展城乡医疗机构间的交流协作，实现优质医疗资源的服务下沉，贯彻实施分级诊疗",
  " 2、医共体业务管理平台，通过行政管理、财务管理、人力资源管理、药物管理、设备管理、总务物资管理等服务，统一城乡医疗机构的资源调配，降低运行成本，从单个机构的发展向县域整个医疗机构共同发展。",
];
export default function Page() {
  return (
    <div>
      <div className="relative mb-24">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold z-10">
          县域医共体
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

      <div className="my-12 mx-auto w-fit text-3xl  font-sans">
        医共体大事记
      </div>

      {lines.map((item) => (
        <div
          key={item.time}
          className="relative w-fit lg:px-56 h-56 grid  grid-cols-[auto_1fr] lg:xl:grid-cols-[1fr_2fr_10rem] xl:grid-cols-[1fr_2fr_20rem] grid-rows-1 gap-6 "
        >
          {/* <div className="box-border absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l border-dashed border-gray-400"></div> */}
          {/* <span className="absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-400 opacity-75  animate-ping"></span> */}
          {/* <span className="absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-500"></span> */}
          <div className="flex flex-row-reverse text-3xl font-sans relative px-6">
            {item.time}
            <div className="box-border absolute left-full transform -translate-x-1/2 w-0.5 h-full border-l border-dashed border-gray-400"></div>
            <span className="absolute left-full top-4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-400 opacity-75  animate-ping"></span>
            <span className="absolute left-full top-4 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-500"></span>
          </div>
          <p className="">{item.content}</p>
        </div>
      ))}

      <div className="bg-[#F1F9FF] py-12">
        <div className="container lg:px-56 h-56 mx-auto ">
          {conetnt2.map((item) => (
            <p key={item} className="indent-8">
              {item}
            </p> // 8对应2个中文字符
          ))}
        </div>

        <div className="container lg:px-56 py-2 mx-auto grid grid-cols-2">
          <Image
            src="/images/common/image3.png"
            alt=""
            className="rounded-xl  p-6 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            width={520}
            height={360}
          />
          <Image
            src="/images/common/image4.png"
            alt=""
            className="rounded-xl  p-6 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            width={520}
            height={360}
          />
        </div>
      </div>
    </div>
  );
}
