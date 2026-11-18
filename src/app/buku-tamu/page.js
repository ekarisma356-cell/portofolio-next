import FormBukuTamu from "@/components/FormBukuTamu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Buku Tamu",
  description: "Tinggalkan kesan atau sapaan untuk Andi Pratama.",
};

export default async function BukuTamu() {
  const { data: daftarPesan, error } = await supabase
    .from("buku_tamu")
    .select("*")
    .order("disematkan", { ascending: false })
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Buku Tamu
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Tinggalkan kesan atau sapaan. Pesanmu langsung tampil di bawah.
      </p>
      <Card className="mt-8">
        <CardContent>
          <FormBukuTamu />
        </CardContent>
      </Card>
      {error && (
        <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-aksen">
          Pesan buku tamu gagal dimuat: {error.message}
        </p>
      )}
      {daftarPesan?.map((item) => (
        <Card key={item.id} className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg text-primary">
              {item.nama}
            </CardTitle>
            <CardDescription>
              {new Date(item.created_at).toLocaleString("id-ID")}
            </CardDescription>
            {item.disematkan && <Badge>Disematkan</Badge>}
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{item.pesan}</p>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
