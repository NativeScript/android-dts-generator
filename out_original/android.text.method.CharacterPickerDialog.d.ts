/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module method {
			export class CharacterPickerDialog {
				public constructor(param0: android.content.Context);
				public constructor(param0: android.content.Context, param1: number);
				public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.view.View, param2: android.text.Editable, param3: string, param4: boolean);
				public onCreate(param0: android.os.Bundle): void;
				public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
				public onClick(param0: android.view.View): void;
			}
		}
	}
}
