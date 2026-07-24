import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/consultingData';

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const isDecimal = value % 1 !== 0;
    const duration = 1800; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref} className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-white">
      {displayValue}
      {suffix}
    </span>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#0A2E5C] text-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9962C_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-[#C9962C]/40 transition-all"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="mt-1 text-2xs font-bold text-[#C9962C] uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
              <div className="mt-0.5 text-3xs text-white/60 leading-snug">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
