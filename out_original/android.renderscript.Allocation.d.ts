/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.renderscript.BaseObj.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class Allocation {
			public getElement(): android.renderscript.Element;
			public getUsage(): number;
			public setAutoPadding(param0: boolean): void;
			public getBytesSize(): number;
			public finalize(): void;
			public getType(): android.renderscript.Type;
			public syncAll(param0: number): void;
			public ioSend(): void;
			public ioReceive(): void;
			public copyFrom(param0: native.Array<android.renderscript.BaseObj>): void;
			public copyFromUnchecked(param0: java.lang.Object): void;
			public copyFromUnchecked(param0: native.Array<number>): void;
			public copyFromUnchecked(param0: native.Array<number>): void;
			public copyFromUnchecked(param0: native.Array<number>): void;
			public copyFromUnchecked(param0: native.Array<number>): void;
			public copyFrom(param0: java.lang.Object): void;
			public copyFrom(param0: native.Array<number>): void;
			public copyFrom(param0: native.Array<number>): void;
			public copyFrom(param0: native.Array<number>): void;
			public copyFrom(param0: native.Array<number>): void;
			public copyFrom(param0: android.graphics.Bitmap): void;
			public copyFrom(param0: android.renderscript.Allocation): void;
			public setFromFieldPacker(param0: number, param1: android.renderscript.FieldPacker): void;
			public setFromFieldPacker(param0: number, param1: number, param2: android.renderscript.FieldPacker): void;
			public setFromFieldPacker(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.FieldPacker): void;
			public generateMipmaps(): void;
			public copy1DRangeFromUnchecked(param0: number, param1: number, param2: java.lang.Object): void;
			public copy1DRangeFromUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFromUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFromUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFromUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFrom(param0: number, param1: number, param2: java.lang.Object): void;
			public copy1DRangeFrom(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFrom(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFrom(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFrom(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeFrom(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number): void;
			public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: java.lang.Object): void;
			public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: number, param6: number): void;
			public copy2DRangeFrom(param0: number, param1: number, param2: android.graphics.Bitmap): void;
			public copy3DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: java.lang.Object): void;
			public copy3DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number, param8: number, param9: number): void;
			public copyTo(param0: android.graphics.Bitmap): void;
			public copyTo(param0: java.lang.Object): void;
			public copyTo(param0: native.Array<number>): void;
			public copyTo(param0: native.Array<number>): void;
			public copyTo(param0: native.Array<number>): void;
			public copyTo(param0: native.Array<number>): void;
			public resize(param0: number): void;
			public copy1DRangeToUnchecked(param0: number, param1: number, param2: java.lang.Object): void;
			public copy1DRangeToUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeToUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeToUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeToUnchecked(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeTo(param0: number, param1: number, param2: java.lang.Object): void;
			public copy1DRangeTo(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeTo(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeTo(param0: number, param1: number, param2: native.Array<number>): void;
			public copy1DRangeTo(param0: number, param1: number, param2: native.Array<number>): void;
			public copy2DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: java.lang.Object): void;
			public copy2DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy2DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy2DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy2DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public copy3DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: java.lang.Object): void;
			public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;
			public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: number): android.renderscript.Allocation;
			public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type): android.renderscript.Allocation;
			public static createSized(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number, param3: number): android.renderscript.Allocation;
			public static createSized(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number): android.renderscript.Allocation;
			public static createFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;
			public getSurface(): android.view.Surface;
			public setSurface(param0: android.view.Surface): void;
			public static createFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap): android.renderscript.Allocation;
			public static createCubemapFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;
			public static createCubemapFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap): android.renderscript.Allocation;
			public static createCubemapFromCubeFaces(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.graphics.Bitmap, param3: android.graphics.Bitmap, param4: android.graphics.Bitmap, param5: android.graphics.Bitmap, param6: android.graphics.Bitmap, param7: android.renderscript.Allocation.MipmapControl, param8: number): android.renderscript.Allocation;
			public static createCubemapFromCubeFaces(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.graphics.Bitmap, param3: android.graphics.Bitmap, param4: android.graphics.Bitmap, param5: android.graphics.Bitmap, param6: android.graphics.Bitmap): android.renderscript.Allocation;
			public static createFromBitmapResource(param0: android.renderscript.RenderScript, param1: android.content.res.Resources, param2: number, param3: android.renderscript.Allocation.MipmapControl, param4: number): android.renderscript.Allocation;
			public static createFromBitmapResource(param0: android.renderscript.RenderScript, param1: android.content.res.Resources, param2: number): android.renderscript.Allocation;
			public static createFromString(param0: android.renderscript.RenderScript, param1: string, param2: number): android.renderscript.Allocation;
			public setOnBufferAvailableListener(param0: android.renderscript.Allocation.OnBufferAvailableListener): void;
			public destroy(): void;
			public static USAGE_GRAPHICS_CONSTANTS: number;
			public static USAGE_GRAPHICS_RENDER_TARGET: number;
			public static USAGE_GRAPHICS_TEXTURE: number;
			public static USAGE_GRAPHICS_VERTEX: number;
			public static USAGE_IO_INPUT: number;
			public static USAGE_IO_OUTPUT: number;
			public static USAGE_SCRIPT: number;
			public static USAGE_SHARED: number;
		}
		export module Allocation {
			export class MipmapControl {
				public static values(): native.Array<android.renderscript.Allocation.MipmapControl>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.renderscript.Allocation.MipmapControl;
				public static MIPMAP_FULL: android.renderscript.Allocation.MipmapControl;
				public static MIPMAP_NONE: android.renderscript.Allocation.MipmapControl;
				public static MIPMAP_ON_SYNC_TO_TEXTURE: android.renderscript.Allocation.MipmapControl;
			}
			export class OnBufferAvailableListener {
				public onBufferAvailable(param0: android.renderscript.Allocation): void;
			}
		}
	}
}
