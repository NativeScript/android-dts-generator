/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class BlackLevelPattern {
					public getOffsetForIndex(param0: number, param1: number): number;
					public copyTo(param0: native.Array<number>, param1: number): void;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
					public static COUNT: number;
				}
			}
		}
	}
}
