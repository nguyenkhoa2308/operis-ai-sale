"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

interface AssistantSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonTitle?: string;
  slides: {
    id: number;
    image: string;
    alt: string;
  }[];
}

export default function AssistantSection({
  title,
  subtitle,
  description,
  buttonTitle = "Dùng thử ngay",
  slides,
}: AssistantSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  // Tính số dot theo slidesPerView hiện tại
  const updateDots = (swiper: SwiperType) => {
    const perView =
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : 1;

    // Số "trang" giống Swiper:  slides.length - perView + 1
    const pages = Math.max(slides.length - perView + 1, 1);

    setDotCount(pages);

    // Index dot hiện tại (dùng realIndex khi loop=true)
    const current = Math.min(swiper.realIndex, pages - 1);
    setActiveDot(current);
  };

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] mb-4 leading-[140%] text-center">
            {title}
            <br />
            <span>{subtitle}</span>
          </h2>
          <p className="max-w-4xl mx-auto mb-8 text-gray-600 text-base md:text-lg leading-[130%]">
            {description}
          </p>
        </div>

        {/* Slider cards */}
        <div className="">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            grabCursor={true}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateDots(swiper);
            }}
            onSlideChange={(swiper) => {
              updateDots(swiper);
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            className="mb-8"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="select-none cursor-grab">
                  <Image
                    width={574}
                    height={523}
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CTA Button */}
          <div className="box--btn text-center">
            <Link
              href="#demo"
              className="bg-[radial-gradient(50.73%_100%_at_50%_100%,_#A068F4_0%,_#6631F3_100%)] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] text-white rounded-lg border border-1 border-[#511D9A] text-center text-[#511D9A] py-4 px-6 font-semibold text-lg line-height[130%] inline-block bg-white"
            >
              {buttonTitle}
            </Link>
          </div>

          {/* Pagination dots */}
          <div className="box--pagination flex justify-center gap-2 mt-8">
            {Array.from({ length: dotCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeDot === index
                    ? "bg-[#3990F8] w-10"
                    : "bg-gray-300 w-2.5 hover:bg-gray-400 cursor-pointer hover:scale-130"
                }`}
                onClick={() => {
                  setActiveDot(index);
                  swiperRef.current?.slideTo(index); // nhảy đến "trang" tương ứng
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
