/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module java {
	export module util {
		export class IllegalFormatConversionException {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor(param0: string, param1: java.lang.Class);
			public getArgumentClass(): java.lang.Class;
			public getConversion(): string;
			public getMessage(): string;
		}
	}
}
