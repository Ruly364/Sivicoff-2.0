
import {
  House,
  BellRing,
  FileText,
  Trees,
  ChartNoAxesColumn,
  BookOpen,
  MessageSquareText,
  Mail,
} from "lucide-react";

const sections = [
  { label: "Inicio", href: "#", Icon: House },
  {
    label: "Alerta Temprana de Plagas Forestales",
    href: "/Secciones/alerta-temprana",
    Icon: BellRing,
  },
  { label: "Fichas Técnicas", href:"/Secciones/fichas-tecnicas", Icon: FileText },
  { label: "¿Qué Hacemos?", href: "/Secciones/que-hacemos", Icon: Trees },
  {
    label: "Estadísticas de Afectación",
    href: "/Secciones/estadisticas",
    Icon: ChartNoAxesColumn,
  },
  { label: "Material de Consulta", href:"/Secciones/material-consulta", Icon: BookOpen },
  {
    label: "Reporte Ciudadano",
    href: "/Secciones/reporte-ciudadano",
    Icon: MessageSquareText,
  },
  { label: "Contacto", href: "/Secciones/contacto", Icon: Mail },
];

export default function PublicHeader() {
  return (
    <header className="border-b border-[#dce4dc] bg-white">
      <nav
        aria-label="Navegación principal"
        className="border-t border-[#edf1ed]"
      >
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-3">
          {sections.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              className="flex min-w-fit flex-col items-center gap-2 rounded-lg px-3 py-2 text-center text-xs font-medium text-[#34483b] transition hover:bg-[#f5f7f3]"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-[#b99a62] text-white">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="max-w-32">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
