import Image from "next/image";
import Navbar from "../layouts/navbar";

export default function HeroSection() {
  return (
    <section className="flex flex-colrelative w-full min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1728722104881-773da8f4b7ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero-image"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="absolute inset-0 z-10 flex flex-1 items-center justify-center text-white text-center px-2">
        <div>
          <h1 className="text-5xl font-bold">Temukan Properti Impianmu</h1>
          <p className="mt-4 text-lg">
            Jelajahi rumah dan apartemen terbaik bersama kami
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
            Lihat Properti
          </button>
        </div>
      </div>
    </section>
  );
}
