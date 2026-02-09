const GRAPHICS = [
  {
    src: "/images/gx2.jpg",
    alt: "Mike Trout Baseball Poster"
  },
  {
    src: "/images/Lakers poster.jpg",
    alt: "LeBron James NBA Poster"
  }
];

export default function Graphics() {
  return (
    <section id="graphics" className="w-[90%] max-w-[1100px] mx-auto py-20 bg-[#000000] text-white">
      <h2 className="text-2xl uppercase text-center tracking-[2px] mb-4">Graphic Design</h2>
      <p className="text-sm text-center  mb-10">Sports posters and promotional designs created with Photoshop</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GRAPHICS.map((graphic) => (
          <div
            key={graphic.src}
            className="border border-gray-200 overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={graphic.src} alt={graphic.alt} className="w-full h-auto block" />
          </div>
        ))}
      </div>
    </section>
  );
}
