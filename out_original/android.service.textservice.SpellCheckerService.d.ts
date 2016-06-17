/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.textservice.SentenceSuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.SuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.TextInfo.d.ts" />

declare module android {
	export module service {
		export module textservice {
			export class SpellCheckerService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public createSession(): android.service.textservice.SpellCheckerService.Session;
				public static SERVICE_INTERFACE: string;
			}
			export module SpellCheckerService {
				export class Session {
					public constructor();
					public onCreate(): void;
					public onGetSuggestions(param0: android.view.textservice.TextInfo, param1: number): android.view.textservice.SuggestionsInfo;
					public onGetSuggestionsMultiple(param0: native.Array<android.view.textservice.TextInfo>, param1: number, param2: boolean): native.Array<android.view.textservice.SuggestionsInfo>;
					public onGetSentenceSuggestionsMultiple(param0: native.Array<android.view.textservice.TextInfo>, param1: number): native.Array<android.view.textservice.SentenceSuggestionsInfo>;
					public onCancel(): void;
					public onClose(): void;
					public getLocale(): string;
					public getBundle(): android.os.Bundle;
				}
			}
		}
	}
}
