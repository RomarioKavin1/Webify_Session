export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Romario Kavin. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://twitter.com/romariokavin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Twitter
          </a>
          <a
            href="mailto:romario.kavin@gmail.com"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/romariokavin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
