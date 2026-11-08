import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Clock, MessageSquare, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Prepare mailto link with prefilled subject and message body
    const emailSubject = encodeURIComponent(
      form.subject.trim()
        ? `[Portfolio Contact] ${form.subject.trim()} - from ${form.name.trim()}`
        : `[Portfolio Contact] Project Inquiry from ${form.name.trim()}`
    );

    const emailBody = encodeURIComponent(
      `Hi Srividhyaa,\n\n${form.message.trim()}\n\nBest regards,\n${form.name.trim()}\nEmail: ${form.email.trim()}`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${emailSubject}&body=${emailBody}`;

    // Trigger the client email application
    window.location.href = mailtoUrl;

    // Display clear, honest instructions to the user
    setStatusNotice(
      `Launching your mail client to send to ${profileData.email}. If your mail client didn't open automatically, write directly to ${profileData.email} or call ${profileData.phone}.`
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F8FC] border-t border-[#DCE7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Have an Idea? Let's Connect."
          subtitle="Open for internships, collaborative AI and data projects, creative media production, and technical discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <p className="text-base text-[#64748B] leading-relaxed mb-6">
                I am always excited to discuss emerging technologies, explore Generative AI workflows, support media growth initiatives, and collaborate on purposeful projects.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-[#DCE7F2]/60 text-[#0868E8] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-sm sm:text-base font-bold text-[#102B66] hover:text-[#0868E8] truncate transition-colors block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-[#64748B] hover:text-[#0868E8] hover:bg-[#DCE7F2]/40 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-[#DCE7F2]/60 text-[#0868E8] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                        Phone Contact
                      </span>
                      <a
                        href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                        className="text-sm sm:text-base font-bold text-[#102B66] hover:text-[#0868E8] truncate transition-colors block"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-[#64748B] hover:text-[#0868E8] hover:bg-[#DCE7F2]/40 transition-colors shrink-0"
                    title="Copy Phone Number"
                    aria-label="Copy Phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#DCE7F2]/60 text-[#0868E8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#102B66]">
                      {profileData.location}
                    </span>
                  </div>
                </div>

                {/* Response SLA Note */}
                <div className="p-4 rounded-xl bg-[#DCE7F2]/30 border border-[#DCE7F2] flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0868E8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#102B66]">Quick Response</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Messages received via email or phone are typically answered within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kromaxzon Organization Badge */}
            <div className="pt-6 border-t border-[#DCE7F2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#102B66] text-white flex items-center justify-center font-bold text-sm">
                  <span>KT</span>
                </div>
                <div>
                  <span className="text-xs text-[#64748B] block font-mono">Current Association</span>
                  <a
                    href="https://www.kromaxzon.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#102B66] hover:text-[#0868E8] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Media &amp; Growth — Kromaxzon Technologies</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0868E8]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#DCE7F2] card-shadow">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#0868E8]" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#102B66]">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B66] mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Priyadharshini"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F8FC] border text-sm text-[#102B66] placeholder:text-gray-400 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                          : 'border-[#DCE7F2] focus:border-[#0868E8] focus:bg-white'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B66] mb-1.5"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. you@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F8FC] border text-sm text-[#102B66] placeholder:text-gray-400 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                          : 'border-[#DCE7F2] focus:border-[#0868E8] focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B66] mb-1.5"
                  >
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Collaboration on AI Project / Internship Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F8FC] border border-[#DCE7F2] text-sm text-[#102B66] placeholder:text-gray-400 focus:outline-none focus:border-[#0868E8] focus:bg-white transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B66] mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your initiative, idea, or role opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#F5F8FC] border text-sm text-[#102B66] placeholder:text-gray-400 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                        : 'border-[#DCE7F2] focus:border-[#0868E8] focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0868E8] hover:bg-[#0756C2] text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg shadow-[#0868E8]/25 hover:shadow-[#0868E8]/40 transition-all cursor-pointer active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {/* Status Notice */}
                {statusNotice && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#DCE7F2]/60 border border-[#0868E8]/30 text-xs sm:text-sm text-[#102B66] flex items-start gap-2.5 mt-4"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0868E8] shrink-0 mt-0.5" />
                    <p>{statusNotice}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

