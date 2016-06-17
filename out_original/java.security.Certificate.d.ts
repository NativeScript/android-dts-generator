/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />

declare module java {
	export module security {
		export class Certificate {
			public decode(param0: java.io.InputStream): void;
			public encode(param0: java.io.OutputStream): void;
			public getFormat(): string;
			public getGuarantor(): java.security.Principal;
			public getPrincipal(): java.security.Principal;
			public getPublicKey(): java.security.PublicKey;
			public toString(): string;
			public toString(param0: boolean): string;
		}
	}
}
