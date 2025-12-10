"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

const industries = [
  {
    id: "banking",
    name: "Ngân hàng",
    image: "/images/img-allaspects1.png",
  },
  {
    id: "education",
    name: "Giáo dục",
    image: "/images/img-allaspects2.png",
  },
  {
    id: "tourism",
    name: "Du lịch",
    image: "/images/img-allaspects3.png",
  },
  {
    id: "ecommerce",
    name: "Thương mại điện tử",
    image: "/images/img-allaspects4.png",
  },
  {
    id: "real-estate",
    name: "Bất động sản",
    image: "/images/img-allaspects5.png",
  },
  {
    id: "fnb",
    name: "F&B",
    image: "/images/img-allaspects6.png",
  },
  {
    id: "healthcare",
    name: "Sức khoẻ",
    image: "/images/img-allaspects7.png",
  },
];

export default function IndustriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pt-12 w-full bg-white bg-[url('/images/bg-allaspects.png')] bg-no-repeat bg-bottom bg-center bg-[length:100%_auto]">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] mb-4 leading-[140%] text-center">
            Ứng dụng của OperisChatAI trong một số lĩnh vực tiêu biểu
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {industries.map((item, index) => (
            <button
              key={item.id}
              className={`px-[22px] py-[10px] text-center rounded-full text-[16px] leading-[140%] text-[#511D9A] border border-[rgba(81,29,154,0.5)] transition ${
                activeTab === index
                  ? "bg-[#511D9A] text-white border-[#6f42c1] font-bold"
                  : "bg-white hover:bg-[#511D9A] hover:text-white font-semibold"
              }`}
              onClick={() => {
                swiperRef.current?.slideTo(index);
                setActiveTab(index);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
          className="rounded-xl"
        >
          {industries.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
