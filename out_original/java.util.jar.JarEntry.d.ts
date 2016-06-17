/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.CodeSigner.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.jar.Attributes.d.ts" />
/// <reference path="./java.util.zip.ZipEntry.d.ts" />

declare module java {
	export module util {
		export module jar {
			export class JarEntry {
				public constructor(param0: java.util.zip.ZipEntry);
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.util.zip.ZipEntry);
				public constructor(param0: java.util.jar.JarEntry);
				public getAttributes(): java.util.jar.Attributes;
				public getCertificates(): native.Array<java.security.cert.Certificate>;
				public getCodeSigners(): native.Array<java.security.CodeSigner>;
			}
		}
	}
}
