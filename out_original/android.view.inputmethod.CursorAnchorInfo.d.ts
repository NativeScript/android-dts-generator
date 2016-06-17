/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class CursorAnchorInfo {
				public constructor();
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public getSelectionStart(): number;
				public getSelectionEnd(): number;
				public getComposingTextStart(): number;
				public getComposingText(): string;
				public getInsertionMarkerFlags(): number;
				public getInsertionMarkerHorizontal(): number;
				public getInsertionMarkerTop(): number;
				public getInsertionMarkerBaseline(): number;
				public getInsertionMarkerBottom(): number;
				public getCharacterBounds(param0: number): android.graphics.RectF;
				public getCharacterBoundsFlags(param0: number): number;
				public getMatrix(): android.graphics.Matrix;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_HAS_INVISIBLE_REGION: number;
				public static FLAG_HAS_VISIBLE_REGION: number;
				public static FLAG_IS_RTL: number;
			}
			export module CursorAnchorInfo {
				export class Builder {
					public constructor();
					public setSelectionRange(param0: number, param1: number): android.view.inputmethod.CursorAnchorInfo.Builder;
					public setComposingText(param0: number, param1: string): android.view.inputmethod.CursorAnchorInfo.Builder;
					public setInsertionMarkerLocation(param0: number, param1: number, param2: number, param3: number, param4: number): android.view.inputmethod.CursorAnchorInfo.Builder;
					public addCharacterBounds(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): android.view.inputmethod.CursorAnchorInfo.Builder;
					public setMatrix(param0: android.graphics.Matrix): android.view.inputmethod.CursorAnchorInfo.Builder;
					public build(): android.view.inputmethod.CursorAnchorInfo;
					public reset(): void;
				}
			}
		}
	}
}
