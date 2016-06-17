/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module content {
		export module res {
			export class ColorStateList {
				public constructor();
				public constructor(param0: native.Array<native.Array<number>>, param1: native.Array<number>);
				public static valueOf(param0: number): android.content.res.ColorStateList;
				public static createFromXml(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser): android.content.res.ColorStateList;
				public static createFromXml(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.content.res.Resources.Theme): android.content.res.ColorStateList;
				public withAlpha(param0: number): android.content.res.ColorStateList;
				public getChangingConfigurations(): number;
				public isStateful(): boolean;
				public isOpaque(): boolean;
				public getColorForState(param0: native.Array<number>, param1: number): number;
				public getDefaultColor(): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
