import {
    Activity,
    FlaskConical,
    HeartPulse,
    Syringe,
    UserRound,
} from "lucide-react";

const services = [
    {
        icon: HeartPulse,
        title: "Medical Care",
        description:
            "Professional medical care focused on your individual health needs.",
    },
    {
        icon: UserRound,
        title: "General Medical Consultations",
        description:
            "Medical consultations, health assessments, and professional guidance.",
    },
    {
        icon: Activity,
        title: "Emergency & First Aid",
        description:
            "Rapid and appropriate care in emergency and first-aid situations.",
    },
    {
        icon: Syringe,
        title: "Patient Care & Safety",
        description:
            "Patient-centered care with a strong focus on safety and comfort.",
    },
    {
        icon: FlaskConical,
        title: "Health Guidance & Education",
        description:
            "Clear explanations and guidance to help patients better understand their health.",
    },
    {
        icon: HeartPulse,
        title: "Personalized Care",
        description:
            "An individual approach based on each patient's needs and situation.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-12 bg-blue-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-12 ">
                    <h2 className="text-3xl font-bold text-[#123b67]">
                        Services
                    </h2>

                    <p className="text-slate-600 mt-3">
                        Professional medical care focused on your health,
                        safety, and individual needs.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="bg-white rounded-2xl p-7 text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition"
                        >
                            <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Icon size={26} />
                            </div>

                            <h3 className="font-bold text-[#123b67] mt-5">
                                {title}
                            </h3>

                            <p className="text-sm text-slate-500 mt-3 leading-6">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}