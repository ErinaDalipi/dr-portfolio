import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact">

            {/* Contact Section */}
            <div className="bg-[#174b7c] text-white py-10">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-8 items-center">

                        {/* Left */}
                        <div>
                            <p className="text-blue-200 uppercase tracking-widest text-xs mb-2">
                                Get in Touch
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-bold">
                                Book Your Appointment
                            </h2>

                            <p className="text-blue-100 text-sm mt-3 max-w-md">
                                Take the first step towards better health.
                            </p>
                        </div>

                        {/* Right - Contact information */}
                        <div className="space-y-3 md:ml-auto">
                            <p className="flex gap-3 items-center text-blue-100 text-sm">
                                <Phone size={17} />
                                +389 71 430 958
                            </p>

                            <p className="flex gap-3 items-center text-blue-100 text-sm">
                                <Mail size={17} />
                                kica.genci008@gmail.com
                            </p>

                            <p className="flex gap-3 items-center text-blue-100 text-sm">
                                <MapPin size={17} />
                                Struga, North Macedonia
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="bg-[#103858] text-white py-4">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">

                    <p>
                        © 2026 Dr. Genci Kica. All rights reserved.
                    </p>

                    <p className="text-blue-200">
                        Medical Doctor · PZU MediCare
                    </p>

                </div>
            </div>

        </footer>
    );
}