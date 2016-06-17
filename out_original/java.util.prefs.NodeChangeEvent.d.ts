/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.prefs.Preferences.d.ts" />

declare module java {
	export module util {
		export module prefs {
			export class NodeChangeEvent {
				public constructor(param0: java.lang.Object);
				public constructor();
				public constructor(param0: java.util.prefs.Preferences, param1: java.util.prefs.Preferences);
				public getParent(): java.util.prefs.Preferences;
				public getChild(): java.util.prefs.Preferences;
			}
		}
	}
}
