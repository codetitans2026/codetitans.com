import { t as blue_wave_default } from "./blue-wave-1RpmnANy.js";
import { t as Reveal } from "./reveal-BufOD0Yk.js";
import { t as hero_wave_default } from "./hero-wave-DZGaFJOS.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Cloud, Hexagon, Layers, Users } from "lucide-react";
//#region src/assets/red-ripple.jpg
var red_ripple_default = "/assets/red-ripple-Del7fcZ5.jpg";
//#endregion
//#region src/assets/red-sphere.jpg
var red_sphere_default = "/assets/red-sphere-BYUpqqQi.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var FEATURES = [
	{
		icon: Cloud,
		title: "Diverse Programming Languages",
		body: "Our semester-long programs cover various programming languages including Java, Python, JavaScript, and Arduino, ensuring that students gain valuable skills relevant to the tech industry."
	},
	{
		icon: Hexagon,
		title: "Community Engagement",
		body: "We collaborate with local businesses in Cupertino to create impactful digital products while offering students hands-on experience in real-world projects."
	},
	{
		icon: Layers,
		title: "Mentorship and Support",
		body: "Code Titans emphasizes mentorship, pairing students with experienced instructors who guide them through their learning journey."
	},
	{
		icon: Users,
		title: "Building a Tech-Savvy Future",
		body: "By investing in youth education today, we inspire young minds to explore the world of Computer Science, where technology can be leveraged to solve real-world problems in the future."
	}
];
function Index() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative min-h-[88vh] w-full overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: hero_wave_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover animate-drift",
					width: 1920,
					height: 1080
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-center px-6 pt-32 pb-20 md:px-10",
					children: [
						/* @__PURE__ */ jsx(Reveal, {
							direction: "left",
							children: /* @__PURE__ */ jsx("h1", {
								className: "font-display max-w-2xl text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl md:text-6xl",
								children: "Empowering Youth Through Technology"
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							direction: "left",
							delay: 150,
							children: /* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-md text-base text-foreground/85 md:text-lg",
								children: "Inspiring the Next Generation of Coders"
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							direction: "up",
							delay: 300,
							className: "mt-10",
							children: /* @__PURE__ */ jsx(Link, {
								to: "/programs",
								className: "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "See Programs"
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden bg-background py-20 md:py-28",
			children: [/* @__PURE__ */ jsx("img", {
				src: blue_wave_default,
				alt: "",
				loading: "lazy",
				className: "pointer-events-none absolute left-0 top-1/2 hidden h-[60%] w-1/2 -translate-y-1/2 object-cover opacity-50 md:block animate-drift",
				width: 1280,
				height: 960
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-md",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl",
							children: "Transforming Lives with Computer Science Education"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Code Titans is dedicated to providing comprehensive computer science education to youth, fostering creativity and technological skills that are essential in today's digital world."
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: FEATURES.map((f, i) => /* @__PURE__ */ jsxs(Reveal, {
						direction: [
							"blur",
							"left",
							"right",
							"rotate"
						][i % 4],
						delay: i * 160,
						className: "rounded-lg border border-border bg-card/60 p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40",
						children: [
							/* @__PURE__ */ jsx(f.icon, {
								className: "h-8 w-8 text-primary",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-6 font-display text-base font-semibold text-foreground",
								children: f.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: f.body
							}),
							/* @__PURE__ */ jsx("div", { className: "mt-6 h-px w-12 bg-primary/60" })
						]
					}, f.title))
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background pb-20 md:pb-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid overflow-hidden rounded-lg border border-border lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative flex min-h-[360px] items-center justify-center overflow-hidden p-10",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: ripple(),
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover animate-spin-slow",
								style: { transformOrigin: "center" }
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/30" }),
							/* @__PURE__ */ jsxs("h3", {
								className: "font-display relative z-10 text-center text-2xl font-semibold text-foreground md:text-3xl",
								children: [
									"Innovative Programs for",
									/* @__PURE__ */ jsx("br", {}),
									"Aspiring Coders"
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center bg-card/30 p-10 md:p-14",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-md",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-muted-foreground md:text-base",
								children: "At Code Titans, we offer engaging and interactive coding programs that ignite passion for technology in young minds. From foundational coding skills to advanced programming techniques, our curriculum is designed to adapt to the needs of every student. Our commitment to education extends beyond the classroom through community projects and partnerships."
							}), /* @__PURE__ */ jsx(Link, {
								to: "/programs",
								className: "mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "Learn More"
							})]
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-10 grid overflow-hidden rounded-lg border border-border lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative flex min-h-[320px] items-center justify-center overflow-hidden p-10",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: sphere(),
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover animate-pulse-slow"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/20" }),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display relative z-10 text-center text-2xl font-semibold text-foreground md:text-3xl",
								children: "Interested in signing up for a program?"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center bg-card/30 p-10 md:p-14",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-md",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-muted-foreground md:text-base",
								children: "Sign up today to participate in a fun, hands-on coding program and learn from our instructors!"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/registration",
								className: "mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "Sign Up"
							})]
						})
					})]
				})]
			})
		})
	] });
}
function ripple() {
	return red_ripple_default;
}
function sphere() {
	return red_sphere_default;
}
//#endregion
export { Index as component };
