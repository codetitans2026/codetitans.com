import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import { PencilLine, Plus, Sparkles, Trash2 } from "lucide-react";
import donateHeart from "../assets/donate-support.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Courses Offered — Code Titans" },
      { name: "description", content: "Customize and manage the coding courses offered by Code Titans for students in Cupertino." },
      { property: "og:title", content: "Courses Offered — Code Titans" },
      { property: "og:description", content: "Build and adjust your course lineup for future learners." },
    ],
  }),
  component: Donate,
});

type CourseItem = {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
};

type CourseDraft = Omit<CourseItem, "id">;

const INITIAL_COURSES: CourseItem[] = [
  {
    id: 1,
    title: "Intro to Python",
    description: "A beginner-friendly track for students who want to learn logic, variables, and simple projects.",
    duration: "6 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "JavaScript for Web Apps",
    description: "Create dashboards, mini-games, and interactive pages with modern JavaScript techniques.",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "AI & Robotics Basics",
    description: "Explore sensors, simple automation, and hands-on AI ideas that connect coding with real devices.",
    duration: "10 weeks",
    level: "Advanced",
  },
];

const DEFAULT_DRAFT: CourseDraft = {
  title: "",
  description: "",
  duration: "",
  level: "Beginner",
};

function Donate() {
  const [courses, setCourses] = useState<CourseItem[]>(INITIAL_COURSES);
  const [draft, setDraft] = useState<CourseDraft>(DEFAULT_DRAFT);
  const [editingId, setEditingId] = useState<number | null>(null);

  const resetDraft = () => {
    setDraft(DEFAULT_DRAFT);
    setEditingId(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!draft.title.trim() || !draft.description.trim() || !draft.duration.trim()) {
      return;
    }

    if (editingId !== null) {
      setCourses((current) =>
        current.map((course) => (course.id === editingId ? { ...course, ...draft } : course)),
      );
    } else {
      setCourses((current) => [
        ...current,
        {
          id: Date.now(),
          ...draft,
        },
      ]);
    }

    resetDraft();
  };

  const startEditing = (course: CourseItem) => {
    setEditingId(course.id);
    setDraft({
      title: course.title,
      description: course.description,
      duration: course.duration,
      level: course.level,
    });
  };

  const removeCourse = (id: number) => {
    setCourses((current) => current.filter((course) => course.id !== id));
    if (editingId === id) {
      resetDraft();
    }
  };

  return (
    <section className="bg-background pt-28 pb-24">
      <div className="mx-auto grid max-w-[1400px] gap-0 px-0 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="overflow-hidden lg:rounded-l-lg">
          <img
            src={donateHeart}
            alt="Students exploring technology together"
            width={1280}
            height={960}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center bg-card/30 p-6 md:p-10 lg:p-12">
          <div className="w-full">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Customize your course lineup</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Courses offered
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Shape the learning path for your students by adding, editing, or removing courses whenever you want.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-lg border border-border bg-background/80 p-4 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-foreground/80">
                  <span className="mb-2 block font-medium">Course title</span>
                  <input
                    value={draft.title}
                    onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none ring-0 focus:border-primary"
                    placeholder="e.g. Intro to Python"
                  />
                </label>
                <label className="text-sm text-foreground/80">
                  <span className="mb-2 block font-medium">Duration</span>
                  <input
                    value={draft.duration}
                    onChange={(event) => setDraft((current) => ({ ...current, duration: event.target.value }))}
                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none ring-0 focus:border-primary"
                    placeholder="e.g. 6 weeks"
                  />
                </label>
              </div>

              <label className="block text-sm text-foreground/80">
                <span className="mb-2 block font-medium">Level</span>
                <select
                  value={draft.level}
                  onChange={(event) => setDraft((current) => ({ ...current, level: event.target.value }))}
                  className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </label>

              <label className="block text-sm text-foreground/80">
                <span className="mb-2 block font-medium">Description</span>
                <textarea
                  value={draft.description}
                  onChange={(event) => setDraft((current) => ({ ...current, description: event.target.value }))}
                  className="min-h-24 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  placeholder="Describe what students will learn"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  {editingId ? "Save course" : "Add course"}
                </button>
                <button
                  type="button"
                  onClick={resetDraft}
                  className="h-11 rounded-md border border-border px-5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  Cancel
                </button>
              </div>
            </form>

            <div className="mt-8 space-y-3">
              {courses.map((course) => (
                <article key={course.id} className="rounded-lg border border-border bg-background/70 p-4 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-lg font-semibold text-foreground">{course.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => startEditing(course)}
                        className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground"
                      >
                        <PencilLine className="mr-2 h-4 w-4" />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => removeCourse(course.id)}
                        className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm text-foreground/80 transition-colors hover:border-destructive/60 hover:text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-foreground/70">
                    <span className="rounded-full bg-primary/10 px-3 py-1">{course.duration}</span>
                    <span className="rounded-full bg-muted px-3 py-1">{course.level}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}