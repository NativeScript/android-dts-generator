/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module assist {
			export class AssistContent {
				public constructor();
				public setIntent(param0: android.content.Intent): void;
				public getIntent(): android.content.Intent;
				public isAppProvidedIntent(): boolean;
				public setClipData(param0: android.content.ClipData): void;
				public getClipData(): android.content.ClipData;
				public setStructuredData(param0: string): void;
				public getStructuredData(): string;
				public setWebUri(param0: android.net.Uri): void;
				public getWebUri(): android.net.Uri;
				public getExtras(): android.os.Bundle;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
