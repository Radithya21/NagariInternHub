import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function DressCodeSection() {
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (inView) {
                controls.start({ opacity: 1, y: 0 });
            } else {
                controls.start({ opacity: 0, y: 40 });
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <motion.section
            ref={ref}
            id="dresscode"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-50 to-white"
        >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-orange-50 text-orange-700 font-medium text-sm border border-orange-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="7" r="4" /><path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" /></svg>
                <span>Professional Style</span>
            </div>

            {/* Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    Dress Code
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                    Tampil profesional dengan panduan berpakaian yang modern dan sesuai standar perbankan
                </p>
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
            </div>

            {/* Info Tambahan */}
            <div className="w-full max-w-6xl mx-auto mb-10">
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 rounded-2xl px-8 py-3 shadow text-base md:text-lg font-medium text-gray-700 min-h-[56px]">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 9h8M8 13h6" /></svg>
                    <span>Peserta magang wajib mengenakan pakaian <span className="font-bold text-black">hitam putih</span> setiap hari kerja, <span className="font-bold text-black">Senin hingga Jumat</span>.</span>
                </div>
            </div>

            {/* Cards Container */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Card Pria */}
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-blue-700">Untuk Pria</span>
                    </div>

                    {/* Allowed Section */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 mb-6 border border-blue-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <h3 className="font-bold text-blue-900 text-lg">Pakaian Formal</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Kemeja putih lengan panjang',
                                'Celana hitam panjang formal',
                                'Sepatu pantofel hitam/coklat',
                                'Kaos kaki warna gelap'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not Allowed Section */}
                    <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <h3 className="font-bold text-red-700 text-lg">Tidak Diperbolehkan</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Kaos/t-shirt',
                                'Celana jeans',
                                'Sandal/sepatu casual',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-red-700">
                                    <div className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Card Wanita */}
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-orange-700">Untuk Wanita</span>
                    </div>

                    {/* Allowed Section */}
                    <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 mb-6 border border-orange-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <h3 className="font-bold text-orange-900 text-lg">Pakaian Formal</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Kemeja putih lengan panjang',
                                'Rok formal (panjang di atas lutut)',
                                'Sepatu heels kerja',
                                'Hijab rapi'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <div className="mt-2 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not Allowed Section */}
                    <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <h3 className="font-bold text-red-700 text-lg">Tidak Diperbolehkan</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Pakaian ketat/transparan',
                                'Rok mini',
                                'Flat shoes',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-red-700">
                                    <div className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default DressCodeSection;