/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class ZipEntry {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.util.zip.ZipEntry);
				public getComment(): string;
				public getCompressedSize(): number;
				public getCrc(): number;
				public getExtra(): native.Array<number>;
				public getMethod(): number;
				public getName(): string;
				public getSize(): number;
				public getTime(): number;
				public isDirectory(): boolean;
				public setComment(param0: string): void;
				public setCompressedSize(param0: number): void;
				public setCrc(param0: number): void;
				public setExtra(param0: native.Array<number>): void;
				public setMethod(param0: number): void;
				public setSize(param0: number): void;
				public setTime(param0: number): void;
				public toString(): string;
				public clone(): java.lang.Object;
				public hashCode(): number;
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
