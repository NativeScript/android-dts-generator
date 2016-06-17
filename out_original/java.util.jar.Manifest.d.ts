/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.jar.Attributes.d.ts" />

declare module java {
	export module util {
		export module jar {
			export class Manifest {
				public constructor();
				public constructor(param0: java.io.InputStream);
				public constructor(param0: java.util.jar.Manifest);
				public clear(): void;
				public getAttributes(param0: string): java.util.jar.Attributes;
				public getEntries(): java.util.Map;
				public getMainAttributes(): java.util.jar.Attributes;
				public clone(): java.lang.Object;
				public write(param0: java.io.OutputStream): void;
				public read(param0: java.io.InputStream): void;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
			}
		}
	}
}
