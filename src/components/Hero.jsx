import { ArrowUpRight, CalendarDays } from "lucide-react";
import doctorImage from "../assets/Photo.png";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-blue-50">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-40">
                <div className="w-full h-full"
                     style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                        backgroundSize: "55px 55px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pt-16 lg:min-h-[650px] lg:pt-0">

                {/* Large background name */}
                <h1 className=" text-center text-[48px] sm:text-[65px] md:text-[80px] lg:absolute lg:top-24 lg:left-1/2
                        lg:-translate-x-1/2 lg:whitespace-nowrap lg:text-[145px] font-bold text-[#5B9BD5]/20 tracking-tight leading-none ">
                    Meet Dr. Genci
                </h1>

                {/* Small title */}
                <div className=" text-center mt-2 text-sm text-[#5B9BD5] lg:absolute lg:top-36 lg:right-10 lg:mt-0 lg:text-base">
                    Medical Doctor
                </div>

                {/* Doctor image */}
                <div className=" relative flex justify-center mt-3 sm:mt-4 md:mt-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
                    <div className=" relative w-[220px] h-[300px] sm:w-[270px] sm:h-[360px] md:w-[320px] md:h-[410px]
                            lg:w-[470px] lg:h-[590px]">
                        <img src={doctorImage} alt="Dr. Genci J. Kica" className=" relative z-10 w-full h-full object-containobject-bottom"/>
                    </div>
                </div>

                {/* Mobile content */}
                <div className="relative z-20 pb-8 lg:hidden">

                    <div className="text-center max-w-sm mx-auto">
                        <p className="text-xs text-[#5B9BD5] uppercase tracking-widest mb-3">
                            YOUR HEALTH, MY PRIORITY
                        </p>

                        <p className="text-sm text-[#64748b] leading-6 mb-5">
                            High-quality medical care with a patient-first approach.
                        </p>

                        <a href="#contact" className=" inline-flex items-center gap-2 bg-[#5B9BD5] hover:bg-[#4A8AC4]
                        text-white px-5 py-3 rounded-lg text-sm font-medium transition">
                            Learn More
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className="flex justify-center gap-10 mt-7 text-center">
                        <div>
                            <p className="text-3xl font-light text-[#5B9BD5]">
                                MD
                            </p>
                            <p className="text-xs text-[#64748b] mt-1">
                                Doctor of Medicine
                            </p>
                        </div>

                        <div>
                            <p className="text-3xl font-light text-[#5B9BD5]">
                                3+
                            </p>
                            <p className="text-xs text-[#64748b] mt-1">
                                Years Experience
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop left content */}
                <div className="hidden lg:block absolute left-0 bottom-32 z-20 max-w-[260px]">
                    <p className="text-sm text-[#5B9BD5] uppercase tracking-widest mb-4">
                        YOUR HEALTH, MY PRIORITY
                    </p>

                    <p className="text-base text-[#64748b] leading-6 mb-5">
                        <strong>Medical Doctor & CEO of PZU MediCare</strong>
                        <br />
                        High-quality medical care with a patient-first approach.
                    </p>

                    <a href="#about" className=" inline-flex items-center gap-2 bg-[#5B9BD5] hover:bg-[#4A8AC4]
                            text-white px-5 py-3 rounded-lg text-sm font-medium transition">
                        Learn More
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Desktop right statistics */}
                <div className="hidden lg:flex absolute right-0 bottom-32 z-20 gap-8">
                    <div>
                        <p className="text-4xl font-light text-[#5B9BD5]">
                            MD
                        </p>
                        <p className="text-sm text-[#64748b] mt-1">
                            Doctor of Medicine
                        </p>
                    </div>

                    <div>
                        <p className="text-4xl font-light text-[#5B9BD5]">
                            2+
                        </p>
                        <p className="text-sm text-[#64748b] mt-1">
                            Years Experience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );}
