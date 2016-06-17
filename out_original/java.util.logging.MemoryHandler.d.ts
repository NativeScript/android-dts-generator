/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.logging.Handler.d.ts" />
/// <reference path="./java.util.logging.Level.d.ts" />
/// <reference path="./java.util.logging.LogRecord.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class MemoryHandler {
				public constructor();
				public constructor(param0: java.util.logging.Handler, param1: number, param2: java.util.logging.Level);
				public close(): void;
				public flush(): void;
				public publish(param0: java.util.logging.LogRecord): void;
				public getPushLevel(): java.util.logging.Level;
				public isLoggable(param0: java.util.logging.LogRecord): boolean;
				public push(): void;
				public setPushLevel(param0: java.util.logging.Level): void;
			}
		}
	}
}
