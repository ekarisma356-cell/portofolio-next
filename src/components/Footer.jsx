export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama px-4 py-5 text-center text-sm text-white">
      &copy; {year} Rismaeka Meisaro. Dibuat dengan Next.js di Kelas Industri
      UBIG.
    </footer>
  );
}
