'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Medal,
  Trophy,
  MessageCircle,
  Tv,
  Film,
  Globe,
  Sparkles,
  ChevronDown,
  KeyRound,
  Smartphone,
  CreditCard,
  Settings,
  Star,
  Users,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#1C65CE] border-t-transparent" />
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const MovieSlider = dynamic(() => import('../components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#000814] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const GlobalServerMap = dynamic(() => import('../components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#000814] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;

// ---------------------------------------------------------------------------
// FAQ ACCORDION ITEM
// ---------------------------------------------------------------------------
function DodoIptvFAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#EDEADE] border-4 ${
        isOpen ? 'border-[#FFD532]' : 'border-[#1C65CE]/20'
      } rounded-2xl p-6 hover:border-[#FFD532]/60 transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#1C65CE]' : 'text-[#04208B] group-hover:text-[#1C65CE]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#1C65CE]' : 'text-[#04208B]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {q}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#1C65CE]'
              : 'text-[#04208B]/30 group-hover:text-[#1C65CE]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#04208B]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#1C65CE] ml-2 py-2">
          {a}
        </p>
      </div>
    </button>
  );
}

export default function DodoIptvPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#04208B] text-[#EDEADE] overflow-hidden">

      {/* HERO */}
      <section className="relative px-15 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#000814]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt={`${BRAND} streaming in 4K ultra HD quality`}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.22]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/20 via-[#000814]/10 to-[#000814]/20" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#FFD532]" />
            <span className="text-[#EDEADE] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              Trusted {BRAND} Provider
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#EDEADE] mb-6 leading-none break-words">
            {BRAND.toUpperCase()} <br />
            <span className="text-[#FFD532]">PREMIUM IPTV PROVIDER</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#EDEADE]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Stream 36,000+ live channels plus a huge library of movies and TV shows in crisp 4K on any device with {BRAND}. Our team sends your login details on WhatsApp, walks you through setup step by step, and gives you a free trial to test on your own TV first. USD pricing with no lock-in contract.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#FFD532] text-[#04208B] font-black text-sm hover:bg-[#E5BE1F] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#FFD532]/30 border border-[#04208B]/20"
            >
              Get {BRAND} Now
            </Link>
            <Link
              href="/free-trial"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#04208B]/80 text-[#EDEADE] border border-[#EDEADE]/20 font-black text-sm hover:bg-[#1C65CE]/20 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFD532] shrink-0" /> Claim Free Trial
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#EDEADE] font-bold uppercase tracking-widest bg-[#EDEADE]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#EDEADE]/10 shadow-2xl">
            <span className="flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-[#FFD532]" /> Instant Login Delivery
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFD532]" /> Xtream Codes API Compatible
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFD532]" /> Works On Any Player App
            </span>
          </div>
        </FadeIn>
      </section>

      {/* 3 STEP SETUP */}
      <section className="py-28 bg-[#EDEADE] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1C65CE_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/25 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1C65CE] animate-pulse" />
                <span className="text-[#1C65CE] font-black text-xs uppercase tracking-widest">
                  {BRAND} Setup
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#04208B] tracking-tight uppercase leading-[1.05]">
                HOW TO USE YOUR <br className="hidden sm:block" />
                <span className="text-[#1C65CE] relative inline-block mt-1">
                  {BRAND.toUpperCase()} LOGIN
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFD532]/60 to-transparent rounded-full" />
                </span>
              </h2>

              <p className="text-[#04208B]/80 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                No worries, we keep it simple. Pick your plan, message us on WhatsApp for your {BRAND} login, and our team walks you through the setup on any device.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Step 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#04208B] text-[#EDEADE] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1C65CE] shadow-[0_15px_35px_rgba(28,101,206,0.2)] hover:border-[#FFD532] hover:shadow-[0_25px_50px_rgba(255,213,50,0.25)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#1C65CE] text-[#EDEADE] shadow-lg shadow-[#1C65CE]/40 border border-[#FFD532] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#FFD532]" />
                  </div>
                  <span className="text-5xl font-black text-[#04208B] bg-[#FFD532] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#04208B]/20">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#04208B] bg-[#FFD532] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#04208B]/20">
                  Step One
                </div>

                <h3 className="text-2xl font-black text-[#EDEADE] mb-3 uppercase tracking-tight group-hover:text-[#FFD532] transition-colors">
                  Pick Your Plan
                </h3>

                <p className="text-[#EDEADE]/90 text-sm font-medium leading-relaxed mb-6">
                  Choose how many screens you need at home and pick a 3, 6, or 12 month plan. Everything is in USD and there is no lock-in contract.
                </p>

                <ul className="text-xs font-bold text-[#EDEADE]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> 1, 2, or 3 Screens</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> 3, 6, or 12 Months</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> Card, PayPal, Crypto, Apple Pay</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1C65CE]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#EDEADE] uppercase tracking-wider group-hover:text-[#FFD532] transition-colors">
                  Simple Selection
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#1C65CE] text-[#EDEADE] flex items-center justify-center shadow-md group-hover:bg-[#FFD532] group-hover:text-[#04208B] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#04208B] text-[#EDEADE] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1C65CE] shadow-[0_15px_35px_rgba(28,101,206,0.2)] hover:border-[#FFD532] hover:shadow-[0_25px_50px_rgba(255,213,50,0.25)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#1C65CE] text-[#EDEADE] shadow-lg shadow-[#1C65CE]/40 border border-[#FFD532] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#FFD532]" />
                  </div>
                  <span className="text-5xl font-black text-[#04208B] bg-[#FFD532] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#04208B]/20">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#04208B] bg-[#FFD532] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#04208B]/20">
                  Step Two
                </div>

                <h3 className="text-2xl font-black text-[#EDEADE] mb-3 uppercase tracking-tight group-hover:text-[#FFD532] transition-colors">
                  Get Your Login
                </h3>

                <p className="text-[#EDEADE]/90 text-sm font-medium leading-relaxed mb-6">
                  Message us on WhatsApp and we send your {BRAND} login in the chat. You get a server URL, username, and password for the Xtream Codes API login.
                </p>

                <ul className="text-xs font-bold text-[#EDEADE]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> Instant Login On WhatsApp</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> Xtream Codes API Format</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> Live Team Guidance</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1C65CE]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#EDEADE] uppercase tracking-wider group-hover:text-[#FFD532] transition-colors">
                  Instant Delivery
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#1C65CE] text-[#EDEADE] flex items-center justify-center shadow-md group-hover:bg-[#FFD532] group-hover:text-[#04208B] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#04208B] text-[#EDEADE] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1C65CE] shadow-[0_15px_35px_rgba(28,101,206,0.2)] hover:border-[#FFD532] hover:shadow-[0_25px_50px_rgba(255,213,50,0.25)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#1C65CE] text-[#EDEADE] shadow-lg shadow-[#1C65CE]/40 border border-[#FFD532] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <KeyRound className="w-8 h-8 text-[#FFD532]" />
                  </div>
                  <span className="text-5xl font-black text-[#04208B] bg-[#FFD532] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#04208B]/20">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#04208B] bg-[#FFD532] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#04208B]/20">
                  Step Three
                </div>

                <h3 className="text-2xl font-black text-[#EDEADE] mb-3 uppercase tracking-tight group-hover:text-[#FFD532] transition-colors">
                  Login And Stream
                </h3>

                <p className="text-[#EDEADE]/90 text-sm font-medium leading-relaxed mb-6">
                  Install a compatible player like IPTV Smarters Pro, TiviMate, or IBO Player Pro. Paste the {BRAND} login, and your channel list loads automatically. Test everything on the free trial first.
                </p>

                <ul className="text-xs font-bold text-[#EDEADE]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> Works With Popular Players</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> Channel List Loads Auto</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD532]" /> Free Trial Before You Pay</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#1C65CE]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#EDEADE] uppercase tracking-wider group-hover:text-[#FFD532] transition-colors">
                  Ready To Watch
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#1C65CE] text-[#EDEADE] flex items-center justify-center shadow-md group-hover:bg-[#FFD532] group-hover:text-[#04208B] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* LIVING ROOM */}
      <section className="w-full bg-[#04208B] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD532]">
            {BRAND} Cinema
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#EDEADE] leading-none">
            {BRAND.toUpperCase()} ON YOUR <span className="text-[#FFD532]">BIG SCREEN</span>
          </h2>
        </div>

        <div className="w-full bg-black/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt={`${BRAND} streaming on a Smart TV in a living room`}
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#EDEADE]/80 font-medium">
            Once your {BRAND} login is entered into a compatible player, the picture stays sharp and the sound stays in sync on your Smart TV, Firestick, or phone. Sit back and enjoy every match and movie without dropouts.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/pricing"
              className="bg-[#FFD532] border border-[#04208B]/20 px-8 py-3 text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#E5BE1F] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#FFD532]/30"
            >
              Get {BRAND}
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 bg-[#EDEADE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1C65CE_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#1C65CE]" />
              <span className="text-[#1C65CE] font-black text-xs uppercase tracking-widest">
                What {BRAND} Unlocks
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#04208B] uppercase tracking-tight leading-tight mb-6">
              ONE LOGIN, <span className="text-[#1C65CE]">EVERYTHING INCLUDED</span>
            </h2>
            <p className="text-[#04208B]/75 font-semibold text-base md:text-lg leading-relaxed">
              Your {BRAND} login is a single account that opens up the full streaming service on any device. Here is what it unlocks.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '36,000+ Live Channels',
                desc: 'All major networks plus international channels from the UK, USA, Australia, Canada, Europe, India, Pakistan, China, and the Middle East.',
              },
              {
                icon: Film,
                title: '120,000+ Movies & TV Shows',
                desc: 'Complete boxsets and the latest cinema releases. Fresh titles land every day in the on demand library.',
              },
              {
                icon: Trophy,
                title: 'Live Sport & PPV',
                desc: 'NFL, NBA, MLB, NHL, UFC, college football, NASCAR, Formula 1, Premier League, AFL, NRL, and every PPV included at no extra cost.',
              },
              {
                icon: KeyRound,
                title: 'Xtream Codes API Login',
                desc: 'A server URL, username, and password that works with IPTV Smarters Pro, TiviMate, IBO Player Pro, and XCIPTV.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#f0ebd8] text-[#04208B] rounded-3xl p-6 md:p-7 border-2 border-[#1C65CE]/20 hover:border-[#FFD532] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,213,50,0.25)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1C65CE] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFD532]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#04208B]/75 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          {/* Small trust row */}
          <FadeIn className="mt-14 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Zap, label: 'Instant Delivery' },
                { icon: ShieldCheck, label: 'API Compatible' },
                { icon: Users, label: 'Multi Screen Plans' },
                { icon: Star, label: '4.9/5 Rating' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#04208B] text-[#EDEADE] rounded-2xl p-4 border border-[#1C65CE]/40"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1C65CE] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#FFD532]" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn className="text-center mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#04208B]/20"
              >
                View Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/support"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#04208B] text-[#EDEADE] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFD532]"
              >
                <MessageCircle className="w-5 h-5" />
                Ask On WhatsApp
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRICING SECTION */}
      <div className="min-h-[600px] bg-[#04208B]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* MOVIE SLIDER */}
      <section id="channels" className="pt-24 bg-[#04208B] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#1C65CE]/20">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#EDEADE] mb-4 uppercase tracking-tight leading-none">
              CHANNELS &amp; MOVIES ON <span className="text-[#FFD532]">{BRAND.toUpperCase()}</span>
            </h2>
            <p className="text-[#EDEADE]/70 font-medium text-lg">
              Your {BRAND} subscription unlocks thousands of live television channels plus 120,000+ movies and TV shows in the on demand library.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#000814] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* GLOBAL SERVER MAP */}
      <div className="min-h-[400px] bg-[#04208B]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* CUSTOM FAQ */}
      <section className="py-24 bg-[#04208B] relative overflow-hidden border-t border-[#1C65CE]/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1C65CE]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/20 border border-[#1C65CE]/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFD532]" />
              <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
                {BRAND} FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EDEADE] mb-6 uppercase tracking-tight leading-tight">
              YOUR {BRAND.toUpperCase()} <span className="text-[#FFD532]">QUESTIONS</span>
            </h2>
            <p className="text-[#EDEADE]/70 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The most common questions about {BRAND}, the Xtream Codes API, and how to connect it to your player.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: `What is ${BRAND}?`,
                a: `${BRAND} is a premium IPTV service that delivers live television channels, movies, and TV shows over your internet connection. Our service offers 36,000+ live channels and 120,000+ movies and TV shows in 4K Ultra HD, with guided WhatsApp setup and USD pricing.`,
              },
              {
                q: `How do I get my ${BRAND} login details?`,
                a: `Pick your plan, message us on WhatsApp, and our team sends your ${BRAND} Xtream Codes API details in the chat. You also get step by step help installing the player app and loading your channel list.`,
              },
              {
                q: `Which IPTV players support ${BRAND}?`,
                a: `Most modern IPTV players support the Xtream Codes API format. The most popular ones are IPTV Smarters Pro, TiviMate, IBO Player Pro, and XCIPTV. Our team helps you choose the right one for your device.`,
              },
              {
                q: `Do I need technical skills to set up ${BRAND}?`,
                a: `No. Setup takes about 10 minutes with our help. You install the player app, copy the details we send on WhatsApp, paste them into the login fields, and your channel list loads automatically.`,
              },
              {
                q: `What is the difference between ${BRAND} and other IPTV providers?`,
                a: `${BRAND} runs on high-quality infrastructure with 36,000+ channels, 120,000+ movies, 99.9% uptime, global-optimized edge servers, and 24/7 WhatsApp support. You get a premium service with no lock-in contracts.`,
              },
              {
                q: `Is there a free trial for ${BRAND}?`,
                a: `Yes. Message us on WhatsApp and we will send you a free 24 hour trial ${BRAND} login. Test the 4K picture, check the sport lineup, and make sure everything runs smooth on your internet before you commit to a paid plan.`,
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <DodoIptvFAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#EDEADE] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#1C65CE_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#1C65CE]/20 bg-[#EDEADE] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1C65CE]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFD532]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#1C65CE] via-[#FFD532] to-[#1C65CE]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1C65CE]/30 bg-[#1C65CE]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#1C65CE]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#1C65CE] flex items-center gap-1.5">
                  {BRAND} Service
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#04208B] leading-[1.05] mb-6">
                GET {BRAND.toUpperCase()} <br />
                <span className="text-[#1C65CE]">TODAY</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#04208B]/80">
                Pick your plan, message us on WhatsApp, and we will send your {BRAND} login with step by step help to get you streaming. Test everything on the free trial first, then upgrade only when you are happy.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['36K+', 'Live Channels'],
                  ['120K+', 'Movies & TV'],
                  ['99.99%', 'Server Uptime'],
                  ['24/7', 'WhatsApp Support'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl sm:rounded-3xl border border-[#1C65CE]/20 bg-[#f0ebd8] p-4 shadow-sm hover:border-[#FFD532] transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-[#1C65CE]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#04208B]/70">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#FFD532] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#E5BE1F] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#FFD532]/25 border border-[#04208B]/20"
                >
                  Choose Your Plan
                </Link>
                <Link
                  href="/free-trial"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#1C65CE]/30 bg-[#f0ebd8] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#1C65CE]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 text-[#1C65CE] shrink-0" /> Free 24h Trial
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#1C65CE] uppercase tracking-wider">
                Instant Login Delivery • WhatsApp Guided Setup • No Lock-In Contract
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}