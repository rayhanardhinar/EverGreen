import Image from "next/image";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <div id="about" className="min-h-screen px-16">
      <div className="flex justify-between pt-26 items-center">
        <div className="text-7xl font-lightbold">
          <p>Your primary home might</p>
          <p>begin to feel left out</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero-image"
              className="object-cover rounded-full"
              width={160}
              height={40}
            />
            <MdOutlinePlayCircleFilled className="absolute z-5 text-5xl text-white" />

            <div className="absolute inset-0 bg-black/20 rounded-full" />
          </div>
          <div className="text-xl text-gray-600">
            <p>Each listing offers unique features</p>
            <p>exceptional quality, and prime</p>
            <p>locations</p>
          </div>
        </div>
      </div>
      <div className="flex py-12 justify-center items-center">
        <div className="flex w-1/2 justify-center">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero-image"
            className="object-cover rounded-4xl text-center"
            width={550}
            height={380}
          />
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center">
          <div className="flex gap-4">
            <div className=" flex w-1/2 flex-col gap-4 bg-gray-100 rounded-4xl justify-center items-center">
              <h1>Big things can happen in small spaces.</h1>
              <p>
                With thoughtful design and smart organitzation, you can maximize
                every inch, making room for creativity
              </p>
              <Button variant="secondary">Details</Button>
            </div>
            <div className=" flex w-1/2 flex-col gap-4 bg-gray-100 rounded-4xl justify-center items-center">
              <h1>Big things can happen in small spaces.</h1>
              <p>
                With thoughtful design and smart organitzation, you can maximize
                every inch, making room for creativity
              </p>
              <Button variant="secondary">Details</Button>
            </div>
          </div>
          <div>kata kata</div>
        </div>
      </div>
    </div>
  );
}
