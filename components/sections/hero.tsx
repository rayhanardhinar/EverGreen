"use client";

import Image from "next/image";
import Navbar from "../layouts/navbar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { SelectDemo } from "../ui/selectDemo";
import { Input } from "../ui/input";

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col relative w-full min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1728722104881-773da8f4b7ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero-image"
        className="object-cover"
        fill
        priority
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-5" />

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="absolute flex flex-col bottom-0 pb-10 z-20 px-12">
        <div className="flex text-secondary pr-2 gap-2 mt-4 z-20">
          <Button variant="secondary">House</Button>
          <Button variant="secondary">Apartment</Button>
          <Button variant="secondary">Residential</Button>
        </div>
        <div className="flex py-6">
          <div className="text-white w-7/10">
            <p className="text-8xl font-light">
              Build Your Future, One Property at a Time.
            </p>
          </div>
          <div className="flex flex-col justify-end pb-2 text-white w-3/10 text-lg font-light">
            <p>
              Own Your World. One Property at a Time.Own Your World. One
              Property at a Time.Own Your World. One Property at a Time.Own Your
              World. One Property at a Time. Own Your World. One Property at a
              Time.
            </p>
          </div>
        </div>

        {/* Card */}

        <Card className="flex flex-col gap-8 px-8">
          <div>
            <p className="font-semibold text-3xl">Find the best place</p>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col flex-1 gap-2">
              <p className="font-semibold">Looking for</p>
              <Input placeholder="Enter type" />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <p className="font-semibold">Price</p>
              <SelectDemo placeholder="Price" />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <p className="font-semibold">Location</p>
              <SelectDemo placeholder="Location" />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <p className="font-semibold">Number of rooms</p>
              <SelectDemo placeholder="2 Bed rooms" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>Filter:</p>
            </div>
            <div className="flex gap-2 flex-1 pl-4">
              <Button variant="secondary">City</Button>
              <Button variant="outline">House</Button>
              <Button variant="outline">Residential</Button>
              <Button variant="outline">Apartment</Button>
            </div>
            <div>
              <Button className="bg-primary py-6">Search Properties</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
