/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.zip.Inflater.d.ts" />
/// <reference path="./java.util.zip.ZipEntry.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class ZipInputStream {
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater, param2: number);
				public constructor();
				public constructor(param0: java.io.InputStream);
				public close(): void;
				public closeEntry(): void;
				public getNextEntry(): java.util.zip.ZipEntry;
				public read(): number;
				public read(param0: native.Array<number>): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public available(): number;
				public createZipEntry(param0: string): java.util.zip.ZipEntry;
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
			}
		}
	}
}
