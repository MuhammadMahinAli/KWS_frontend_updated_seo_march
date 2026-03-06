import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = FAQ_ITEMS;

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 xl:px-[341px]">
      <div className="max-w-[1000px] mx-auto">
        {/* Mobile: Compact FAQ heading with divider */}
        <div className="md:hidden mb-6">
          <div className="flex gap-3 items-center w-full">
            <h2 className="font-medium text-[18px] text-[#1c1917] tracking-[-0.5px] leading-[28px]">
              Frequently Asked Questions About AI Agent Development
            </h2>
            <div className="flex-1 h-px bg-[#dadada]" />
          </div>
        </div>

        {/* Desktop: Full FAQ heading */}
        <div className="hidden md:block text-center mb-3">
          <h2 className="font-medium text-[60px] text-black leading-[75px] mb-2">
            Frequently Asked Questions About AI Agent Development
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#dadada]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 md:px-[31px] md:py-[20px] flex items-center justify-between text-left md:h-[74px]"
              >
                <span className="font-medium text-[14px] md:text-[18px] text-[#18181b] leading-[32px] flex-1 pr-4">
                  {faq.question}
                </span>
                <div className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                      <circle cx="9" cy="9" r="8.5" fill="#18181B" stroke="#18181B" strokeWidth="0.1" />
                      <path d="M5.625 9H12.375" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                    </svg>
                  ) : (
                    <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                      <path d="M9 0.9375C4.54969 0.9375 0.9375 4.54969 0.9375 9C0.9375 13.4503 4.54969 17.0625 9 17.0625C13.4503 17.0625 17.0625 13.4503 17.0625 9C17.0625 4.54969 13.4503 0.9375 9 0.9375ZM11.8125 9.46875H9.46875V11.8125C9.46875 12.0734 9.26094 12.2812 9 12.2812C8.73906 12.2812 8.53125 12.0734 8.53125 11.8125V9.46875H6.1875C5.92656 9.46875 5.71875 9.26094 5.71875 9C5.71875 8.73906 5.92656 8.53125 6.1875 8.53125H8.53125V6.1875C8.53125 5.92656 8.73906 5.71875 9 5.71875C9.26094 5.71875 9.46875 5.92656 9.46875 6.1875V8.53125H11.8125C12.0734 8.53125 12.2812 8.73906 12.2812 9C12.2812 9.26094 12.0734 9.46875 11.8125 9.46875Z" fill="#A3A09E" />
                    </svg>
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="pb-4 md:px-[31px] md:pb-5 font-normal text-[12px] md:text-[14px] text-[#4b5563] md:text-[#6b7280] leading-[20px]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}