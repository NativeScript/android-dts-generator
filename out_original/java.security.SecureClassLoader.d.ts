/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.CodeSource.d.ts" />
/// <reference path="./java.security.PermissionCollection.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />

declare module java {
	export module security {
		export class SecureClassLoader {
			public constructor(param0: java.lang.ClassLoader);
			public constructor();
			public constructor(param0: java.lang.ClassLoader);
			public getPermissions(param0: java.security.CodeSource): java.security.PermissionCollection;
			public defineClass(param0: native.Array<number>, param1: number, param2: number): java.lang.Class;
			public defineClass(param0: string, param1: native.Array<number>, param2: number, param3: number): java.lang.Class;
			public defineClass(param0: string, param1: native.Array<number>, param2: number, param3: number, param4: java.security.ProtectionDomain): java.lang.Class;
			public defineClass(param0: string, param1: java.nio.ByteBuffer, param2: java.security.ProtectionDomain): java.lang.Class;
			public defineClass(param0: string, param1: native.Array<number>, param2: number, param3: number, param4: java.security.CodeSource): java.lang.Class;
			public defineClass(param0: string, param1: java.nio.ByteBuffer, param2: java.security.CodeSource): java.lang.Class;
		}
	}
}
