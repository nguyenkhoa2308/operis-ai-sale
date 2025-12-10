"use client";

import { useState, useMemo } from "react";
import { Header, Footer } from "@/components/landing";
import { Sparkles, Zap, Cpu } from "lucide-react";
import Link from "next/link";

type PricingType = "chatai" | "usecase";
type PricingTerm = 1 | 6 | 12;
type GptMode = "gpt5" | "gpt4" | "gpt4mini";

interface AdditionalService {
  name: string;
  quantity: string;
  price: number;
}


const gptModes = [
  {
    id: "gpt5" as GptMode,
    title: "Mode GPT 5.0",
    description: "Thông minh, mạnh mẽ vượt trội",
    icon: Sparkles,
  },
  {
    id: "gpt4" as GptMode,
    title: "Mode GPT 4.0",
    description: "Ổn định và đáng tin cậy",
    icon: Zap,
  },
  {
    id: "gpt4mini" as GptMode,
    title: "Mode GPT 4.0 mini",
    description: "Nhẹ, nhanh và tiết kiệm",
    icon: Cpu,
  },
];

// Pricing data for each GPT mode and term
interface GptPricingData {
  id: number;
  words: number;
  storage: string;
  pricePerWord: number;
}

type PricingDataByTerm = Record<PricingTerm, GptPricingData[]>;

// Base package config per mode (gpt4mini has different first package)
type BasePackage = { id: number; words: number; storage: string };

const basePackagesStandard: BasePackage[] = [
  { id: 1, words: 50000, storage: "3GB" },
  { id: 2, words: 100000, storage: "5GB" },
  { id: 3, words: 200000, storage: "7GB" },
  { id: 4, words: 300000, storage: "10GB" },
  { id: 5, words: 400000, storage: "15GB" },
  { id: 6, words: 500000, storage: "20GB" },
  { id: 7, words: 600000, storage: "25GB" },
  { id: 8, words: 700000, storage: "30GB" },
  { id: 9, words: 800000, storage: "35GB" },
  { id: 10, words: 900000, storage: "40GB" },
  { id: 11, words: 1000000, storage: "45GB" },
];

const basePackagesMini: BasePackage[] = [
  { id: 1, words: 75000, storage: "3GB" }, // Mini starts with 75k
  { id: 2, words: 100000, storage: "5GB" },
  { id: 3, words: 200000, storage: "7GB" },
  { id: 4, words: 300000, storage: "10GB" },
  { id: 5, words: 400000, storage: "15GB" },
  { id: 6, words: 500000, storage: "20GB" },
  { id: 7, words: 600000, storage: "25GB" },
  { id: 8, words: 700000, storage: "30GB" },
  { id: 9, words: 800000, storage: "35GB" },
  { id: 10, words: 900000, storage: "40GB" },
  { id: 11, words: 1000000, storage: "45GB" },
];

// Price per word config: [lowTier (1-5), highTier (6-11)]
type PriceConfig = Record<PricingTerm, [number, number]>;

const gpt5Prices: PriceConfig = { 1: [23, 19], 6: [22, 18], 12: [21, 17] };
const gpt4Prices: PriceConfig = { 1: [23, 19], 6: [22, 18], 12: [21, 17] };
const gpt4miniPrices: PriceConfig = { 1: [23, 19], 6: [22, 18], 12: [21, 17] };

// Generate packages for a term
function generatePackages(
  basePackages: BasePackage[],
  prices: PriceConfig,
  term: PricingTerm
): GptPricingData[] {
  const [lowPrice, highPrice] = prices[term];
  return basePackages.map((pkg) => ({
    ...pkg,
    pricePerWord: pkg.id <= 5 ? lowPrice : highPrice,
  }));
}

const gptPricingData: Record<GptMode, PricingDataByTerm> = {
  gpt5: {
    1: generatePackages(basePackagesStandard, gpt5Prices, 1),
    6: generatePackages(basePackagesStandard, gpt5Prices, 6),
    12: generatePackages(basePackagesStandard, gpt5Prices, 12),
  },
  gpt4: {
    1: generatePackages(basePackagesStandard, gpt4Prices, 1),
    6: generatePackages(basePackagesStandard, gpt4Prices, 6),
    12: generatePackages(basePackagesStandard, gpt4Prices, 12),
  },
  gpt4mini: {
    1: generatePackages(basePackagesMini, gpt4miniPrices, 1),
    6: generatePackages(basePackagesMini, gpt4miniPrices, 6),
    12: generatePackages(basePackagesMini, gpt4miniPrices, 12),
  },
};

