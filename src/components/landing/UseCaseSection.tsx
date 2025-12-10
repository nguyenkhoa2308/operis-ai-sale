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
    name: "Ngân hàng",
    problems: [
      "Khách hỏi mở thẻ, vay vốn nhưng nhân viên quá tải, phản hồi chậm, mất khách tiềm năng",
      "Hội thoại bị rời rạc giữa nhiều kênh: Website, App, Zalo, Facebook",
      "Khách hỏi đi hỏi lại cùng một nội dung (lãi suất, điều kiện...), tốn thời gian tư vấn",
    ],
    solutions: [
      "Tư vấn mở thẻ, vay vốn 24/7, thu thập thông tin, đánh giá sơ bộ nhu cầu, hướng dẫn thủ tục",
      "Quản lý hội thoại tập trung trên một giao diện, nhớ thông tin khách dù họ nhắn từ nhiều kênh khác nhau",
      "Hiểu ngữ cảnh và trả lời chính xác, không cần viết sẵn kịch bản, cập nhật nội dung linh hoạt từ dữ liệu nội bộ",
    ],
    iconProblem: "/images/ic-ic1.png",
    iconSolution: "/images/ic-ic2.png",
  },

  {
    id: 2,
    name: "F&B",
    problems: [
      "Giờ cao điểm, inbox quá tải, không ai kịp trả lời đặt bàn",
      "Khách hỏi món, combo, khuyến mãi lặp lại mỗi ngày",
      "Phản hồi review/feedback sau dùng bữa quá chậm",
    ],
    solutions: [
      "Tự động nhận và xác nhận đặt bàn theo thời gian còn trống. Gửi tin nhắn xác nhận ngay trong chat",
      "Gợi ý món theo sở thích, giờ ăn hoặc lịch sử khách hàng",
      "Tự động nhắn hỏi cảm nhận sau ăn, gửi ưu đãi khuyến khích đánh giá,...",
    ],
    iconProblem: "/images/ic-ic1.png",
    iconSolution: "/images/ic-ic2.png",
  },

  {
    id: 3,
    name: "Giáo dục",
    problems: [
      "Inbox nổ tung mùa tuyển sinh nhưng thiếu người trực",
      "Học viên cũ hỏi lại thông tin lịch học, đổi lớp, hỗ trợ kỹ thuật",
      "Tư vấn viên mới chưa nắm đủ thông tin, trả lời không thống nhất",
    ],
    solutions: [
      "Tư vấn khóa học theo nhu cầu (ngành, độ tuổi, thời gian học), gửi thông tin học phí, lộ trình, thời gian khai giảng",
      "Ghi nhớ lịch sử học viên, phân loại theo trạng thái, trả lời nhanh các câu hỏi thường gặp",
      "Dựa trên dữ liệu huấn luyện sẵn để tư vấn thống nhất, hạn chế sai lệch thông tin do con người",
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
            Use case sử dụng BizChatAI của một số ngành nghề
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
            href="https://bizfly.vn/giai-phap/demo-bizchat-ai.html?utm_source=Website&amp;utm_medium=Trangchu&amp;utm_campaign=button-dungthu-bizchatai"
            className="bg-[radial-gradient(50.73%_100%_at_50%_100%,_#A068F4_0%,_#6631F3_100%)] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] text-white rounded-lg border border-1 border-[#511D9A] text-center text-[#511D9A] py-4 px-6 font-semibold text-lg line-height[130%] inline-block bg-white"
          >
            Dùng thử ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
