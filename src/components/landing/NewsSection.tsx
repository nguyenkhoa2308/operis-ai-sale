"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const posts = [
  {
    id: 1,
    url: "https://bizfly.vn/techblog/chatbot-ban-hang.html",
    image: "/images/chatbot-ban-hang-1-17509288540553.jpg",
    alt: "Chatbot bán hàng là gì? Top 5 chatbot bán hàng tốt nhất hiện nay",
    date: "1/10/2025",
    title: "Chatbot bán hàng là gì? Top 5 chatbot bán hàng tốt nhất hiện nay",
  },
  {
    id: 2,
    url: "https://bizfly.vn/techblog/chatbot-marketing-la-gi.html",
    image: "/images/chatbot-marketing-la-gi-2-17506534278502.jpg",
    alt: "Chatbot Marketing là gì? Ứng dụng giúp doanh nghiệp tăng chuyển đổi",
    date: "4/10/2025",
    title:
      "Chatbot Marketing là gì? Ứng dụng giúp doanh nghiệp tăng chuyển đổi",
  },
  {
    id: 3,
    url: "https://bizfly.vn/techblog/chatbot-shopee-la-gi.html",
    image: "/images/cha16137301961256.jpg",
    alt: "Top phần mềm Chatbot Shopee miễn phí và trả phí tốt nhất hiện nay",
    date: "1/10/2025",
    title: "Top phần mềm Chatbot Shopee miễn phí và trả phí tốt nhất hiện nay",
  },
  {
    id: 4,
    url: "https://bizfly.vn/techblog/chatbot-facebook-la-gi.html",
    image: "/images/cha15843578510695.jpg",
    alt: "Chatbot Facebook là gì? Hướng dẫn tạo miễn phí hiệu quả",
    date: "2/10/2025",
    title: "Chatbot Facebook là gì? Hướng dẫn tạo miễn phí hiệu quả",
  },
  {
    id: 5,
    url: "https://bizfly.vn/techblog/nhung-xu-huong-bung-no-chatbot-voi-cac-doanh-nghiep-hien-nay.html",
    image: "/images/xu-huong-chatbot-ai-thumb-17599112631236.jpg",
    alt: "TOP 10 xu hướng Chatbot AI 2025: Những điều doanh nghiệp không thể bỏ lỡ",
    date: "1/10/2025",
    title:
      "TOP 10 xu hướng Chatbot AI 2025: Những điều doanh nghiệp không thể bỏ lỡ",
  },
  {
    id: 6,
    url: "https://bizfly.vn/techblog/uu-va-nhuoc-diem-cua-chatbot.html",
    image: "/images/uu-diem-cua-chatbot-01-16850692814148.png",
    alt: "Tổng hợp những ưu và nhược điểm của chatbot có thể bạn chưa biết",
    date: "5/9/2025",
    title: "Tổng hợp những ưu và nhược điểm của chatbot có thể bạn chưa biết",
  },
  {
    id: 7,
    url: "https://bizfly.vn/techblog/doanh-nghiep-nen-dau-tu-bao-nhieu-tien-cho-chatbot-de-dem-lai-hieu-qua.html",
    image: "/images/doa15843581113051.jpg",
    alt: "Doanh nghiệp nên đầu tư bao nhiêu tiền cho chatbot",
    date: "4/9/2025",
    title: "Doanh nghiệp nên đầu tư bao nhiêu tiền cho chatbot",
  },
  {
    id: 8,
    url: "https://bizfly.vn/techblog/bang-gia-chatbot-gia-re-hop-ly-pho-bien-nhat-hien-nay.html",
    image: "/images/ban15843582454903.jpg",
    alt: "Bảng giá Chatbot giá rẻ, hợp lý phổ biến nhất hiện nay",
    date: "2/9/2025",
    title: "Bảng giá Chatbot giá rẻ, hợp lý phổ biến nhất hiện nay",
  },
  {
    id: 9,
    url: "https://bizfly.vn/techblog/cach-de-chatbot-tuan-thu-chinh-sach-facebook.html",
    image: "/images/115849585286980.jpg",
    alt: "Hướng dẫn chi tiết cách để chatbot tuân thủ chính sách Facebook",
    date: "3/9/2025",
    title: "Hướng dẫn chi tiết cách để chatbot tuân thủ chính sách Facebook",
  },
  {
    id: 10,
    url: "https://bizfly.vn/techblog/chatbot-la-gi.html",
    image: "/images/chatbot-la-gi-16803221288331.jpg",
    alt: "Chatbot là gì? Tìm hiểu từ A đến Z về Chatbot trong kinh doanh 2025",
    date: "5/8/2025",
    title:
      "Chatbot là gì? Tìm hiểu từ A đến Z về Chatbot trong kinh doanh 2025",
  },
];

export default function NewsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  // Calculate dot count based on slidesPerView
  const updateDots = (swiper: SwiperType) => {
    const perView =
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : 1;

    // Number of "pages": posts.length - perView + 1
    const pages = Math.max(posts.length - perView + 1, 1);
    setDotCount(pages);

    // Current dot index
    const current = Math.min(swiper.activeIndex, pages - 1);
    setActiveDot(current);
  };

  return (
    <section className="w-full bg-transparent bg-[url('/images/bg-projrecent.png')] bg-no-repeat bg-top bg-center bg-[length:100%_auto] py-20 relative z-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] leading-[140%] text-center mb-2">
            Bài viết nổi bật
          </h2>
          <div className="font-[500] leading-[140%] text-[#333] text-center my-0 mx-auto">
            Đón đọc những bài viết hay nhất về Chat AI từ anh Lê Tiến Hùng -
            Giám đốc sản phẩm tại Operis
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateDots(swiper);
          }}
          onSlideChange={(swiper) => {
            updateDots(swiper);
          }}
          className="pb-4"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link
                href={post.url}
                target="_blank"
                className="block overflow-hidden p-6 bg-white w-full h-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 rounded-xl cursor-pointer transition-all duration-300 mb-6"
              >
                <span className="w-full block relative pt-[65.18%] mb-6 rounded-xs overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-center absolute top-0 left-0"
                    src={post.image}
                    alt={post.alt}
                  />
                </span>
                <span className="block">
                  <span className="block mb-3 font-bold leading-[140%] text-[#878A99]">
                    {post.date}
                  </span>
                  <span className="block mb-8 line-clamp-3 overflow-hidden font-semibold text-[18px] leading-[160%] text-[#333333] h-[82px]">
                    {post.title}
                  </span>
                  <span className="flex items-center font-bold leading-[150%] text-[#09A286] hover:underline group">
                    Xem thêm{" "}
                    <ArrowUpRight
                      className="w-5 h-5 ml-2 group-hover:-translate-y-1/6 group-hover:translate-x-1/6 transition-all duration-300"
                      strokeWidth="3"
                    />
                  </span>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: dotCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDot === index
                  ? "bg-[#3990F8] w-10"
                  : "bg-gray-300 w-2.5 hover:bg-gray-400 cursor-pointer hover:scale-110"
              }`}
              onClick={() => {
                setActiveDot(index);
                swiperRef.current?.slideTo(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
