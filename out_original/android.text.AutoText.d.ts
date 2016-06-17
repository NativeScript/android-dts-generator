/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class AutoText {
			public static get(param0: string, param1: number, param2: number, param3: android.view.View): string;
			public static getSize(param0: android.view.View): number;
		}
	}
}
