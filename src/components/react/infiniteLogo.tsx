// components/LogoCarousel.tsx
import { useEffect, useRef } from "react";
import type { ComponentProps } from "astro/types";

interface Logo {
  src: string;
  alt: string;
}

interface Props extends ComponentProps<"div"> {
  logos: Logo[];
  speed?: number;
}

export default function LogoCarousel({ logos, speed = 1, ...props }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const clonedLogos = [...logos, ...logos]; // Duplicate for seamless looping

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerInner = scroller.firstElementChild;
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);

    // Add data-animated="true" to enable animation
    scroller.setAttribute("data-animated", "true");

    // Make clones of the logos for infinite scrolling
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }, [logos]);

  return (
    <div {...props}>
      <div
        ref={scrollerRef}
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <div
          className="flex items-center justify-center gap-12 flex-nowrap animate-scroll"
          style={{ "--speed": `${speed}s` } as React.CSSProperties}
        >
          {clonedLogos.map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-7 w-auto shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 24px));
          }
        }

        .animate-scroll {
          animation: scroll var(--speed, 40s) linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}
