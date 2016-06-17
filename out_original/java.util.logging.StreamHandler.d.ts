/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.logging.Formatter.d.ts" />
/// <reference path="./java.util.logging.LogRecord.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class StreamHandler {
				public constructor();
				public constructor(param0: java.io.OutputStream, param1: java.util.logging.Formatter);
				public setOutputStream(param0: java.io.OutputStream): void;
				public setEncoding(param0: string): void;
				public close(): void;
				public flush(): void;
				public publish(param0: java.util.logging.LogRecord): void;
				public isLoggable(param0: java.util.logging.LogRecord): boolean;
			}
		}
	}
}
