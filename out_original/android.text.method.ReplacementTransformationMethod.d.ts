/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module method {
			export class ReplacementTransformationMethod {
				public constructor();
				public getOriginal(): native.Array<string>;
				public getReplacement(): native.Array<string>;
				public getTransformation(param0: string, param1: android.view.View): string;
				public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
			}
		}
	}
}
