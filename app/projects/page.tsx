// app/projects/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Iverson Loquere",
};

const projects = [
  {
    id: 1,
    name: "Personal Next.js Site",
    description: "A three-page site built with Next.js App Router, shared layout navigation, and Tailwind CSS.",
  },
  {
    id: 2,
    name: "Task Tracker App",
    description: "A simple study task manager to organize daily coursework and lab deadlines.",
  },
  {
    id: 3,
    name: "Laragon Local Web Sandbox",
    description: "A local development workflow for testing web projects and Git version control.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Projects</h1>
      <p className="mt-2 text-slate-600">
        Here are a few projects I am working on or exploring.
      </p>
      <ul className="mt-6 space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{project.name}</h2>
            <p className="mt-1 text-sm text-slate-700">{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}