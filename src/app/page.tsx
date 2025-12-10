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
    alt: "Tích hợp đa kênh, đa nền tảng",
  },
  {
    id: 2,
    image: "/images/img-assistant2.png",
    alt: "AI nhận diện tự động gán nhãn",
  },
  {
    id: 3,
    image: "/images/img-assistant3.png",
    alt: "Tự train dữ liệu theo tài liệu",
  },
  {
    id: 4,
    image: "/images/img-assistant4.png",
    alt: "Tư vấn tự nhiên, đúng luồng",
  },
];

const slides2 = [
  {
    id: 1,
    image: "/images/img-assistant5.png",
    alt: "Chatbot công nghệ cao, thành thạo giao tiếp đa ngôn ngữ",
  },
  {
    id: 2,
    image: "/images/img-assistant6.png",
    alt: "Xây dựng hành trình trả nghiệm tốt nhất cho khách hàng nhờ API kết nối theo đặc thù từng ngành",
  },
  {
    id: 3,
    image: "/images/img-assistant7.png",
    alt: "Phân luồng quy trình xử lý dữ liệu, báo cáo khoa học, trực quan",
  },
  {
    id: 4,
    image: "/images/img-assistant8.png",
    alt: "xử lý hội thoại đa nền tảng, cá nhân hoá tương tác",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <AssistantSection
          title="Trợ lý AI thế hệ mới"
          subtitle="Tư vấn linh hoạt, hiểu ngữ cảnh, phản hồi như con người"
          description="Dịch vụ Chatbot AI - OperisChatAI ứng dụng trí tuệ nhân tạo để hiểu nhu
            cầu khách hàng, tư vấn theo ngữ cảnh và phản hồi theo thời gian
            thực, thay vì chỉ chạy theo kịch bản cứng nhắc"
          slides={slides1}
        />
        <AdvantagesSection />
        <AssistantSection
          title="OperisChatAI ứng dụng công nghệ mới nhất, được phát triển bởi đội ngũ Operis"
          slides={slides2}
          buttonTitle="Đăng ký tư vấn 1:1"
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
