export const metadata = {
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Rismaeka Meisaro.",
};

const jadwalBelajar = [
    {
        hari: "Senin",
        waktu: "19.00–20.00",
        kegiatan: "Membaca ulang modul",
    },
    {
        hari: "Rabu",
        waktu: "19.00–21.00",
        kegiatan: "Mengerjakan tugas praktik",
    },
    {
        hari: "Jumat",
        waktu: "19.30–20.30",
        kegiatan: "Merekam video dan menulis laporan",
    },
];

export default function Tentang() {
    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-10">
            <h1 className="text-2xl font-bold text-utama md:text-3xl">
                Tentang Saya
            </h1>

            <section className="mt-6 rounded-xl bg-white p-5 shadow-sm">
                <h2 className="mb-3 text-xl font-bold text-utama">Perkenalan</h2>
                <p className="text-sm leading-relaxed text-slate-600">
                   Saya Rismaeka Meisaro, Sekolah di SMK NEGERI  1 KOTA PASURUAN dengan jurusan 
                   rekayasa perangkat lunak, saat ini saya berada di bangku kelas 11
                </p>
            </section>

            <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm">
                    <h2 className="mb-3 text-xl font-bold text-utama">Hobi</h2>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600">
                        <li>Bermain</li>
                        <li>Membaca</li>
                        <li>Berenang</li>
                    </ul>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm">
                    <h2 className="mb-3 text-xl font-bold text-utama">
                        Cita-cita
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600">
                        Menjadi Full Stack Web Developer. Langkah yang saya
                        rencanakan:
                    </p>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-slate-600">
                        <li>Menuntaskan kelas industri UBIG</li>
                        <li>Magang di perusahaan teknologi</li>
                        <li>Bekerja sebagai Web Developer</li>
                    </ol>
                </div>
            </section>

            <section className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-utama">
                    Jadwal Belajar
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm text-slate-600">
                        <thead>
                            <tr className="bg-utama text-white">
                                <th className="px-3 py-2">Hari</th>
                                <th className="px-3 py-2">Waktu</th>
                                <th className="px-3 py-2">Kegiatan</th>
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
            </section>
        </main>
    );
}
