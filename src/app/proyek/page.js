import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";

export const metadata = {
    title: "Proyek",
    description: "Daftar proyek HTML, CSS dan JavaScript karya Rismaeka Meisaro",
};

export default async function DaftarProyek() {
    const { data: proyek, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at");

    if (!error) {
        console.log("Jumlah proyek dari Supabase:", proyek?.length ?? 0);
    }

    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">
                Proyek Saya
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">Kumpulan Hasil belajar saya di kelas industri UBIG. Klik kartu
                untuk melihat detailnya.
            </p>

            {error && (
                <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-aksen">
                    Data proyek gagal dimuat: {error.message}
                </p>
            )}
            {proyek && proyek.length === 0 && (
                <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
                    Belum ada proyek di database.
                </p>
            )}
            {proyek && proyek.length > 0 && <FilterProyek proyek={proyek} />}
        </main>
    );
}