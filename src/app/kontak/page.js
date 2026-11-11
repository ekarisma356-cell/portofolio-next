import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Rismaeka Meisaro melalui halaman kontak.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-2 text-sm text-gray-700">
                Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
                    <FormKontak />
                </section>

                <aside className="rounded-xl bg-white p-5 shadow-sm">
                    <h2 className="text-lg font-bold text-utama">
                        Temukan Saya di
                    </h2>
                    <a
                        href="https://github.com/ekarisma356-cell"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block text-sm font-semibold text-aksen hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://github.com/ekarisma356-cell"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block break-all text-sm text-gray-600 hover:text-aksen hover:underline"
                    >
                        https://github.com/ekarisma356-cell
                    </a>
                </aside>
            </div>
        </main>
    );
}
