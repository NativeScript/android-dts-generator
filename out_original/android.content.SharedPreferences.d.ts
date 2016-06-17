/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module content {
		export class SharedPreferences {
			public getAll(): java.util.Map;
			public getString(param0: string, param1: string): string;
			public getStringSet(param0: string, param1: java.util.Set): java.util.Set;
			public getInt(param0: string, param1: number): number;
			public getLong(param0: string, param1: number): number;
			public getFloat(param0: string, param1: number): number;
			public getBoolean(param0: string, param1: boolean): boolean;
			public contains(param0: string): boolean;
			public edit(): android.content.SharedPreferences.Editor;
			public registerOnSharedPreferenceChangeListener(param0: android.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
			public unregisterOnSharedPreferenceChangeListener(param0: android.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
		}
		export module SharedPreferences {
			export class Editor {
				public putString(param0: string, param1: string): android.content.SharedPreferences.Editor;
				public putStringSet(param0: string, param1: java.util.Set): android.content.SharedPreferences.Editor;
				public putInt(param0: string, param1: number): android.content.SharedPreferences.Editor;
				public putLong(param0: string, param1: number): android.content.SharedPreferences.Editor;
				public putFloat(param0: string, param1: number): android.content.SharedPreferences.Editor;
				public putBoolean(param0: string, param1: boolean): android.content.SharedPreferences.Editor;
				public remove(param0: string): android.content.SharedPreferences.Editor;
				public clear(): android.content.SharedPreferences.Editor;
				public commit(): boolean;
				public apply(): void;
			}
			export class OnSharedPreferenceChangeListener {
				public onSharedPreferenceChanged(param0: android.content.SharedPreferences, param1: string): void;
			}
		}
	}
}
