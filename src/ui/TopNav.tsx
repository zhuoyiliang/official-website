import Image from "next/image";
import Link from "next/link";


const navItems = [
    {
        name: "首页",
        href: "/",
    },
    {
        name: "县域医共体",
        href: "/common",
    },
    {
        name: "基层卫生健康管理",
        href: "/health",
    },
    {
        name: "互联网医院",
        href: "/internet",
    },
    {
        name: "关于我们",
        href: "/about",
    },
    {
        name: "加入我们",
        href: "/join",
    },
]

export default function TopNav() {
    return (
        <div className="h-20 bg-white shadow-md text-[#717275]">
            <div className="container mx-auto h-full grid grid-cols-2  px-24">
                <div className="text-2xl font-bold h-full flex items-center">
                    <img src="/images/mindi-logo.png" alt="" className="w-[160px] h-[36px]"/>
                </div>
                <nav>
                    <ul className="h-full flex flex-row-reverse items-center gap-4">
                        {navItems.toReversed().map((item) => (
                            <li key={item.name} className="h-full flex justify-center items-center hover:text-[#5ABFAA] duration-300">
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
};