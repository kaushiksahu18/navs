import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <Link className="bg-primary py-1 px-2 w-1/2 text-center text-2xl" href="/v0">V0</Link>
        <Link className="bg-primary py-1 px-2 w-1/2 text-center text-2xl" href="/v1">V1</Link>
        <Link className="bg-primary py-1 px-2 w-1/2 text-center text-2xl" href="/v2">V2</Link>
    </main>
  );
}
