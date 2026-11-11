export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama p-6 text-center text-latar">
      &copy; {year} Rismaeka Meisaro. Dibuat dengan Next.js di Kelas Industri
      UBIG.
    </footer>
  );
}
