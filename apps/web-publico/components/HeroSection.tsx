
export default function HeroSection() {
  return (
    <section className="bg-[#214b35] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c8dfc9]">
            Sanidad forestal
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Información para proteger la salud de nuestros bosques
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e0ebe2]">
            Consulta recursos, mapas y publicaciones relacionados con la
            vigilancia y el control fitosanitario forestal en México.
          </p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#c8dfc9]">
            Plataforma de consulta
          </p>
          <p className="mt-3 text-2xl font-semibold">
            Conocimiento y herramientas para la gestión fitosanitaria
          </p>
        </div>
      </div>
    </section>
  );
}
