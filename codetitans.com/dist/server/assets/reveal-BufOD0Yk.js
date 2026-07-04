import { useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/reveal.tsx
function Reveal({ children, direction = "up", delay = 0, className = "", as: Tag = "div" }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setVisible(true);
				io.disconnect();
				break;
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(node);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		style: delay ? { animationDelay: `${delay}ms` } : {},
		className: `reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`,
		children
	});
}
//#endregion
export { Reveal as t };
