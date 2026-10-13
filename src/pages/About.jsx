import {
    GraduationCap,
    Heart,
    MapPin,
    Stethoscope,
} from "lucide-react";
import doctorImage1 from "../assets/Photo.png";

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">

                    {/* PHOTO */}
                    <div className="flex justify-center lg:justify-start">
                        <img src={doctorImage1} alt="Dr. Genci J. Kica" className="w-[220px] sm:w-[260px]
                                md:w-[290px] lg:w-[340px] max-h-[520px] h-auto object-contain "/>
                    </div>

                    {/* ABOUT */}
                    <div>
                        <h3 className="text-3xl font-bold text-[#123b67] mb-5">
                            About Me
                        </h3>

                        <p className="text-slate-600 leading-7 sm:leading-8 text-base sm:text-lg max-w-2xl">
                            Dr. Genci Kica is a Medical Doctor and CEO of PZU MediCare in Struga.
                            He has professional experience in emergency and first aid services, direct patient
                            care, and medical education. He is committed to providing high-quality medical care with
                            a patient-first approach and strong professional standards.
                        </p>

                        <div className="mt-7 grid sm:grid-cols-2 gap-5">

                            <div className="flex gap-3 items-center">
                                <GraduationCap className="text-blue-600 shrink-0" />
                                <span className="text-slate-600">
                                    Doctor of Medicine (MD), University of Tetovo
                                </span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Stethoscope className="text-blue-600 shrink-0" />
                                <span className="text-slate-600">
                                    Medical Doctor
                                </span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <MapPin className="text-blue-600 shrink-0" />
                                <span className="text-slate-600">
                                    Struga, North Macedonia
                                </span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Heart className="text-blue-600 shrink-0" />
                                <span className="text-slate-600">
                                    Patient-First Medical Care
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );}
