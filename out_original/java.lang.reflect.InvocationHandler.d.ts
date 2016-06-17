/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class InvocationHandler {
				public invoke(param0: java.lang.Object, param1: java.lang.reflect.Method, param2: native.Array<java.lang.Object>): java.lang.Object;
			}
		}
	}
}
