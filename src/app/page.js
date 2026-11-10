import Hero from "@/components/Hero"
import SkillCard from "@/components/SkillCard"
import Kartu from "@/components/Kartu"

const skills = [
  {nama: "HTML", level: "Menengah"},
  {nama: "CSS", level: "Menengah"},
  {nama: "Git dan GitHub", level: "Dasar"},
  {nama: "Desain poster dengan canva", level: "Mahir"},
  {nama: "JavaScript", level: "Dasar"},
];

const jadwalBelajar = [
  {hari: "Senin", waktu: "19.00–20.00", kegiatan: "Membaca ulang modul"},
  {hari: "Rabu", waktu: "19.00–21.00", kegiatan: "Mengerjakan tugas proyek"},
  {hari: "Jumat", waktu: "19.30–20.30", kegiatan: "Merekam video dan menulis laporan"},
];

export default function Home () {
  return (
   <main className="mx-auto w-full max-w-5xl px-4 py-10">
    <Hero
     nama="Rismaeka Meisaro"
     tagline="siswi kelas XI SMK, calon Junior Web Developer di kelas Industri UBIG."
    />

     <section className="mt-10">
      <Kartu judul="Tentang Saya">
        <p className="text-base leading-relaxed text-gray-700">
          Saya Sekolah di SMKN 1 KOTA PASURUAN, saya mengambil jurusan Rekayasa Perangkat Lunak, saya ingin menjadi seorang Web Developer, saya juga suka bermain game dan membaca buku.
        </p>
      </Kartu>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-inside list-disc space-y-1 text-base text-gray-700">
            <li>Bermain</li>
            <li>Membaca</li>
            <li>Berenang</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-2 text-base leading-relaxed text-gray-700">
            Menjadi Full Stack Web Developer. Langkah yang saya rencanakan:
          </p>
          <ol className="list-inside list-decimal space-y-1 text-base text-gray-700">
            <li>Menyelesaikan Kelas Industri UBIG sampai Semester 4</li>
            <li>Magang di perusahaan teknologi</li>
            <li>Bekerja sebagai Web Developer</li>
          </ol>
        </Kartu>
      </div>

      <div className="mt-4">
        <Kartu judul="Keahlian">
          <div className="grid gap-3 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </Kartu>
      </div>

      <div className="mt-4">
        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full min-w-lg text-left text-sm">
              <thead className="bg-utama text-white">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">Hari</th>
                  <th scope="col" className="px-3 py-2 font-semibold">Waktu</th>
                  <th scope="col" className="px-3 py-2 font-semibold">Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                {jadwalBelajar.map((jadwal) => (
                  <tr key={jadwal.hari} className="border-b border-gray-200">
                    <td className="px-3 py-2">{jadwal.hari}</td>
                    <td className="px-3 py-2">{jadwal.waktu}</td>
                    <td className="px-3 py-2">{jadwal.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>
      </div>
     </section>
    </main>
  );
}
