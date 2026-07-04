import { t as Reveal } from "./reveal-BufOD0Yk.js";
import { t as blue_code_default } from "./blue-code-5Gncwe9j.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/registration.tsx?tsr-split=component
function Registration() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden pt-32 pb-24",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: blue_code_default,
				alt: "",
				"aria-hidden": "true",
				className: "pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-60 mix-blend-screen animate-drift md:w-3/4"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-background via-background/70 to-background/20" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2 md:px-10 md:ml-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "md:col-start-2 flex flex-col items-center justify-center text-center md:items-start md:text-left",
					children: [
						/* @__PURE__ */ jsx(Reveal, {
							direction: "right",
							children: /* @__PURE__ */ jsx("h1", {
								className: "font-display text-4xl font-semibold text-foreground md:text-5xl",
								children: "Registration"
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							direction: "blur",
							delay: 200,
							children: /* @__PURE__ */ jsx("p", {
								className: "mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base",
								children: "More information for registration coming soon! Stay tuned! For any inquiries, feel free to reach out to us via email. We appreciate your interest in supporting our mission."
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							direction: "up",
							delay: 450,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "mt-10 inline-flex h-11 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "Contact Us"
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Registration as component };
