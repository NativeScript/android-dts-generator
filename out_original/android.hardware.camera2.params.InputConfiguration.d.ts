/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class InputConfiguration {
					public constructor();
					public constructor(param0: number, param1: number, param2: number);
					public getWidth(): number;
					public getHeight(): number;
					public getFormat(): number;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
