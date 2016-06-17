/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.AccessControlContext.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.security.PrivilegedAction.d.ts" />
/// <reference path="./java.security.PrivilegedExceptionAction.d.ts" />

declare module java {
	export module security {
		export class AccessController {
			public static doPrivileged(param0: java.security.PrivilegedAction): java.lang.Object;
			public static doPrivileged(param0: java.security.PrivilegedAction, param1: java.security.AccessControlContext): java.lang.Object;
			public static doPrivileged(param0: java.security.PrivilegedExceptionAction): java.lang.Object;
			public static doPrivileged(param0: java.security.PrivilegedExceptionAction, param1: java.security.AccessControlContext): java.lang.Object;
			public static doPrivilegedWithCombiner(param0: java.security.PrivilegedAction): java.lang.Object;
			public static doPrivilegedWithCombiner(param0: java.security.PrivilegedExceptionAction): java.lang.Object;
			public static checkPermission(param0: java.security.Permission): void;
			public static getContext(): java.security.AccessControlContext;
		}
	}
}
