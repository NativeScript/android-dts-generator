/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.zip.ZipEntry.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class ZipFile {
				public constructor();
				public constructor(param0: java.io.File);
				public constructor(param0: string);
				public constructor(param0: java.io.File, param1: number);
				public finalize(): void;
				public close(): void;
				public entries(): java.util.Enumeration;
				public getComment(): string;
				public getEntry(param0: string): java.util.zip.ZipEntry;
				public getInputStream(param0: java.util.zip.ZipEntry): java.io.InputStream;
				public getName(): string;
				public size(): number;
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
				public static OPEN_DELETE: number;
				public static OPEN_READ: number;
			}
		}
	}
}
