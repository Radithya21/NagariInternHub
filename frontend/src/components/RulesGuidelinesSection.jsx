import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function RulesGuidelinesSection() {
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
            id="peraturan"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-50"
        >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-purple-50 text-purple-700 font-medium text-sm border border-purple-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <rect x="3" y="3" width="14" height="14" rx="3" />
                    <path d="M7 7h6M7 10h6M7 13h4" />
                </svg>
                <span>Rules & Guidelines</span>
            </div>

            {/* Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Peraturan <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">& Tata Tertib</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                    Framework kerja yang mendukung produktivitas dan profesionalisme di lingkungan digital banking
                </p>
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Keamanan & Kerahasiaan */}
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-4 mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z" />
                                <path d="M12 11v2" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl text-center text-blue-900 leading-tight">
                            Keamanan & Kerahasiaan
                        </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        {[
                            'Menjaga kerahasiaan data nasabah',
                            'Tidak membawa tamu tanpa izin'
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-xl px-4 py-3 shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
                                    <span className="text-gray-700 leading-relaxed">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Perilaku & Etika */}
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-4 mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M6 20v-2a6 6 0 0112 0v2" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl text-center text-orange-900 leading-tight">
                            Perilaku & Etika
                        </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        {[
                            'Bersikap sopan dan ramah',
                            'Tidak bermain HP saat jam kerja',
                            'Menjaga kebersihan area kerja',
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-r from-orange-50 to-white rounded-xl px-4 py-3 shadow-sm border border-orange-100 transition-all duration-300 hover:shadow-md hover:border-orange-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0"></div>
                                    <span className="text-gray-700 leading-relaxed">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Briefing Section */}
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-4 mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="6" y="6" width="20" height="20" rx="5" />
                                <path d="M12 16h8M16 12v8" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl text-center text-purple-900 leading-tight">
                            Briefing Pagi
                        </h3>
                    </div>
                    {/* Content */}
                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl px-4 py-3 shadow-sm border border-purple-100 transition-all duration-300 hover:shadow-md hover:border-purple-200">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">Setiap <span className="font-semibold text-purple-700">Senin pagi</span> diadakan briefing bersama seluruh peserta magang dan karyawan.</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl px-4 py-3 shadow-sm border border-purple-100 transition-all duration-300 hover:shadow-md hover:border-purple-200">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">Briefing membahas evaluasi, target mingguan, dan motivasi kerja.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default RulesGuidelinesSection;