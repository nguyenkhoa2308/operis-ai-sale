"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  "Tự động train & cập nhật dữ liệu doanh nghiệp",
  "Hiểu luồng trò chuyện, giao tiếp tự nhiên, logic",
  "Kết nối đa kênh và đồng bộ dữ liệu trên một nền tảng",
  "Tư vấn, bán hàng, chăm sóc khách hàng 24/7",
];

export default function HeroBanner() {
  return (
    <div className="w-full bg-transparent bg-[url('/images/bg-banner1.jpg')] bg-no-repeat bg-center bg-cover pt-15 pb-10">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 align-items-center">
          <div className="relative w-full px-4">
            <div>
              <h1 className="text-[#511D9A] text-4xl lg:text-5xl 2xl:text-[52px] font-bold mb-5 leading-[130%]">
                <span className="text-[#111] block">Dịch vụ </span> Chatbot AI
                Agent
              </h1>
              <div className="text-[#111] text-2xl lg:text-[26px] 2xl:text-[32px] font-bold mb-8 leading-[130%]">
                giúp doanh nghiệp tư vấn, <br /> bán hàng &amp; chăm sóc khách
                hàng
              </div>
              <div className="grid grid-cols-2 gap-2 mb-12 w-full">
                {features.map((feature, index) => (
                  <div className="pl-3 relative" key={index}>
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
              <div className="flex flex-wrap gap-y-[10px] gap-x-6">
                <Link
                  target="_blank"
                  href="https://bizfly.vn/giai-phap/demo-bizchat-ai.html?utm_source=Website&amp;utm_medium=Trangchu&amp;utm_campaign=button-dungthu-bizchatai"
                  className="flex-1 w-full bg-[radial-gradient(50.73%_100%_at_50%_100%,_#A068F4_0%,_#6631F3_100%)] shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] text-white rounded-lg border border-1 border-[#511D9A] text-center text-[#511D9A] py-4 px-6 font-semibold text-lg line-height[130%] inline-block bg-white"
                >
                  Dùng thử miễn phí
                </Link>
                <Link
                  target="_blank"
                  href="https://bizfly.vn/giai-phap/form-consulting-chatbot.html?utm_source=Website&amp;utm_medium=Trangchu&amp;utm_campaign=button-dang-ky-tu-van-trang-bizchatAI"
                  className="rounded-lg border border-1 border-[#511D9A] text-center text-[#511D9A] py-4 px-6 font-semibold text-lg line-height[130%] inline-block bg-white"
                >
                  Tư vấn 1:1
                </Link>
                <Link
                  href="https://bizfly.vn/giai-phap/bang-gia-bizchatai.html"
                  className="rounded-lg border border-1 border-[#511D9A] text-center text-[#511D9A] py-4 px-6 font-semibold text-lg line-height[130%] inline-block bg-white"
                  target="_blank"
                >
                  Bảng giá
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full px-4 mt-10 lg:mt-0">
            <div className="banner_list">
              {" "}
              <img
                className="img-banner"
                src="https://templates.bizfly.vn/202508181755506898/images/img-banner.png"
                alt="Chatbot + Agentic AI"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
