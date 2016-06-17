/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.ResourceBundle.d.ts" />
/// <reference path="./java.util.logging.Level.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class LogRecord {
				public constructor();
				public constructor(param0: java.util.logging.Level, param1: string);
				public getLevel(): java.util.logging.Level;
				public setLevel(param0: java.util.logging.Level): void;
				public getLoggerName(): string;
				public setLoggerName(param0: string): void;
				public getMessage(): string;
				public setMessage(param0: string): void;
				public getMillis(): number;
				public setMillis(param0: number): void;
				public getParameters(): native.Array<java.lang.Object>;
				public setParameters(param0: native.Array<java.lang.Object>): void;
				public getResourceBundle(): java.util.ResourceBundle;
				public setResourceBundle(param0: java.util.ResourceBundle): void;
				public getResourceBundleName(): string;
				public setResourceBundleName(param0: string): void;
				public getSequenceNumber(): number;
				public setSequenceNumber(param0: number): void;
				public getSourceClassName(): string;
				public setSourceClassName(param0: string): void;
				public getSourceMethodName(): string;
				public setSourceMethodName(param0: string): void;
				public getThreadID(): number;
				public setThreadID(param0: number): void;
				public getThrown(): java.lang.Throwable;
				public setThrown(param0: java.lang.Throwable): void;
			}
		}
	}
}
