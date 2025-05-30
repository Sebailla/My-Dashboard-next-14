
import { Sidebar } from '@/components/sidebar/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <section className=" overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex">

                <Sidebar />

                <div className="p-4 text-slate-900">
                    <div className="h-screen bg-white flex items-center">
                        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                            <div className="w-full lg:w-1/2 mx-8">
                                <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
                                <p className="text-2xl md:text-3xl font-light leading-normal mb-8">Sorry we could not find the page you are looking for</p>

                                <Link href="/dashboard/counter" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</Link>
                            </div>
                            <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                                <Image
                                    src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
                                    className=""
                                    width={400}
                                    height={400}
                                    alt="Page not found"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



