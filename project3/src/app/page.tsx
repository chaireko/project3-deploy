import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from "./components/navbar";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sharetea - Premium Tea Shop</title>
        <meta name="description" content="Sharetea - High quality, authentic tea drinks with fresh ingredients" />
      </Head>

        <NavBar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 bg-[url('/grid.svg')] bg-center bg-[length:900px_900px] bg-no-repeat">
        <Image 
          src="/logo.svg" 
          alt="Sharetea Logo" 
          width={200} 
          height={200} 
          className="mb-6"
        />
        <h1 className="font-spaceGrotesk text-2xl font-bold mb-4">
          Sharetea is a premium tea shop that offers high quality, authentic tea drinks with fresh ingredients.
        </h1>

        <Link 
          href="/menu" 
          className="text-white px-6 py-3 rounded-full hover:bg-gray-400 transition duration-300 bg-[#FF6464]"
        >
          Our Tea
        </Link>
      </main>
    </div>
  );
};

export default HomePage;