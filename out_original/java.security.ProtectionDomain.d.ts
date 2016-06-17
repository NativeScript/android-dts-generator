/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.security.CodeSource.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.security.PermissionCollection.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />

declare module java {
	export module security {
		export class ProtectionDomain {
			public constructor();
			public constructor(param0: java.security.CodeSource, param1: java.security.PermissionCollection);
			public constructor(param0: java.security.CodeSource, param1: java.security.PermissionCollection, param2: java.lang.ClassLoader, param3: native.Array<java.security.Principal>);
			public getClassLoader(): java.lang.ClassLoader;
			public getCodeSource(): java.security.CodeSource;
			public getPermissions(): java.security.PermissionCollection;
			public getPrincipals(): native.Array<java.security.Principal>;
			public implies(param0: java.security.Permission): boolean;
		}
	}
}
