/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class TimedMetaData {
			public getTimestamp(): number;
			public getMetaData(): native.Array<number>;
		}
	}
}
