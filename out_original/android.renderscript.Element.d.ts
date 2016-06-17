/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class Element {
			public getBytesSize(): number;
			public getVectorSize(): number;
			public isComplex(): boolean;
			public getSubElementCount(): number;
			public getSubElement(param0: number): android.renderscript.Element;
			public getSubElementName(param0: number): string;
			public getSubElementArraySize(param0: number): number;
			public getSubElementOffsetBytes(param0: number): number;
			public getDataType(): android.renderscript.Element.DataType;
			public getDataKind(): android.renderscript.Element.DataKind;
			public static BOOLEAN(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U8(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I8(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U16(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I16(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U32(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I32(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U64(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I64(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F16(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F32(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F64(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static ELEMENT(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static TYPE(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static ALLOCATION(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static SAMPLER(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static SCRIPT(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static MESH(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static PROGRAM_FRAGMENT(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static PROGRAM_VERTEX(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static PROGRAM_RASTER(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static PROGRAM_STORE(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static FONT(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static A_8(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static RGB_565(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static RGB_888(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static RGBA_5551(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static RGBA_4444(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static RGBA_8888(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F16_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F16_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F16_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F32_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F32_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F32_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F64_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F64_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static F64_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U8_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U8_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U8_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I8_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I8_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I8_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U16_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U16_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U16_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I16_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I16_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I16_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U32_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U32_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U32_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I32_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I32_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I32_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U64_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U64_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static U64_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I64_2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I64_3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static I64_4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static YUV(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static MATRIX_4X4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static MATRIX4X4(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static MATRIX_3X3(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static MATRIX_2X2(param0: android.renderscript.RenderScript): android.renderscript.Element;
			public static createVector(param0: android.renderscript.RenderScript, param1: android.renderscript.Element.DataType, param2: number): android.renderscript.Element;
			public static createPixel(param0: android.renderscript.RenderScript, param1: android.renderscript.Element.DataType, param2: android.renderscript.Element.DataKind): android.renderscript.Element;
			public isCompatible(param0: android.renderscript.Element): boolean;
		}
		export module Element {
			export class Builder {
				public constructor();
				public constructor(param0: android.renderscript.RenderScript);
				public add(param0: android.renderscript.Element, param1: string, param2: number): android.renderscript.Element.Builder;
				public add(param0: android.renderscript.Element, param1: string): android.renderscript.Element.Builder;
				public create(): android.renderscript.Element;
			}
			export class DataKind {
				public static values(): native.Array<android.renderscript.Element.DataKind>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.renderscript.Element.DataKind;
				public static PIXEL_A: android.renderscript.Element.DataKind;
				public static PIXEL_DEPTH: android.renderscript.Element.DataKind;
				public static PIXEL_L: android.renderscript.Element.DataKind;
				public static PIXEL_LA: android.renderscript.Element.DataKind;
				public static PIXEL_RGB: android.renderscript.Element.DataKind;
				public static PIXEL_RGBA: android.renderscript.Element.DataKind;
				public static PIXEL_YUV: android.renderscript.Element.DataKind;
				public static USER: android.renderscript.Element.DataKind;
			}
			export class DataType {
				public static values(): native.Array<android.renderscript.Element.DataType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.renderscript.Element.DataType;
				public static BOOLEAN: android.renderscript.Element.DataType;
				public static FLOAT_16: android.renderscript.Element.DataType;
				public static FLOAT_32: android.renderscript.Element.DataType;
				public static FLOAT_64: android.renderscript.Element.DataType;
				public static MATRIX_2X2: android.renderscript.Element.DataType;
				public static MATRIX_3X3: android.renderscript.Element.DataType;
				public static MATRIX_4X4: android.renderscript.Element.DataType;
				public static NONE: android.renderscript.Element.DataType;
				public static RS_ALLOCATION: android.renderscript.Element.DataType;
				public static RS_ELEMENT: android.renderscript.Element.DataType;
				public static RS_FONT: android.renderscript.Element.DataType;
				public static RS_MESH: android.renderscript.Element.DataType;
				public static RS_PROGRAM_FRAGMENT: android.renderscript.Element.DataType;
				public static RS_PROGRAM_RASTER: android.renderscript.Element.DataType;
				public static RS_PROGRAM_STORE: android.renderscript.Element.DataType;
				public static RS_PROGRAM_VERTEX: android.renderscript.Element.DataType;
				public static RS_SAMPLER: android.renderscript.Element.DataType;
				public static RS_SCRIPT: android.renderscript.Element.DataType;
				public static RS_TYPE: android.renderscript.Element.DataType;
				public static SIGNED_16: android.renderscript.Element.DataType;
				public static SIGNED_32: android.renderscript.Element.DataType;
				public static SIGNED_64: android.renderscript.Element.DataType;
				public static SIGNED_8: android.renderscript.Element.DataType;
				public static UNSIGNED_16: android.renderscript.Element.DataType;
				public static UNSIGNED_32: android.renderscript.Element.DataType;
				public static UNSIGNED_4_4_4_4: android.renderscript.Element.DataType;
				public static UNSIGNED_5_5_5_1: android.renderscript.Element.DataType;
				public static UNSIGNED_5_6_5: android.renderscript.Element.DataType;
				public static UNSIGNED_64: android.renderscript.Element.DataType;
				public static UNSIGNED_8: android.renderscript.Element.DataType;
			}
		}
	}
}
