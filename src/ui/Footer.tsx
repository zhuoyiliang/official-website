import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#001529] min-h-96 text-gray-300  grid grid-rows-[1fr_4rem] select-none">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-0 lg:px-24 max-md:px-12">
        <div className="h-full flex items-center">
          <div className="w-fit m-4">
            <h3 className="text-2xl  text-gray-300 my-4">网站导航</h3>
            <ul
              className="flex flex-col font-light text-gray-100  max-md:mx-auto gap-2 *:max-md:pl-4
                *:hover:text-blue-300 *:transition-all *:duration-300 *:cursor-pointer"
            >
              <li>
                <Link href="/common">县域医共体</Link>
              </li>
              <li>
                <Link href="/health">基层卫生健康管理</Link>
              </li>
              <li>
                <Link href="/internet">互联网医院</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-full flex items-center">
          <div className="w-fit  m-4">
            <h3 className="text-2xl  text-gray-300 my-4">联系方式</h3>
            <ul
              className="flex flex-col font-light text-gray-100  max-md:mx-auto gap-2 *:max-md:pl-4
                *:hover:text-blue-300 *:transition-all *:duration-300 *:cursor-pointer"
            >
              <li>
                <Link href="/common">邮箱：hr_mindimed@163.com</Link>
              </li>
              <li>
                <Link href="/health">座机：(020)80927180</Link>
              </li>
              <li>
                <Link href="/internet">手机：19866632086</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-full flex items-center">
          <div className="w-fit  m-4">
            <h3 className="text-2xl  text-gray-300 my-4">扫码关注公众号</h3>
            <Image
              src="/images/gzh.png"
              alt=""
              className="h-full object-contain max-md:pl-4"
              width={120}
              height={120}
            />
          </div>
        </div>

        <div className="h-full flex  items-center">
          <div className="w-fit  m-4">
            <h3 className="text-2xl  text-gray-300 my-4">扫码咨询</h3>
            <Image
                src="/images/smzx.png"
                alt=""
                className="h-full object-contain max-md:pl-4"
                width={120}
                height={120}
              />
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-gray-100 flex justify-center">
        Copyright ©2023 敏迪医疗 粤ICP备20024479号
      </div>
    </div>
  );
}
