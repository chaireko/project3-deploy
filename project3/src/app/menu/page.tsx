import Image from "next/image";
import NavBar from "../components/navbar";

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className='flex-grow flex flex-col items-center justify-center text-center p-4'>
          <Image
              src="/menu.png"
              alt="Menu"
              width={900}
              height={531}
          />
        </div>
      
    </div>
  );
}
