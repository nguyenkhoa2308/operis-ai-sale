import {
  Header,
  HeroBanner,
  AssistantSection,
  AdvantagesSection,
  IndustriesSection,
  ClientLogos,
  AwardsSection,
  FAQSection,
  CTASection,
  Footer,
  UseCaseSection,
  NewsSection,
} from "@/components/landing";

const slides1 = [
  {
    id: 1,
    image: "/images/img-assistant1.png",
    alt: "Quét nhóm Zalo, kết bạn tự động",
  },
  {
    id: 2,
    image: "/images/img-assistant2.png",
    alt: "Gửi tin nhắn hàng loạt trên Zalo",
  },
  {
    id: 3,
    image: "/images/img-assistant3.png",
    alt: "Chatbot tư vấn, báo giá tự động",
  },
  {
    id: 4,
    image: "/images/img-assistant4.png",
    alt: "Chốt sale thông minh 24/7",
  },
];

const slides2 = [
  {
    id: 1,
    image: "/images/img-assistant5.png",
    alt: "Quản lý đa tài khoản Zalo trên một nền tảng",
  },
  {
    id: 2,
    image: "/images/img-assistant6.png",
    alt: "Remarketing tự động với khách hàng cũ qua Zalo",
  },
  {
    id: 3,
    image: "/images/img-assistant7.png",
    alt: "Báo cáo doanh số, tỷ lệ chốt đơn chi tiết",
  },
  {
    id: 4,
    image: "/images/img-assistant8.png",
    alt: "Đồng bộ CRM, quản lý đơn hàng tự động",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <AssistantSection
          title="Chatbot AI Sale Zalo thế hệ mới"
          subtitle="Tự động tìm kiếm, tiếp cận và chốt sale khách hàng trên Zalo"
          description="Chatbot AI Sale Zalo giúp doanh nghiệp tự động quét nhóm Zalo, kết bạn với khách hàng tiềm năng, tư vấn và chốt đơn 24/7 - tất cả hoàn toàn tự động"
          slides={slides1}
        />
        <AdvantagesSection />
        <AssistantSection
          title="Công nghệ Chatbot AI tiên tiến, tối ưu cho sale trên Zalo"
          slides={slides2}
          buttonTitle="Đăng ký dùng thử Chatbot"
        />
        <IndustriesSection />
        <UseCaseSection />
        <ClientLogos />

        <div className="w-full bg-[linear-gradient(180deg,_#FDF6F2_0%,_#FFF_100%)]">
          <AwardsSection />
          <FAQSection />
          <NewsSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
