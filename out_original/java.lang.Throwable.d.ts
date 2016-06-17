/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.StackTraceElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class Throwable {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public fillInStackTrace(): java.lang.Throwable;
			public getMessage(): string;
			public getLocalizedMessage(): string;
			public getStackTrace(): native.Array<java.lang.StackTraceElement>;
			public setStackTrace(param0: native.Array<java.lang.StackTraceElement>): void;
			public printStackTrace(): void;
			public printStackTrace(param0: java.io.PrintStream): void;
			public printStackTrace(param0: java.io.PrintWriter): void;
			public toString(): string;
			public initCause(param0: java.lang.Throwable): java.lang.Throwable;
			public getCause(): java.lang.Throwable;
			public addSuppressed(param0: java.lang.Throwable): void;
			public getSuppressed(): native.Array<java.lang.Throwable>;
		}
	}
}
