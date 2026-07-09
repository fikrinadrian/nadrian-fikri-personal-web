export const enterTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const viewport = { once: true, amount: 0.2 };

export function getPageMotion(shouldReduceMotion: boolean) {
  return {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: enterTransition,
  };
}

export function getRevealMotion(
  shouldReduceMotion: boolean,
  delay = 0,
  distance = 24,
) {
  return {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { ...enterTransition, delay },
  };
}

export function getLift(shouldReduceMotion: boolean, distance = -2) {
  return shouldReduceMotion ? undefined : { y: distance };
}

export function getPress(shouldReduceMotion: boolean) {
  return shouldReduceMotion ? undefined : { scale: 0.98 };
}
