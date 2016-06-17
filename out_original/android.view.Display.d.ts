/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module view {
		export class Display {
			public getDisplayId(): number;
			public isValid(): boolean;
			public getFlags(): number;
			public getName(): string;
			public getSize(param0: android.graphics.Point): void;
			public getRectSize(param0: android.graphics.Rect): void;
			public getCurrentSizeRange(param0: android.graphics.Point, param1: android.graphics.Point): void;
			public getWidth(): number;
			public getHeight(): number;
			public getRotation(): number;
			public getOrientation(): number;
			public getPixelFormat(): number;
			public getRefreshRate(): number;
			public getSupportedRefreshRates(): native.Array<number>;
			public getMode(): android.view.Display.Mode;
			public getSupportedModes(): native.Array<android.view.Display.Mode>;
			public getAppVsyncOffsetNanos(): number;
			public getPresentationDeadlineNanos(): number;
			public getMetrics(param0: android.util.DisplayMetrics): void;
			public getRealSize(param0: android.graphics.Point): void;
			public getRealMetrics(param0: android.util.DisplayMetrics): void;
			public getState(): number;
			public toString(): string;
			public static DEFAULT_DISPLAY: number;
			public static FLAG_PRESENTATION: number;
			public static FLAG_PRIVATE: number;
			public static FLAG_ROUND: number;
			public static FLAG_SECURE: number;
			public static FLAG_SUPPORTS_PROTECTED_BUFFERS: number;
			public static INVALID_DISPLAY: number;
			public static STATE_DOZE: number;
			public static STATE_DOZE_SUSPEND: number;
			public static STATE_OFF: number;
			public static STATE_ON: number;
			public static STATE_UNKNOWN: number;
		}
		export module Display {
			export class Mode {
				public getModeId(): number;
				public getPhysicalWidth(): number;
				public getPhysicalHeight(): number;
				public getRefreshRate(): number;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
