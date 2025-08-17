import React, { useState } from 'react';

const navLinks = [
    { href: "#about", text: "About cLc" },
    { href: "#mission", text: "Mission & Vision" },
    { href: "#domains", text: "Core Domains" },
    { href: "#programs", text: "Programs" },
    { href: "#sponsorship", text: "Sponsorship" },
    { href: "#contacts", text: "Contacts" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden my-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 border border-black bg-transparent uppercase font-bold text-lg"
            >
                Menu
            </button>
            {isOpen && (
                <div className="border border-black border-t-0">
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index} className={index > 0 ? 'border-t border-black' : ''}>
                                <a
                                    href={link.href}
                                    className="block p-3 text-center uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
