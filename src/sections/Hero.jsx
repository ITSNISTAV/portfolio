const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold">
        Hello, I’m <span className="text-purple-400">Your Name</span>
      </h2>
      <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300">
        Transforming ideas into digital experiences.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/cv.pdf"
          className="px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
        >
          Download CV
        </a>
        <a
          href="#portfolio"
          className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
