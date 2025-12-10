"use client";

import { useState } from "react";
import Link from "next/link";
import { CustomInput, CustomSelect, type SelectOption } from "@/components/ui";

// Select options data
const departmentOptions: SelectOption[] = [
  { value: "sales", label: "Kinh doanh / Bán hàng" },
  { value: "marketing", label: "Marketing" },
  { value: "it", label: "Công nghệ / IT" },
  { value: "hr", label: "Nhân sự" },
  { value: "finance", label: "Tài chính / Kế toán" },
  { value: "operations", label: "Vận hành" },
  { value: "management", label: "Ban giám đốc" },
  { value: "other", label: "Khác" },
];

const locationOptions: SelectOption[] = [
  { value: "hanoi", label: "Hà Nội" },
  { value: "hcm", label: "TP. Hồ Chí Minh" },
  { value: "danang", label: "Đà Nẵng" },
  { value: "haiphong", label: "Hải Phòng" },
  { value: "cantho", label: "Cần Thơ" },
  { value: "other", label: "Tỉnh/Thành phố khác" },
];

const jobTitleOptions: SelectOption[] = [
  { value: "ceo", label: "CEO / Giám đốc" },
  { value: "manager", label: "Trưởng phòng / Quản lý" },
  { value: "team_lead", label: "Trưởng nhóm" },
  { value: "specialist", label: "Chuyên viên" },
  { value: "staff", label: "Nhân viên" },
  { value: "other", label: "Khác" },
];

const companySizeOptions: SelectOption[] = [
  { value: "1-10", label: "1 - 10 người" },
  { value: "11-50", label: "11 - 50 người" },
  { value: "51-200", label: "51 - 200 người" },
  { value: "201-500", label: "201 - 500 người" },
  { value: "500+", label: "Trên 500 người" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    department: "",
    location: "",
    jobTitle: "",
    companySize: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // TODO: Integrate with API
  };

  return (
    <section className="w-full bg-transparent bg-[url('/images/bg-form.jpg')] bg-no-repeat bg-center bg-[length:100%_auto] py-13 relative z-1">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">
          {/* Left: Title */}
          <div className="text-center lg:text-left pt-0 lg:pt-20">
            <h2 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-white leading-[140%] lg:text-left mb-2">
              Để lại thông tin để nhận tư vấn và tài khoản dùng thử Dịch vụ
              Chatbot AI - OperisChatAI
            </h2>
            <div className="text-white leading-[130%]">
              OperisChatAI - Dịch vụ Chatbot + Agentic AI tốt nhất cho doanh
              nghiệp Việt
            </div>
          </div>

          {/* Right: Custom Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#3990F8] text-center mb-6">
              Đăng ký dùng thử và tư vấn
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full name */}
              <CustomInput
                placeholder="Họ và tên"
                value={formData.fullName}
                onChange={(value) =>
                  setFormData({ ...formData, fullName: value })
                }
              />

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomInput
                  placeholder="Số điện thoại"
                  type="tel"
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData({ ...formData, phone: value })
                  }
                />
                <CustomInput
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(value) =>
                    setFormData({ ...formData, email: value })
                  }
                />
              </div>

              {/* Company */}
              <CustomInput
                placeholder="Công ty"
                value={formData.company}
                onChange={(value) =>
                  setFormData({ ...formData, company: value })
                }
              />

              {/* Department */}
              <CustomSelect
                placeholder="Phòng ban/ Bộ phận"
                options={departmentOptions}
                value={formData.department}
                onChange={(value) =>
                  setFormData({ ...formData, department: value })
                }
              />

              {/* Location */}
              <CustomSelect
                placeholder="Trụ sở công ty"
                options={locationOptions}
                value={formData.location}
                onChange={(value) =>
                  setFormData({ ...formData, location: value })
                }
              />

              {/* Job title & Company size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomSelect
                  placeholder="Chức danh"
                  options={jobTitleOptions}
                  value={formData.jobTitle}
                  onChange={(value) =>
                    setFormData({ ...formData, jobTitle: value })
                  }
                />
                <CustomSelect
                  placeholder="Quy mô nhân sự"
                  options={companySizeOptions}
                  value={formData.companySize}
                  onChange={(value) =>
                    setFormData({ ...formData, companySize: value })
                  }
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto md:min-w-[220px] mx-auto block px-8 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Nhận tư vấn miễn phí
                </button>
              </div>

              {/* Privacy policy */}
              <p className="text-center text-sm text-gray-500 pt-2">
                Bằng cách nhấn Nhận tư vấn miễn phí, bạn xác nhận đã đọc và đồng
                ý với{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#8B5CF6] hover:underline"
                >
                  Chính sách bảo vệ dữ liệu cá nhân của chúng tôi!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
