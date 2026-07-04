import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-DvbcC2EX.css";
//#endregion
//#region src/assets/logo.png
var logo_default = "/assets/logo-Bk8cp22a.png";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/logo.tsx
function Logo({ className }) {
	return /* @__PURE__ */ jsx("img", {
		src: logo_default,
		alt: "Code Titans Logo",
		className
	});
}
//#endregion
//#region src/components/site-nav.tsx
var NAV_LINKS = [
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/programs",
		label: "View Our Programs"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/registration",
		label: "Registration"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/donate",
		label: "Courses Offered"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "absolute top-0 left-0 right-0 z-50",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ jsx(Logo, { className: "h-16 w-32" }), /* @__PURE__ */ jsx("span", {
						className: "font-display text-2xl font-semibold tracking-wide text-foreground",
						children: "Code Titans"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden lg:flex items-center gap-7",
					children: /* @__PURE__ */ jsx("nav", {
						className: "flex items-center gap-7",
						children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(Link, {
							to: link.to,
							activeProps: { className: "text-primary" },
							className: "text-sm font-medium text-foreground/85 transition-colors hover:text-primary",
							children: link.label
						}, link.to))
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground",
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
					})
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t border-border bg-background/95 backdrop-blur",
			children: /* @__PURE__ */ jsx("nav", {
				className: "flex flex-col px-6 py-4",
				children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(Link, {
					to: link.to,
					onClick: () => setOpen(false),
					activeProps: { className: "text-primary" },
					className: "py-3 text-sm font-medium text-foreground/85",
					children: link.label
				}, link.to))
			})
		})]
	});
}
//#endregion
//#region src/components/site-footer.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-3 md:px-10",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Logo, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ jsx("span", {
						className: "font-display text-base font-semibold",
						children: "Code Titans"
					})]
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-sm text-muted-foreground",
					children: [
						"codetitans2026@gmail.com",
						/* @__PURE__ */ jsx("br", {}),
						"Cupertino, CA 95014"
					]
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-y-3 text-sm md:justify-self-center",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "text-foreground/85 hover:text-primary",
							children: "About Us"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/programs",
							className: "text-foreground/85 hover:text-primary",
							children: "Programs"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/registration",
							className: "text-foreground/85 hover:text-primary",
							children: "Register"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "text-foreground/85 hover:text-primary",
							children: "Contact Us"
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex md:justify-end",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/donate",
						className: "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Donate Now"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Code Titans" },
			{
				name: "description",
				content: "Code Titans is a Cupertino-based non-profit empowering youth through computer science education."
			},
			{
				name: "author",
				content: "Code Titans"
			},
			{
				property: "og:title",
				content: "Code Titans"
			},
			{
				property: "og:description",
				content: "Empowering youth through technology — coding programs in Java, Python, JavaScript, and Arduino."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: logo_default
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: "Code Titans"
			}
		],
		links: [
			{
				rel: "icon",
				href: logo_default,
				type: "image/png"
			},
			{
				rel: "shortcut icon",
				href: logo_default,
				type: "image/png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ jsx(SiteNav, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx("div", {
						className: "animate-page-in",
						children: /* @__PURE__ */ jsx(Outlet, {})
					}, pathname)
				}),
				/* @__PURE__ */ jsx(SiteFooter, {})
			]
		})
	});
}
//#endregion
//#region src/routes/registration.tsx
var $$splitComponentImporter$7 = () => import("./registration-qBKCbXxI.js");
var Route$8 = createFileRoute("/registration")({
	head: () => ({ meta: [
		{ title: "Registration — Code Titans" },
		{
			name: "description",
			content: "Registration for Code Titans programs — coming soon. Reach out for any inquiries about our coding courses."
		},
		{
			property: "og:title",
			content: "Registration — Code Titans"
		},
		{
			property: "og:description",
			content: "Registration information coming soon — contact us for details."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/programs.tsx
var $$splitComponentImporter$6 = () => import("./programs-CRkJRiYJ.js");
var Route$7 = createFileRoute("/programs")({
	head: () => ({ meta: [
		{ title: "Our Programs — Code Titans" },
		{
			name: "description",
			content: "Semester-long courses in Java, Python, JavaScript, and hands-on Arduino workshops for aspiring student coders."
		},
		{
			property: "og:title",
			content: "Our Programs — Code Titans"
		},
		{
			property: "og:description",
			content: "Java, Python, JavaScript, and Arduino programs for the next generation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/pricing.tsx
var $$splitComponentImporter$5 = () => import("./pricing-BUKBWHh2.js");
var Route$6 = createFileRoute("/pricing")({
	head: () => ({ meta: [
		{ title: "Pricing — Code Titans" },
		{
			name: "description",
			content: "Just $20 per semester — 12 sessions, first 2 free. Affordable coding education for youth in Cupertino."
		},
		{
			property: "og:title",
			content: "Pricing — Code Titans"
		},
		{
			property: "og:description",
			content: "$20 per semester. 12 sessions, first 2 free."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/events.tsx
var $$splitComponentImporter$4 = () => import("./events-B3Kc5tZ-.js");
var Route$5 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events — Code Titans" },
		{
			name: "description",
			content: "Upcoming Code Titans events and workshops — more information coming soon."
		},
		{
			property: "og:title",
			content: "Events — Code Titans"
		},
		{
			property: "og:description",
			content: "Upcoming events and workshops — coming soon."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/donate.tsx
var $$splitComponentImporter$3 = () => import("./donate-Cprz5XdL.js");
var Route$4 = createFileRoute("/donate")({
	head: () => ({ meta: [
		{ title: "Courses Offered — Code Titans" },
		{
			name: "description",
			content: "Customize and manage the coding courses offered by Code Titans for students in Cupertino."
		},
		{
			property: "og:title",
			content: "Courses Offered — Code Titans"
		},
		{
			property: "og:description",
			content: "Build and adjust your course lineup for future learners."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-Dp8K0ss5.js");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Code Titans" },
		{
			name: "description",
			content: "Get in touch with Code Titans — questions about our programs, partnership requests, or general inquiries."
		},
		{
			property: "og:title",
			content: "Contact — Code Titans"
		},
		{
			property: "og:description",
			content: "Reach the Code Titans team by email, social media, or message form."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-B51IWxaz.js");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Code Titans" },
		{
			name: "description",
			content: "Founded by passionate students, Code Titans empowers youth in Cupertino through accessible computer science education."
		},
		{
			property: "og:title",
			content: "About Us — Code Titans"
		},
		{
			property: "og:description",
			content: "Our mission, story, and team of empowered educators."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-BdnkZqPT.js");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Code Titans — Empowering Youth Through Technology" },
		{
			name: "description",
			content: "Cupertino non-profit inspiring the next generation of coders through semester-long programs in Java, Python, JavaScript, and Arduino."
		},
		{
			property: "og:title",
			content: "Code Titans — Empowering Youth Through Technology"
		},
		{
			property: "og:description",
			content: "Cupertino non-profit inspiring the next generation of coders."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routes/api/contact.ts
var TO_EMAIL = "codetitans2026@gmail.com";
var Route = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request, context }) => {
	const resendApiKey = context.cloudflare.env.RESEND_API_KEY;
	if (!resendApiKey) return Response.json({ error: "Email service not configured" }, { status: 500 });
	const body = await request.json().catch(() => null);
	const firstName = (body?.firstName || "").trim().slice(0, 100);
	const lastName = (body?.lastName || "").trim().slice(0, 100);
	const email = (body?.email || "").trim().slice(0, 200);
	const message = (body?.message || "").trim().slice(0, 5e3);
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Valid email is required" }, { status: 400 });
	if (!message) return Response.json({ error: "Message is required" }, { status: 400 });
	const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Website visitor";
	const res = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${resendApiKey}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: "Code Titans <onboarding@resend.dev>",
			to: TO_EMAIL,
			reply_to: email,
			subject: `New contact form message from ${fullName}`,
			text: [
				`Name: ${fullName}`,
				`Email: ${email}`,
				"",
				"Message:",
				message
			].join("\n")
		})
	});
	if (!res.ok) {
		const err = await res.text();
		console.error("Resend failed", res.status, err);
		return Response.json({ error: "Failed to send message. Please email us directly." }, { status: 502 });
	}
	return Response.json({ ok: true });
} } } });
//#endregion
//#region src/routeTree.gen.ts
var RegistrationRoute = Route$8.update({
	id: "/registration",
	path: "/registration",
	getParentRoute: () => Route$9
});
var ProgramsRoute = Route$7.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$9
});
var PricingRoute = Route$6.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$9
});
var EventsRoute = Route$5.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$9
});
var DonateRoute = Route$4.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute,
	ContactRoute,
	DonateRoute,
	EventsRoute,
	PricingRoute,
	ProgramsRoute,
	RegistrationRoute,
	ApiContactRoute: Route.update({
		id: "/api/contact",
		path: "/api/contact",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
