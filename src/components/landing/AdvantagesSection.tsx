"use client";

import Image from "next/image";
import Link from "next/link";

const advantages = [
  {
    title: "Hiểu và phân tích ngữ cảnh trong hội thoại",
    features: [
      "AI hiểu nội dung cuộc trò chuyện theo cách người thật đang nói",
      "Không cần gán từ khóa, AI vẫn nhận diện đúng nhu cầu",
      "Hiểu cả những câu hỏi gián tiếp, câu hỏi dài, lắt léo",
      "Gợi ý phản hồi phù hợp với tone và nội dung đang diễn ra",
    ],
    image: "/images/img-advantage1.png",
  },
  {
    title: "Hiểu khách hàng cần gì và xử lý đúng cách",
    features: [
      "Phân biệt giữa hỏi giá – khiếu nại – cần tư vấn – hỏi bảo hành...",
      "Tự động chia hội thoại theo nhóm: Tư vấn, xử lý đơn, chăm sóc...",
      "Giao tiếp trôi chảy dù khách đổi chủ đề giữa chừng",
    ],
    image: "/images/img-advantage2.png",
  },
  {
    title: "Phân tích cảm xúc hội thoại để tư vấn hợp lý",
    features: [
      'Xử lý phản đối phổ biến như "đắt quá", "để suy nghĩ"...',
      "Tư vấn gói phù hợp theo nhu cầu khách đang đề cập",
      "Kết nối đến bước đặt hàng/đăng ký ngay trong hội thoại",
    ],
    image: "/images/img-advantage3.png",
  },
  {
    title: "Ghi nhớ khách hàng & cá nhân hóa nội dung",
    features: [
      "Ghi nhớ tên, lịch sử, sản phẩm đã hỏi/đặt trước đó",
      "Gợi ý sản phẩm phù hợp hoặc nhắc lại ưu đãi chưa dùng",
      "Không cần khách nhắc lại thông tin ở lần trò chuyện sau",
    ],
    image: "/images/img-advantage4.png",
  },
  {
    title: "Kết nối dữ liệu & phần mềm quản lý doanh nghiệp",
    features: [
      "Đồng bộ với CRM để lấy dữ liệu khách hàng & cập nhật trạng thái",
      "Kết nối hệ thống đặt hàng, thanh toán, lịch học, lịch hẹn...",
      "Có thể tùy biến tích hợp theo đặc thù ngành: Giáo dục, ngân hàng, nhà hàng",
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
            OperisChatAI có thể làm gì cho doanh nghiệp của bạn?
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
