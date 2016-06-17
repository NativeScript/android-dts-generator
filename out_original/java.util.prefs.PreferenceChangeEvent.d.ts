/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.prefs.Preferences.d.ts" />

declare module java {
	export module util {
		export module prefs {
			export class PreferenceChangeEvent {
				public constructor(param0: java.lang.Object);
				public constructor();
				public constructor(param0: java.util.prefs.Preferences, param1: string, param2: string);
				public getKey(): string;
				public getNewValue(): string;
				public getNode(): java.util.prefs.Preferences;
			}
		}
	}
}
