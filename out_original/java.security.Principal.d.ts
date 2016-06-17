/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module security {
		export class Principal {
			public equals(param0: java.lang.Object): boolean;
			public getName(): string;
			public hashCode(): number;
			public toString(): string;
		}
	}
}
