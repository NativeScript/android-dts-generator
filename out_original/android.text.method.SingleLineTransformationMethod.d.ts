/// <reference path="./_helpers.d.ts" />

declare module android {
	export module text {
		export module method {
			export class SingleLineTransformationMethod {
				public constructor();
				public getOriginal(): native.Array<string>;
				public getReplacement(): native.Array<string>;
				public static getInstance(): android.text.method.SingleLineTransformationMethod;
			}
		}
	}
}
