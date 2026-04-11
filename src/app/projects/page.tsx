import Link from 'next/link';
import prisma from '@/app/prismadb';
import ProjectCard from './ProjectCard';
import './styles.css';

const splitValues = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const ProjectPage = async () => {
  const projects = await prisma.product.findMany({
    orderBy: {
      id: 'desc',
    },
  });

  const categories = new Set(
    projects.flatMap((project) => splitValues(project.category || ''))
  );
  const linkedProjects = projects.filter(
    (project) => Boolean(project.link) || Boolean(project.github)
  ).length;

  if (projects.length === 0) {
    return (
      <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-[32px] border border-white/10 bg-white/[0.03] px-8 py-14 text-center shadow-[0_24px_90px_rgba(2,6,23,0.45)] backdrop-blur-xl">
          <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10">
            <div className="absolute h-16 w-16 rounded-3xl border border-white/10 bg-white/10 rotate-12" />
            <div className="absolute h-16 w-16 rounded-3xl border border-amber-300/20 bg-amber-400/10 -rotate-12" />
            <div className="relative h-8 w-8 rounded-full bg-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.7)]" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
            Portfolio Archive
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            The project gallery is ready for its first release.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            There are no projects published yet. Add your first build and this page
            will turn into a polished case-study grid automatically.
          </p>

          <Link
            href="/addproduct"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100 transition-all hover:-translate-y-0.5 hover:bg-cyan-400/25"
          >
            Launch First Project
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="relative isolate overflow-hidden bg-slate-950 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <section className="mb-14 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] shadow-[0_30px_110px_rgba(2,6,23,0.48)] backdrop-blur-xl">
          <div className="grid gap-10 px-6 py-8 md:px-10 md:py-12 xl:grid-cols-[1.35fr_0.95fr] xl:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-200/80">
                Selected Portfolio
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Modern product builds with a sharper visual edge.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                A curated collection of projects, interfaces, and production-ready
                experiments. The newest work appears first, with direct access to
                live demos, source code, and full case-study details.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Newest First
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                  Dark Editorial Layout
                </span>
                <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">
                  Case Study Focus
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Total Projects
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  {projects.length}
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Categories
                </p>
                <p className="mt-3 text-4xl font-semibold text-cyan-200">
                  {categories.size}
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Live Or Code Links
                </p>
                <p className="mt-3 text-4xl font-semibold text-amber-200">
                  {linkedProjects}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((product) => (
            <ProjectCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
