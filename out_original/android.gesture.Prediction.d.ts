/// <reference path="./_helpers.d.ts" />

declare module android {
	export module gesture {
		export class Prediction {
			public toString(): string;
			public name: string;
			public score: number;
		}
	}
}
