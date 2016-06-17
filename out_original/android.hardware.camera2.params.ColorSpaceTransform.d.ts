/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.util.Rational.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class ColorSpaceTransform {
					public constructor();
					public constructor(param0: native.Array<android.util.Rational>);
					public constructor(param0: native.Array<number>);
					public getElement(param0: number, param1: number): android.util.Rational;
					public copyElements(param0: native.Array<android.util.Rational>, param1: number): void;
					public copyElements(param0: native.Array<number>, param1: number): void;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
