import { t as Reveal } from "./reveal-BufOD0Yk.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/green-matrix.jpg
var green_matrix_default = "/assets/green-matrix-rTp8IMh8.jpg";
//#endregion
//#region src/routes/pricing.tsx?tsr-split=component
function Pricing() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden pt-32 pb-24",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: green_matrix_default,
				alt: "",
				"aria-hidden": "true",
				className: "pointer-events-none absolute right-0 top-0 h-full w-full object-cover mix-blend-screen animate-pricing-backdrop md:w-2/3"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2 md:px-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center justify-center text-center md:items-start md:text-left",
					children: [
						/* @__PURE__ */ jsx(Reveal, {
							direction: "blur",
							children: /* @__PURE__ */ jsx("h1", {
								className: "font-display text-4xl font-semibold text-foreground md:text-5xl",
								children: "Pricing"
							})
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							direction: "left",
							delay: 150,
							className: "mt-10 space-y-3 text-sm text-foreground/85 md:text-base",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-medium",
								children: "Overall cost: $20"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "list-disc space-y-2 pl-5 text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx("li", { children: "1 semester consists of 12 sessions." }),
									/* @__PURE__ */ jsx("li", { children: "Enjoy the first 2 sessions for free!" }),
									/* @__PURE__ */ jsx("li", { children: "The remaining 10 sessions will be $2 each." })
								]
							})]
						}),
						/* @__PURE__ */ jsx(Reveal, {
							direction: "up",
							delay: 350,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/registration",
								className: "mt-10 inline-flex h-11 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "Register"
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Pricing as component };
