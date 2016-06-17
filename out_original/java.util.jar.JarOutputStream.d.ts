/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.jar.Manifest.d.ts" />
/// <reference path="./java.util.zip.Deflater.d.ts" />
/// <reference path="./java.util.zip.ZipEntry.d.ts" />

declare module java {
	export module util {
		export module jar {
			export class JarOutputStream {
				public constructor(param0: java.io.OutputStream);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: number);
				public constructor(param0: java.io.OutputStream, param1: boolean);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: boolean);
				public constructor(param0: java.io.OutputStream, param1: java.util.zip.Deflater, param2: number, param3: boolean);
				public constructor();
				public constructor(param0: java.io.OutputStream, param1: java.util.jar.Manifest);
				public constructor(param0: java.io.OutputStream);
				public putNextEntry(param0: java.util.zip.ZipEntry): void;
			}
		}
	}
}
