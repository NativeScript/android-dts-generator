/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export class Spannable {
			public setSpan(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
			public removeSpan(param0: java.lang.Object): void;
		}
		export module Spannable {
			export class Factory {
				public constructor();
				public static getInstance(): android.text.Spannable.Factory;
				public newSpannable(param0: string): android.text.Spannable;
			}
		}
	}
}
