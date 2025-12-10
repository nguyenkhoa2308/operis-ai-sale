"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

export const usecases = [
  {
    id: 1,
    name: "Bất động sản",
    problems: [
      "Nhân viên sale không đủ thời gian tiếp cận hàng nghìn khách tiềm năng trên Zalo",
      "Khách hỏi giá, vị trí, pháp lý nhưng phản hồi chậm, mất cơ hội chốt deal",
      "Không có hệ thống theo dõi và remarketing khách đã quan tâm dự án",
    ],
    solutions: [
      "AI tự động quét nhóm Zalo bất động sản, kết bạn và gửi tin giới thiệu dự án đến khách tiềm năng",
      "Chatbot tư vấn 24/7 về giá, tiến độ, pháp lý, hỗ trợ đặt lịch tham quan ngay trên Zalo",
      "Ghi nhớ lịch sử tương tác, tự động nhắc follow-up và gửi ưu đãi cho khách quan tâm",
    ],
    iconProblem: "/images/ic-ic1.png",
    iconSolution: "/images/ic-ic2.png",
  },

  {
    id: 2,
    name: "Thời trang & Mỹ phẩm",
    problems: [
      "Inbox Zalo quá tải vào giờ cao điểm, bỏ lỡ nhiều đơn hàng tiềm năng",
      "Khách hỏi size, màu, giá, khuyến mãi lặp đi lặp lại tốn thời gian",
      "Không có cách tiếp cận tệp khách hàng mới trên Zalo một cách tự động",
    ],
    solutions: [
      "Chatbot tự động trả lời hỏi đáp sản phẩm, báo giá, check hàng 24/7 trên Zalo",
      "AI hiểu ngữ cảnh, gợi ý sản phẩm phù hợp và hướng dẫn đặt hàng ngay trong chat",
      "Quét nhóm Zalo thời trang, kết bạn tự động và gửi catalog sản phẩm mới đến khách tiềm năng",
    ],
    iconProblem: "/images/ic-ic1.png",
    iconSolution: "/images/ic-ic2.png",
  },

  {
    id: 3,
    name: "Giáo dục & Đào tạo",
    problems: [
      "Mùa tuyển sinh inbox Zalo nổ tung, không đủ nhân sự trả lời tư vấn",
      "Khách hỏi học phí, lịch học, giảng viên nhưng tư vấn viên bận không kịp phản hồi",
      "Khó tiếp cận phụ huynh và học viên tiềm năng trong các nhóm Zalo giáo dục",
    ],
    solutions: [
      "AI tự động quét và kết bạn với phụ huynh/học viên từ nhóm Zalo, gửi tin giới thiệu khóa học",
      "Chatbot tư vấn khóa học 24/7: học phí, lịch học, lộ trình, đăng ký ngay trên Zalo",
      "Remarketing tự động: nhắc lịch khai giảng, gửi ưu đãi đặc biệt cho khách quan tâm",
    ],
    iconProblem: "/images/ic-ic1.png",
    iconSolution: "/images/ic-ic2.png",
  },

  {
    id: 4,
    name: "Bảo hiểm & Tài chính",
    problems: [
      "Đội sale không đủ thời gian cold-call và tiếp cận khách hàng tiềm năng mới",
      "Khách hỏi sản phẩm bảo hiểm nhưng quy trình tư vấn dài, dễ mất khách",
      "Không có hệ thống chăm sóc và remarketing khách hàng cũ hiệu quả",
    ],
    solutions: [
      "AI quét nhóm Zalo, kết bạn tự động và gửi tin giới thiệu gói bảo hiểm phù hợp",
      "Chatbot tư vấn 24/7 về quyền lợi, phí bảo hiểm, hỗ trợ đăng ký ngay trên Zalo",
      "Tự động nhắc ngày đáo hạn, gửi ưu đãi gia hạn và cross-sell sản phẩm mới",
    ],
    iconProblem: "/images/ic-ic1.png",
    iconSolution: "/images/ic-ic2.png",
  },

  {
    id: 5,
    name: "Spa & Làm đẹp",
    problems: [
      "Nhân viên bận phục vụ khách, không kịp trả lời tin nhắn đặt lịch trên Zalo",
      "Khách hỏi giá dịch vụ, combo, khuyến mãi lặp đi lặp lại hàng ngày",
      "Không có cách tiếp cận khách hàng mới trong khu vực một cách tự động",
    ],
    solutions: [
      "AI quét nhóm Zalo làm đẹp theo khu vực, kết bạn và gửi ưu đãi dịch vụ spa",
      "Chatbot đặt lịch tự động 24/7, báo giá dịch vụ, gợi ý combo phù hợp",
      "Remarketing: nhắc lịch hẹn, gửi voucher sinh nhật, ưu đãi khách hàng thân thiết",
    ],
    iconProblem: "/images/ic-ic1.png",
    iconSolution: "/images/ic-ic2.png",
  },
];

