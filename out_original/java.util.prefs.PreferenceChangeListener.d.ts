/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.prefs.PreferenceChangeEvent.d.ts" />

declare module java {
	export module util {
		export module prefs {
			export class PreferenceChangeListener {
				public preferenceChange(param0: java.util.prefs.PreferenceChangeEvent): void;
			}
		}
	}
}
