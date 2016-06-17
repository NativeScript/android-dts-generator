/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module preference {
		export class PreferenceGroup {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setOrderingAsAdded(param0: boolean): void;
			public isOrderingAsAdded(): boolean;
			public addItemFromInflater(param0: android.preference.Preference): void;
			public getPreferenceCount(): number;
			public getPreference(param0: number): android.preference.Preference;
			public addPreference(param0: android.preference.Preference): boolean;
			public removePreference(param0: android.preference.Preference): boolean;
			public removeAll(): void;
			public onPrepareAddPreference(param0: android.preference.Preference): boolean;
			public findPreference(param0: string): android.preference.Preference;
			public isOnSameScreenAsChildren(): boolean;
			public onAttachedToActivity(): void;
			public onPrepareForRemoval(): void;
			public notifyDependencyChange(param0: boolean): void;
			public dispatchSaveInstanceState(param0: android.os.Bundle): void;
			public dispatchRestoreInstanceState(param0: android.os.Bundle): void;
		}
	}
}
