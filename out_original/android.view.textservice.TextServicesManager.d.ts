/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.textservice.SpellCheckerSession.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module view {
		export module textservice {
			export class TextServicesManager {
				public newSpellCheckerSession(param0: android.os.Bundle, param1: java.util.Locale, param2: android.view.textservice.SpellCheckerSession.SpellCheckerSessionListener, param3: boolean): android.view.textservice.SpellCheckerSession;
			}
		}
	}
}
