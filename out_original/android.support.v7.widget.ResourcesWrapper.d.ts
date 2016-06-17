/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.Movie.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ResourcesWrapper {
					public constructor(param0: android.content.res.AssetManager, param1: android.util.DisplayMetrics, param2: android.content.res.Configuration);
					public constructor();
					public constructor(param0: android.content.res.Resources);
					public getText(param0: number, param1: string): string;
					public getText(param0: number): string;
					public getQuantityText(param0: number, param1: number): string;
					public getString(param0: number, param1: native.Array<java.lang.Object>): string;
					public getString(param0: number): string;
					public getString(param0: number, param1: native.Array<java.lang.Object>): string;
					public getQuantityString(param0: number, param1: number): string;
					public getQuantityString(param0: number, param1: number, param2: native.Array<java.lang.Object>): string;
					public getQuantityString(param0: number, param1: number): string;
					public getText(param0: number, param1: string): string;
					public getTextArray(param0: number): native.Array<java.lang.CharSequence>;
					public getStringArray(param0: number): native.Array<string>;
					public getIntArray(param0: number): native.Array<number>;
					public obtainTypedArray(param0: number): android.content.res.TypedArray;
					public getDimension(param0: number): number;
					public getDimensionPixelOffset(param0: number): number;
					public getDimensionPixelSize(param0: number): number;
					public getFraction(param0: number, param1: number, param2: number): number;
					public getDrawable(param0: number, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getDrawable(param0: number): android.graphics.drawable.Drawable;
					public getDrawable(param0: number, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getDrawableForDensity(param0: number, param1: number, param2: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getDrawableForDensity(param0: number, param1: number): android.graphics.drawable.Drawable;
					public getDrawableForDensity(param0: number, param1: number, param2: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getMovie(param0: number): android.graphics.Movie;
					public getColor(param0: number, param1: android.content.res.Resources.Theme): number;
					public getColor(param0: number): number;
					public getColorStateList(param0: number, param1: android.content.res.Resources.Theme): android.content.res.ColorStateList;
					public getColorStateList(param0: number): android.content.res.ColorStateList;
					public getBoolean(param0: number): boolean;
					public getInteger(param0: number): number;
					public getLayout(param0: number): android.content.res.XmlResourceParser;
					public getAnimation(param0: number): android.content.res.XmlResourceParser;
					public getXml(param0: number): android.content.res.XmlResourceParser;
					public openRawResource(param0: number, param1: android.util.TypedValue): java.io.InputStream;
					public openRawResource(param0: number): java.io.InputStream;
					public openRawResource(param0: number, param1: android.util.TypedValue): java.io.InputStream;
					public openRawResourceFd(param0: number): android.content.res.AssetFileDescriptor;
					public getValue(param0: string, param1: android.util.TypedValue, param2: boolean): void;
					public getValue(param0: number, param1: android.util.TypedValue, param2: boolean): void;
					public getValueForDensity(param0: number, param1: number, param2: android.util.TypedValue, param3: boolean): void;
					public getValue(param0: string, param1: android.util.TypedValue, param2: boolean): void;
					public obtainAttributes(param0: android.util.AttributeSet, param1: native.Array<number>): android.content.res.TypedArray;
					public updateConfiguration(param0: android.content.res.Configuration, param1: android.util.DisplayMetrics): void;
					public getDisplayMetrics(): android.util.DisplayMetrics;
					public getConfiguration(): android.content.res.Configuration;
					public getIdentifier(param0: string, param1: string, param2: string): number;
					public getResourceName(param0: number): string;
					public getResourcePackageName(param0: number): string;
					public getResourceTypeName(param0: number): string;
					public getResourceEntryName(param0: number): string;
					public parseBundleExtras(param0: android.content.res.XmlResourceParser, param1: android.os.Bundle): void;
					public parseBundleExtra(param0: string, param1: android.util.AttributeSet, param2: android.os.Bundle): void;
				}
			}
		}
	}
}
