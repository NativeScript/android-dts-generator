/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Package.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.net.URLStreamHandlerFactory.d.ts" />
/// <reference path="./java.security.CodeSource.d.ts" />
/// <reference path="./java.security.PermissionCollection.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.jar.Manifest.d.ts" />

declare module java {
	export module net {
		export class URLClassLoader {
			public constructor();
			public constructor(param0: java.lang.ClassLoader);
			public constructor(param0: native.Array<java.net.URL>);
			public constructor(param0: native.Array<java.net.URL>, param1: java.lang.ClassLoader);
			public constructor(param0: native.Array<java.net.URL>, param1: java.lang.ClassLoader, param2: java.net.URLStreamHandlerFactory);
			public addURL(param0: java.net.URL): void;
			public findResources(param0: string): java.util.Enumeration;
			public getPermissions(param0: java.security.CodeSource): java.security.PermissionCollection;
			public getURLs(): native.Array<java.net.URL>;
			public static newInstance(param0: native.Array<java.net.URL>): java.net.URLClassLoader;
			public static newInstance(param0: native.Array<java.net.URL>, param1: java.lang.ClassLoader): java.net.URLClassLoader;
			public findClass(param0: string): java.lang.Class;
			public findResource(param0: string): java.net.URL;
			public definePackage(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.net.URL): java.lang.Package;
			public definePackage(param0: string, param1: java.util.jar.Manifest, param2: java.net.URL): java.lang.Package;
		}
	}
}
