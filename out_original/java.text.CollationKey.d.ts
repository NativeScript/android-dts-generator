/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module text {
		export class CollationKey {
			public constructor();
			public constructor(param0: string);
			public compareTo(param0: java.text.CollationKey): number;
			public getSourceString(): string;
			public toByteArray(): native.Array<number>;
		}
	}
}
