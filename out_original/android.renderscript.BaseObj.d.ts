/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class BaseObj {
			public setName(param0: string): void;
			public getName(): string;
			public finalize(): void;
			public destroy(): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
		}
	}
}
