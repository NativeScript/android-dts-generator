/// <reference path="./_helpers.d.ts" />

declare module android {
	export module text {
		export module method {
			export class HideReturnsTransformationMethod {
				public constructor();
				public getOriginal(): native.Array<string>;
				public getReplacement(): native.Array<string>;
				public static getInstance(): android.text.method.HideReturnsTransformationMethod;
			}
		}
	}
}
