"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const logos = [
  {
    id: 1,
    image: "/images/img-logo1.png",
    alt: "Beto.vn",
  },
  {
    id: 2,
    image: "/images/img-logo2.png",
    alt: "Wow Holiday",
  },
  {
    id: 3,
    image: "/images/img-logo3.png",
    alt: "Sky Garden",
  },
  {
    id: 4,
    image: "/images/img-logo4.png",
    alt: "Gempartner",
  },
  {
    id: 5,
    image: "/images/img-logo5.png",
    alt: "VinFast",
  },
  {
    id: 6,
    image: "/images/img-logo6.png",
    alt: "Vinpearl",
  },
  {
    id: 7,
    image: "/images/img-logo7.png",
    alt: "Sohaco Group",
  },
  {
    id: 8,
    image: "/images/img-logo8.png",
    alt: "Kênh 14",
  },
  {
    id: 9,
    image: "/images/logo-kh1.png",
    alt: "University Nguyễn Tất Thành",
  },
  {
    id: 10,
    image: "/images/logo-kh2.png",
    alt: "An Vương Land",
  },
  {
    id: 11,
    image: "/images/logo-kh3.png",
    alt: "Trường đại học Văn Hiến",
  },
  {
    id: 12,
    image: "/images/logo-kh4.png",
    alt: "SISD",
  },
  {
    id: 13,
    image: "/images/logo-kh5.png",
    alt: "AMES English",
  },
];

export const logosPress = [
  {
    id: 1,
    link: "https://cafef.vn/bizfly-cung-ong-lon-nganh-bao-hiem-dap-di-xay-lai-luong-quan-tri-data-188250224174846688.chn",
    image: "/images/img-logo9.png",
    alt: "cafeF",
  },
  {
    id: 2,
    link: "https://cafebiz.vn/xu-huong-tang-truong-moi-bizfly-ung-dung-chatai-trong-tu-van-va-chot-don-176240919093736485.chn",
    image: "/images/img-logo10.png",
    alt: "CafeBiz",
  },
  {
    id: 3,
    link: "https://dantri.com.vn/kinh-doanh/bizfly-crm-giai-bai-toan-cho-doanh-nghiep-thieu-nang-luc-phan-tich-du-lieu-kkhach-hang-20221029144924020.htm",
    image: "/images/img-logo11.png",
    alt: "Báo điện tử Dân trí",
  },
  {
    id: 4,
    link: "https://genk.vn/ceo-bizfly-nguyen-thuy-dung-muon-thoat-lo-tru-lai-duoc-tren-thi-truong-doanh-nghiep-phai-nhanh-chong-chuyen-doi-so-thanh-cong-2022072017254313.chn",
    image: "/images/img-logo12.png",
    alt: "Genk",
  },
  {
    id: 5,
    link: "https://vnexpress.net/bizfly-vao-danh-sach-cac-nen-tang-make-in-vietnam-4221316.html",
    image: "/images/img-logo13.png",
    alt: "VNEXPRESS",
  },
  {
    id: 6,
    link: "https://vneconomy.vn/bizchatai-tro-ly-ao-cho-chuoi-fb-mua-cao-diem.htm",
    image: "/images/logo-bao1.png",
    alt: "VnEconomy",
  },
  {
    id: 7,
    link: "https://vietnambiz.vn/bizchatai-dang-la-phao-cuu-sinh-cho-cac-chuoi-fb-nhu-the-nao-202581315526991.htm",
    image: "/images/logo-bao2.png",
    alt: "VietnamBiz",
  },
  {
    id: 8,
    link: "https://vietnamnet.vn/tro-ly-ao-bizchatai-nhan-1000-don-dat-ban-ngay-nha-hang-khoi-lo-lo-khach-nong-2429141.html",
    image: "/images/logo-bao3.png",
    alt: "VietnamNet Global",
  },
  {
    id: 9,
    link: "https://www.sggp.org.vn/bizchatai-tro-ly-ao-giup-truong-dai-hoc-xu-ly-hang-nghin-tin-nhan-tuyen-sinh-post807800.html",
    image: "/images/logo-bao4.png",
    alt: "Sài Gòn Giải Phóng",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[url('/images/bg-projrecent.png')] bg-no-repeat bg-top bg-center bg-[length:100%_auto] py-16 md:py-20 relative z-1">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] mb-4 leading-[140%] text-center text-center">
          7000+ khách hàng tin tưởng và sử dụng OperisChatAI
        </h2>
      </div>
      {/* Logo carousel */}
      <div className="w-full">
        <div className="p-0 mx-auto relative z-1 overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={true}
            slidesPerView={8}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-11!"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="h-[114px] flex items-center justify-center p-2">
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="w-auto max-h-[114px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-30">
        {/* Title */}
        <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] mb-4 leading-[140%] text-center text-center">
          Báo chí nói về OperisChatAI
        </h2>
      </div>

      {/* Logo carousel */}
      <div className="w-full">
        <div className="p-0 mx-auto relative z-1 overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={true}
            slidesPerView={8}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="pb-11!"
          >
            {logosPress.map((logo) => (
              <SwiperSlide key={logo.id}>
                <Link
                  href={logo.link}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="h-[114px] flex items-center justify-center p-2">
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      className="w-auto max-h-[114px]"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
