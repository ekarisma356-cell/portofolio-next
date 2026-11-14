"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
    useEffect(() => {
        const temaGelap = localStorage.getItem("tema") === "gelap";
        document.documentElement.classList.toggle("dark", temaGelap);
    }, []);

    function gantiTema() {
        const temaGelap = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tema", temaGelap ? "gelap" : "terang");
    }

    return (
        <Button
            type="button"
            variant="outline"
            onClick={gantiTema}
            className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
        >
            <span className="dark:hidden">Mode Gelap</span>
            <span className="hidden dark:inline">Mode Terang</span>
        </Button>
    );
}