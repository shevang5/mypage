export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="w-[90%] max-w-[1100px] mx-auto flex items-center justify-between py-5">
        <div className="text-lg font-semibold tracking-wide">SHEVANG</div>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-gray-600">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-600">Services</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-600">Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
