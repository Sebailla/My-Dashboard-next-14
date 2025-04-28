import Image from 'next/image'
import React from 'react'
import { SidebarMenuItem } from './SidebarMenuItem';
import { IoBrowsersOutline, IoCalculatorOutline, IoFootball} from 'react-icons/io5';


const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculatorOutline size={30} />,
        title: 'Counter',
        subTitle: 'Contador de Clientes'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={30} />,
        title: 'Pokemons',
        subTitle: 'Generación Statica'
    },
]

export const Sidebar = () => {


    return (
        <div id="menu" style={{ width: '400px' }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500 mb-4">Welcome</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-12 h-12"
                            src="/IMG_0599.jpg"
                            alt="profile-image"
                            width={200}
                            height={200} />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Sebastián Illa
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {
                    menuItems.map((item) => (
                        <SidebarMenuItem
                            key={item.title}
                            path={item.path}
                            icon={item.icon}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    ))
                }
            </div>
        </div>
    )
}
