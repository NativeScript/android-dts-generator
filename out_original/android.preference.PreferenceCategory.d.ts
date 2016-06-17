/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module preference {
		export class PreferenceCategory {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public onPrepareAddPreference(param0: android.preference.Preference): boolean;
			public isEnabled(): boolean;
			public shouldDisableDependents(): boolean;
		}
	}
}
