/// <reference path="./_helpers.d.ts" />

declare module java {
	export module security {
		export class Key {
			public getAlgorithm(): string;
			public getFormat(): string;
			public getEncoded(): native.Array<number>;
			public static serialVersionUID: number;
		}
	}
}
