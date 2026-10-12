const testimonials = [
    {
        text: "Dr. Genci is professional, attentive, and takes the time to listen and explain everything clearly. I always feel comfortable and well cared for.",

    },
    {
        text: "Very kind and professional. He takes patient concerns seriously and provides clear medical guidance.",

    },
    {
        text: "I felt comfortable and listened to throughout my visit. His calm and caring approach made a real difference.",

    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-12 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-[#123b67]">
                    Patient Testimonials
                </h2>

                <p className="text-slate-500 mt-3 mb-10">
                    What patients appreciate about Dr. Genci Kica.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="bg-white p-7 rounded-2xl border border-slate-100"
                        >
                            <div className="text-yellow-400 text-xl">
                                ★★★★★
                            </div>

                            <p className="text-slate-600 leading-7 mt-5">
                                “{item.text}”
                            </p>
                            <br/>
                            <br/>
                            <p className="text-sm text-slate-400">
                                Patient
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}