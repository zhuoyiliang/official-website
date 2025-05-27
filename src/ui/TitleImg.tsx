import Image from "next/image";
export default function TileImg({
  title,
  subTitle,
  imgSrc,
}: {
  title: string;
  subTitle: string;
  imgSrc: string;
}) {
  return (
    <div className="relative mb-6  md:mb-12 lg:mb-24">
      <h1 className="select-none text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 text-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black z-10 lg:whitespace-nowrap">
        {title}
      </h1>
      <p className="text-1xl md:text-2xl lg:text-3xl xl:text-4xl mb-4  text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[40px] z-10">
        {subTitle}
      </p>
      <Image
        src={imgSrc}
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
  );
}
