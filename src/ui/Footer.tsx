import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#001529] text-gray-300 flex flex-col ">
      <div className="grow">
        <div className="container lg:px-56 my-12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 select-none">
          <div className="flex flex-col justify-between">
            <h3 className="text-2xl my-12 text-gray-300">网站导航</h3>
            <ul className="flex flex-col gap-4 font-light text-gray-100 *:hover:text-blue-300 *:transition-all  *:duration-300  *:cursor-pointer">
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
          <div className="flex flex-col justify-between">
            <h3 className="text-2xl my-12 text-gray-300">联系方式</h3>
            <ul className="flex flex-col gap-4 font-light text-gray-100 *:hover:text-blue-300 *:transition-all  *:duration-300  *:cursor-pointer">
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

          <div className="flex flex-col justify-between">
            <h3 className="shrink-0 text-2xl my-12 text-gray-300">
              扫码关注公众号
            </h3>
            <div className="grow ">
              <Image
                src="/images/gzh.png"
                alt=""
                className="h-full object-contain"
                width={120} height={120}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h3 className="shrink-0 text-2xl my-12 text-gray-300">扫码咨询</h3>
            <div className="grow ">
              <Image
                src="/images/smzx.png"
                alt=""
                className="h-full object-contain"
                width={120} height={120}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="shrink-0 py-6 border-t border-gray-100 flex justify-center">
        Copyright ©2023 敏迪医疗 粤ICP备20024479号
      </div>
    </div>
  );
}
