import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { PencilLine, Plus, Sparkles, Trash2 } from "lucide-react";
//#region src/assets/donate-support.jpg
var donate_support_default = "/assets/donate-support-Dik4ZnyM.jpg";
//#endregion
//#region src/routes/donate.tsx?tsr-split=component
var INITIAL_COURSES = [
	{
		id: 1,
		title: "Intro to Python",
		description: "A beginner-friendly track for students who want to learn logic, variables, and simple projects.",
		duration: "6 weeks",
		level: "Beginner"
	},
	{
		id: 2,
		title: "JavaScript for Web Apps",
		description: "Create dashboards, mini-games, and interactive pages with modern JavaScript techniques.",
		duration: "8 weeks",
		level: "Intermediate"
	},
	{
		id: 3,
		title: "AI & Robotics Basics",
		description: "Explore sensors, simple automation, and hands-on AI ideas that connect coding with real devices.",
		duration: "10 weeks",
		level: "Advanced"
	}
];
var DEFAULT_DRAFT = {
	title: "",
	description: "",
	duration: "",
	level: "Beginner"
};
function Donate() {
	const [courses, setCourses] = useState(INITIAL_COURSES);
	const [draft, setDraft] = useState(DEFAULT_DRAFT);
	const [editingId, setEditingId] = useState(null);
	const resetDraft = () => {
		setDraft(DEFAULT_DRAFT);
		setEditingId(null);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!draft.title.trim() || !draft.description.trim() || !draft.duration.trim()) return;
		if (editingId !== null) setCourses((current) => current.map((course) => course.id === editingId ? {
			...course,
			...draft
		} : course));
		else setCourses((current) => [...current, {
			id: Date.now(),
			...draft
		}]);
		resetDraft();
	};
	const startEditing = (course) => {
		setEditingId(course.id);
		setDraft({
			title: course.title,
			description: course.description,
			duration: course.duration,
			level: course.level
		});
	};
	const removeCourse = (id) => {
		setCourses((current) => current.filter((course) => course.id !== id));
		if (editingId === id) resetDraft();
	};
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background pt-28 pb-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1400px] gap-0 px-0 lg:grid-cols-[1.1fr_0.9fr] lg:px-10",
			children: [/* @__PURE__ */ jsx("div", {
				className: "overflow-hidden lg:rounded-l-lg",
				children: /* @__PURE__ */ jsx("img", {
					src: donate_support_default,
					alt: "Students exploring technology together",
					width: 1280,
					height: 960,
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex items-center bg-card/30 p-6 md:p-10 lg:p-12",
				children: /* @__PURE__ */ jsxs("div", {
					className: "w-full",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-sm font-medium text-primary",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Customize your course lineup" })]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl",
							children: "Courses offered"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Shape the learning path for your students by adding, editing, or removing courses whenever you want."
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							className: "mt-8 space-y-4 rounded-lg border border-border bg-background/80 p-4 shadow-sm",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "grid gap-4 md:grid-cols-2",
									children: [/* @__PURE__ */ jsxs("label", {
										className: "text-sm text-foreground/80",
										children: [/* @__PURE__ */ jsx("span", {
											className: "mb-2 block font-medium",
											children: "Course title"
										}), /* @__PURE__ */ jsx("input", {
											value: draft.title,
											onChange: (event) => setDraft((current) => ({
												...current,
												title: event.target.value
											})),
											className: "h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none ring-0 focus:border-primary",
											placeholder: "e.g. Intro to Python"
										})]
									}), /* @__PURE__ */ jsxs("label", {
										className: "text-sm text-foreground/80",
										children: [/* @__PURE__ */ jsx("span", {
											className: "mb-2 block font-medium",
											children: "Duration"
										}), /* @__PURE__ */ jsx("input", {
											value: draft.duration,
											onChange: (event) => setDraft((current) => ({
												...current,
												duration: event.target.value
											})),
											className: "h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none ring-0 focus:border-primary",
											placeholder: "e.g. 6 weeks"
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "block text-sm text-foreground/80",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-2 block font-medium",
										children: "Level"
									}), /* @__PURE__ */ jsxs("select", {
										value: draft.level,
										onChange: (event) => setDraft((current) => ({
											...current,
											level: event.target.value
										})),
										className: "h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary",
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "Beginner",
												children: "Beginner"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "Intermediate",
												children: "Intermediate"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "Advanced",
												children: "Advanced"
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "block text-sm text-foreground/80",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-2 block font-medium",
										children: "Description"
									}), /* @__PURE__ */ jsx("textarea", {
										value: draft.description,
										onChange: (event) => setDraft((current) => ({
											...current,
											description: event.target.value
										})),
										className: "min-h-24 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary",
										placeholder: "Describe what students will learn"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
										children: [/* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }), editingId ? "Save course" : "Add course"]
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: resetDraft,
										className: "h-11 rounded-md border border-border px-5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground",
										children: "Cancel"
									})]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 space-y-3",
							children: courses.map((course) => /* @__PURE__ */ jsxs("article", {
								className: "rounded-lg border border-border bg-background/70 p-4 shadow-sm",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
										className: "font-display text-lg font-semibold text-foreground",
										children: course.title
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm leading-relaxed text-muted-foreground",
										children: course.description
									})] }), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => startEditing(course),
											className: "inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground",
											children: [/* @__PURE__ */ jsx(PencilLine, { className: "mr-2 h-4 w-4" }), "Edit"]
										}), /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => removeCourse(course.id),
											className: "inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm text-foreground/80 transition-colors hover:border-destructive/60 hover:text-destructive",
											children: [/* @__PURE__ */ jsx(Trash2, { className: "mr-2 h-4 w-4" }), "Delete"]
										})]
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "mt-3 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-foreground/70",
									children: [/* @__PURE__ */ jsx("span", {
										className: "rounded-full bg-primary/10 px-3 py-1",
										children: course.duration
									}), /* @__PURE__ */ jsx("span", {
										className: "rounded-full bg-muted px-3 py-1",
										children: course.level
									})]
								})]
							}, course.id))
						})
					]
				})
			})]
		})
	});
}
//#endregion
export { Donate as component };
