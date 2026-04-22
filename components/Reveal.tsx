"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const directions: Record<Direction, string> = {
  up: "translateY(60px)",
  down: "translateY(-60px)",
  left: "translateX(60px)",
  right: "translateX(-60px)",
  none: "none",
};

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: RevealProps) {
  const [ref, visible] = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : directions[direction],
        transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

type StaggerProps = {
  children: ReactNode;
  stagger?: number;
  direction?: Direction;
  className?: string;
};

export function StaggerReveal({
  children,
  stagger = 0.1,
  direction = "up",
  className,
}: StaggerProps) {
  return (
    <>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <Reveal key={i} delay={i * stagger} direction={direction} className={className}>
            {child}
          </Reveal>
        );
      })}
    </>
  );
}
