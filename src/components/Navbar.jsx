import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";

const links = [
    "Home",
    "About",
    "Services",
    "Experience",
    "Contact",
];
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">

                <div className="flex items-center justify-between">

                    {/* Logo / Doctor Info */}
                    <a href="#home" className="flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                            <Stethoscope className="text-white" size={21}/>
                        </div>

                        <div>
                            <h1 className="font-bold text-[#123b67] text-sm sm:text-base">
                                Dr. Genci  Kica
                            </h1>

                            <p className="text-[11px] sm:text-xs text-slate-500">
                                Medical Doctor
                            </p>
                        </div>
                    </a>
                    <div className="hidden lg:flex items-center gap-7">
                        {links.map((link) => (
                            <a key={link} href={`#${link.toLowerCase()}`}
                                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                                {link}
                            </a>
                        ))}

                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#123b67]"
                        aria-label="Toggle menu">
                        {isOpen ? (
                            <X size={26} />
                        ) : (
                            <Menu size={26} />
                        )}
                    </button>

                </div>

                {isOpen && (
                    <div className="lg:hidden pt-4 pb-2 border-t border-slate-100 mt-3">
                        <div className="flex flex-col gap-2">
                            {links.map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}
                                    className="px-3 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}