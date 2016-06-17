/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Package.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module lang {
		export class ClassLoader {
			public constructor();
			public constructor(param0: java.lang.ClassLoader);
			public static getSystemClassLoader(): java.lang.ClassLoader;
			public static getSystemResource(param0: string): java.net.URL;
			public static getSystemResources(param0: string): java.util.Enumeration;
			public static getSystemResourceAsStream(param0: string): java.io.InputStream;
			public defineClass(param0: native.Array<number>, param1: number, param2: number): java.lang.Class;
			public defineClass(param0: string, param1: native.Array<number>, param2: number, param3: number): java.lang.Class;
			public defineClass(param0: string, param1: native.Array<number>, param2: number, param3: number, param4: java.security.ProtectionDomain): java.lang.Class;
			public defineClass(param0: string, param1: java.nio.ByteBuffer, param2: java.security.ProtectionDomain): java.lang.Class;
			public findClass(param0: string): java.lang.Class;
			public findLoadedClass(param0: string): java.lang.Class;
			public findSystemClass(param0: string): java.lang.Class;
			public getParent(): java.lang.ClassLoader;
			public getResource(param0: string): java.net.URL;
			public getResources(param0: string): java.util.Enumeration;
			public getResourceAsStream(param0: string): java.io.InputStream;
			public loadClass(param0: string): java.lang.Class;
			public loadClass(param0: string, param1: boolean): java.lang.Class;
			public resolveClass(param0: java.lang.Class): void;
			public findResource(param0: string): java.net.URL;
			public findResources(param0: string): java.util.Enumeration;
			public findLibrary(param0: string): string;
			public getPackage(param0: string): java.lang.Package;
			public getPackages(): native.Array<java.lang.Package>;
			public definePackage(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.net.URL): java.lang.Package;
			public setSigners(param0: java.lang.Class, param1: native.Array<java.lang.Object>): void;
			public setClassAssertionStatus(param0: string, param1: boolean): void;
			public setPackageAssertionStatus(param0: string, param1: boolean): void;
			public setDefaultAssertionStatus(param0: boolean): void;
			public clearAssertionStatus(): void;
		}
	}
}
