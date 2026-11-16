'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
  Tv2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;
const THIRD_KEYWORD = CONSTANTS.TERTIARY_FOCUS_KEYWORD;

type Currency = 'EUR' | 'USD';
type Devices = 1 | 2 | 3;
type Months = 3 | 6 | 12;

// ---------------------------------------------------------------------------
// PRICING TABLE
// ---------------------------------------------------------------------------
const PRICING: Record<Currency, Record<Devices, Record<Months, number>>> = {
  EUR: {
    1: { 3: 35, 6: 45, 12: 59 },
    2: { 3: 45, 6: 65, 12: 79 },
    3: { 3: 59, 6: 79, 12: 99 },
  },
  USD: {
    1: { 3: 35, 6: 45, 12: 65 },
    2: { 3: 45, 6: 65, 12: 85 },
    3: { 3: 59, 6: 79, 12: 99 },
  },
};

const SYMBOL: Record<Currency, string> = { EUR: '€', USD: '$' };
const DISCOUNT_BY_DEVICES: Record<Devices, number> = { 1: 30, 2: 45, 3: 60 };

// ---------------------------------------------------------------------------
// Payment Method SVG Icons
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  const shellBg = '#0F2942';
  const shellBorder = isDark ? 'rgba(255,215,0,0.45)' : 'rgba(0,150,199,0.30)';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="22" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill="#F8FAFC" letterSpacing="-0.5">VISA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#60A5FA">Pay</text>
          <text x="24" y="27" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="#93C5FD">Pal</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fontWeight="900" fill="#60A5FA">SEPA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">₿</text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// ANIMATED PRICE COMPONENT
