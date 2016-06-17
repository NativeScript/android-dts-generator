/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.jar.JarEntry.d.ts" />
/// <reference path="./java.util.jar.Manifest.d.ts" />
/// <reference path="./java.util.zip.Inflater.d.ts" />
/// <reference path="./java.util.zip.ZipEntry.d.ts" />

declare module java {
	export module util {
		export module jar {
			export class JarInputStream {
				public constructor(param0: java.io.InputStream);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater);
				public constructor(param0: java.io.InputStream, param1: java.util.zip.Inflater, param2: number);
				public constructor();
				public constructor(param0: java.io.InputStream, param1: boolean);
				public constructor(param0: java.io.InputStream);
				public getManifest(): java.util.jar.Manifest;
				public getNextJarEntry(): java.util.jar.JarEntry;
				public read(): number;
				public read(param0: native.Array<number>): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public getNextEntry(): java.util.zip.ZipEntry;
				public closeEntry(): void;
				public createZipEntry(param0: string): java.util.zip.ZipEntry;
			}
		}
	}
}
