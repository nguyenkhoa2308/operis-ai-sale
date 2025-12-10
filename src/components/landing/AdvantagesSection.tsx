"use client";

import Image from "next/image";
import Link from "next/link";

const advantages = [
  {
    title: "Tự động tiếp cận & tư vấn khách hàng trên Zalo",
    features: [
      "AI chủ động nhắn tin giới thiệu sản phẩm đến khách hàng tiềm năng",
      "Tự động trả lời tin nhắn Zalo 24/7, không bỏ lỡ khách hàng nào",
      "Gửi tin nhắn hàng loạt đến danh sách khách hàng mục tiêu",
      "Chatbot tư vấn sản phẩm, báo giá tự động ngay trong Zalo",
    ],
    image: "/images/img-advantage1.png",
  },
  {
    title: "Quét & tìm kiếm khách hàng từ nhóm Zalo",
    features: [
      "Tự động quét thành viên từ các nhóm Zalo tiềm năng",
      "Lọc và phân loại khách hàng theo tiêu chí ngành nghề, khu vực",
      "Kết bạn tự động với khách hàng mục tiêu trên Zalo",
      "Xây dựng danh sách leads chất lượng để remarketing",
    ],
    image: "/images/img-advantage2.png",
  },
  {
    title: "Chốt sale thông minh với AI hiểu ngữ cảnh",
    features: [
      "AI nhận diện nhu cầu mua hàng và đẩy nhanh quá trình chốt đơn",
      'Xử lý phản đối phổ biến: "đắt quá", "để suy nghĩ", "so sánh giá"...',
      "Tự động gợi ý sản phẩm phù hợp theo nhu cầu khách đề cập",
      "Hướng dẫn đặt hàng, thanh toán ngay trong cuộc trò chuyện Zalo",
    ],
    image: "/images/img-advantage3.png",
  },
  {
    title: "Chăm sóc & nuôi dưỡng khách hàng tự động",
    features: [
      "Ghi nhớ lịch sử mua hàng, sở thích của từng khách",
      "Tự động gửi tin nhắn chúc mừng sinh nhật, ưu đãi cá nhân",
      "Nhắc khách hàng về đơn hàng chưa thanh toán, giỏ hàng bỏ quên",
      "Remarketing tự động với khách hàng cũ qua Zalo",
    ],
    image: "/images/img-advantage4.png",
  },
  {
    title: "Quản lý đa tài khoản Zalo & báo cáo hiệu suất",
    features: [
      "Quản lý nhiều tài khoản Zalo OA và Zalo cá nhân trên một nền tảng",
      "Thống kê số tin nhắn, tỷ lệ phản hồi, tỷ lệ chốt đơn",
      "Báo cáo doanh số bán hàng theo ngày/tuần/tháng",
      "Đồng bộ dữ liệu khách hàng với CRM, hệ thống quản lý đơn hàng",
    ],
    image: "/images/img-advantage5.png",
    showCTA: true,
  },
];

export default function AdvantagesSection() {
  return (
    <section className="pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto pb-6">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] leading-[140%] text-center">
            Chatbot AI Sale Zalo có thể làm gì cho doanh nghiệp của bạn?
          </h2>
        </div>
      </div>

      {/* Advantage blocks */}
      {advantages.map((advantage, index) => {
        const isOdd = index % 2 === 1;
        return (
          <div
            key={index}
            className={`${
              isOdd
                ? "box-odd bg-[linear-gradient(90deg,_#E4ECFF_2.02%,_rgba(253,_246,_242,_0.00)_99.95%)]"
                : "bg-[linear-gradient(90deg,_rgba(253,_246,_242,_0.00)_2.02%,_#FDF6F2_99.95%)]"
            } py-12 md:py-16`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  isOdd ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text content */}
                <div
                  className={`advantage-left ${
                    isOdd ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#000] mb-6 leading-tight">
                    {advantage.title}
                  </h3>
                  <div className="space-y-4">
                    {advantage.features.map((feature, fIndex) => (
                      <div className="pl-3 relative" key={fIndex}>
                        <Image
                          width={30}
                          height={31}
                          src="/images/ic-1.png"
                          alt="xác nhận"
                          className="block absolute left-0 top-0 bottom-0 m-auto"
                        />
                        <div className="w-full h-full py-4 pr-4 pl-6 bg-[linear-gradient(123deg,_#F3EFFF_10.33%,_rgba(243,239,255,0)_75.76%)] text-[#333] leading-[130%] rounded-xl">
                          {" "}
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>

                  {advantage.showCTA && (
                    <div className="box--btn mt-8">
                      <Link
                        href="#demo"
                        className="bg-[radial-gradient(50.73%_100%_at_50%_100%,_#A068F4_0%,_#6631F3_100%)] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] text-white rounded-lg border border-1 border-[#511D9A] text-center text-[#511D9A] py-4 px-6 font-semibold text-lg line-height[130%] inline-block bg-white"
                      >
                        Chat thử với AI của Operis
                      </Link>
                    </div>
                  )}
                </div>

                {/* Image placeholder */}
                <div
                  className={`mx-auto ${isOdd ? "md:order-1" : "md:order-2"}`}
                >
                  <img
                    src={advantage.image}
                    alt={advantage.title} // cho responsive
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
