'use client'
import Link from 'next/link';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-br from-black-50 to-black-100 text-gray-900`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">🏫 Welcome to The Aim  page </h1>
          <p className="text-lg md:text-xl text-gray-700">
            A platfrom where you can find the website templates for purposes like school management, student information systems, and educational portals. Explore our collection of templates designed to help you create a professional and user-friendly website for your educational institution.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/">
            <div className="cursor-pointer flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md hover:bg-blue-50 transition">
              <div className="text-blue-600"> {/* <FaUserGraduate size={30} /> */}</div>
              <div className="text-lg font-medium">Home </div>
            </div>
            </Link>
            <Link href="/aims">
            <div className="cursor-pointer flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md hover:bg-blue-50 transition">
              <div className="text-blue-600"> {/* <FaUserGraduate size={30} /> */}</div>
              <div className="text-lg font-medium">Aim </div>
            </div>
            </Link>
            <Link href="/goals">
            <div className="cursor-pointer flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md hover:bg-blue-50 transition">
              <div className="text-blue-600"> {/* <FaUserGraduate size={30} /> */}</div>
              <div className="text-lg font-medium">Goals</div>
            </div>
            </Link>
            <Link href="/teams">
            <div className="cursor-pointer flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md hover:bg-blue-50 transition">
              <div className="text-blue-600"> {/* <FaUserGraduate size={30} /> */}</div>
              <div className="text-lg font-medium">Teams</div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
     


