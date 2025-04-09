import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface SectionProps {
  number: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: React.ReactNode;
  steps?: string[];
  className?: string;
  lastSection?: boolean;
}

const Section = ({
  number,
  title,
  subtitle,
  description,
  image,
  steps = [],
  className,
  lastSection = false,
}: SectionProps) => {
  const { progress, ref } = useScrollProgress();

  return (
    <section
      ref={ref}
      className={cn("relative min-h-screen flex items-center py-20", className)}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#00221d] hidden md:block">
        <div
          className="absolute top-0 left-0 right-0 bg-[#25c19b] transition-all duration-300 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[10%] -mt-6 z-10">
        <div className="h-[80px] w-[80px] rounded-full flex items-center justify-center bg-background text-white font-bold text-[42px] font-['DM Sans']">
          {number}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 md:order-1 md:col-span-1 grid grid-cols-1 gap-6"
          >
            {image && (
              <div className="flex justify-center scale-125 md:scale-[3.4] transition-transform">
                {image}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2 md:col-span-1 md:pl-10"
          >
            <h2 className="text-[32px] md:text-[32px] font-medium font-['Lexend'] text-white mb-3">
              {title}
            </h2>
            <h3 className="text-[24px] md:text-[28px] font-medium font-['Lexend'] text-white mb-4">
              {subtitle}
            </h3>
            <p className="text-[16px] md:text-[18px] font-light font-['Lexend'] text-white mb-6">
              {description}
            </p>

            {steps.length > 0 && (
              <div className="space-y-3 mt-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[rgba(143,194,159,0.4)] p-5 rounded-lg"
                  >
                    <div className="bg-emerald-900 rounded-full p-1.5 shrink-0">
                      <Check className="text-white w-4 h-4" />
                    </div>
                    <p className="text-[16px] md:text-[18px] text-white font-['Lexend']">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;
