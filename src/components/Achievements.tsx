import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Zap, Users } from 'lucide-react';
import { achievementsData } from '../data/achievements';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Award,
  Zap,
  Users
};

export const Achievements: React.FC = () => {
  return (
    <div className="mt-16 md:mt-24">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-[#DCE7F2] text-[#0868E8] flex items-center justify-center font-bold">
          <Trophy className="w-4 h-4" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#102B66]">
          Key Achievements &amp; Honors
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievementsData.map((item, index) => {
          const Icon = iconMap[item.iconName] || Trophy;
          const isHighlight = item.title.includes('STEM') || item.title.includes('Academic');

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                isHighlight
                  ? 'bg-gradient-to-br from-[#071B35] to-[#102B66] text-white border-[#0868E8]/50 shadow-lg shadow-[#0868E8]/10'
                  : 'bg-white text-[#102B66] border-[#DCE7F2] card-shadow hover:card-shadow-hover hover:border-[#0868E8]/40'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    isHighlight
                      ? 'bg-[#0868E8] text-white border-[#0868E8] shadow-sm'
                      : 'bg-[#DCE7F2]/60 text-[#0868E8] border-[#DCE7F2]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <h4
                    className={`text-sm sm:text-base font-bold leading-snug mb-1 ${
                      isHighlight ? 'text-white' : 'text-[#102B66]'
                    }`}
                  >
                    {item.title}
                  </h4>

                  {item.context && (
                    <p
                      className={`text-xs leading-relaxed ${
                        isHighlight ? 'text-[#DCE7F2]/80' : 'text-[#64748B]'
                      }`}
                    >
                      {item.context}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

