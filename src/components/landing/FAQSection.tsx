"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "OperisChat là gì và khác biệt gì so với chatbot thông thường?",
    answer:
      "OperisChat là dịch vụ Chatbot AI thông minh được phát triển bởi Operis, hoạt động như một trợ lý ảo chuyên nghiệp. Không giống chatbot thường chỉ trả lời theo kịch bản có sẵn, OperisChat có khả năng thấu hiểu sâu sắc ý định của khách hàng, giúp tự động hóa việc bán hàng và chăm sóc khách hàng như người thật.",
  },
  {
    id: 2,
    question:
      "Agentic AI trong OperisChat hoạt động như thế nào và có gì khác biệt?",
    answer:
      "Agentic AI là công nghệ lõi tạo nên sự vượt trội của OperisChat. Nó cho phép chatbot không chỉ Lắng nghe - Trả lời mà còn có thể Chủ động Hành động. Chatbot có thể tự ra quyết định, chủ động thực hiện các tác vụ phức tạp như kết nối vào hệ thống CRM, ERP để kiểm tra thông tin khách hàng, tự động đặt lịch hẹn vào lịch của nhân viên hay xử lý các bước trong quy trình bán hàng mà không cần kịch bản có sẵn. Đây là khả năng tự chủ giúp chatbot hoạt động như một nhân viên thực thụ.",
  },
  {
    id: 3,
    question: "OperisChat có phù hợp với mô hình doanh nghiệp nào?",
    answer:
      "OperisChat được thiết kế để phù hợp với mọi quy mô doanh nghiệp từ doanh nghiệp lớn cho đến các doanh nghiệp vừa và nhỏ (SME). Đối với doanh nghiệp lớn: dịch vụ đủ mạnh và có khả năng mở rộng linh hoạt, phù hợp tích hợp CRM/ERP chuyên sâu. Đối với SME: cung cấp các gói linh hoạt theo nhu cầu và ngân sách. Mục tiêu là mang giải pháp Chatbot AI mạnh mẽ đến cho mọi doanh nghiệp.",
  },
  {
    id: 4,
    question:
      "Khả năng xử lý ngôn ngữ tự nhiên (NLP) của OperisChat có hiểu được tiếng Việt phức tạp không?",
    answer:
      "Có. Đây là thế mạnh vượt trội của OperisChat. Được huấn luyện trên hệ thống Big Data của VCCorp trong hơn 10 năm, công nghệ NLP có khả năng hiểu chính xác tiếng Việt đa vùng miền, bao gồm từ lóng, viết tắt, sai chính tả và câu hỏi phức tạp. Nhờ đó cuộc trò chuyện trở nên tự nhiên và mượt mà nhất.",
  },
  {
    id: 5,
    question:
      "OperisChat có thể tích hợp với các phần mềm quản lý (CRM, ERP) mà doanh nghiệp đang sử dụng không?",
    answer:
      "Có. OperisChat có khả năng tích hợp với hầu hết các phần mềm CRM, ERP và các hệ thống quản lý nội bộ khác thông qua API. Điều này giúp đồng bộ dữ liệu, tạo ra quy trình vận hành khép kín và thông minh cho doanh nghiệp.",
  },
  {
    id: 6,
    question: "Tôi có cần đội ngũ kỹ thuật để vận hành OperisChat không?",
    answer:
      "Không cần thiết. Giao diện quản trị của OperisChat được thiết kế trực quan và dễ sử dụng. Người dùng có thể xây dựng kịch bản, cập nhật kiến thức cho chatbot và theo dõi báo cáo mà không cần biết lập trình. Đội ngũ hỗ trợ sẽ đào tạo đầy đủ khi triển khai.",
  },
  {
    id: 7,
    question:
      "Chi phí của OperisChat được tính như thế nào và có những gói dịch vụ nào?",
    answer:
      "OperisChat cung cấp nhiều gói dịch vụ linh hoạt, phù hợp với các quy mô doanh nghiệp khác nhau. Chi phí phụ thuộc vào số lượng cuộc trò chuyện, tính năng nâng cao và mức hỗ trợ. Vui lòng liên hệ 0964 69 12 99 để được báo giá chi tiết và tư vấn gói phù hợp.",
  },
  {
    id: 8,
    question:
      "Thông tin khách hàng và dữ liệu kinh doanh có được bảo mật không?",
    answer:
      "Có. Bảo mật là ưu tiên hàng đầu của chúng tôi. OperisChat được xây dựng trên nền tảng công nghệ vững chắc của VCCorp và tuân thủ các tiêu chuẩn an ninh mạng nghiêm ngặt nhất, đảm bảo an toàn tuyệt đối cho dữ liệu doanh nghiệp.",
  },
  {
    id: 9,
    question: "Chính sách hỗ trợ khách hàng của Operis như thế nào?",
    answer:
      "Chúng tôi cung cấp hỗ trợ 24/7 với đội ngũ chuyên nghiệp. Không chỉ hỗ trợ kỹ thuật, đội ngũ còn tư vấn cách tối ưu hóa sử dụng OperisChat để doanh nghiệp khai thác tối đa hiệu quả.",
  },
];

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" as const },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: "easeInOut" as const },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

const iconVariants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[url('/images/bg-projrecent.png')] bg-no-repeat bg-top bg-center bg-[length:100%_auto] pt-10 pb-11 relative z-1">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="font-semibold leading-[140%] text-[#686868] text-center text-xl">
            FAQ
          </div>
          <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-[#1E1F4D] leading-[140%] text-center">
            Câu hỏi thường gặp
          </h2>
        </div>

        {/* Accordion */}
        <div className="question_list max-w-3xl mx-auto">
          <div id="accordion" className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className="question_item bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <motion.button
                  type="button"
                  className="question_item_title w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  whileHover={{ backgroundColor: "rgba(57, 144, 248, 0.03)" }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-semibold text-base md:text-lg pr-4 ${
                      openIndex === index ? "text-[#632AE8]" : "text-[#000]"
                    }`}
                  >
                    {index + 1}. {faq.question}
                  </span>
                  <motion.div
                    variants={iconVariants}
                    animate={openIndex === index ? "expanded" : "collapsed"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#3990F8] flex-shrink-0" />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key={`content-${faq.id}`}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={contentVariants}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="question_txt px-6 pb-5 text-gray-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
