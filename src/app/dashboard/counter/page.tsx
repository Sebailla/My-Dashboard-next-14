

import { CartCounter } from "@/shopping-cart"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Esta es la pagina de shopping Carte del sitio XX, esta pagina fue creadapor Sebastian Illa',
}


const Counter = () => {

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>

            <span className='text-xl mb-5'>Productos en el carrito</span>

            <CartCounter value={10}/>

        </div>

    )
}

export default Counter
