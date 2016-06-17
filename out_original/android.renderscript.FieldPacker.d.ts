/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.BaseObj.d.ts" />
/// <reference path="./android.renderscript.Byte2.d.ts" />
/// <reference path="./android.renderscript.Byte3.d.ts" />
/// <reference path="./android.renderscript.Byte4.d.ts" />
/// <reference path="./android.renderscript.Double2.d.ts" />
/// <reference path="./android.renderscript.Double3.d.ts" />
/// <reference path="./android.renderscript.Double4.d.ts" />
/// <reference path="./android.renderscript.Float2.d.ts" />
/// <reference path="./android.renderscript.Float3.d.ts" />
/// <reference path="./android.renderscript.Float4.d.ts" />
/// <reference path="./android.renderscript.Int2.d.ts" />
/// <reference path="./android.renderscript.Int3.d.ts" />
/// <reference path="./android.renderscript.Int4.d.ts" />
/// <reference path="./android.renderscript.Long2.d.ts" />
/// <reference path="./android.renderscript.Long3.d.ts" />
/// <reference path="./android.renderscript.Long4.d.ts" />
/// <reference path="./android.renderscript.Matrix2f.d.ts" />
/// <reference path="./android.renderscript.Matrix3f.d.ts" />
/// <reference path="./android.renderscript.Matrix4f.d.ts" />
/// <reference path="./android.renderscript.Short2.d.ts" />
/// <reference path="./android.renderscript.Short3.d.ts" />
/// <reference path="./android.renderscript.Short4.d.ts" />

declare module android {
	export module renderscript {
		export class FieldPacker {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: native.Array<number>);
			public align(param0: number): void;
			public subalign(param0: number): void;
			public reset(): void;
			public reset(param0: number): void;
			public skip(param0: number): void;
			public addI8(param0: number): void;
			public subI8(): number;
			public addI16(param0: number): void;
			public subI16(): number;
			public addI32(param0: number): void;
			public subI32(): number;
			public addI64(param0: number): void;
			public subI64(): number;
			public addU8(param0: number): void;
			public addU16(param0: number): void;
			public addU32(param0: number): void;
			public addU64(param0: number): void;
			public addF32(param0: number): void;
			public subF32(): number;
			public addF64(param0: number): void;
			public subF64(): number;
			public addObj(param0: android.renderscript.BaseObj): void;
			public addF32(param0: android.renderscript.Float2): void;
			public addF32(param0: android.renderscript.Float3): void;
			public addF32(param0: android.renderscript.Float4): void;
			public addF64(param0: android.renderscript.Double2): void;
			public addF64(param0: android.renderscript.Double3): void;
			public addF64(param0: android.renderscript.Double4): void;
			public addI8(param0: android.renderscript.Byte2): void;
			public addI8(param0: android.renderscript.Byte3): void;
			public addI8(param0: android.renderscript.Byte4): void;
			public addU8(param0: android.renderscript.Short2): void;
			public addU8(param0: android.renderscript.Short3): void;
			public addU8(param0: android.renderscript.Short4): void;
			public addI16(param0: android.renderscript.Short2): void;
			public addI16(param0: android.renderscript.Short3): void;
			public addI16(param0: android.renderscript.Short4): void;
			public addU16(param0: android.renderscript.Int2): void;
			public addU16(param0: android.renderscript.Int3): void;
			public addU16(param0: android.renderscript.Int4): void;
			public addI32(param0: android.renderscript.Int2): void;
			public addI32(param0: android.renderscript.Int3): void;
			public addI32(param0: android.renderscript.Int4): void;
			public addU32(param0: android.renderscript.Long2): void;
			public addU32(param0: android.renderscript.Long3): void;
			public addU32(param0: android.renderscript.Long4): void;
			public addI64(param0: android.renderscript.Long2): void;
			public addI64(param0: android.renderscript.Long3): void;
			public addI64(param0: android.renderscript.Long4): void;
			public addU64(param0: android.renderscript.Long2): void;
			public addU64(param0: android.renderscript.Long3): void;
			public addU64(param0: android.renderscript.Long4): void;
			public subFloat2(): android.renderscript.Float2;
			public subFloat3(): android.renderscript.Float3;
			public subFloat4(): android.renderscript.Float4;
			public subDouble2(): android.renderscript.Double2;
			public subDouble3(): android.renderscript.Double3;
			public subDouble4(): android.renderscript.Double4;
			public subByte2(): android.renderscript.Byte2;
			public subByte3(): android.renderscript.Byte3;
			public subByte4(): android.renderscript.Byte4;
			public subShort2(): android.renderscript.Short2;
			public subShort3(): android.renderscript.Short3;
			public subShort4(): android.renderscript.Short4;
			public subInt2(): android.renderscript.Int2;
			public subInt3(): android.renderscript.Int3;
			public subInt4(): android.renderscript.Int4;
			public subLong2(): android.renderscript.Long2;
			public subLong3(): android.renderscript.Long3;
			public subLong4(): android.renderscript.Long4;
			public addMatrix(param0: android.renderscript.Matrix4f): void;
			public subMatrix4f(): android.renderscript.Matrix4f;
			public addMatrix(param0: android.renderscript.Matrix3f): void;
			public subMatrix3f(): android.renderscript.Matrix3f;
			public addMatrix(param0: android.renderscript.Matrix2f): void;
			public subMatrix2f(): android.renderscript.Matrix2f;
			public addBoolean(param0: boolean): void;
			public subBoolean(): boolean;
			public getData(): native.Array<number>;
		}
	}
}
