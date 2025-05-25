"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  {
    name: "首页",
    href: "/home",
  },
  {
    name: "区/县域医共体",
    href: "/common",
  },
  {
    name: "智能公卫升级",
    href: "/health",
  },
  {
    name: "互联网医院",
    href: "/internet",
  },
  // {
  //   name: "影像信息共享",
  //   href: "/",
  // },
  // {
  //   name: "第三方社会药房",
  //   href: "/join",
  // },
  {
    name: "关于我们",
    href: "/about",
  },
  {
    name: "加入我们",
    href: "/join",
  },
];

export default function TopNav() {
  const currentPath = usePathname();

  return (
    <div className="h-20 bg-white shadow-md text-[#717275] select-none">
      <div className="w-full container mx-auto h-full flex justify-between lg:px-16 xl:px-32">
        <div className="h-full flex items-center px-2">
          <Image
            src="/images/mindi-logo.png"
            alt=""
            className="w-[160px] h-[36px]"
            width={160}
            height={36}
          />
        </div>
        <nav className=" hidden md:block">
          <ul className="h-full flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="h-full">
                <li
                  className={`h-full flex justify-center items-center hover:text-[#5ABFAA] duration-300 ${
                    currentPath === item.href ? "text-[#5ABFAA]" : ""
                  }`}
                >
                  <Button1 status={currentPath === item.href}>
                    {item.name}
                  </Button1>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const Button1 = ({
  children,
  status,
}: {
  children: React.ReactNode;
  status: boolean;
}) => {
  return (
    <button className="h-full text-center relative  transition-all duration-300 ease-in group cursor-pointer">
      {children}
      <span
        className={clsx(
          "opacity-0 absolute top-[98%] bottom-0 bg-[#3D90D7]  transition-all duration-300 ease-in group-hover:left-0 group-hover:right-0 group-hover:opacity-100",
          {
            "left-0 right-0 opacity-100": status === true,
            "left-1/2 right-1/2 opacity-0": status === false,
          }
        )}
      ></span>
    </button>
  );
};
