import Link from "next/link"
import Hero from "@/components/Hero"
import ProyekCard from "@/components/ProyekCard"
import SkillCard from "@/components/SkillCard"
import { supabase } from "@/lib/supabase"
import { buttonVariants } from "@/components/ui/button"

export const dynamic = "force-dynamic"

const skillsLokal = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default async function Home() {
  const { data: proyekTerbaru, error: proyekError } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3)

  const { data: skillsData, error: skillsQueryError } = await supabase
    .from("skills")
    .select("nama, level")
    .order("id", { ascending: true })

  const skills = skillsData ?? skillsLokal
  const skillsError = skillsQueryError
    ? "Data keahlian dari Supabase belum dapat dimuat. Data contoh ditampilkan."
    : ""

  if (proyekError) {
    console.error("Gagal mengambil proyek terbaru dari Supabase:", {
      code: proyekError.code,
      message: proyekError.message,
      details: proyekError.details,
      hint: proyekError.hint,
    })
  }

  if (skillsQueryError) {
    console.error("Gagal mengambil data skills dari Supabase:", {
      code: skillsQueryError.code,
      message: skillsQueryError.message,
      details: skillsQueryError.details,
      hint: skillsQueryError.hint,
    })
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Hero
        nama="Rismaeka Meisaro"
        tagline="siswi kelas XI SMK, calon Junior Web Developer di kelas Industri UBIG."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        {skillsError && (
          <p role="status" className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
            {skillsError}
          </p>
        )}
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">
          Proyek Terbaru
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {proyekTerbaru && proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className={buttonVariants({ size: "lg", className: "mt-6" })}>
          Lihat Semua Proyek
        </Link>
      </section>
    </main>
  );
}
