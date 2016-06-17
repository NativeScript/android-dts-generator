/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class RemoteInput {
			public getResultKey(): string;
			public getLabel(): string;
			public getChoices(): native.Array<java.lang.CharSequence>;
			public getAllowFreeFormInput(): boolean;
			public getExtras(): android.os.Bundle;
			public static getResultsFromIntent(param0: android.content.Intent): android.os.Bundle;
			public static addResultsToIntent(param0: native.Array<android.app.RemoteInput>, param1: android.content.Intent, param2: android.os.Bundle): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static EXTRA_RESULTS_DATA: string;
			public static RESULTS_CLIP_LABEL: string;
		}
		export module RemoteInput {
			export class Builder {
				public constructor();
				public constructor(param0: string);
				public setLabel(param0: string): android.app.RemoteInput.Builder;
				public setChoices(param0: native.Array<java.lang.CharSequence>): android.app.RemoteInput.Builder;
				public setAllowFreeFormInput(param0: boolean): android.app.RemoteInput.Builder;
				public addExtras(param0: android.os.Bundle): android.app.RemoteInput.Builder;
				public getExtras(): android.os.Bundle;
				public build(): android.app.RemoteInput;
			}
		}
	}
}
