/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.jar.JarEntry.d.ts" />
/// <reference path="./java.util.jar.Manifest.d.ts" />
/// <reference path="./java.util.zip.ZipEntry.d.ts" />

declare module java {
	export module util {
		export module jar {
			export class JarFile {
				public constructor(param0: string);
				public constructor(param0: java.io.File, param1: number);
				public constructor();
				public constructor(param0: java.io.File);
				public constructor(param0: java.io.File, param1: boolean);
				public constructor(param0: java.io.File, param1: boolean, param2: number);
				public constructor(param0: string);
				public constructor(param0: string, param1: boolean);
				public entries(): java.util.Enumeration;
				public getJarEntry(param0: string): java.util.jar.JarEntry;
				public getManifest(): java.util.jar.Manifest;
				public getInputStream(param0: java.util.zip.ZipEntry): java.io.InputStream;
				public getEntry(param0: string): java.util.zip.ZipEntry;
				public close(): void;
				public static MANIFEST_NAME: string;
			}
		}
	}
}
