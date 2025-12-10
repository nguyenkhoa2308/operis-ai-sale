"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Chatbot AI Sale Zalo là gì và hoạt động như thế nào?",
    answer:
      "Chatbot AI Sale Zalo là giải pháp tự động hóa quy trình bán hàng trên nền tảng Zalo. Chatbot có khả năng tự động quét thành viên từ các nhóm Zalo, kết bạn với khách hàng tiềm năng, gửi tin nhắn giới thiệu sản phẩm và tư vấn chốt đơn 24/7 - tất cả hoàn toàn tự động mà không cần nhân viên can thiệp.",
  },
  {
    id: 2,
    question: "Chatbot có thể quét và kết bạn tự động từ nhóm Zalo như thế nào?",
    answer:
      "Chatbot AI sử dụng công nghệ thông minh để quét danh sách thành viên từ các nhóm Zalo mục tiêu (nhóm bất động sản, thời trang, giáo dục...). Sau đó tự động gửi lời mời kết bạn kèm tin nhắn giới thiệu sản phẩm/dịch vụ. Bạn có thể lọc và phân loại khách hàng theo tiêu chí ngành nghề, khu vực để tiếp cận đúng đối tượng.",
  },
  {
    id: 3,
    question: "Chatbot AI có thể gửi tin nhắn hàng loạt trên Zalo không?",
    answer:
      "Có. Chatbot hỗ trợ gửi tin nhắn hàng loạt đến danh sách khách hàng mục tiêu trên Zalo. Bạn có thể cá nhân hóa nội dung tin nhắn, lên lịch gửi theo thời gian và theo dõi tỷ lệ đọc, phản hồi. Tính năng này giúp tiếp cận hàng nghìn khách hàng tiềm năng mỗi ngày mà không tốn thời gian nhắn tin thủ công.",
  },
  {
    id: 4,
    question: "Chatbot có hiểu và trả lời tiếng Việt tự nhiên không?",
    answer:
      "Có. Chatbot AI Sale Zalo được huấn luyện chuyên sâu với tiếng Việt, hiểu được ngữ cảnh, từ lóng, viết tắt và cả những câu hỏi phức tạp. Chatbot có thể tư vấn sản phẩm, báo giá, xử lý phản đối như \"đắt quá\", \"để suy nghĩ\" và hướng dẫn đặt hàng một cách tự nhiên như nhân viên sale thực thụ.",
  },
  {
    id: 5,
    question: "Tôi có thể quản lý nhiều tài khoản Zalo cùng lúc không?",
    answer:
      "Có. Hệ thống cho phép quản lý nhiều tài khoản Zalo OA và Zalo cá nhân trên một nền tảng duy nhất. Bạn có thể theo dõi tất cả cuộc trò chuyện, thống kê hiệu suất từng tài khoản và phân bổ công việc cho chatbot một cách tập trung.",
  },
  {
    id: 6,
    question: "Chatbot có tích hợp được với CRM và hệ thống quản lý đơn hàng không?",
    answer:
      "Có. Chatbot AI Sale Zalo có khả năng đồng bộ dữ liệu khách hàng với các hệ thống CRM, ERP và phần mềm quản lý đơn hàng thông qua API. Khi khách chốt đơn qua Zalo, thông tin sẽ tự động được cập nhật vào hệ thống quản lý của bạn.",
  },
  {
    id: 7,
    question: "Chi phí sử dụng Chatbot AI Sale Zalo như thế nào?",
    answer:
      "Chúng tôi cung cấp nhiều gói dịch vụ linh hoạt phù hợp với mọi quy mô doanh nghiệp. Chi phí tính theo số lượng tin nhắn, số tài khoản Zalo và các tính năng nâng cao. Vui lòng liên hệ 0964 69 12 99 để được tư vấn gói phù hợp và báo giá chi tiết.",
  },
  {
    id: 8,
    question: "Sử dụng Chatbot có an toàn cho tài khoản Zalo của tôi không?",
    answer:
      "Có. Hệ thống được thiết kế để hoạt động trong giới hạn an toàn của Zalo, tránh spam và vi phạm chính sách. Chúng tôi sử dụng các thuật toán thông minh để điều chỉnh tốc độ gửi tin, kết bạn phù hợp, đảm bảo tài khoản Zalo của bạn luôn an toàn.",
  },
  {
    id: 9,
    question: "Tôi có cần biết kỹ thuật để sử dụng Chatbot không?",
    answer:
      "Không cần. Giao diện quản trị được thiết kế trực quan, dễ sử dụng. Bạn chỉ cần thiết lập thông tin sản phẩm, kịch bản tư vấn và chatbot sẽ tự động hoạt động. Đội ngũ hỗ trợ sẽ đào tạo và hướng dẫn chi tiết khi triển khai.",
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
