import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Instagram, Mail, ThumbsUp, Youtube } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	const [status, setStatus] = useState("idle");
	const [errorMsg, setErrorMsg] = useState("");
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-background pt-32 pb-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-[1400px] px-6 text-center md:px-10",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90",
						children: "Let's Connect"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-display mt-3 text-4xl font-semibold text-foreground md:text-5xl",
						children: "Contact"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "Have a question for our team? Want to request a website for your business? Want to know more about our programs? Reach out to us via email, social media, or fill out the form below!"
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background pb-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-[1400px] gap-10 border-y border-border px-6 py-14 md:grid-cols-2 md:px-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center justify-center gap-10 text-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(Mail, { className: "mx-auto h-6 w-6 text-foreground/90" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 font-display text-base font-semibold",
							children: "Email"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "mailto:codetitans2026@gmail.com",
							className: "mt-1 inline-block text-sm text-muted-foreground hover:text-primary",
							children: "codetitans2026@gmail.com"
						})
					] }), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(ThumbsUp, { className: "mx-auto h-6 w-6 text-foreground/90" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 font-display text-base font-semibold",
							children: "Social Media"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex justify-center gap-4 text-foreground/80",
							children: [/* @__PURE__ */ jsx("a", {
								href: "#",
								"aria-label": "Instagram",
								className: "hover:text-primary",
								children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsx("a", {
								href: "#",
								"aria-label": "YouTube",
								className: "hover:text-primary",
								children: /* @__PURE__ */ jsx(Youtube, { className: "h-4 w-4" })
							})]
						})
					] })]
				}), /* @__PURE__ */ jsxs("form", {
					className: "space-y-5",
					onSubmit: async (e) => {
						e.preventDefault();
						if (status === "sending") return;
						setStatus("sending");
						setErrorMsg("");
						const fd = new FormData(e.currentTarget);
						try {
							const res = await fetch("/api/contact", {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									firstName: fd.get("firstName"),
									lastName: fd.get("lastName"),
									email: fd.get("email"),
									message: fd.get("message")
								})
							});
							if (!res.ok) {
								setErrorMsg((await res.json().catch(() => ({}))).error || "Something went wrong. Please try again.");
								setStatus("error");
								return;
							}
							setStatus("sent");
							e.target.reset();
						} catch {
							setErrorMsg("Network error. Please try again.");
							setStatus("error");
						}
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "First Name",
								name: "firstName"
							}), /* @__PURE__ */ jsx(Field, {
								label: "Last Name",
								name: "lastName"
							})]
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Email *",
							name: "email",
							type: "email",
							required: true
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-xs font-medium text-foreground/80",
							htmlFor: "message",
							children: "Message"
						}), /* @__PURE__ */ jsx("textarea", {
							id: "message",
							name: "message",
							rows: 5,
							className: "mt-1 w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: status === "sending",
							className: "inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60",
							children: status === "sending" ? "Sending…" : status === "sent" ? "Thanks — we'll be in touch!" : "Send"
						}),
						status === "error" && /* @__PURE__ */ jsx("p", {
							className: "text-sm text-destructive",
							children: errorMsg
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background pb-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-lg border border-border",
					children: /* @__PURE__ */ jsx("iframe", {
						title: "Code Titans location — Cupertino, CA",
						src: "https://www.google.com/maps?q=Cupertino,+CA+95014&output=embed",
						width: "100%",
						height: "360",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "block w-full"
					})
				})
			})
		})
	] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "text-xs font-medium text-foreground/80",
		htmlFor: name,
		children: label
	}), /* @__PURE__ */ jsx("input", {
		id: name,
		name,
		type,
		required,
		className: "mt-1 h-10 w-full rounded-md border border-border bg-input/40 px-3 text-sm text-foreground outline-none focus:border-primary"
	})] });
}
//#endregion
export { Contact as component };
