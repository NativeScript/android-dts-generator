/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class SharedPreferencesCompat {
				}
				export module SharedPreferencesCompat {
					export class EditorCompat {
						public static getInstance(): android.support.v4.content.SharedPreferencesCompat.EditorCompat;
						public apply(param0: android.content.SharedPreferences.Editor): void;
					}
					export module EditorCompat {
						export class EditorHelperApi9Impl {
							public apply(param0: android.content.SharedPreferences.Editor): void;
						}
						export class EditorHelperBaseImpl {
							public apply(param0: android.content.SharedPreferences.Editor): void;
						}
						export class Helper {
							public apply(param0: android.content.SharedPreferences.Editor): void;
						}
					}
				}
			}
		}
	}
}
