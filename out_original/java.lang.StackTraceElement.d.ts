/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class StackTraceElement {
			public constructor();
			public constructor(param0: string, param1: string, param2: string, param3: number);
			public equals(param0: java.lang.Object): boolean;
			public getClassName(): string;
			public getFileName(): string;
			public getLineNumber(): number;
			public getMethodName(): string;
			public hashCode(): number;
			public isNativeMethod(): boolean;
			public toString(): string;
		}
	}
}
