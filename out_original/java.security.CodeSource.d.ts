/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.security.CodeSigner.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />

declare module java {
	export module security {
		export class CodeSource {
			public constructor();
			public constructor(param0: java.net.URL, param1: native.Array<java.security.cert.Certificate>);
			public constructor(param0: java.net.URL, param1: native.Array<java.security.CodeSigner>);
			public getCertificates(): native.Array<java.security.cert.Certificate>;
			public getCodeSigners(): native.Array<java.security.CodeSigner>;
			public getLocation(): java.net.URL;
			public implies(param0: java.security.CodeSource): boolean;
		}
	}
}
