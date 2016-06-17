/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class RggbChannelVector {
					public constructor();
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public getRed(): number;
					public getGreenEven(): number;
					public getGreenOdd(): number;
					public getBlue(): number;
					public getComponent(param0: number): number;
					public copyTo(param0: native.Array<number>, param1: number): void;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
					public static BLUE: number;
					public static COUNT: number;
					public static GREEN_EVEN: number;
					public static GREEN_ODD: number;
					public static RED: number;
				}
			}
		}
	}
}
