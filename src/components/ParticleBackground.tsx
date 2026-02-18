import { useEffect, useRef } from "react";

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
        const particleCount = 60;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        const resizeObserver = new ResizeObserver(() => {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
        });
        resizeObserver.observe(document.documentElement);

        resize();

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isDark = document.documentElement.classList.contains("dark");
            const particleColor = isDark ? "140, 200, 255" : "0, 120, 200";

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Mouse attraction
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    p.x += dx * 0.002;
                    p.y += dy * 0.002;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
                ctx.fill();

                // Connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                    if (d < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(${particleColor}, ${0.08 * (1 - d / 150)})`;
                        ctx.stroke();
                    }
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("mousemove", handleMouseMove);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export default ParticleBackground;