const usecasePackages = [
  {
    id: 1,
    name: "Cài đặt ban đầu",
    description:
      "Triển khai hệ thống, phân tích nghiệp vụ, kết nối dữ liệu, cấu hình AI Agent ban đầu.",
    features: [
      "Tư vấn Usecase chuyên sâu",
      "Kết nối và tích hợp hệ thống",
      "Triển khai workflow doanh nghiệp",
      "Đào tạo đội ngũ vận hành",
      "Chi phí thanh toán một lần",
    ],
    price: 20000000,
    oneTime: true,
  },
  {
    id: 2,
    name: "Gói BOT AI theo Usecase",
    description:
      "Hệ thống AI vận hành theo Usecase thực tế của doanh nghiệp, duy trì theo năm.",
    features: [
      "AI Agent được tùy chỉnh cho doanh nghiệp",
      "Tối đa 500.000 từ/tháng",
      "Tích hợp đa kênh: Facebook, Zalo, Tiktok, Website",
      "Báo cáo hiệu suất theo tháng",
      "SLA hỗ trợ kỹ thuật",
      "Đào tạo & hỗ trợ đội ngũ",
    ],
    price: 150000000, // 12 tháng
    oneTime: false,
  },
];

const additionalServices: AdditionalService[] = [
  { name: "Lưu trữ vector DB", quantity: "1GB", price: 1500000 },
  {
    name: "Mua thêm số lượng từ GPT 4.0",
    quantity: "10.000 từ",
    price: 250000,
  },
  {
    name: "Mua thêm số lượng từ GPT 4.0 mini",
    quantity: "15.000 từ",
    price: 250000,
  },
];

const pricingNotes = {
  chatai: [
    "Giá tính trên số từ trả về từ ChatAI trong hội thoại Chat",
    "Số từ được tính tổng trên cả câu hỏi và câu trả lời mà ChatAI trả về",
    "Số từ tính theo tháng và không được cộng dồn sang các tháng tiếp theo",
    "Gói 50k chỉ áp dụng mua từ gói 6 tháng trở lên",
    "Áp dụng trên số Bot theo gói OperisChatAI",
  ],
  usecase: [
    "Báo giá có giá trị trong vòng 01 tháng từ ngày gửi",
    "Thời gian triển khai phát triển tính năng theo yêu cầu bắt đầu theo thỏa thuận giữa Hai bên được thống nhất qua Email",
    "Giá đã bao gồm tất cả tính năng trong gói",
  ],
};

function formatPrice(price: number): string {
  return Math.round(price).toLocaleString("vi-VN");
}

function formatWords(words: number): string {
  return words.toLocaleString("vi-VN");
}

