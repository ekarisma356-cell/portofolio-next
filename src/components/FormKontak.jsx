"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [pesan, setPesan] = useState("");
    const [error, setError] = useState({});

    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }
        if (!email.includes("@")) {
            errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
        }
        if (pesan.trim() === "") {
            errorBaru.pesan = "Pesan wajib diisi.";
        }

        setError(errorBaru);
    }

    return (
        <form
            onSubmit={kirim}
            noValidate
            className="space-y-4"
        >
            <div>
                <label htmlFor="nama" className="block font-semibold">
                    Nama lengkap
                </label>
                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className={kelasInput}
                />
                {error.nama && (
                    <p className="mt-1 text-sm text-aksen">{error.nama}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className={kelasInput}
                />
                {error.email && (
                    <p className="mt-1 text-sm text-aksen">{error.email}</p>
                )}
            </div>

            <div>
                <label htmlFor="telepon" className="block font-semibold">
                    Nomor HP
                </label>
                <input
                    type="tel"
                    id="telepon"
                    name="telepon"
                    placeholder="081234567890"
                    className={kelasInput}
                />
            </div>

            <div>
                <label htmlFor="keperluan" className="block font-semibold">
                    Keperluan
                </label>
                <select
                    id="keperluan"
                    name="keperluan"
                    defaultValue=""
                    className={kelasInput}
                >
                    <option value="" disabled>
                        -- Pilih keperluan --
                    </option>
                    <option value="pertanyaan">Pertanyaan</option>
                    <option value="kerja-sama">Kerja sama</option>
                    <option value="lainnya">Lainnya</option>
                </select>
            </div>

            <div>
                <label htmlFor="pesan" className="block font-semibold">
                    Pesan
                </label>
                <textarea
                    id="pesan"
                    name="pesan"
                    rows={4}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Tulis pesanmu di sini"
                    className={kelasInput}
                />
                {error.pesan && (
                    <p className="mt-1 text-sm text-aksen">{error.pesan}</p>
                )}
            </div>

            <button
                type="submit"
                className="rounded-lg bg-aksen px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
                Kirim Pesan
            </button>
            <p className="text-xs text-gray-600">
                Form ini belum mengirim pesan. Fitur pengiriman akan diaktifkan nanti.
            </p>
        </form>
    );
}
