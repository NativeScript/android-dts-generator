/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module method {
			export class PasswordTransformationMethod {
				public constructor();
				public getTransformation(param0: string, param1: android.view.View): string;
				public static getInstance(): android.text.method.PasswordTransformationMethod;
				public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public afterTextChanged(param0: android.text.Editable): void;
				public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
			}
		}
	}
}
