/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module preference {
		export class SwitchPreference {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public onBindView(param0: android.view.View): void;
			public setSwitchTextOn(param0: string): void;
			public setSwitchTextOff(param0: string): void;
			public setSwitchTextOn(param0: number): void;
			public setSwitchTextOff(param0: number): void;
			public getSwitchTextOn(): string;
			public getSwitchTextOff(): string;
		}
	}
}
