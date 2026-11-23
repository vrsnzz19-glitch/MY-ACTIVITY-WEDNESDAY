import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Hello, my name is Iverson Loquere</h1>
      <p className="mt-2">
       Third-year BSIT student ko sa Domain Course 6 nga naghimo sa akong unang Next.js app gamit ang file-based routing. Karong adlawa gihuman nako ang Lab 1 Checkpoint uban ang shared navigation ug mga pages.
      </p>
      <div className="mt-4">
        <Link href="/projects" className="underline">
          See my projects
        </Link>
      </div>
    </main>
  );
}