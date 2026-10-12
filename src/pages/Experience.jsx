const experience = [
    {
        role: "Medical Doctor",
        company: "PZU MediCare",
        period: "Jul 2026 – Present",
        location: "Struga, North Macedonia",
        description:
            "CEO and Medical Doctor at PZU MediCare, focused on delivering high-quality medical care with rigorous professional standards and a patient-first approach.",
    },
    {
        role: "Professor & Clinical Instructor",
        company: 'Medical High School "Niko Nestor" - Struga',
        period: "Sep 2025 – Jun 2026",
        location: "Struga, North Macedonia",
        description:
            "Educated and trained future nurses and medical technicians through theoretical instruction, practical workshops, clinical simulations, and mentorship.",
    },
    {
        role: "Medical Doctor – Emergency & First Aid",
        company: "Health Center Struga",
        period: "Mar 2025 – Aug 2025",
        location: "Struga, North Macedonia",
        description:
            "Provided emergency and first aid care, managing critical situations while developing strong skills in triage, rapid decision-making, resuscitation, patient safety, and direct patient care.",
    },
];

const education = [
    {
        institution: "University of Tetovo",
        degree: "Doctor of Medicine (MD)",
        field: "Medicine",
        period: "Sep 2017 – Jun 2024",
    },
    {
        institution: 'High School "Niko Nestor" - Struga',
        degree: "Nurse",
        field: "Medicine",
        period: "Sep 2013 – Jun 2017",
    },
];
const certifications = [
    {
        name: "Medical License",
        issuer: "Medical Chamber of the Republic of North Macedonia",
        date: "Dec 2024",
    },
    {
        name: "FIFA Diploma in Football Medicine",
        issuer: "Online Diploma Course-Issued by FIFA",
        date: " Sep 2026",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-12">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

                <div>
                    <h2 className="text-3xl font-bold text-[#123b67] mb-10">
                        Experience
                    </h2>

                    <div className="border-l-2 border-blue-200 ml-3">
                        {experience.map((item) => (
                            <div
                                key={`${item.company}-${item.period}`}
                                className="relative pl-8 pb-10"
                            >
                                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />

                                <p className="text-blue-600 text-sm font-semibold">
                                    {item.period}
                                </p>

                                <h3 className="font-bold text-[#123b67] text-lg mt-2">
                                    {item.role}
                                </h3>

                                <p className="text-slate-500 text-sm mt-1">
                                    {item.company}
                                </p>

                                <p className="text-slate-400 text-sm mt-1">
                                    {item.location}
                                </p>

                                <p className="text-slate-600 leading-7 mt-4">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EDUCATION */}
                <div className="py-2">
                    <h2 className="text-3xl font-bold text-[#123b67] mb-8">
                        Education
                    </h2>

                    <div className="space-y-6">
                        {education.map((item) => (
                            <div
                                key={item.institution}
                                className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
                            >
                                <p className="text-blue-600 text-sm font-semibold">
                                    {item.period}
                                </p>

                                <h3 className="font-bold text-[#123b67] text-lg mt-2">
                                    {item.degree}
                                </h3>

                                <p className="text-slate-600 mt-1">
                                    {item.institution}
                                </p>

                                <p className="text-slate-400 text-sm mt-1">
                                    {item.field}
                                </p>
                            </div>
                        ))}
                    </div>
                     <div className="mt-14">
                    <h2 className="text-3xl font-bold text-[#123b67] mb-10">
                        Licenses & Certifications
                    </h2>

                    <div className="border-l-2 border-blue-200 ml-3">
                        {certifications.map((item) => (
                            <div
                                key={item.name}
                                className="relative pl-8 pb-10"
                            >
                                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />

                                <p className="text-blue-600 text-sm font-semibold">
                                    {item.date}
                                </p>

                                <h3 className="font-bold text-[#123b67] text-lg mt-2">
                                    {item.name}
                                </h3>

                                <p className="text-slate-500 text-sm mt-1">
                                    {item.issuer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                {/* LICENSES & CERTIFICATIONS */}

            </div>
        </section>
    );
}