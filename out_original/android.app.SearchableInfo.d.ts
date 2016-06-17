/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module app {
		export class SearchableInfo {
			public getSuggestAuthority(): string;
			public getSuggestPackage(): string;
			public getSearchActivity(): android.content.ComponentName;
			public shouldRewriteQueryFromData(): boolean;
			public shouldRewriteQueryFromText(): boolean;
			public getSettingsDescriptionId(): number;
			public getSuggestPath(): string;
			public getSuggestSelection(): string;
			public getSuggestIntentAction(): string;
			public getSuggestIntentData(): string;
			public getSuggestThreshold(): number;
			public getHintId(): number;
			public getVoiceSearchEnabled(): boolean;
			public getVoiceSearchLaunchWebSearch(): boolean;
			public getVoiceSearchLaunchRecognizer(): boolean;
			public getVoiceLanguageModeId(): number;
			public getVoicePromptTextId(): number;
			public getVoiceLanguageId(): number;
			public getVoiceMaxResults(): number;
			public getInputType(): number;
			public getImeOptions(): number;
			public shouldIncludeInGlobalSearch(): boolean;
			public queryAfterZeroResults(): boolean;
			public autoUrlDetect(): boolean;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
