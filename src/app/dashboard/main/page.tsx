import { WidguetsGrid } from "@/components"

const MainPage = () => {
    return (
        <div className="text-black p-2">
            <h1 className="text-5xl text-gray-900 p-5 text-center">
                Dashboard
            </h1>
            <p className="text-2xl text-gray-700 p-5 text-center">
                Información General
            </p>
            <WidguetsGrid/>
        </div>
    )
}

export default MainPage