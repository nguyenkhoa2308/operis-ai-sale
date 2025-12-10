"use client";

import { useState, useEffect } from "react";
import { Header, Footer } from "@/components/landing";
import {
  ChevronDown,
  FileText,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const videoTutorials = [
  {
    id: "X7Qb1DSOM-0",
    title: "Báo Cáo",
  },
  {
    id: "dao_nGa_p3Q",
    title: "Live Chat",
  },
  {
    id: "XBjGi1FZxpg",
    title: "Kho BOT mẫu",
  },
  {
    id: "hi6_gqhaLaQ",
    title: "Quản lý BOT Facebook - Danh sách đơn hàng",
  },
  {
    id: "YJvKMiiXA1w",
    title: "Quản lý BOT Facebook - Danh sách mã quà tặng",
  },
];

const helpSections = [
  {
    id: 1,
    title: "I. Giới thiệu về OperisChatAI",
    items: [{ title: "Giới thiệu về OperisChatAI", href: "#" }],
  },
  {
    id: 2,
    title: "II. Đăng ký tài khoản và đăng nhập",
    items: [
      { title: "1. Đăng ký tài khoản", href: "#" },
      { title: "2. Đăng nhập vào hệ thống", href: "#" },
      { title: "3. Truy cập vào giải pháp OperisChatAI", href: "#" },
      { title: "4. Thêm nhân sự vào trong dự án", href: "#" },
    ],
  },
  {
    id: 3,
    title: "III. Tạo và quản lý Bot",
    items: [
      { title: "1. Khái niệm về Chatbot", href: "#" },
      { title: "2. Cách tạo bot", href: "#" },
    ],
  },
  {
    id: 4,
    title: "IV. Thiết lập Bot nền tảng Facebook",
    items: [
      { title: "Cách kết nối Fanpage vào BOT", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
      { title: "3. Kịch bản hẹn giờ", href: "#" },
      { title: "4. Gửi hàng loạt", href: "#" },
      { title: "5. Menu chính", href: "#" },
      {
        title: "6. Áp dụng kịch bản tự động cho bài quảng cáo Facebook",
        href: "#",
      },
      { title: "7. Cách thiết lập kịch bản cho bài viết", href: "#" },
      { title: "8. Công cụ nhúng", href: "#" },
    ],
  },
  {
    id: 5,
    title: "V. Thiết lập Bot nền tảng Zalo OA",
    items: [
      { title: "Cách tạo bot Zalo và kết nối với OA", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
      { title: "3. Gửi hàng loạt", href: "#" },
    ],
  },
  {
    id: 6,
    title: "VI. Thiết lập Bot nền tảng Website/LandingPage",
    items: [
      { title: "Cách tạo bot Website và nhúng bot lên Web", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
      { title: "3. Menu chính", href: "#" },
    ],
  },
  {
    id: 7,
    title: "VII. Thiết lập Bot nền tảng Zalo Cá Nhân",
    items: [{ title: "Cách tạo và kết nối bot Zalo cá nhân", href: "#" }],
  },
  {
    id: 8,
    title: "VIII. Thiết lập Bot nền tảng Instagram",
    items: [
      { title: "Cách tạo và kết nối bot Instagram", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
    ],
  },
  {
    id: 9,
    title: "IX. Thiết lập Bot nền tảng Telegram",
    items: [
      { title: "Cách tạo và kết nối bot Telegram", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
    ],
  },
  {
    id: 10,
    title: "X. Thiết lập Bot nền tảng Lotus Chat",
    items: [
      { title: "Cách tạo và kết nối bot Lotus", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
    ],
  },
  {
    id: 11,
    title: "XI. Thiết lập Bot nền tảng WhatsApp",
    items: [
      { title: "Cách tạo và kết nối bot WhatsApp", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
    ],
  },
  {
    id: 12,
    title: "XII. Thiết lập Bot nền tảng Discord",
    items: [{ title: "Cách tạo và kết nối bot Discord", href: "#" }],
  },
  {
    id: 13,
    title: "XIII. Thiết lập Bot nền tảng Lazada",
    items: [
      { title: "Cách tạo và kết nối bot Lazada", href: "#" },
      { title: "1. Kịch bản", href: "#" },
      { title: "2. Từ khóa", href: "#" },
    ],
  },
  {
    id: 14,
    title: "XIV. Các công cụ tạo kịch bản",
    items: [
      { title: "Giới thiệu về các công cụ", href: "#" },
      { title: "1. Text/Menu", href: "#" },
      { title: "2. Ảnh", href: "#" },
      { title: "3. Card", href: "#" },
      { title: "4. Dynamic", href: "#" },
      { title: "5. Delay", href: "#" },
      { title: "6. Hỏi đáp", href: "#" },
      { title: "8. Danh sách Users", href: "#" },
      { title: "9. Thêm điều kiện", href: "#" },
      { title: "10. Trả lời nhanh", href: "#" },
      { title: "11. Text", href: "#" },
      { title: "12. List Zalo", href: "#" },
    ],
  },
  {
    id: 15,
    title: "XV. Trí tuệ nhân tạo",
    items: [
      { title: "Giới thiệu tổng quan", href: "#" },
      { title: "1. Thiết lập AI Agent", href: "#" },
      { title: "2. Cài đặt AI", href: "#" },
    ],
  },
  {
    id: 16,
    title: "XVI. Các tính năng khác của Chatbot",
    items: [
      { title: "1. Cài đặt bot", href: "#" },
      { title: "2. Mini CRM", href: "#" },
      { title: "3. Danh sách khách hàng", href: "#" },
      { title: "4. Báo cáo thống kê", href: "#" },
      { title: "5. Phân quyền cho nhân viên", href: "#" },
    ],
  },
  {
    id: 17,
    title: "XVII. Sử dụng LiveChat",
    items: [
      { title: "Giới thiệu về Livechat", href: "#" },
      { title: "1. Thao tác sử dụng trong Livechat", href: "#" },
      { title: "2. Cài đặt Livechat (P1)", href: "#" },
      { title: "3. Cài đặt Livechat (P2)", href: "#" },
    ],
  },
  {
    id: 18,
    title: "XVIII. Các câu hỏi thường gặp",
    items: [
      { title: "Các lỗi cơ bản và cách khắc phục", href: "#" },
      { title: "Các lỗi cơ bản và cách khắc phục (Với Zalo OA)", href: "#" },
      { title: "Những câu hỏi thường gặp về OperisChatAI - Phần I", href: "#" },
      {
        title: "Những câu hỏi thường gặp về OperisChatAI - Phần II",
        href: "#",
      },
      {
        title: "Những câu hỏi thường gặp về OperisChatAI - Phần III",
        href: "#",
      },
      {
        title:
          "Khi xoá khách hàng ở trong phần Danh sách khách hàng của OperisChat có làm mất cuộc hội thoại đó trên facebook không?",
        href: "#",
      },
      {
        title:
          "Vì sao đã xoá data trong phần danh sách khách hàng nhưng ngoài màn hình thống kê dự án số lượng data vẫn không giảm?",
        href: "#",
      },
      {
        title:
          "Ở trong phần Livechat, khi người dùng không đăng nhập phần mềm nữa thì có tự tính là Offline không?",
        href: "#",
      },
      {
        title: "Tag ở bên OperisChat có đồng bộ sang CRM không?",
        href: "#",
      },
      {
        title: "Hiện nay Chatbot đang liên kết với các nền tảng nào?",
        href: "#",
      },
    ],
  },
  {
    id: 19,
    title: "XIX. Các câu hỏi HDSD OperisChat thường gặp",
    items: [
      {
        title:
          "Khách hàng không trả lời tin nhắn sau 1-2h thì có thể cài đặt cho hệ thống tự gửi tin nhắn lại cho khách không?",
        href: "/help/khach-hang-khong-tra-loi-tin-nhan-sau-1-2h-thi-co-the-cai-dat-cho-he-thong-tu-gui-tin-nhan-lai-cho-khach-khong-n530.html",
      },
      {
        title:
          "Trong phần livechat có mục 'Tin nhắn nội bộ (note)' tính năng này dùng như thế nào?",
        href: "/help/trong-phan-livechat-co-muc-tin-nhan-noi-bo-note-tinh-nang-nay-dung-nhu-the-nao-n531.html",
      },
      {
        title: "Cách nhúng Chatbot?",
        href: "/help/cach-nhung-chatbot-n538.html",
      },
      {
        title:
          "Có thể điều chỉnh về số lựa chọn (thay vì 3) và số ký tự trên 1 lựa chọn không?",
        href: "/help/co-the-dieu-chinh-ve-so-lua-chon-thay-vi-3-va-so-ky-tu-tren-1-lua-chon-khong-n539.html",
      },
      {
        title: "Cách kết nối Bot Instagram",
        href: "/help/cach-ket-noi-bot-instagram-n545.html",
      },
      {
        title:
          "Kết nối BOT với Fanpage nhưng sau xoá BOT cũ đi, tạo BOT mới thì có kết nối được với Fanpage đó không?",
        href: "/help/ket-noi-bot-voi-fanpage-nhung-sau-xoa-bot-cu-di-tao-bot-moi-thi-co-ket-noi-duoc-voi-fanpage-do-khong-n551.html",
      },
      {
        title: "Tại sao bị thiếu tin nhắn hoặc tin nhắn không đổ về Livechat?",
        href: "/help/tai-sao-bi-thieu-tin-nhan-hoac-tin-nhan-khong-do-ve-livechat-n552.html",
      },
      {
        title:
          "Gửi hàng loạt trong OperisChat có thể gửi tùy ý cho tất cả các khách hàng đã tương tác với fanpage phải không?",
        href: "/help/gui-hang-loat-trong-bizchat-co-the-gui-tuy-y-cho-tat-ca-cac-khach-hang-da-tuong-tac-voi-fanpage-phai-khong-n576.html",
      },
      {
        title: "Làm sao để gắn tag tự động cho các khách hàng trong livechat",
        href: "/help/lam-sao-de-gan-tag-tu-dong-cho-cac-khach-hang-trong-livechat-n578.html",
      },
      {
        title: "Thiết lập kịch bản của OperisChat làm như thế nào?",
        href: "/help/thiet-lap-kich-ban-cua-bizchat-lam-nhu-the-nao-n603.html",
      },
      {
        title: "Làm thế nào để xoá bớt data trên OperisChat?",
        href: "/help/lam-the-nao-de-xoa-bot-data-tren-bizchat-n606.html",
      },
      {
        title:
          "OperisChat có thể để khách hàng đánh giá mức độ hài lòng với nhân viên ngay sau khi được chat tư vấn không?",
        href: "/help/bizchat-co-the-de-khach-hang-danh-gia-muc-do-hai-long-voi-nhan-vien-ngay-sau-khi-duoc-chat-tu-van-khong-n609.html",
      },
      {
        title: "Cách cài đặt và sử dụng Extension OperisChat AI",
        href: "/help/cach-cai-dat-va-su-dung-extension-bizfly-chatbot-ai-n616.html",
      },
      {
        title:
          "Cách ngắt kết nối Page với OperisChat khi đã hết gói trải nghiệm thì vào chỗ nào trên Page?",
        href: "/help/cach-ngat-ket-noi-page-voi-bizchat-khi-da-het-goi-trai-nghiem-thi-vao-cho-nao-tren-page-n636.html",
      },
      {
        title:
          "OperisChat có thể phân quyền nhân viên không nhìn thấy cuộc hội thoại của nhau không?",
        href: "/help/bizchat-co-the-phan-quyen-nhan-vien-khong-nhin-thay-cuoc-hoi-thoai-cua-nhau-khong-n638.html",
      },
      {
        title:
          "Cách tạo và sử dụng form Google Sheet trong kịch bản OperisChat",
        href: "/help/cach-tao-va-su-dung-form-google-sheet-trong-kich-ban-bizchat-n648.html",
      },
      {
        title:
          "Tính năng Thêm hành động / Action trong thiết lập kịch bản trên OperisChat",
        href: "/help/tinh-nang-them-hanh-dong-action-trong-thiet-lap-kich-ban-tren-bizchat-n649.html",
      },
      {
        title: "Tạo và kết nối bot Google Business",
        href: "/help/tao-va-ket-noi-bot-google-business-n650.html",
      },
      {
        title: "Tạo và kết nối bot Telegram",
        href: "/help/tao-va-ket-noi-bot-telegram-n651.html",
      },
      {
        title: "Cách tạo tin nhắn mẫu trên OperisChat",
        href: "/help/cach-tao-tin-nhan-mau-tren-bizchat-n652.html",
      },
      {
        title: "Hướng dẫn chọn Bizfly là ứng dụng chính trên Fanpage",
        href: "/help/huong-dan-chon-bizfly-la-ung-dung-chinh-tren-fanpage-n664.html",
      },
      {
        title: "Hướng dẫn lấy lại quyền kiểm soát hội thoại cho Bot Messenger",
        href: "/help/huong-dan-lay-lai-quyen-kiem-soat-hoi-thoai-cho-bot-messenger-n665.html",
      },
      {
        title: "Hướng dẫn kết nối Whatsapp",
        href: "/help/huong-dan-ket-noi-whatsapp-n673.html",
      },
      {
        title: "Xoá quyền rời hội thoại của user trên OperisChat",
        href: "/help/xoa-quyen-roi-hoi-thoai-cua-user-tren-bizchat-n691.html",
      },
      {
        title: "Hướng dẫn bật định tuyến hội thoại Facebook Messenger",
        href: "/help/huong-dan-bat-dinh-tuyen-hoi-thoai-facebook-messenger-n693.html",
      },
      {
        title: "Hướng dẫn kết nối bot Zalo cá nhân",
        href: "/help/huong-dan-ket-noi-bot-zalo-ca-nhan-n694.html",
      },
      {
        title: "Hướng dẫn kết nối BOT Line",
        href: "/help/huong-dan-ket-noi-bot-line-n726.html",
      },
      {
        title: "Tính năng Tiến trình trên Livechat",
        href: "/help/tinh-nang-tien-trinh-tren-livechat-n730.html",
      },
    ],
  },
  {
    id: 20,
    title: "XX. Các lỗi thường gặp trong OperisChat",
    items: [
      { title: "Error validating access token là lỗi gì", href: "#" },
      {
        title: "Lỗi #230 khi kết nối BOT là gì? Làm thế nào để khắc phục?",
        href: "#",
      },
      {
        title: "Cập nhật danh sách lỗi thường gặp từ Facebook năm 2024",
        href: "#",
      },
    ],
  },
];

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState<number | null>(1);
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const toggleSection = (id: number) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const openVideo = (video: { id: string; title: string }) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="float-left w-full bg-[url('/images/bg-banner.jpg')] bg-no-repeat bg-top bg-center bg-cover min-h-[388px] pt-[123px] pb-[20px]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Chào mừng bạn đến với trang hỗ trợ của OperisChatAI
            </h1>

            {/* Search Box */}
            <form className="relative max-w-xl mx-auto mb-4">
              <div className="relative bg-white rounded-full shadow-xl shadow-black/20 border-2 border-white/50">
                <input
                  type="text"
                  placeholder="Nhập nội dung bạn cần hỗ trợ"
                  className="w-full px-6 py-4 pr-14 rounded-full text-gray-700 text-base placeholder:text-gray-500 focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  aria-label="Tìm kiếm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Hotline */}
            <p className="text-white/90 text-sm md:text-base">
              Bạn cần hỗ trợ tư vấn trực tiếp? Hãy liên hệ với chúng tôi qua
              Hotline:{" "}
              <a
                href="tel:19006364"
                className="font-semibold text-white hover:underline"
              >
                1900 636 465
              </a>
            </p>
          </div>
        </section>

        {/* Help Sections Accordion */}
        <section className="float-left w-full py-12 md:py-16 bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#F5F3FF] relative pb-24 md:pb-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Blurred circles - extra large */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8B5CF6]/12 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#A78BFA]/10 rounded-full blur-[120px]" />

            {/* Blurred circles - large */}
            <div className="absolute top-[20%] -right-20 w-[350px] h-[350px] bg-[#C4B5FD]/15 rounded-full blur-[80px]" />
            <div className="absolute top-[50%] -left-20 w-[300px] h-[300px] bg-[#8B5CF6]/12 rounded-full blur-[70px]" />

            {/* Blurred circles - medium */}
            <div className="absolute top-[10%] left-[20%] w-[200px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-[60px]" />
            <div className="absolute top-[35%] right-[15%] w-[180px] h-[180px] bg-[#A78BFA]/12 rounded-full blur-[50px]" />
            <div className="absolute top-[60%] left-[30%] w-[220px] h-[220px] bg-[#8B5CF6]/8 rounded-full blur-[60px]" />
            <div className="absolute bottom-[20%] right-[25%] w-[250px] h-[250px] bg-[#C4B5FD]/10 rounded-full blur-[70px]" />

            {/* Blurred circles - small */}
            <div className="absolute top-[15%] right-[35%] w-[100px] h-[100px] bg-[#8B5CF6]/15 rounded-full blur-[40px]" />
            <div className="absolute top-[40%] left-[10%] w-[120px] h-[120px] bg-[#A78BFA]/12 rounded-full blur-[35px]" />
            <div className="absolute top-[70%] right-[10%] w-[80px] h-[80px] bg-[#7C3AED]/15 rounded-full blur-[30px]" />
            <div className="absolute bottom-[35%] left-[25%] w-[90px] h-[90px] bg-[#8B5CF6]/10 rounded-full blur-[35px]" />

            {/* Decorative dots patterns */}
            <div className="absolute top-20 left-10 grid grid-cols-4 gap-3 opacity-25">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#8B5CF6] rounded-full" />
              ))}
            </div>
            <div className="absolute bottom-40 right-10 grid grid-cols-3 gap-3 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#8B5CF6] rounded-full" />
              ))}
            </div>
            <div className="absolute top-[40%] right-[5%] grid grid-cols-5 gap-2 opacity-15">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full" />
              ))}
            </div>
            <div className="absolute top-[70%] left-[3%] grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#A78BFA] rounded-full" />
              ))}
            </div>

            {/* Floating rings */}
            <div className="absolute top-[15%] right-[15%] w-16 h-16 border-2 border-[#8B5CF6]/25 rounded-full" />
            <div className="absolute top-[45%] left-[5%] w-24 h-24 border-2 border-[#A78BFA]/20 rounded-full" />
            <div className="absolute bottom-[25%] right-[8%] w-12 h-12 border-2 border-[#8B5CF6]/30 rounded-full" />
            <div className="absolute top-[25%] left-[12%] w-10 h-10 border border-[#7C3AED]/20 rounded-full" />
            <div className="absolute bottom-[45%] right-[12%] w-20 h-20 border border-[#A78BFA]/15 rounded-full" />
            <div className="absolute top-[65%] right-[20%] w-8 h-8 border-2 border-[#8B5CF6]/20 rounded-full" />

            {/* Plus/Cross decorations */}
            <div className="absolute top-[20%] left-[25%] opacity-20">
              <div className="w-4 h-0.5 bg-[#8B5CF6] absolute top-1/2 left-0 -translate-y-1/2" />
              <div className="w-0.5 h-4 bg-[#8B5CF6] absolute top-0 left-1/2 -translate-x-1/2" />
            </div>
            <div className="absolute top-[50%] right-[25%] opacity-15">
              <div className="w-5 h-0.5 bg-[#7C3AED] absolute top-1/2 left-0 -translate-y-1/2" />
              <div className="w-0.5 h-5 bg-[#7C3AED] absolute top-0 left-1/2 -translate-x-1/2" />
            </div>
            <div className="absolute bottom-[35%] left-[18%] opacity-20">
              <div className="w-3 h-0.5 bg-[#A78BFA] absolute top-1/2 left-0 -translate-y-1/2" />
              <div className="w-0.5 h-3 bg-[#A78BFA] absolute top-0 left-1/2 -translate-x-1/2" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 pt-4 relative z-10">
            <div className="space-y-3">
              {helpSections.map((section) => (
                <div
                  key={section.id}
                  className="guide-box bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#8B5CF6]/30 transition-all duration-300"
                >
                  {/* Section Header */}
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-purple-50/50 transition-colors rounded-xl"
                  >
                    <h3
                      className={`font-semibold pr-4 transition-colors ${
                        activeSection === section.id
                          ? "text-[#8B5CF6]"
                          : "text-gray-800"
                      }`}
                    >
                      {section.title}
                      <span
                        className={`ml-2 text-sm font-normal transition-colors ${
                          activeSection === section.id
                            ? "text-[#8B5CF6]/70"
                            : "text-gray-500"
                        }`}
                      >
                        ({section.items.length})
                      </span>
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        activeSection === section.id
                          ? "rotate-180 text-[#8B5CF6]"
                          : "text-gray-500"
                      }`}
                    />
                  </button>

                  {/* Section Content with Animation */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      activeSection === section.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0">
                        <div className="border-t border-gray-100 pt-4 space-y-1">
                          {section.items.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:text-[#8B5CF6] hover:bg-purple-50 hover:translate-x-1 transition-all duration-200 group"
                            >
                              <FileText className="w-4 h-4 text-gray-400 group-hover:text-[#8B5CF6] transition-colors" />
                              <span className="text-sm">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="clear-left py-12 md:py-16 bg-white -mt-1">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
              Video giúp bạn thực hiện vài bước cơ bản
            </h2>
            <div className="video-swiper flex items-center gap-4">
              {/* Custom Prev Button */}
              <button
                type="button"
                aria-label="Video trước"
                className="swiper-prev-btn flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg shadow-purple-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-purple-500/40 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Swiper */}
              <div className="flex-1 overflow-hidden">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".swiper-prev-btn",
                    nextEl: ".swiper-next-btn",
                  }}
                  spaceBetween={20}
                  slidesPerView={2}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                  }}
                >
                  {videoTutorials.map((video) => (
                    <SwiperSlide key={video.id}>
                      <button
                        type="button"
                        onClick={() => openVideo(video)}
                        className="group block w-full text-left"
                      >
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                          <Image
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play
                                className="w-6 h-6 text-[#8B5CF6] ml-1"
                                fill="currentColor"
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="mt-3 text-sm font-medium text-gray-700 group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Custom Next Button */}
              <button
                type="button"
                aria-label="Video tiếp theo"
                className="swiper-next-btn flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg shadow-purple-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-purple-500/40 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="video-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={closeVideo}
          >
            <div
              className="video-modal-content relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeVideo}
                aria-label="Đóng video"
                className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#8B5CF6] transition-all z-10 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video container */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Video title */}
                <div className="px-5 py-4 border-b border-white/10">
                  <h3 className="text-white font-semibold text-lg">
                    {activeVideo.title}
                  </h3>
                </div>

                {/* YouTube Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Support CTA */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Cần hỗ trợ thêm?
            </h2>
            <p className="text-gray-400 mb-8">
              Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Liên hệ hỗ trợ
              </Link>
              <a
                href="mailto:support@operis.vn"
                className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                support@operis.vn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
