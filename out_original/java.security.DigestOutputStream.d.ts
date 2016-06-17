/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.security.MessageDigest.d.ts" />

declare module java {
	export module security {
		export class DigestOutputStream {
			public constructor(param0: java.io.OutputStream);
			public constructor();
			public constructor(param0: java.io.OutputStream, param1: java.security.MessageDigest);
			public getMessageDigest(): java.security.MessageDigest;
			public setMessageDigest(param0: java.security.MessageDigest): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public on(param0: boolean): void;
			public toString(): string;
			public digest: java.security.MessageDigest;
		}
	}
}
