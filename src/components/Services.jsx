const SERVICES = [
  {
    title: "Web Design",
    description: "Business & personal websites, landing pages, and SEO-friendly structures."
  },
  {
    title: "Web Development",
    description: "MERN Stack applications, Admin dashboards, and API integration."
  },
  {
    title: "Graphic & UI",
    description: "Photoshop-based layouts, consistent branding, and visual assets."
  }
];

export default function Services() {
  return (
    <section id="services" className="w-[90%] bg-black text-white max-w-[1100px] mx-auto py-20">
      <h2 className="text-2xl text-center uppercase tracking-[2px] mb-10">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.title} className="space-y-3">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
