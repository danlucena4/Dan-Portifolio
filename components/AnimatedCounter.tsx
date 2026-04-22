"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "./Reveal";

type Props = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000 }: Props) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useScrollReveal(0.3);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
