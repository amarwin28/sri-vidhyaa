import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, MapPin } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <div className="mt-16 md:mt-24">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-[#DCE7F2] text-[#0868E8] flex items-center justify-center font-bold">
          <Award className="w-4 h-4" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#102B66]">
          Certifications &amp; Credentials
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DCE7F2] card-shadow hover:card-shadow-hover hover:border-[#0868E8]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#DCE7F2]/50 text-[#0868E8] border border-[#DCE7F2] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-bold text-[#102B66] leading-snug mb-1">
                  {cert.title}
                </h4>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#0868E8] mb-2">
                  <span>{cert.issuer}</span>
                  {cert.location && (
                    <span className="text-xs text-[#64748B] flex items-center gap-1 font-normal">
                      • <MapPin className="w-3 h-3" /> {cert.location}
                    </span>
                  )}
                </div>

                {cert.description && (
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

