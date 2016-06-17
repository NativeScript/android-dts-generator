/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.preference.PreferenceScreen.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module preference {
		export class PreferenceFragment {
			public constructor();
			public onCreate(param0: android.os.Bundle): void;
			public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
			public onActivityCreated(param0: android.os.Bundle): void;
			public onStart(): void;
			public onStop(): void;
			public onDestroyView(): void;
			public onDestroy(): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
			public getPreferenceManager(): android.preference.PreferenceManager;
			public setPreferenceScreen(param0: android.preference.PreferenceScreen): void;
			public getPreferenceScreen(): android.preference.PreferenceScreen;
			public addPreferencesFromIntent(param0: android.content.Intent): void;
			public addPreferencesFromResource(param0: number): void;
			public onPreferenceTreeClick(param0: android.preference.PreferenceScreen, param1: android.preference.Preference): boolean;
			public findPreference(param0: string): android.preference.Preference;
		}
		export module PreferenceFragment {
			export class OnPreferenceStartFragmentCallback {
				public onPreferenceStartFragment(param0: android.preference.PreferenceFragment, param1: android.preference.Preference): boolean;
			}
		}
	}
}
