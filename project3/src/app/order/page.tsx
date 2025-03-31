import NavBar from "../components/navbar";
import Image from "next/image";
import MilkTea from "../../../public/bobatea.png";
import CheckOut from "../../../public/checkout.png";
export default function CashierHomepage() {

    return (
        <div className="flex flex-col items-center justify-start h-screen">
            <ul className="flex flex-row space-x-40 items-center justify-center bg-gray-100 w-5/6 rounded-lg shadow-lg mx-auto text-xl text-center h-15 py-4 mb-8">
                <a href="">Milk Tea</a>
                <a href="">Fruit Tea</a>
                <a href="">Fresh Milk</a>
                <a href="">Ice Blended</a>
                <a href="">Smoothies</a>
            </ul>
            <div className="flex space-x-8 items-center">
                <div className="outline-5 w-75 h-100 rounded-lg shadow-lg pb-4">
                    <Image src={MilkTea} alt="Milk Tea" width={175} height={150} className="rounded-lg shadow-lg" />
                    <h1 className="text-2xl font-bold text-left mt-4 ml-3">Milk Tea</h1>
                    <h2 className="ml-3 text-red-400">Price: $5.00</h2>
                    <div className="flex justify-center pt-4 h-10">
                        <button className="text-white bg-black rounded-lg px-4 w-5/6">Customize</button>
                    </div>
                </div>
                <div className="outline-5 w-75 h-100 rounded-lg shadow-lg pb-4">
                    <Image src={MilkTea} alt="Milk Tea" width={175} height={150} className="rounded-lg shadow-lg" />
                    <h1 className="text-2xl font-bold text-left mt-4 ml-3">Milk Tea</h1>
                    <h2 className="ml-3 text-red-400">Price: $5.00</h2>
                    <div className="flex justify-center pt-4 h-10">
                        <button className="text-white bg-black rounded-lg px-4 w-5/6">Customize</button>
                    </div>
                </div>
                <div className="outline-5 w-75 h-100 rounded-lg shadow-lg pb-4">
                    <Image src={MilkTea} alt="Milk Tea" width={175} height={150} className="rounded-lg shadow-lg" />
                    <h1 className="text-2xl font-bold text-left mt-4 ml-3">Milk Tea</h1>
                    <h2 className="ml-3 text-red-400">Price: $5.00</h2>
                    <div className="flex justify-center pt-4 h-10">
                        <button className="text-white bg-black rounded-lg px-4 w-5/6">Customize</button>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end pr-8 mt-auto mb-8">
                <Image src={CheckOut} alt="Check Out" width={175} height={150} className="cursor-pointer hover:scale-105 transition-transform" />
            </div>
        </div>
    )

}