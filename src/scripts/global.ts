import gsap from "gsap";

export const gsapTimelines: {
	[key: string]: gsap.core.Timeline;
} = {};

export function createTimeline(
	key: string,
	timelineOptions?: gsap.TimelineVars,
) {
	const newTimeline = gsap.timeline(timelineOptions);
	newTimeline.paused(true);
	gsapTimelines[key] = newTimeline;
	return newTimeline;
}

export function useTimeline(key: string, timelineOptions?: gsap.TimelineVars) {
	let tl = gsapTimelines[key];

	if (tl) {
		tl.restart().then(() => tl.pause());
	} else {
		tl = createTimeline("to");
		tl.play().then(() => tl.pause());
	}

	return tl;
}
