export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-green-300">
      <div className="text-2xl font-bold text-gray-900">MedGuide</div>
      <div className="space-x-6 text-gray-700 font-medium">
        {["About", "Resources", "Tools", "FAQ", "Talk to MedGuide"].map((t) => (
          <a href="#" key={t} className="hover:text-red-900">
            {t}
          </a>
        ))}
      </div>
    </nav>
  );
}
