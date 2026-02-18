import { useEffect, useState } from "react";

const CursorGlow = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };
        const handleMouseLeave = () => setVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            className="fixed pointer-events-none z-50 mix-blend-screen"
            style={{
                left: pos.x - 150,
                top: pos.y - 150,
                width: 300,
                height: 300,
                background: "radial-gradient(circle, hsl(200 100% 50% / 0.12) 0%, transparent 70%)",
                transition: "left 0.1s ease-out, top 0.1s ease-out",
            }}
        />
    );
};

export default CursorGlow;
