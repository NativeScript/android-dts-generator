/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.jar.Attributes.d.ts" />
/// <reference path="./java.util.jar.JarEntry.d.ts" />
/// <reference path="./java.util.jar.JarFile.d.ts" />
/// <reference path="./java.util.jar.Manifest.d.ts" />

declare module java {
	export module net {
		export class JarURLConnection {
			public constructor();
			public constructor(param0: java.net.URL);
			public getAttributes(): java.util.jar.Attributes;
			public getCertificates(): native.Array<java.security.cert.Certificate>;
			public getEntryName(): string;
			public getJarEntry(): java.util.jar.JarEntry;
			public getManifest(): java.util.jar.Manifest;
			public getJarFile(): java.util.jar.JarFile;
			public getJarFileURL(): java.net.URL;
			public getMainAttributes(): java.util.jar.Attributes;
			public jarFileURLConnection: java.net.URLConnection;
		}
	}
}
