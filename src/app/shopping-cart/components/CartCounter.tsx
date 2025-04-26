"use client"
import { useState } from "react"
import { IoArrowUp, IoArrowDown } from "react-icons/io5"

interface Props {
    value?: number
}


export const CartCounter = ({ value = 0 }: Props) => {

    const [count, setCount] = useState(value)

    return (
        <>
            <span className='text-9xl mb-5'>{count}</span>

            <div className='flex'>

                <button
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
                    onClick={() => setCount(count + 1)}
                >
                    <IoArrowUp />
                </button>

                <button
                    onClick={() => setCount(count - 1)}
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
                >
                    <IoArrowDown />
                </button>

            </div></>
    )
}

