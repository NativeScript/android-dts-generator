/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module text {
		export module method {
			export class BaseKeyListener {
				public constructor();
				public backspace(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public forwardDelete(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;
			}
		}
	}
}
