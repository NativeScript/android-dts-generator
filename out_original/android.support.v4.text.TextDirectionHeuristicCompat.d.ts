/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module text {
				export class TextDirectionHeuristicCompat {
					public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
					public isRtl(param0: string, param1: number, param2: number): boolean;
				}
			}
		}
	}
}
