
const accesos = [
  {
    titulo: "Información fitosanitaria",
    descripcion:
      "Consulta información y recursos sobre vigilancia y sanidad forestal.",
  },
  {
    titulo: "Mapas y reportes",
    descripcion:
      "Explora información geográfica y reportes de vigilancia.",
  },
  {
    titulo: "Publicaciones",
    descripcion: "Accede a documentos, guías y materiales técnicos.",
  },
  {
    titulo: "Noticias",
    descripcion: "Accede Noticias.",
  },
];

export default function AccessCards() {
  return (
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
  );
}
