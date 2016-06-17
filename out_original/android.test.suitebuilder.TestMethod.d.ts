/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
/// <reference path="./junit.framework.TestCase.d.ts" />

declare module android {
	export module test {
		export module suitebuilder {
			export class TestMethod {
				public constructor();
				public constructor(param0: java.lang.reflect.Method, param1: java.lang.Class);
				public constructor(param0: string, param1: java.lang.Class);
				public constructor(param0: junit.framework.TestCase);
				public getName(): string;
				public getEnclosingClassname(): string;
				public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
				public getEnclosingClass(): java.lang.Class;
				public createTest(): junit.framework.TestCase;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
			}
		}
	}
}
