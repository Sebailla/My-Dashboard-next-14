'use client'

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"


export const WidguetsGrid = () => {

    const inCart = useAppSelector(state => state.counter.counter)

    return (

        <section className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                title={`${inCart}`}
                subTitle={'Productos Agregados'}
                label={'Shopping Cart'}
                icon={<IoCartOutline size={70} className="text-cyan-700" />}
                href={'/dashboard/counter'}
            />
        </section>

    )
}

