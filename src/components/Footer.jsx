export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h4 className="text-white font-semibold mb-4">Meet MedGuide</h4>
          <p>Your AI co-pilot for getting medical treatment in-hand.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <nav className="space-y-2 text-sm">
            {["About", "Careers", "Blog", "Contact"].map((l) => (
              <a href="#" key={l} className="block hover:text-white">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <nav className="space-y-2 text-sm">
            {["Docs", "Privacy", "Terms", "Support"].map((r) => (
              <a href="#" key={r} className="block hover:text-white">
                {r}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8 padding-top: 50px mb--4">
        © {new Date().getFullYear()} Meet MedGuide. All rights reserved.
      </div>
    </footer>
  );
}
