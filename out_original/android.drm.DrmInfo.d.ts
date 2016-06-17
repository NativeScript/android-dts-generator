/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module android {
	export module drm {
		export class DrmInfo {
			public constructor();
			public constructor(param0: number, param1: native.Array<number>, param2: string);
			public constructor(param0: number, param1: string, param2: string);
			public put(param0: string, param1: java.lang.Object): void;
			public get(param0: string): java.lang.Object;
			public keyIterator(): java.util.Iterator;
			public iterator(): java.util.Iterator;
			public getData(): native.Array<number>;
			public getMimeType(): string;
			public getInfoType(): number;
		}
	}
}