export default function IndustriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] mb-4 leading-[140%] text-center">
            Chatbot AI Sale Zalo cho từng ngành nghề
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {usecases.map((item, index) => (
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
          {usecases.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* VẤN ĐỀ */}
                <div className="pt-5 relative flex-1 w-full text-center">
                  <div className="absolute top-0 left-0 right-0 m-auto p-[10px] w-[calc(100%-40px)] text-white text-center max-w-[310px] text-xl font-bold rounded-b-[10px] bg-[linear-gradient(90deg,#632AE8_0%,#5A8CFF_100%)] before:content-[''] before:block before:w-[12px] before:h-[21px] before:absolute before:top-0 before:-left-[12px] before:bg-[url(/images/bg-bo2.png)] before:bg-center before:bg-no-repeat before:bg-transparent after:content-[''] after:block after:w-[12px] after:h-[21px] after:absolute after:top-0 after:-right-[12px] after:bg-[url(/images/bg-bo1.png)] after:bg-center after:bg-no-repeat after:bg-transparent">
                    <h3 className="font-bold text-lg mb-3">Vấn đề</h3>
                  </div>
                  <div className="w-full h-full rounded-[24px] border-[1px] border-dashed border-[#5A8CFF] p-8 pt-12">
                    {item.problems.map((p, i) => (
                      <div
                        key={i}
                        className="flex w-full gap-4 items-start mb-4"
                      >
                        <Image
                          width={100}
                          height={100}
                          alt="icon mũi tên phải"
                          src={item.iconProblem}
                          className="w-5 h-5"
                        />
                        <div className="flex-1 w-full text-[#333] leading-[130%] text-left">
                          {p}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GIẢI PHÁP */}
                <div className="pt-5 relative flex-1 w-full text-center">
                  <div className="absolute top-0 left-0 right-0 m-auto p-[10px] w-[calc(100%-40px)] text-white text-center max-w-[310px] text-xl font-bold rounded-b-[10px] bg-[linear-gradient(90deg,#632AE8_0%,#5A8CFF_100%)] before:content-[''] before:block before:w-[12px] before:h-[21px] before:absolute before:top-0 before:-left-[12px] before:bg-[url(/images/bg-bo2.png)] before:bg-center before:bg-no-repeat before:bg-transparent after:content-[''] after:block after:w-[12px] after:h-[21px] after:absolute after:top-0 after:-right-[12px] after:bg-[url(/images/bg-bo1.png)] after:bg-center after:bg-no-repeat after:bg-transparent">
                    <h3 className="font-bold text-lg mb-3">
                      Cách OperisChatAI giải quyết
                    </h3>
                  </div>
                  <div className="w-full h-full rounded-[24px] border-[1px] border-dashed border-[#5A8CFF] p-8 pt-12">
                    {" "}
                    {item.solutions.map((s, i) => (
                      <div key={i} className="flex gap-3 mb-3">
                        <Image
                          width={100}
                          height={100}
                          alt="Xác nhận"
                          src={item.iconSolution}
                          className="w-5 h-5"
                        />
                        <div className="flex-1 w-full text-[#333] leading-[130%] text-left">
                          {s}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex justify-center mt-6">
          <Link
            target="_blank"
            href="#"
            className="bg-[radial-gradient(50.73%_100%_at_50%_100%,_#A068F4_0%,_#6631F3_100%)] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] text-white rounded-lg border border-1 border-[#511D9A] text-center text-[#511D9A] py-4 px-6 font-semibold text-lg line-height[130%] inline-block bg-white"
          >
            Dùng thử ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
