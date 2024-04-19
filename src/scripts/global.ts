import gsap from "gsap";

export const gsapTimelines: {
	[key: string]: gsap.core.Timeline;
} = {};

export function createTimeline(key: string) {
	const newTimeline = gsap.timeline();
	gsapTimelines[key] = newTimeline;
	return newTimeline;
}
