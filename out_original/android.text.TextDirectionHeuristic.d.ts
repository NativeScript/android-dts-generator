/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class TextDirectionHeuristic {
			public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
			public isRtl(param0: string, param1: number, param2: number): boolean;
		}
	}
}
