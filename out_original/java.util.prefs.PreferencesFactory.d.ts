/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.prefs.Preferences.d.ts" />

declare module java {
	export module util {
		export module prefs {
			export class PreferencesFactory {
				public userRoot(): java.util.prefs.Preferences;
				public systemRoot(): java.util.prefs.Preferences;
			}
		}
	}
}
