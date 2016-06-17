/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.zip.Deflater.d.ts" />
/// <reference path="./java.util.zip.ZipEntry.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class ZipOutputStream {
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: number);
				public constructor(param0: java.io.OutputStream, param1: boolean);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: boolean);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: number, param3: boolean);
				public constructor();
				public constructor(param0: java.io.OutputStream);
				public close(): void;
				public closeEntry(): void;
				public finish(): void;
				public putNextEntry(param0: java.util.zip.ZipEntry): void;
				public setComment(param0: string): void;
				public setLevel(param0: number): void;
				public setMethod(param0: number): void;
				public write(param0: number): void;
				public write(param0: native.Array<number>): void;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public static CENATT: number;
				public static CENATX: number;
				public static CENCOM: number;
				public static CENCRC: number;
				public static CENDSK: number;
				public static CENEXT: number;
				public static CENFLG: number;
				public static CENHDR: number;
				public static CENHOW: number;
				public static CENLEN: number;
				public static CENNAM: number;
				public static CENOFF: number;
				public static CENSIG: number;
				public static CENSIZ: number;
				public static CENTIM: number;
				public static CENVEM: number;
				public static CENVER: number;
				public static DEFLATED: number;
				public static ENDCOM: number;
				public static ENDHDR: number;
				public static ENDOFF: number;
				public static ENDSIG: number;
				public static ENDSIZ: number;
				public static ENDSUB: number;
				public static ENDTOT: number;
				public static EXTCRC: number;
				public static EXTHDR: number;
				public static EXTLEN: number;
				public static EXTSIG: number;
				public static EXTSIZ: number;
				public static LOCCRC: number;
				public static LOCEXT: number;
				public static LOCFLG: number;
				public static LOCHDR: number;
				public static LOCHOW: number;
				public static LOCLEN: number;
				public static LOCNAM: number;
				public static LOCSIG: number;
				public static LOCSIZ: number;
				public static LOCTIM: number;
				public static LOCVER: number;
				public static STORED: number;
			}
		}
	}
}
