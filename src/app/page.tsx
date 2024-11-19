"use client";
import Image from "next/image";
import Link from "next/link";
import RotatingContent from "@/components/RotatingContent";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  content,
  contentPicture2,
  contentVideo,
  picture2,
  pictures,
  videos,
} from "../../Data/Data";
import LazyLoad from "@/components/LazyLoadContent";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[870px]">
        <RotatingContent
          items={videos}
          render={(currentVideo, fadeOut) => (
            <div
              className={`transition-opacity duration-1000 z-10 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            >
              <video
                key={currentVideo} // Reset video
                src={currentVideo}
                autoPlay
                muted
                className="w-full h-[870px] object-cover top-0 left-0"
              >
                <source src={currentVideo} type="video/mp4" />
              </video>
            </div>
          )}
        />
        <div className="absolute inset-0 z-20 flex justify-center items-center text-center mt-80 flex-col gap-10">
          <RotatingContent
            items={contentVideo}
            render={(currentContentVideo) => (
              <>
                <p className="text-lg text-white uppercase font-semibold tracking-wide">
                  {currentContentVideo.type}
                </p>
                <p className="text-4xl text-white uppercase font-bold tracking-widest">
                  {currentContentVideo.title}
                </p>
                <Link
                  href={currentContentVideo.link}
                  className="text-lg uppercase text-white/80 font-semibold flex items-center gap-4"
                >
                  <div>{currentContentVideo.titleLink}</div>
                  <div className="border rounded-full hover:border-red-500 group-[hover]:bg-rotate-180">
                    <MdKeyboardArrowRight size={40} />
                  </div>
                </Link>
              </>
            )}
          />
        </div>
      </div>
      <LazyLoad>
        <div className="z-0 flex justify-around items-center inset-0 px-52 mt-10">
          <div className="w-[40rem] p-6">
            <RotatingContent
              items={content}
              render={(currentContent, fadeOut) => (
                <div className={`transition-all duration-1000 ease-in-out ${fadeOut ? "opacity-0 translate-y-10" : 'opacity-100 translate-y-0'}`}>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4 uppercase w-full">
                    {currentContent.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed w-[25rem]">
                    {currentContent.content}
                  </p>
                  <Link
                    href={currentContent.link}
                    className="flex items-center gap-1 w-[10rem] group:"
                  >
                    <div className="text-xl">Read More</div>
                    <div className="border rounded-full group-hover:border-red-500 group-[hover]:bg-rotate-180">
                      <MdKeyboardArrowRight size={40} />
                    </div>
                  </Link>
                </div>
              )}
            />
          </div>
          <RotatingContent
            items={pictures}
            render={(currentPicture, fadeOut) => (
              <div className="relative w-600 h-600 overflow-hidden">
                <Image
                  src={currentPicture}
                  alt="picture"
                  className={`transition-all duration-1000 ease-in-out rounded-lg shadow-lg ${
                    fadeOut
                      ? "opacity-0 translate-x-96"
                      : "opacity-100 translate-x-0"
                  }`}
                  width={600}
                  height={600}
                />
              </div>
            )}
          />
        </div>
      </LazyLoad>
      <LazyLoad>
        <div className=" grid grid-cols-2 z-30 mt-10">
          {picture2.map((pic, index) => (
            <div
              key={index}
              className="relative w-full h-[500px] hover:scale-105 transform transition-transform duration-1000 ease-in-out"
            >
              <Image
                src={pic}
                alt="picture2"
                width={900}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center  text-center bg-black/30 ">
                {contentPicture2[index] && (
                  <div className="mt-72 ">
                    <p className="font-semibold text-white text-xl mb-3">
                      {contentPicture2[index].type}
                    </p>
                    <p className="text-4xl text-white font-bold uppercase tracking-widest mb-3">
                      {contentPicture2[index].title}
                    </p>
                    <Link
                      href={contentPicture2[index].link}
                      className="flex items-center gap-1 w-full text-center justify-center"
                    >
                      <p className="text-md text-white font-semibold text-lg uppercase tracking-wide">
                        {contentPicture2[index].titleLink}
                      </p>
                      <div className="border rounded-full hover:border-red-500 ">
                        <MdKeyboardArrowRight
                          size={40}
                          className="text-white"
                        />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </LazyLoad>
      <div className="bg-neutral-800 flex flex-col justify-center items-center text-center h-[250px] p-4">
        <p className="font-semibold text-white text-2xl mb-3">Newsletter</p>
        <p className="text-white mb-4">
          Stay up to date with the latest news from the world of Ferrari.
        </p>
        <button className="bg-red-500 text-white w-[200px] py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out uppercase tracking-wider  ">
          Subscribe
        </button>
      </div>
    </div>
  );
}
