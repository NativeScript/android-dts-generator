/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />

declare module android {
	export module graphics {
		export class Bitmap {
			public getDensity(): number;
			public setDensity(param0: number): void;
			public reconfigure(param0: number, param1: number, param2: android.graphics.Bitmap.Config): void;
			public setWidth(param0: number): void;
			public setHeight(param0: number): void;
			public setConfig(param0: android.graphics.Bitmap.Config): void;
			public recycle(): void;
			public isRecycled(): boolean;
			public getGenerationId(): number;
			public copyPixelsToBuffer(param0: java.nio.Buffer): void;
			public copyPixelsFromBuffer(param0: java.nio.Buffer): void;
			public copy(param0: android.graphics.Bitmap.Config, param1: boolean): android.graphics.Bitmap;
			public static createScaledBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: boolean): android.graphics.Bitmap;
			public static createBitmap(param0: android.graphics.Bitmap): android.graphics.Bitmap;
			public static createBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number): android.graphics.Bitmap;
			public static createBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Matrix, param6: boolean): android.graphics.Bitmap;
			public static createBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
			public static createBitmap(param0: android.util.DisplayMetrics, param1: number, param2: number, param3: android.graphics.Bitmap.Config): android.graphics.Bitmap;
			public static createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Bitmap.Config): android.graphics.Bitmap;
			public static createBitmap(param0: android.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: android.graphics.Bitmap.Config): android.graphics.Bitmap;
			public static createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.Bitmap.Config): android.graphics.Bitmap;
			public static createBitmap(param0: android.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: android.graphics.Bitmap.Config): android.graphics.Bitmap;
			public getNinePatchChunk(): native.Array<number>;
			public compress(param0: android.graphics.Bitmap.CompressFormat, param1: number, param2: java.io.OutputStream): boolean;
			public isMutable(): boolean;
			public isPremultiplied(): boolean;
			public setPremultiplied(param0: boolean): void;
			public getWidth(): number;
			public getHeight(): number;
			public getScaledWidth(param0: android.graphics.Canvas): number;
			public getScaledHeight(param0: android.graphics.Canvas): number;
			public getScaledWidth(param0: android.util.DisplayMetrics): number;
			public getScaledHeight(param0: android.util.DisplayMetrics): number;
			public getScaledWidth(param0: number): number;
			public getScaledHeight(param0: number): number;
			public getRowBytes(): number;
			public getByteCount(): number;
			public getAllocationByteCount(): number;
			public getConfig(): android.graphics.Bitmap.Config;
			public hasAlpha(): boolean;
			public setHasAlpha(param0: boolean): void;
			public hasMipMap(): boolean;
			public setHasMipMap(param0: boolean): void;
			public eraseColor(param0: number): void;
			public getPixel(param0: number, param1: number): number;
			public getPixels(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
			public setPixel(param0: number, param1: number, param2: number): void;
			public setPixels(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public extractAlpha(): android.graphics.Bitmap;
			public extractAlpha(param0: android.graphics.Paint, param1: native.Array<number>): android.graphics.Bitmap;
			public sameAs(param0: android.graphics.Bitmap): boolean;
			public prepareToDraw(): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static DENSITY_NONE: number;
		}
		export module Bitmap {
			export class CompressFormat {
				public static values(): native.Array<android.graphics.Bitmap.CompressFormat>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Bitmap.CompressFormat;
				public static JPEG: android.graphics.Bitmap.CompressFormat;
				public static PNG: android.graphics.Bitmap.CompressFormat;
				public static WEBP: android.graphics.Bitmap.CompressFormat;
			}
			export class Config {
				public static values(): native.Array<android.graphics.Bitmap.Config>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Bitmap.Config;
				public static ALPHA_8: android.graphics.Bitmap.Config;
				public static ARGB_4444: android.graphics.Bitmap.Config;
				public static ARGB_8888: android.graphics.Bitmap.Config;
				public static RGB_565: android.graphics.Bitmap.Config;
			}
		}
	}
}
