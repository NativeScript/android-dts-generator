/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Double2.d.ts" />
/// <reference path="./android.renderscript.Float2.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptIntrinsicBLAS {
			public static create(param0: android.renderscript.RenderScript): android.renderscript.ScriptIntrinsicBLAS;
			public SGEMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;
			public DGEMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;
			public CGEMV(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Float2, param6: android.renderscript.Allocation, param7: number): void;
			public ZGEMV(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Double2, param6: android.renderscript.Allocation, param7: number): void;
			public SGBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: number, param8: android.renderscript.Allocation, param9: number): void;
			public DGBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: number, param8: android.renderscript.Allocation, param9: number): void;
			public CGBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Float2, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: android.renderscript.Float2, param8: android.renderscript.Allocation, param9: number): void;
			public ZGBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Double2, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: android.renderscript.Double2, param8: android.renderscript.Allocation, param9: number): void;
			public STRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public DTRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public CTRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public ZTRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public STBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public DTBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public CTBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public ZTBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public STPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public DTPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public CTPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public ZTPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public STRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public DTRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public CTRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public ZTRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public STBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public DTBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public CTBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public ZTBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;
			public STPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public DTPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public CTPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public ZTPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;
			public SSYMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;
			public SSBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: number, param7: android.renderscript.Allocation, param8: number): void;
			public SSPMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;
			public SGER(param0: number, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public SSYR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public SSPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public SSYR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public SSPR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public DSYMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;
			public DSBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: number, param7: android.renderscript.Allocation, param8: number): void;
			public DSPMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;
			public DGER(param0: number, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public DSYR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public DSPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public DSYR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public DSPR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public CHEMV(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Float2, param6: android.renderscript.Allocation, param7: number): void;
			public CHBMV(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Float2, param7: android.renderscript.Allocation, param8: number): void;
			public CHPMV(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Float2, param6: android.renderscript.Allocation, param7: number): void;
			public CGERU(param0: android.renderscript.Float2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public CGERC(param0: android.renderscript.Float2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public CHER(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public CHPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public CHER2(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public CHPR2(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public ZHEMV(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Double2, param6: android.renderscript.Allocation, param7: number): void;
			public ZHBMV(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Double2, param7: android.renderscript.Allocation, param8: number): void;
			public ZHPMV(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Double2, param6: android.renderscript.Allocation, param7: number): void;
			public ZGERU(param0: android.renderscript.Double2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public ZGERC(param0: android.renderscript.Double2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public ZHER(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public ZHPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;
			public ZHER2(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public ZHPR2(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public SGEMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public DGEMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public CGEMM(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;
			public ZGEMM(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;
			public SSYMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public DSYMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public CSYMM(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;
			public ZSYMM(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;
			public SSYRK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public DSYRK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public CSYRK(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Float2, param5: android.renderscript.Allocation): void;
			public ZSYRK(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Double2, param5: android.renderscript.Allocation): void;
			public SSYR2K(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public DSYR2K(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public CSYR2K(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;
			public ZSYR2K(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;
			public STRMM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public DTRMM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public CTRMM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Float2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public ZTRMM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Double2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public STRSM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public DTRSM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public CTRSM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Float2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public ZTRSM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Double2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;
			public CHEMM(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;
			public ZHEMM(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;
			public CHERK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public ZHERK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;
			public CHER2K(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public ZHER2K(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;
			public BNNM(param0: android.renderscript.Allocation, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: number): void;
			public static CONJ_TRANSPOSE: number;
			public static LEFT: number;
			public static LOWER: number;
			public static NON_UNIT: number;
			public static NO_TRANSPOSE: number;
			public static RIGHT: number;
			public static TRANSPOSE: number;
			public static UNIT: number;
			public static UPPER: number;
		}
	}
}
