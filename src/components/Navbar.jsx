import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const links = ["home", "about", "portfolio", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-400">MyPortfolio</h1>

        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setActive(link)}
                className={`capitalize transition ${
                  active === link ? "text-purple-400" : "text-gray-300"
                } hover:text-purple-500`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
