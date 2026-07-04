import { t as blue_wave_default } from "./blue-wave-1RpmnANy.js";
import { t as Reveal } from "./reveal-BufOD0Yk.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/red-wave.jpg
var red_wave_default = "/assets/red-wave--i29gALE.jpg";
//#endregion
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: red_wave_default,
				alt: "",
				className: "absolute right-0 top-0 hidden h-full w-2/3 object-cover opacity-60 animate-drift md:block",
				width: 1280,
				height: 960
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-[1400px] px-6 pt-40 pb-24 md:px-10",
				children: [/* @__PURE__ */ jsx(Reveal, {
					direction: "blur",
					children: /* @__PURE__ */ jsx("h1", {
						className: "font-display text-4xl font-semibold text-foreground md:text-5xl",
						children: "Our Mission"
					})
				}), /* @__PURE__ */ jsx(Reveal, {
					direction: "left",
					delay: 250,
					children: /* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-foreground/90",
						children: "At Code Titans, we are dedicated to empowering youth through computer science education. Our mission is to unlock the potential of the next generation by providing accessible and engaging programming courses, fostering a passion for technology, and preparing students for future success."
					})
				})]
			})
		]
	}), /* @__PURE__ */ jsxs("section", {
		className: "bg-background py-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1400px] px-6 md:px-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid overflow-hidden rounded-lg border border-border lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs(Reveal, {
					as: "div",
					direction: "left",
					className: "relative flex min-h-[360px] items-center justify-center overflow-hidden p-10",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 bg-cover bg-center animate-drift",
							style: { backgroundImage: `url(${blue_wave_default})` }
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/30" }),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display relative z-10 text-3xl font-semibold text-foreground",
							children: "Our Story"
						})
					]
				}), /* @__PURE__ */ jsx(Reveal, {
					as: "div",
					direction: "right",
					delay: 150,
					className: "flex items-center bg-card/30 p-10 md:p-14",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "Founded by a group of passionate students, Code Titans emerged from a desire to share knowledge and inspire others in the field of technology. Our organization offers semester-long programs in Java, Python, JavaScript, and Arduino, equipping young minds with vital skills. We collaborate with local businesses in Cupertino, helping them establish their online presence through website creation and digital products, making a real impact in our community."
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 grid overflow-hidden rounded-lg border border-border lg:grid-cols-2",
				children: [/* @__PURE__ */ jsx(Reveal, {
					as: "div",
					direction: "left",
					className: "flex items-center bg-card/30 p-10 md:p-14 lg:order-1",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "Our team at Code Titans is composed of experienced instructors who are committed to nurturing young talent. We believe in a hands-on approach to learning, where students can develop their skills through practical projects. With a diverse group of mentors, we strive to create an inclusive environment that encourages creativity and collaboration."
					})
				}), /* @__PURE__ */ jsxs(Reveal, {
					as: "div",
					direction: "scale",
					delay: 150,
					className: "relative flex min-h-[360px] items-center justify-center overflow-hidden p-10 lg:order-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 bg-cover bg-center animate-pulse-slow",
							style: { backgroundImage: `url(${red_wave_default})` }
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/30" }),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display relative z-10 text-center text-3xl font-semibold text-foreground",
							children: "Empowered Educators"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ jsx("div", { className: "h-16" })]
	})] });
}
//#endregion
export { About as component };
