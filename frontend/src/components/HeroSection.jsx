function HeroSection() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Nagari Intern Hub</span>
      </h1>
      <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
        Platform internal Bank Nagari untuk mempermudah magang, dengan fitur absensi berbasis lokasi, panduan onboarding, dan direktori pegawai terhubung ke LinkedIn.
      </p>
    </main>
  );
}

export default HeroSection;