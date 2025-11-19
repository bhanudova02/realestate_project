export default function HeroComponent() {
  return (
    <div className="relative h-[40vh] md:h-[40vh] lg:h-screen overflow-hidden">
      {/* Fixed video background */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="lg:fixed top-0 left-0 w-full h-full object-cover bg-center -z-10"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
