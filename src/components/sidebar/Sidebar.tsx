import Image from 'next/image'
import React from 'react'

import { IoBrowsersOutline, IoCalculatorOutline, IoFootballOutline, IoHeartOutline } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';


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
        icon: <IoFootballOutline size={30} />,
        title: 'Pokemons',
        subTitle: 'Generación Statica'
    },
    {
        path: '/dashboard/favorite',
        icon: <IoHeartOutline size={30} />,
        title: 'Favoritos',
        subTitle: 'Estado Global'
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