// ---------------------------------------------------------------------------
const AnimatedPrice = ({
  value,
  symbol,
  className,
}: {
  value: number;
  symbol: string;
  className?: string;
}) => {
  return (
    <span className={`inline-flex items-baseline ${className ?? ''}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${symbol}${value}`}
          initial={{ opacity: 0, y: -25, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.7 }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 18 }}
          className="inline-block"
        >
          {symbol}{value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// ---------------------------------------------------------------------------
// COLLAPSIBLE FEATURE LIST
// ---------------------------------------------------------------------------
const FeatureList = ({
  features,
  accent,
  open,
}: {
  features: string[];
  accent: 'gold' | 'blue';
  open: boolean;
}) => {
  const isGold = accent === 'gold';
  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
        open ? 'max-h-[1000px]' : 'max-h-[5.5rem]'
      }`}
    >
      <ul className="w-full space-y-3.5">
        {features.map((feature, idx) => (
          <li
            key={feature}
            className={`flex items-center gap-3 font-semibold text-sm ${
              isGold ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'
            }`}
          >
            {isGold ? (
              <div className="bg-[#FFD700]/20 p-0.5 rounded-full border border-[#FFD700]/40 shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#FFD700]" />
              </div>
            ) : (
              <CheckCircle2 className="w-4 h-4 text-[#39FF14] shrink-0" />
            )}
            <span>{feature}</span>
            {isGold && idx === 4 && (
              <span className="bg-[#FFD700]/20 text-[#FFD700] text-[9px] font-black uppercase px-2 py-0.5 rounded ml-auto border border-[#FFD700]/40">
                All PPVs
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ---------------------------------------------------------------------------
// CIRCLE TOGGLE
// ---------------------------------------------------------------------------
const EdgeToggle = ({
  open,
  onClick,
  accent,
  controlsId,
}: {
  open: boolean;
  onClick: () => void;
  accent: 'gold' | 'blue';
  controlsId: string;
}) => {
  const isGold = accent === 'gold';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controlsId}
      aria-label={open ? 'Show fewer features' : 'Show all features'}
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081425] active:scale-95 ${
        isGold
          ? 'bg-[#FFD700] text-[#081425] hover:bg-[#E6C200] focus-visible:ring-[#FFD700]'
          : 'bg-[#39FF14] text-black hover:bg-[#007ea8] focus-visible:ring-[#39FF14]' // Fixed white text
      }`}
    >
      {open ? (
        <ChevronUp className="w-5 h-5" strokeWidth={3} />
      ) : (
        <ChevronDown className="w-5 h-5" strokeWidth={3} />
      )}
    </button>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<Devices>(1);
  const [currency, setCurrency] = useState<Currency>('EUR');

  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    starter: false,
    vip: false,
    premium: false,
  });

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentPrices = PRICING[currency][devices];
  const symbol = SYMBOL[currency];
  const currentDiscount = DISCOUNT_BY_DEVICES[devices];

  const handleWhatsAppRedirect = (months: Months) => {
    const price = currentPrices[months];
    const deviceLabel = devices > 1 ? 'devices' : 'device';
    const giftLine = months === 12 ? ' + 1 Year Player Subscription' : '';
    const message = `Hi ${SECONDARY_KEYWORD}! I'd like the ${months}-month ${FOCUS_KEYWORD} plan for ${devices} ${deviceLabel} (${symbol}${price} ${currency})${giftLine}.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hi! I'd like to try the free 24-hour trial of ${FOCUS_KEYWORD}.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing-section"
      className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 bg-[#081425] text-[#F8FAFC] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#39FF14]/10 blur-[140px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(30,58,82,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,82,0.55) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#39FF14]/60 bg-[#0B1F35] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#39FF14]/10">
            <Crown className="w-4 h-4 text-[#39FF14]" />
            <span className="text-[#39FF14] font-black text-xs uppercase tracking-widest">
              Trusted {FOCUS_KEYWORD} Provider
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F8FAFC] mb-6 uppercase tracking-tight leading-tight">
            CHOOSE YOUR <span className="text-[#39FF14]">{FOCUS_KEYWORD.toUpperCase()}</span> PLAN
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience premium {THIRD_KEYWORD} with blazing-fast 4K Ultra HD streaming. Save more with 12-month plans including multi-room, 24/7 WhatsApp service, and instant activation.
          </p>

          {/* Currency Switcher */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs text-[#94A3B8] font-black uppercase tracking-widest">
                Select Currency
              </span>
            </div>
            <div className="inline-flex bg-[#0F2942] border border-[#1E3A52] rounded-2xl p-1.5 shadow-2xl relative">
              {(['EUR', 'USD'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  aria-pressed={currency === c}
                  aria-label={c === 'EUR' ? 'Euro pricing' : 'US Dollar pricing'}
                  className={`inline-flex items-center justify-center px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                    currency === c
                      ? 'bg-[#FFD700] text-[#081425] shadow-lg shadow-[#FFD700]/40 scale-[1.03] ring-2 ring-[#FFD700]/40'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  {c === 'EUR' ? '€ EUR' : '$ USD'}
                </button>
              ))}
            </div>
          </div>

          {/* Device Switcher */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#39FF14]" />
              <span className="text-xs text-[#94A3B8] font-black uppercase tracking-widest">
                Select Number of Simultaneous Devices
              </span>
            </div>
            <div className="inline-flex bg-[#0F2942] border border-[#1E3A52] rounded-2xl p-1.5 shadow-2xl relative">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setDevices(d as Devices)}
                  aria-pressed={devices === d}
                  aria-label={`${d} ${d > 1 ? 'devices' : 'device'} plan`}
                  className={`inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative cursor-pointer disabled:cursor-not-allowed ${
                    devices === d
                      ? 'bg-[#FFD700] text-[#081425] shadow-lg shadow-[#FFD700]/40 scale-[1.03] ring-2 ring-[#FFD700]/40'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  <Tv2
                    className={`w-4 h-4 shrink-0 ${
                      devices === d ? 'text-[#081425]' : 'text-[#94A3B8]'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{d} {d > 1 ? 'Devices' : 'Device'}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 lg:gap-8 max-w-6xl mx-auto mt-12 pb-16 relative z-10">

          {/* ================= CARD 1: 3 MONTHS (STARTER) ================= */}
          <div className="relative">
            <FadeInItem className="relative bg-[#0F2942] text-[#F8FAFC] border-4 border-[#1E3A52] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-visible shadow-xl transition-all duration-500 hover:border-[#39FF14] hover:shadow-[0_25px_60px_rgba(0,150,199,0.18)] hover:-translate-y-3">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#39FF14]/0 via-[#39FF14]/0 to-[#39FF14]/0 group-hover:from-[#39FF14]/10 group-hover:to-[#39FF14]/15 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-black text-[#39FF14] uppercase tracking-[0.2em]">Starter Plan</h4>
                  <MonitorPlay className="w-5 h-5 text-[#39FF14] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                <div className="text-3xl font-black text-[#F8FAFC] mb-2 tracking-tighter uppercase">3 Months</div>

                <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#081425] border-2 border-[#39FF14]/20 shadow-md transition-all duration-500 group-hover:border-[#39FF14] group-hover:shadow-lg group-hover:scale-[1.05]">
                  <span className="text-5xl font-black text-[#F8FAFC] tracking-tighter transition-all duration-500 group-hover:text-[#39FF14]">
                    <AnimatedPrice value={currentPrices[3]} symbol={symbol} />
                  </span>
                </div>
                <div className="text-[11px] font-black text-[#39FF14] mb-5 uppercase tracking-widest border border-[#39FF14]/30 self-start px-3 py-1 rounded-full inline-block bg-[#39FF14]/10">
                  {symbol}{(currentPrices[3] / 3).toFixed(2)} / Month
                </div>

                <button
                  onClick={() => handleWhatsAppRedirect(3)}
                  className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#FFD700] text-[#081425] font-black text-xs uppercase tracking-widest hover:bg-[#E6C200] transition-all shadow-lg shadow-[#FFD700]/30 active:scale-95 group-hover:scale-105 mb-4 cursor-pointer disabled:cursor-not-allowed"
                >
                  Order 3 Months
                </button>

                <div className="mb-6 pt-3 border-t border-[#1E3A52]">
                  <div className="flex items-center justify-between text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-2">
                    <span>Secure Payments</span>
                    <Lock className="w-3 h-3 text-[#94A3B8]" />
                  </div>
                  <PaymentIcons variant="light" />
                </div>

                <FeatureList
                  accent="blue"
                  open={openCards.starter}
                  features={[
                    `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                    '4K Ultra HD & 60FPS Premium Sports',
                    '55,000+ Live Channels Worldwide',
                    '150,000+ Movies & TV Shows (Updated Daily)',
                    'NFL, NBA, MLB, NHL, UFC & All PPV Events',
                    '7-Day Catch-Up & Full EPG Guide',
                    'Anti-Freeze US Edge Servers',
                    'Smart TV, Firestick, Apple TV, iOS, Android',
                    '24/7 Support via WhatsApp',
                  ]}
                />

                <div className="p-3 mt-6 bg-[#081425] rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#39FF14]/15">
                  <Zap className="w-4 h-4 text-[#39FF14] shrink-0" />
                  <span className="text-[11px] font-black text-[#F8FAFC] uppercase tracking-wider">
                    Instant Activation • 99.9% Uptime
                  </span>
                </div>
              </div>

              <EdgeToggle
                open={openCards.starter}
                onClick={() => toggleCard('starter')}
                accent="blue"
                controlsId="features-starter"
              />
            </FadeInItem>
          </div>

          {/* ================= CARD 2: 12 MONTHS (VIP) ================= */}
          <div className="relative">
            <FadeInItem className="relative bg-[#0B1F35] border-2 border-[#FFD700] rounded-3xl p-6 sm:p-9 flex flex-col group transition-all duration-500 hover:shadow-[0_0_70px_rgba(255,215,0,0.40)] lg:-translate-y-4 hover:-translate-y-6 shadow-[0_0_50px_rgba(255,215,0,0.20)] z-20 overflow-visible">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
                <div className="bg-[#FFD700] text-[#081425] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-[#081425]">
                  <Flame className="w-3.5 h-3.5 fill-current text-[#081425]" /> Bestseller {FOCUS_KEYWORD}
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD700]/0 via-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/5 group-hover:to-[#FFD700]/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col pt-2">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-black text-[#FFD700] uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-[#FFD700]" /> Ultimate VIP
                  </h4>
                  <Sparkles className="w-4 h-4 text-[#FFD700] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>

                <div className="mb-2 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#39FF14] text-black text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#39FF14]/30">
                  <Flame className="w-3 h-3 fill-current" /> {currentDiscount}% OFF
                </div>

                <div className="text-3xl font-black text-[#FFD700] mb-2 tracking-tighter uppercase">
                  12 Months
                </div>

                <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#081425] border-2 border-[#FFD700]/30 shadow-md transition-all duration-500 group-hover:border-[#FFD700] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.45)] group-hover:scale-[1.05]">
                  <span className="text-6xl font-black text-[#FFD700] tracking-tighter drop-shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.7)]">
                    <AnimatedPrice value={currentPrices[12]} symbol={symbol} />
                  </span>
                </div>

                <div className="text-[11px] font-black text-[#FFD700] mb-5 uppercase tracking-widest border border-[#FFD700] self-start px-4 py-1.5 rounded-full inline-block bg-[#FFD700]/10 shadow-sm">
                  BEST PRICE: {symbol}{(currentPrices[12] / 12).toFixed(2)} / Month
                </div>

                {/* ===== +1 YEAR PLAYER SUBSCRIPTION GIFT (VIP ONLY) ===== */}
                <div className="relative mb-4 rounded-xl border border-dashed border-[#39FF14]/60 bg-[#39FF14]/15 px-3 py-2 overflow-hidden">
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="shrink-0 w-7 h-7 rounded-lg bg-[#39FF14] text-black flex items-center justify-center shadow shadow-[#39FF14]/40">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-[9px] font-black uppercase tracking-[0.18em] text-[#39FF14]">
                        Free Gift
                      </div>
                      <p className="text-[12px] font-extrabold text-[#F8FAFC]">
                        +1 Year Player Subscription
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppRedirect(12)}
                  className="w-full text-center whitespace-nowrap px-6 py-4 sm:py-5 rounded-full bg-[#FFD700] text-[#081425] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#E6C200] transition-all shadow-xl shadow-[#FFD700]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(255,215,0,0.45)] mb-4 cursor-pointer disabled:cursor-not-allowed"
                >
                  Get 12 Months VIP + Gift
                </button>

                <div className="mb-6 pt-3 border-t border-[#FFD700]/20">
                  <div className="flex items-center justify-between text-[10px] font-black text-[#FFD700]/80 uppercase tracking-widest mb-2">
                    <span>Secure Payments</span>
                    <Lock className="w-3 h-3 text-[#FFD700]" />
                  </div>
                  <PaymentIcons variant="dark" />
                </div>

                <FeatureList
                  accent="gold"
                  open={openCards.vip}
                  features={[
                    `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                    'Ultra HD 4K & Full HD 60FPS Quality',
                    '55,000+ Premium Live Channels',
                    '150,000+ Movies & TV Shows (New Titles Daily)',
                    'NFL, NBA, UFC, Boxing & All PPV Events',
                    '7-Day Catch-Up & Full EPG Guide',
                    'Dedicated VIP High-Speed Server Line',
                    'Smart TV, Firestick, Apple TV, iOS, Android, MAG',
                    '24/7 VIP Priority Support via WhatsApp',
                  ]}
                />

                <div className="p-3 mt-6 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFD700]/20">
                  <Crown className="w-4 h-4 text-[#FFD700] shrink-0" />
                  <span className="text-[11px] font-black text-[#FFD700] uppercase tracking-wider">
                    VIP line + 1-year player gift
                  </span>
                </div>
              </div>

              <EdgeToggle
                open={openCards.vip}
                onClick={() => toggleCard('vip')}
                accent="gold"
                controlsId="features-vip"
              />
            </FadeInItem>
          </div>

          {/* ================= CARD 3: 6 MONTHS (PREMIUM) ================= */}
          <div className="relative">
            <FadeInItem className="relative bg-gradient-to-br from-[#0F2942] via-[#0B1F35] to-[#0F2942] border-4 border-[#39FF14]/60 rounded-3xl p-6 sm:p-8 flex flex-col group overflow-visible shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-[#39FF14] hover:shadow-[0_35px_80px_rgba(0,150,199,0.20)] hover:-translate-y-3">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,_rgba(0,150,199,0.10),_transparent_60%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-black text-[#39FF14] uppercase tracking-[0.2em]">Premium Plan</h4>
                  <MonitorPlay className="w-5 h-5 text-[#39FF14] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                <div className="text-3xl font-black text-[#F8FAFC] mb-2 tracking-tighter uppercase">6 Months</div>

                <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#081425] border-2 border-[#39FF14]/30 shadow-md transition-all duration-500 group-hover:border-[#39FF14] group-hover:shadow-[0_0_30px_rgba(0,150,199,0.45)] group-hover:scale-[1.05]">
                  <span className="text-5xl font-black text-[#F8FAFC] tracking-tighter transition-all duration-500 group-hover:text-[#39FF14]">
                    <AnimatedPrice value={currentPrices[6]} symbol={symbol} />
                  </span>
                </div>
                <div className="text-[11px] font-black text-[#39FF14] mb-5 uppercase tracking-widest border border-[#39FF14]/60 self-start px-3 py-1 rounded-full inline-block bg-[#39FF14]/10">
                  {symbol}{(currentPrices[6] / 6).toFixed(2)} / Month
                </div>

                <button
                  onClick={() => handleWhatsAppRedirect(6)}
                  className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#FFD700] text-[#081425] font-black text-xs uppercase tracking-widest hover:bg-[#E6C200] transition-all shadow-xl shadow-[#FFD700]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(255,215,0,0.45)] mb-4 cursor-pointer disabled:cursor-not-allowed"
                >
                  Order 6 Months
                </button>

                <div className="mb-6 pt-3 border-t border-[#39FF14]/20">
                  <div className="flex items-center justify-between text-[10px] font-black text-[#39FF14] uppercase tracking-widest mb-2">
                    <span>Secure Payments</span>
                    <Lock className="w-3 h-3 text-[#39FF14]" />
                  </div>
                  <PaymentIcons variant="dark" />
                </div>

                <FeatureList
                  accent="blue"
                  open={openCards.premium}
                  features={[
                    `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                    '4K Ultra HD & 60FPS Premium Sports',
                    '55,000+ Live Channels Worldwide',
                    '150,000+ Movies & TV Shows (Updated Daily)',
                    'NFL, NBA, MLB, NHL, UFC & All PPV Events',
                    '7-Day Catch-Up & Full EPG Guide',
                    'Anti-Freeze US Edge Servers',
                    'Smart TV, Firestick, iOS, Android, Shield',
                    '24/7 Support via WhatsApp',
                  ]}
                />

                <div className="p-3 mt-6 bg-[#39FF14]/15 border border-[#39FF14]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#39FF14]/25">
                  <Zap className="w-4 h-4 text-[#39FF14] shrink-0" />
                  <span className="text-[11px] font-black text-[#F8FAFC] uppercase tracking-wider">
                    Instant Activation • 99.9% Uptime
                  </span>
                </div>
              </div>

              <EdgeToggle
                open={openCards.premium}
                onClick={() => toggleCard('premium')}
                accent="blue"
                controlsId="features-premium"
              />
            </FadeInItem>
          </div>

        </FadeInStagger>

        {/* Free Trial Banner */}
        <FadeIn className="max-w-2xl mx-auto mt-4 relative z-30">
          <div className="bg-[#0F2942] border border-[#39FF14]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group hover:border-[#39FF14] transition-all duration-500">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#39FF14]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 text-left relative z-10">
              <div className="bg-[#39FF14]/10 border border-[#39FF14]/30 p-3 rounded-xl text-[#39FF14] shrink-0 hidden sm:block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
                  <h4 className="text-base font-black text-[#F8FAFC] uppercase tracking-tight">
                    Free 24-Hour Trial
                  </h4>
                </div>
                <p className="text-xs text-[#94A3B8] font-medium">
                  Test {FOCUS_KEYWORD} with no commitment on your TV or smartphone. Our support team guides you through the simple setup directly via WhatsApp.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 relative z-10">
              <button
                onClick={handleFreeTrialRedirect}
                className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-3 rounded-full bg-[#FFD700] text-[#081425] font-black text-xs uppercase tracking-widest hover:bg-[#E6C200] transition-all shadow-lg active:scale-95 hover:scale-105 cursor-pointer disabled:cursor-not-allowed"
              >
                Try Free Now
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}