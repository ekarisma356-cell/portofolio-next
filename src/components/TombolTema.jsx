"use client";

import { useEffect, useState } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("tema") === "gelap") {
            document.documentElement.classList.add("dark");
            setGelap(true);
        }
    }, []);

    function gantiTema() {
        const temaGelap = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tema", temaGelap ? "gelap" : "terang");
        setGelap(temaGelap);
    }
    return (
        <button 
        type="button"
        onClick={gantiTema}
        className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen">
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>

    )
}