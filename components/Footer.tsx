export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-[var(--page-gutter)]">
      <div className="shell-inner flex flex-col gap-6 py-8 text-sm text-[#888888] sm:flex-row sm:items-center sm:justify-between">
        <p>Adrian Volkov. Professional tennis coach. Stockholm.</p>
        <div className="flex flex-wrap gap-4 uppercase tracking-[0.18em]">
          <a href="#authority" className="transition hover:text-white">
            Authority
          </a>
          <a href="#programs" className="transition hover:text-white">
            Programs
          </a>
          <a href="#method" className="transition hover:text-white">
            Method
          </a>
          <a href="#booking" className="transition hover:text-white">
            Booking
          </a>
        </div>
      </div>
    </footer>
  );
}
