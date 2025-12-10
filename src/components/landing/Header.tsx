"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Báo giá", href: "/pricing" },
  { label: "Hướng dẫn", href: "/guide" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="OperisChatAI"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-800 leading-tight tracking-tight">
                Operis<span className="text-[#8B5CF6]">ChatAI</span>
              </span>
              <span className="text-[10px] text-gray-500 -mt-0.5">
                AI Sales Agent
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#8B5CF6] bg-purple-50"
                    : "text-gray-700 hover:text-[#8B5CF6] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm"
            >
              Tư vấn miễn phí
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Menu"
            className="md:hidden p-2 text-gray-600 hover:text-[#8B5CF6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#8B5CF6] bg-purple-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tư vấn miễn phí
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
