export default function Hero() {
  return (
    <div className="py-20 text-center bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Hey, I'm Romario Kavin 👋
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Full-stack Developer crafting modern web experiences. Passionate about
        clean code, user experience, and building impactful applications.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/romariokavin1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/romariokavin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
