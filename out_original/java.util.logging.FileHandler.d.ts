/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.logging.Formatter.d.ts" />
/// <reference path="./java.util.logging.LogRecord.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class FileHandler {
				public constructor(param0: java.io.OutputStream, param1: java.util.logging.Formatter);
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: boolean);
				public constructor(param0: string, param1: number, param2: number);
				public constructor(param0: string, param1: number, param2: number, param3: boolean);
				public close(): void;
				public publish(param0: java.util.logging.LogRecord): void;
			}
		}
	}
}
