"use client";

const awards = [
  {
    title: "Giải thưởng Sao Khuê 2023",
    description:
      "Được bình chọn là Giải pháp xuất sắc của ngành phần mềm, CNTT Việt Nam và được công nhận đạt Giải thưởng Sao Khuê 2023",
    image: "/images/img-gt1.png",
  },
  {
    title: "Giải thưởng Quốc tế VLSP 2021",
    description:
      "Đứng nhất hạng mục Named Entity Recognition for Vietnamese giải pháp Chatbot AI.",
    image: "/images/img-gt2.png",
  },
  {
    title: "Giải thưởng nền tảng số Make in Việt Nam",
    description:
      "OperisChatAI cùng các giải pháp của Operis được Bộ TT&TT chọn vào danh sách các nền tảng chuyển đổi số xuất sắc Make in Vietnam 2021",
    image: "/images/img-gt3.png",
  },
];

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] mb-4 leading-[140%] text-center">
            Giải thưởng
          </h2>
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {awards.map((award, index) => (
            <div key={index} className="w-full">
              <div className="mb-6 text-center flex justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-w-full"
                />
              </div>
              <div>
                <div className="text-center text-[22px] font-bold leading-[140%] bg-[linear-gradient(90deg,_#632AE8_0%,_#5A8CFF_100%)] bg-clip-text text-transparent">
                  {award.title}
                </div>
                <div className="text-[#333] leading-[130%] text-center">
                  {award.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
