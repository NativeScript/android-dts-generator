/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module widget {
		export class RemoteViews {
			public constructor();
			public constructor(param0: string, param1: number);
			public constructor(param0: android.widget.RemoteViews, param1: android.widget.RemoteViews);
			public constructor(param0: android.os.Parcel);
			public clone(): java.lang.Object;
			public clone(): android.widget.RemoteViews;
			public getPackage(): string;
			public getLayoutId(): number;
			public addView(param0: number, param1: android.widget.RemoteViews): void;
			public removeAllViews(param0: number): void;
			public showNext(param0: number): void;
			public showPrevious(param0: number): void;
			public setDisplayedChild(param0: number, param1: number): void;
			public setViewVisibility(param0: number, param1: number): void;
			public setTextViewText(param0: number, param1: string): void;
			public setTextViewTextSize(param0: number, param1: number, param2: number): void;
			public setTextViewCompoundDrawables(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public setTextViewCompoundDrawablesRelative(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public setImageViewResource(param0: number, param1: number): void;
			public setImageViewUri(param0: number, param1: android.net.Uri): void;
			public setImageViewBitmap(param0: number, param1: android.graphics.Bitmap): void;
			public setImageViewIcon(param0: number, param1: android.graphics.drawable.Icon): void;
			public setEmptyView(param0: number, param1: number): void;
			public setChronometer(param0: number, param1: number, param2: string, param3: boolean): void;
			public setProgressBar(param0: number, param1: number, param2: number, param3: boolean): void;
			public setOnClickPendingIntent(param0: number, param1: android.app.PendingIntent): void;
			public setPendingIntentTemplate(param0: number, param1: android.app.PendingIntent): void;
			public setOnClickFillInIntent(param0: number, param1: android.content.Intent): void;
			public setTextColor(param0: number, param1: number): void;
			public setRemoteAdapter(param0: number, param1: number, param2: android.content.Intent): void;
			public setRemoteAdapter(param0: number, param1: android.content.Intent): void;
			public setScrollPosition(param0: number, param1: number): void;
			public setRelativeScrollPosition(param0: number, param1: number): void;
			public setViewPadding(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public setBoolean(param0: number, param1: string, param2: boolean): void;
			public setByte(param0: number, param1: string, param2: number): void;
			public setShort(param0: number, param1: string, param2: number): void;
			public setInt(param0: number, param1: string, param2: number): void;
			public setLong(param0: number, param1: string, param2: number): void;
			public setFloat(param0: number, param1: string, param2: number): void;
			public setDouble(param0: number, param1: string, param2: number): void;
			public setChar(param0: number, param1: string, param2: string): void;
			public setString(param0: number, param1: string, param2: string): void;
			public setCharSequence(param0: number, param1: string, param2: string): void;
			public setUri(param0: number, param1: string, param2: android.net.Uri): void;
			public setBitmap(param0: number, param1: string, param2: android.graphics.Bitmap): void;
			public setBundle(param0: number, param1: string, param2: android.os.Bundle): void;
			public setIntent(param0: number, param1: string, param2: android.content.Intent): void;
			public setIcon(param0: number, param1: string, param2: android.graphics.drawable.Icon): void;
			public setContentDescription(param0: number, param1: string): void;
			public setAccessibilityTraversalBefore(param0: number, param1: number): void;
			public setAccessibilityTraversalAfter(param0: number, param1: number): void;
			public setLabelFor(param0: number, param1: number): void;
			public apply(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;
			public reapply(param0: android.content.Context, param1: android.view.View): void;
			public onLoadClass(param0: java.lang.Class): boolean;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module RemoteViews {
			export class ActionException {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: string);
			}
			export class RemoteView {
			}
		}
	}
}
