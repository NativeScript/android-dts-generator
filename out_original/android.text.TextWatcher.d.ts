/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class TextWatcher {
			public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public afterTextChanged(param0: android.text.Editable): void;
		}
	}
}
