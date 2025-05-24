import Image from "next/image";

const lines = [
  {
    time: "2017年4月",
    content:
      "国务院办公厅《关于推进医疗联合体建设和发展的指导意见》国办发〔2017〕32号使医联体成为服务、责任、利益、管理共同体，区域内医疗资源有效共享，基层服务能力进一步提升，推动“基层首诊、双向转诊、急慢分治、上下联动” 的 分级诊疗模式。",
  },

  {
    time: "2019年5月",
    content:
      "国家卫健委《关于推进紧密型县域医疗卫生共同体建设的通知》国卫基层函〔2019〕121号要求实现县域内医疗卫生资源整合，形成“县乡一体、乡村一体”的管理模式强调医保支付方式改革、薪酬制度改革、信息化建设等配套措施。",
  },
  {
    time: "2020年9月",
    content: [
      "国家卫健委《关于印发紧密型县域医共体建设评判标准和监测指标体系的通知》",
      "• 制定医共体建设的11项评判标准，包括责任共同体、管理共同体、服务共同体、利益共同体等维度。",
      "• 建立监测指标体系，动态评估医共体运行效果。",
    ],
  },
  {
    time:"2021年6月",
    content:[
      "国务院办公厅《关于推动公立医院高质量发展的意见》",
      "• 提出以县域医共体为载体，提升县级医院综合能力，强化基层医疗服务体系。",
      "• 要求县级医院达到“三级医院水平”，发挥县域龙头作用。",
      "• 国家乡村振兴局、国家卫健委《乡村振兴战略规划（2018-2022年）》指出将县域医共体建设纳入健康乡村行动，强化农村医疗卫生服务网络。"
    ]
  },
  {
    time:"2021年8月",
    content:'国家卫健委《关于开展基层卫生健康综合试验区建设的通知》中指出：探索医共体与公共卫生服务深度融合的创新模式。'
  },
  {
    time:"2021年11月",
    content:[
      "国家卫健委《“千县工程”县医院综合能力提升工作方案》",
      "• 到2025年，全国至少1000家县医院达到三级医院服务能力，成为县域医共体的核心",
      "• 重点建设急诊急救、临床服务、资源共享、高质量管理等“五大中心”。",
      "• 国家乡村振兴局、国家卫健委《乡村振兴战略规划（2018-2022年）》指出将县域医共体建设纳入健康乡村行动，强化农村医疗卫生服务网络",
    ]
  },
    {
    time:"2022年",
    content:[
      '《公立医院高质量发展评价指标（试行）》',
      '• 其中指标包含智慧医院建设成效等评价指标',
      '• 2022年1月，国家颁布县域慢性肾脏病等7个慢性疾病分级诊疗方',
      '• 2022年7月，《关于做好2022年基本公共卫生服务工作的通知》提出：推进城乡社区医防融合能力提升和全面推进电子健康档案普及应用'
    ]
  },
    {
    time:"2023年",
    content:[
      '国家卫健委《关于做好2023年紧密型县域医共体建设监测工作的通知》',
      '• 要求各地定期填报医共体监测数据，重点考核资源下沉、服务能力提升、医保基金使用效率等指标；',
      '• 强调通过信息化手段实现医共体内数据互联互通。'
    ]
  },
    {
    time:"2023年5月",
    content:[
      '国家卫健委等六部门《关于印发紧密型县域医共体建设试点效果评价方案（2023-2025年）的通知》',
      '• 对全国紧密型县域医共体试点开展动态评估，明确2023-2025年考核周期。',
      '• 新增评价指标：县域内基层就诊率、医保基金县域内支出占比、医共体内人员柔性流动比例等。',
      '• 强调通过考核结果与财政补助、医保支付、医院评级挂钩，推动政策落地。'
    ]
  },
    {
    time:"2023年9月",
    content:[
      '国家卫健委《县域医共体信息化建设标准与规范（2023年版）》',
      '• 统一县域医共体信息化建设标准，要求实现电子健康档案、电子病历、影像数据等全域互联互通。',
      '• 明确县域远程医疗中心建设要求，覆盖所有乡镇卫生院。'
    ]
  },
    {
    time:"2023年12月",
    content:[
      '国家医保局《关于推进紧密型县域医共体医保支付方式改革的指导意见》',
      '• 全面推行医保基金“总额预算、结余留用、合理超支分担”支付方式。',
      '• 允许医共体内部医保基金调剂使用，向基层倾斜。',
      "• 试点探索“按人头打包付费”模式（如慢病管理）。"
    ]
  },
    {
    time:"2024年1月",
    content:[
      '国家卫健委 《基层卫生健康服务高质量发展指导意见》',
      '• 提出县域医共体要“强县、活乡、稳村”，强化县级医院能力，激活乡镇卫生院活力，稳定村卫生室服务；',
      '• 推动县域内“检验检查结果互认”全覆盖，减少重复诊疗。'
    ]
  },
    {
    time:"2024年4月",
    content:[
      '国家卫健委《关于开展“优质服务基层行”活动的通知（2024年版）》',
      '• 将县域医共体建设与“优质服务基层行”活动结合，要求县级医院对乡镇卫生院的帮扶达标率达到100%。',
      '• 新增乡镇卫生院“全专结合”门诊、慢性病一体化管理等考核指标。'
    ]
  },
    {
    time:"2025年3月",
    content:[
      '国家卫健委《关于印发紧密型县域医共体信息化功能指引的通知》',
      '• 规范紧密型县域医共体信息化建设，推动县、乡、村三级医疗机构数据共享与业务协同。',
      '• 提升基层医疗服务效率和质量，助力实现“小病不出乡、大病不出县”的分级诊疗目标。'
    ]
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
          区/县域医共体
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
          className="relative w-full lg:px-56 h-56 grid  grid-cols-[1fr_2fr] grid-rows-1 gap-6"
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

          <div>
            {Array.isArray(item.content) ? (
              item.content.map((str, index) => (
                <span key={index} className="block">
                  {str}
                  {index !== item.content.length - 1 && <br />}
                </span>
              ))
            ) : (
              <p className="">{item.content}</p>
            )}
          </div>

           {/* <p className="">{item.content}</p> */}
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
