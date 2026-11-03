
export default function PublicHeader() {
  return (
    <header className="border-b border-[#dce4dc] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#54745c]">
            SEMARNAT · CONAFOR
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">SIVICOFF</h1>
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
  );
}
