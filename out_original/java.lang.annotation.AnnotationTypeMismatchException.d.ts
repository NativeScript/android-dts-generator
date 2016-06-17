/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />

declare module java {
	export module lang {
		export module annotation {
			export class AnnotationTypeMismatchException {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: java.lang.reflect.Method, param1: string);
				public element(): java.lang.reflect.Method;
				public foundType(): string;
			}
		}
	}
}
