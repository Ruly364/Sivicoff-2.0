
const accesos = [
  {
    titulo: "Información fitosanitaria",
    descripcion: "Consulta información y recursos sobre vigilancia y sanidad forestal.",
  },
  {
    titulo: "Mapas y reportes",
    descripcion: "Explora información geográfica y reportes de vigilancia.",
  },
  {
    titulo: "Publicaciones",
    descripcion: "Accede a documentos, guías y materiales técnicos.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7f3] text-[#20352b]">
      <header className="border-b border-[#dce4dc] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#54745c]">
              SEMARNAT · CONAFOR
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">
              SIVICOFF
            </h1>
            <p className="text-sm text-[#617267]">
              Sistema de Vigilancia y Control Fitosanitario Forestal
            </p>
          </div>
          <a
            href="#accesos"
            className="rounded-full bg-[#28583d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d432e]"
          >
            Explorar información
          </a>
        </div>
      </header>

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

      <section id="accesos" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#54745c]">
            Explora SIVICOFF
          </p>
          <h2 className="mt-2 text-3xl font-bold">Información y recursos</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {accesos.map((acceso) => (
            <article
              key={acceso.titulo}
              className="rounded-2xl border border-[#dce4dc] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{acceso.titulo}</h3>
              <p className="mt-3 leading-7 text-[#617267]">
                {acceso.descripcion}
              </p>
              <a
                href="#"
                className="mt-6 inline-block font-semibold text-[#28583d] hover:underline"
              >
                Consultar →
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#dce4dc] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#617267]">
          SIVICOFF · Sistema de Vigilancia y Control Fitosanitario Forestal
        </div>
      </footer>
    </main>
  );
}
