/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class RtlSpacingHelper {
					public getLeft(): number;
					public getRight(): number;
					public getStart(): number;
					public getEnd(): number;
					public setRelative(param0: number, param1: number): void;
					public setAbsolute(param0: number, param1: number): void;
					public setDirection(param0: boolean): void;
					public static UNDEFINED: number;
				}
			}
		}
	}
}
