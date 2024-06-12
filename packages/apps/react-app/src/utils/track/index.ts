import { BaseTrack, UserTrackData } from "./track";

const baseTrack = new BaseTrack();

export class Performance {
	public static readonly timing = window.performance.timing;

	public static init() {
		if (this.timing) {
			window.addEventListener(
				"load",
				() => {
					baseTrack.track({
						eventName: "PAGE_FMP",
						msg: `dns: ${this.getTimings().dns}`,
					});
				},
				false,
			);
		} else {
			console.warn("timing is not find");
		}
	}

	public static getTimings() {
		return {
			dns: this.timing.domainLookupEnd - this.timing.domainLookupStart,
			tcp: this.timing.connectEnd - this.timing.connectStart,
			ttfb: this.timing.responseStart - this.timing.requestStart,
			dom: this.timing.domComplete - this.timing.domLoading,
			fmp:
				this.timing.domContentLoadedEventEnd -
				this.timing.navigationStart,
		};
	}
}

export const sendLog = <T>(data: T) => {
	baseTrack.track(data as T & UserTrackData);
};
