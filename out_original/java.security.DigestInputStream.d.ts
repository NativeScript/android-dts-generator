/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />

declare module java {
	export module security {
		export class DigestInputStream {
			public constructor(param0: java.io.InputStream);
			public constructor();
			public constructor(param0: java.io.InputStream, param1: java.security.MessageDigest);
			public getMessageDigest(): java.security.MessageDigest;
			public setMessageDigest(param0: java.security.MessageDigest): void;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(param0: native.Array<number>): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public on(param0: boolean): void;
			public toString(): string;
			public digest: java.security.MessageDigest;
		}
	}
}
