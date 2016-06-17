/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.InvocationHandler.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class Proxy {
				public constructor();
				public constructor(param0: java.lang.reflect.InvocationHandler);
				public static getProxyClass(param0: java.lang.ClassLoader, param1: native.Array<java.lang.Class>): java.lang.Class;
				public static newProxyInstance(param0: java.lang.ClassLoader, param1: native.Array<java.lang.Class>, param2: java.lang.reflect.InvocationHandler): java.lang.Object;
				public static isProxyClass(param0: java.lang.Class): boolean;
				public static getInvocationHandler(param0: java.lang.Object): java.lang.reflect.InvocationHandler;
				public h: java.lang.reflect.InvocationHandler;
			}
		}
	}
}
