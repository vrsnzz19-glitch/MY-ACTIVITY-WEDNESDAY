// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Hello, my name is Iverson Loquere
      </h1>
      <p className="mt-4 leading-relaxed text-slate-700">
        Third-year BSIT student ko sa Domain Course 6 nga naghimo sa akong unang Next.js app gamit ang file-based routing. Karong adlawa gihuman nako ang Lab 1 uban ang shared navigation ug mga pages.
      </p>
      <div className="mt-6">
        <Link
          href="/projects"
          className="inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          See my projects
        </Link>
      </div>
    </main>
  );
}