export default function PricingPage() {
  const [pricingType, setPricingType] = useState<PricingType>("chatai");
  const [pricingTerm, setPricingTerm] = useState<PricingTerm>(1);
  const [gptMode, setGptMode] = useState<GptMode>("gpt5");

  // Get pricing data based on GPT mode and term
  const packages = useMemo(() => {
    return gptPricingData[gptMode][pricingTerm];
  }, [gptMode, pricingTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              BẢNG GIÁ
            </h1>
            <p className="text-purple-100 text-xl md:text-2xl max-w-2xl mx-auto">
              Tính năng ChatAI cho OperisChatAI
            </p>
          </div>
        </section>

        {/* Pricing Content */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Selectors Row */}
            <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-between gap-6 mb-10">
              {/* Chọn hình thức */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <span className="text-gray-700 font-semibold">
                  Chọn hình thức
                </span>
                <div className="inline-flex rounded-full bg-white shadow-md p-1.5 gap-1">
                  <button
                    type="button"
                    onClick={() => setPricingType("chatai")}
                    className={`px-6 py-3 text-base font-semibold rounded-full transition-all ${
                      pricingType === "chatai"
                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    ChatAI tư vấn
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricingType("usecase")}
                    className={`px-6 py-3 text-base font-semibold rounded-full transition-all ${
                      pricingType === "usecase"
                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Theo Usecase
                  </button>
                </div>
              </div>

              {/* Chọn kỳ hạn - only for ChatAI */}
              {pricingType === "chatai" && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <span className="text-gray-700 font-semibold">
                    Chọn kỳ hạn
                  </span>
                  <div className="inline-flex rounded-full bg-white shadow-md p-1.5 gap-1">
                    {([1, 6, 12] as PricingTerm[]).map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setPricingTerm(term)}
                        className={`px-6 py-3 text-base font-semibold rounded-full transition-all ${
                          pricingTerm === term
                            ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {term} tháng
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ChatAI Pricing Table */}
            {pricingType === "chatai" && (
              <>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Sidebar - GPT Modes */}
                    <div className="lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gradient-to-b from-gray-50 to-white">
                      {/* Header aligned with table */}
                      <div className="h-16 flex items-center justify-center bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-lg">
                        Chọn gói GPT
                      </div>
                      {/* GPT Mode Options */}
                      <div className="p-4 space-y-3">
                        {gptModes.map((mode) => {
                          const Icon = mode.icon;
                          return (
                            <button
                              key={mode.id}
                              type="button"
                              onClick={() => setGptMode(mode.id)}
                              className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                                gptMode === mode.id
                                  ? "border-[#8B5CF6] bg-purple-50 shadow-md"
                                  : "border-gray-100 hover:border-purple-200 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                                    gptMode === mode.id
                                      ? "bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg"
                                      : "bg-gray-100 text-gray-500"
                                  }`}
                                >
                                  <Icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                  <div
                                    className={`font-semibold text-base ${
                                      gptMode === mode.id
                                        ? "text-[#8B5CF6]"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {mode.title}
                                  </div>
                                  <div className="text-sm text-gray-500 mt-0.5">
                                    {mode.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Content - Pricing Table */}
                    <div className="flex-1 overflow-hidden">
                      {/* Table Header */}
                      <div className="flex h-16 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-base min-w-[550px]">
                        <div className="flex-1 flex items-center justify-center px-6">
                          Số từ/tháng
                        </div>
                        <div className="w-32 flex items-center justify-center px-4">
                          Giá/từ
                        </div>
                        <div className="w-48 flex items-center justify-center px-4">
                          Giá/tháng
                        </div>
                      </div>

                      {/* Table Rows */}
                      <div className="divide-y divide-gray-100 min-w-[550px]">
                        {packages.map((pkg, index) => (
                          <div
                            key={pkg.id}
                            className={`flex items-center transition-all duration-200 ${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                            } hover:bg-purple-50 hover:scale-[1.01] cursor-pointer`}
                          >
                            {/* Words/month */}
                            <div className="flex-1 flex items-center gap-4 px-6 py-5">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white flex items-center justify-center font-bold text-base shadow-md">
                                {pkg.id}
                              </div>
                              <div>
                                <div className="font-bold text-lg text-gray-800">
                                  {formatWords(pkg.words)}
                                  <span className="text-gray-500 font-normal text-base ml-1">
                                    từ
                                  </span>
                                </div>
                                <div className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                                  <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                                  Lưu trữ: {pkg.storage}
                                </div>
                              </div>
                            </div>

                            {/* Price per word */}
                            <div className="w-32 px-4 py-5 text-center">
                              <div className="inline-flex items-baseline gap-0.5">
                                <span className="font-bold text-xl text-[#8B5CF6]">
                                  {pkg.pricePerWord}
                                </span>
                                <span className="text-gray-500 text-base">
                                  đ
                                </span>
                              </div>
                            </div>

                            {/* Price per month = words * pricePerWord */}
                            <div className="w-48 px-4 py-5 text-center">
                              <div className="font-bold text-xl text-gray-800">
                                {formatPrice(pkg.words * pkg.pricePerWord)}
                                <span className="text-gray-500 font-normal text-sm ml-1">
                                  đ
                                </span>
                              </div>
                              <div className="text-sm text-gray-400">
                                /tháng
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
                  {/* Header */}
                  <div className="flex h-14 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-base">
                    <div className="flex-1 flex items-center px-6">
                      Sản phẩm dịch vụ mua thêm
                    </div>
                    <div className="w-36 flex items-center justify-center px-4">
                      Số lượng
                    </div>
                    <div className="w-48 flex items-center justify-center px-4">
                      Đơn giá
                    </div>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-gray-100">
                    {additionalServices.map((service, index) => (
                      <div
                        key={index}
                        className={`flex items-center hover:bg-purple-50 transition-all duration-200 hover:scale-[1.01] cursor-pointer ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <div className="flex-1 px-6 py-5 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 text-[#8B5CF6] flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-semibold text-gray-800 text-base">
                            {service.name}
                          </span>
                        </div>
                        <div className="w-36 px-4 py-5 text-center">
                          <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-700 font-medium text-sm">
                            {service.quantity}
                          </span>
                        </div>
                        <div className="w-48 px-4 py-5 text-center">
                          <div className="font-bold text-xl text-gray-800">
                            {formatPrice(service.price)}
                            <span className="text-gray-500 font-normal text-sm ml-1">
                              đ
                            </span>
                          </div>
                          <div className="text-sm text-gray-400">/tháng</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Usecase Pricing Table */}
            {pricingType === "usecase" && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-8">
                {/* Header */}
                <div className="grid grid-cols-1 md:grid-cols-5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-base">
                  <div className="py-4 px-6 col-span-2 hidden md:block">
                    Hạng mục
                  </div>
                  <div className="py-4 px-4 text-center hidden md:block">
                    Đơn vị
                  </div>
                  <div className="py-4 px-4 text-center hidden md:block">
                    Số lượng
                  </div>
                  <div className="py-4 px-4 text-center hidden md:block">
                    Thành tiền (VAT)
                  </div>
                  <div className="py-4 px-6 md:hidden">Bảng giá Usecase</div>
                </div>

                {/* Row 1 – Cài đặt ban đầu */}
                <div className="grid grid-cols-1 md:grid-cols-5 border-b border-gray-100 hover:bg-purple-50 transition-all duration-200 hover:scale-[1.005] cursor-pointer">
                  <div className="col-span-2 p-5 md:p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Cài đặt ban đầu
                      </h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                          Kết nối với hệ thống
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                          Phân tích nghiệp vụ
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                          Sắp xếp và sàng lọc data
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-gray-700 text-base font-medium">
                    <span className="px-4 py-1.5 bg-gray-100 rounded-full">
                      Gói
                    </span>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-gray-700 text-lg font-semibold">
                    1
                  </div>
                  <div className="flex items-center justify-center md:justify-center px-5 pb-5 md:p-0">
                    <div className="md:text-center">
                      <div className="font-bold text-2xl text-[#8B5CF6]">
                        20,000,000
                        <span className="text-base font-normal ml-1">đ</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Thanh toán 1 lần
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 – Gói Usecase */}
                <div className="grid grid-cols-1 md:grid-cols-5 hover:bg-purple-50 transition-all duration-200 hover:scale-[1.005] cursor-pointer bg-gray-50/50">
                  <div className="col-span-2 p-5 md:p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Gói usecase
                      </h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                          BOT AI tư vấn theo Usecase
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                          Tư vấn usecase
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                          Triển khai usecase
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          <span className="font-medium text-gray-700">
                            SL từ tối đa: 500.000 từ/tháng
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          <span className="font-medium text-gray-700">
                            Thời gian: 12 tháng
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-gray-700 text-base font-medium">
                    <span className="px-4 py-1.5 bg-gray-100 rounded-full">
                      Usecase
                    </span>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-gray-700 text-lg font-semibold">
                    1
                  </div>
                  <div className="flex items-center justify-center md:justify-center px-5 pb-5 md:p-0">
                    <div className="md:text-center">
                      <div className="font-bold text-2xl text-[#8B5CF6]">
                        150,000,000
                        <span className="text-base font-normal ml-1">đ</span>
                      </div>
                      <div className="text-sm text-gray-500">/năm</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-sm">
                  !
                </span>
                Lưu ý quan trọng
              </h4>
              <ul className="space-y-3">
                {pricingNotes[pricingType].map((note, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600 text-base"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic mt-5 pl-5 border-l-2 border-purple-200">
                *Thông tin chi tiết xin liên hệ chuyên viên tư vấn để được hỗ
                trợ.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Đăng ký dùng thử và tư vấn OperisChatAI
                </h3>
                <p className="text-purple-200 text-base">
                  Liên hệ ngay để được tư vấn chọn gói phù hợp với doanh nghiệp
                  của bạn
                </p>
              </div>
              <Link
                href="/#contact"
                className="flex-shrink-0 px-8 py-4 bg-white text-[#8B5CF6] font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-base"
              >
                Tư vấn miễn phí
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
