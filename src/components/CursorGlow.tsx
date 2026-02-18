import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
    const glowRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!visible) setVisible(true);

            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            rafId.current = requestAnimationFrame(() => {
                if (glowRef.current) {
                    glowRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
                }
            });
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [visible]);

    return (
        <div
            ref={glowRef}
            className="fixed pointer-events-none z-50 mix-blend-screen transition-opacity duration-300"
            style={{
                width: 300,
                height: 300,
                background: "radial-gradient(circle, hsl(200 100% 50% / 0.12) 0%, transparent 70%)",
                left: 0,
                top: 0,
                opacity: visible ? 1 : 0,
                willChange: "transform, opacity",
                transform: "translate3d(-100%, -100%, 0)",
            }}
        />
    );
};

export default CursorGlow;
