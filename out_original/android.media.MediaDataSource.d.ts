/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class MediaDataSource {
			public constructor();
			public readAt(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
			public getSize(): number;
		}
	}
}
