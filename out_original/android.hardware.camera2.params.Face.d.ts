/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class Face {
					public getBounds(): android.graphics.Rect;
					public getScore(): number;
					public getId(): number;
					public getLeftEyePosition(): android.graphics.Point;
					public getRightEyePosition(): android.graphics.Point;
					public getMouthPosition(): android.graphics.Point;
					public toString(): string;
					public static ID_UNSUPPORTED: number;
					public static SCORE_MAX: number;
					public static SCORE_MIN: number;
				}
			}
		}
	}
}
