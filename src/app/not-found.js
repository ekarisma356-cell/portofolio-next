import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
            <h1 className="text-5xl font-bold text-aksen">404</h1>
            <h2 className="mt-2 text-2xl font-bold text-utama">
                Halaman tidak ditemukan
            </h2>
            <p className="mt-2 text-sm text-gray-600">
                Alamat yang kamu buka tidak ada atau sudah dipindahkan.
            </p>
            <Link
                href="/"
                className="mt-6 rounded-lg bg-utama px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
                Kembali ke Beranda
            </Link>
        </main>
    );
}
