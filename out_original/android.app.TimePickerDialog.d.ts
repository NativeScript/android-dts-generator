/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.widget.TimePicker.d.ts" />

declare module android {
	export module app {
		export class TimePickerDialog {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
			public constructor(param0: android.content.Context, param1: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.app.TimePickerDialog.OnTimeSetListener, param2: number, param3: number, param4: boolean);
			public constructor(param0: android.content.Context, param1: number, param2: android.app.TimePickerDialog.OnTimeSetListener, param3: number, param4: number, param5: boolean);
			public onTimeChanged(param0: android.widget.TimePicker, param1: number, param2: number): void;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public updateTime(param0: number, param1: number): void;
			public onSaveInstanceState(): android.os.Bundle;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
		}
		export module TimePickerDialog {
			export class OnTimeSetListener {
				public onTimeSet(param0: android.widget.TimePicker, param1: number, param2: number): void;
			}
		}
	}
}
