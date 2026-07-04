import { t as Reveal } from "./reveal-BufOD0Yk.js";
import { t as hero_wave_default } from "./hero-wave-DZGaFJOS.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/red-swirl.jpg
var red_swirl_default = "/assets/red-swirl-Ma83r6nd.jpg";
//#endregion
//#region src/routes/programs.tsx?tsr-split=component
var PROGRAMS = [
	{
		title: "Java Programming for Beginners",
		body: "Our Java programming course introduces students to the fundamentals of coding in a fun and engaging way. Through hands-on projects, students will learn to build their own applications and understand the importance of structured programming.",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
		alt: "Java logo"
	},
	{
		title: "Python for Data Science",
		body: "Dive into Python with our specialized program designed for aspiring data scientists. Students will explore data analysis techniques and machine learning concepts, equipping them with skills to tackle real-world data challenges.",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
		alt: "Python logo"
	},
	{
		title: "JavaScript for Web Development",
		body: "Our JavaScript course teaches students how to create interactive and dynamic web pages. They will learn about essential web technologies and gain practical experience in building responsive websites.",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
		alt: "JavaScript logo"
	},
	{
		title: "Hands-On Arduino Workshops",
		body: "In our Arduino workshops, students will engage in exciting projects that combine coding with hardware. They will learn how to program microcontrollers and create innovative gadgets, fostering creativity and problem-solving skills.",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
		alt: "Arduino logo"
	}
];
function Programs() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: hero_wave_default,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-70 animate-drift",
				width: 1920,
				height: 1080
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto max-w-[1400px] px-6 pt-40 pb-16 md:px-10",
				children: /* @__PURE__ */ jsx(Reveal, {
					direction: "blur",
					children: /* @__PURE__ */ jsxs("h1", {
						className: "font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl",
						children: [
							"Empowering the Next",
							/* @__PURE__ */ jsx("br", {}),
							"Generation of Coders"
						]
					})
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-[1400px] px-6 pb-20 md:px-10",
				children: [/* @__PURE__ */ jsx(Reveal, {
					direction: "up",
					children: /* @__PURE__ */ jsx("h2", {
						className: "font-display text-xl font-medium text-foreground/90",
						children: "Our Programs"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 divide-y divide-border rounded-lg border border-border bg-card/40 backdrop-blur",
					children: PROGRAMS.map((p, i) => /* @__PURE__ */ jsxs(Reveal, {
						direction: i % 2 === 0 ? "left" : "right",
						delay: i * 140,
						className: "grid items-center gap-6 p-6 md:grid-cols-[140px_1fr] md:gap-10 md:p-8",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mx-auto flex h-24 w-24 items-center justify-center md:mx-0",
							children: /* @__PURE__ */ jsx("img", {
								src: p.icon,
								alt: p.alt,
								width: 88,
								height: 88,
								className: "h-20 w-20 object-contain transition-transform duration-500 hover:scale-110",
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-semibold text-foreground",
							children: p.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: p.body
						})] })]
					}, p.title))
				})]
			})
		]
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-background pb-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-[1400px] px-6 md:px-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid overflow-hidden rounded-lg border border-border lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs(Reveal, {
					direction: "left",
					as: "div",
					className: "relative flex min-h-[300px] items-center justify-center overflow-hidden p-10",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: red_swirl_default,
							alt: "",
							className: "absolute inset-0 h-full w-full object-cover animate-drift"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/30" }),
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display relative z-10 text-center text-2xl font-semibold text-foreground md:text-3xl",
							children: [
								"Building Community",
								/* @__PURE__ */ jsx("br", {}),
								"and Connections"
							]
						})
					]
				}), /* @__PURE__ */ jsx(Reveal, {
					direction: "right",
					as: "div",
					className: "flex items-center bg-card/30 p-10 md:p-14",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "By partnering with local businesses, we not only provide students with real-world experience but also help strengthen our community. Our mission is to inspire youth to pursue careers in technology and foster collaboration within Cupertino."
					})
				})]
			})
		})
	})] });
}
//#endregion
export { Programs as component };
