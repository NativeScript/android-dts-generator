/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.textservice.SentenceSuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.SpellCheckerInfo.d.ts" />
/// <reference path="./android.view.textservice.SuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.TextInfo.d.ts" />

declare module android {
	export module view {
		export module textservice {
			export class SpellCheckerSession {
				public isSessionDisconnected(): boolean;
				public getSpellChecker(): android.view.textservice.SpellCheckerInfo;
				public cancel(): void;
				public close(): void;
				public getSentenceSuggestions(param0: native.Array<android.view.textservice.TextInfo>, param1: number): void;
				public getSuggestions(param0: android.view.textservice.TextInfo, param1: number): void;
				public getSuggestions(param0: native.Array<android.view.textservice.TextInfo>, param1: number, param2: boolean): void;
				public finalize(): void;
				public static SERVICE_META_DATA: string;
			}
			export module SpellCheckerSession {
				export class SpellCheckerSessionListener {
					public onGetSuggestions(param0: native.Array<android.view.textservice.SuggestionsInfo>): void;
					public onGetSentenceSuggestions(param0: native.Array<android.view.textservice.SentenceSuggestionsInfo>): void;
				}
			}
		}
	}
}
