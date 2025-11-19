import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Project', href: '#project' },
        { name: 'Specification', href: '#specification' },
        { name: 'Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo and Menu */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">RAGHAVA</h3>
                        <nav className="space-y-2">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 2: Office Address */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-300">Office Address</h4>
                        <p className="text-gray-400 leading-relaxed">
                            4th Floor, G-Square Building<br />
                            Beside Raidurgam Police Station<br />
                            Serilingampally, Hyderabad.
                        </p>
                        <a
                            href="https://www.google.com/maps/place/Raghava+Projects/@17.4235981,78.3773465,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9359f81a1d83:0x53eaa0ec220d6c00!8m2!3d17.423593!4d78.3799214!16s%2Fg%2F11y2dbrwq4!5m1!1e2?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Click here for map
                        </a>
                    </div>

                    {/* Column 3: Site Address */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-300">Site Address</h4>
                        <p className="text-gray-400 leading-relaxed">
                            Sage By Raghava<br />
                            Sy.No. 267, 268 & 271, Kollur Village,<br />
                            Ramchandrapuram Mandal, Sanga Reddy District,<br />
                            Telangana - 502300
                        </p>
                        <a
                            href="https://www.google.com/maps/place/Sage+Villa+Project+-+Raghava/@17.4294426,78.2472141,1076m/data=!3m1!1e3!4m7!3m6!1s0x3bcbed0e482c881d:0x66de92da5868eaf1!8m2!3d17.4294375!4d78.2498125!15sCkNTYWdlIFZpbGxhIFByb2plY3QgLSBSYWdoYXZhLCBDNkhYK1FXQywgSHlkZXJhYmFkLCBUZWxhbmdhbmEgNTAyMzAwkgEFdmlsbGHgAQA!16s%2Fg%2F11wk19j2n_?authuser=0&entry=tts&g_ep=EgoyMDI0MTAxNC4wIPu8ASoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Click here for map
                        </a>
                    </div>

                    {/* Column 4: Contact and Socials */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-gray-300">Contact</h4>
                            <p className="text-gray-400">TS RERA NO. P01100008686</p>
                            <p className="text-gray-400 text-xl font-bold">+91 9289 21 21 21</p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-gray-300">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Raghava Projects. All Rights Reserved.
                    </p>
                    <a href="#" className="text-gray-500 hover:text-white text-sm mt-4 sm:mt-0">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}