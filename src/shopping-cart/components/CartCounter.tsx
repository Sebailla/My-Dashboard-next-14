"use client"
import { useAppSelector } from "@/store"
import { decrement, increment, initCounterState } from "@/store/counter/counterSlice"
import { useEffect } from "react"

import { IoArrowUp, IoArrowDown } from "react-icons/io5"
import { useDispatch } from "react-redux"
import Counter from '../../app/dashboard/counter/page';

interface Props {
    value?: number
}

const getApiCounter = async ()=>{
    const data = await fetch('/api/counter').then(res => res.json())
    return data
}

export const CartCounter = ({ value = 0 }: Props) => {

    const count = useAppSelector(state => state.counter.counter)
    const dispatch = useDispatch()

    /* useEffect(() => {
        dispatch(initCounterState(value))
    }, [dispatch, value]) */

    useEffect(() => {
        getApiCounter().then(({count}) => {
            dispatch(initCounterState(count))
        })
    }, [dispatch])

    return (
        <>
            <span className='text-9xl mb-5'>{count}</span>

            <div className='flex'>

                <button
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
                    onClick={() => dispatch(increment())}
                >
                    <IoArrowUp />
                </button>

                <button
                    onClick={() => dispatch(decrement()) }
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
                >
                    <IoArrowDown />
                </button>

            </div></>
    )
}

