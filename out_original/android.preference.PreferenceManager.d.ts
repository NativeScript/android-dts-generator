/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.preference.PreferenceScreen.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module preference {
		export class PreferenceManager {
			public createPreferenceScreen(param0: android.content.Context): android.preference.PreferenceScreen;
			public getSharedPreferencesName(): string;
			public setSharedPreferencesName(param0: string): void;
			public getSharedPreferencesMode(): number;
			public setSharedPreferencesMode(param0: number): void;
			public getSharedPreferences(): android.content.SharedPreferences;
			public static getDefaultSharedPreferences(param0: android.content.Context): android.content.SharedPreferences;
			public findPreference(param0: string): android.preference.Preference;
			public static setDefaultValues(param0: android.content.Context, param1: number, param2: boolean): void;
			public static setDefaultValues(param0: android.content.Context, param1: string, param2: number, param3: number, param4: boolean): void;
			public static KEY_HAS_SET_DEFAULT_VALUES: string;
			public static METADATA_KEY_PREFERENCES: string;
		}
		export module PreferenceManager {
			export class OnActivityDestroyListener {
				public onActivityDestroy(): void;
			}
			export class OnActivityResultListener {
				public onActivityResult(param0: number, param1: number, param2: android.content.Intent): boolean;
			}
			export class OnActivityStopListener {
				public onActivityStop(): void;
			}
		}
	}
}
