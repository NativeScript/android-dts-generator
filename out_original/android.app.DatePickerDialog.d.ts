/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.widget.DatePicker.d.ts" />

declare module android {
	export module app {
		export class DatePickerDialog {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
			public constructor(param0: android.content.Context, param1: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.app.DatePickerDialog.OnDateSetListener, param2: number, param3: number, param4: number);
			public constructor(param0: android.content.Context, param1: number, param2: android.app.DatePickerDialog.OnDateSetListener, param3: number, param4: number, param5: number);
			public onDateChanged(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public getDatePicker(): android.widget.DatePicker;
			public updateDate(param0: number, param1: number, param2: number): void;
			public onSaveInstanceState(): android.os.Bundle;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
		}
		export module DatePickerDialog {
			export class OnDateSetListener {
				public onDateSet(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
			}
		}
	}
}
