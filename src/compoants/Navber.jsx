import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" },
    { label: "PROJECTS", to: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center items-center min-h-20 z-50 bg-[#050505]/50 backdrop-blur-2xl lite-fade-down border-b border-white/[0.03]">
      
      <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Left: Logo + Status - hidden below 810px */}
        <div className="max-[810px]:hidden absolute left-6 flex items-center gap-3">
          <span className="text-white font-bold text-base tracking-wider">
            MUHAMMAD_LUQMAN_
          </span>
          {/* Signature Ping Dot */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
        </div>

        {/* Center: Premium Floating Pill Navigation */}
        <div className="flex items-center gap-0.5 sm:gap-1 p-1.5 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-full border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"} // Ensures exact matching for the home route
              className={({ isActive }) =>
                `text-[10px] sm:text-[13px] font-medium tracking-[1px] sm:tracking-[2px] no-underline whitespace-nowrap transition-all duration-500 rounded-full px-3 sm:px-5 py-2 ${
                  isActive 
                    ? "text-white bg-gradient-to-r from-white/15 to-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" 
                    : "text-white/40 hover:text-white hover:bg-white/[0.03]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right: Desktop CTA - hidden below 810px */}
        <div className="max-[810px]:hidden absolute right-6">
          <NavLink 
            to="/contact" 
            className="text-[11px] font-semibold tracking-[0.15em] text-slate-500 hover:text-white border border-white/10 hover:border-white/20 px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            LET'S TALK
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;