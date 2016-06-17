/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class Type {
			public getElement(): android.renderscript.Element;
			public getX(): number;
			public getY(): number;
			public getZ(): number;
			public getYuv(): number;
			public hasMipmaps(): boolean;
			public hasFaces(): boolean;
			public getCount(): number;
			public static createX(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number): android.renderscript.Type;
			public static createXY(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number, param3: number): android.renderscript.Type;
			public static createXYZ(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number, param3: number, param4: number): android.renderscript.Type;
		}
		export module Type {
			export class Builder {
				public constructor();
				public constructor(param0: android.renderscript.RenderScript, param1: android.renderscript.Element);
				public setX(param0: number): android.renderscript.Type.Builder;
				public setY(param0: number): android.renderscript.Type.Builder;
				public setZ(param0: number): android.renderscript.Type.Builder;
				public setMipmaps(param0: boolean): android.renderscript.Type.Builder;
				public setFaces(param0: boolean): android.renderscript.Type.Builder;
				public setYuvFormat(param0: number): android.renderscript.Type.Builder;
				public create(): android.renderscript.Type;
			}
			export class CubemapFace {
				public static values(): native.Array<android.renderscript.Type.CubemapFace>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.renderscript.Type.CubemapFace;
				public static NEGATIVE_X: android.renderscript.Type.CubemapFace;
				public static NEGATIVE_Y: android.renderscript.Type.CubemapFace;
				public static NEGATIVE_Z: android.renderscript.Type.CubemapFace;
				public static POSITIVE_X: android.renderscript.Type.CubemapFace;
				public static POSITIVE_Y: android.renderscript.Type.CubemapFace;
				public static POSITIVE_Z: android.renderscript.Type.CubemapFace;
				public static POSITVE_X: android.renderscript.Type.CubemapFace;
				public static POSITVE_Y: android.renderscript.Type.CubemapFace;
				public static POSITVE_Z: android.renderscript.Type.CubemapFace;
			}
		}
	}
}
