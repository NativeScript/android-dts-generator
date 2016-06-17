/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.logging.ErrorManager.d.ts" />
/// <reference path="./java.util.logging.Filter.d.ts" />
/// <reference path="./java.util.logging.Formatter.d.ts" />
/// <reference path="./java.util.logging.Level.d.ts" />
/// <reference path="./java.util.logging.LogRecord.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class Handler {
				public constructor();
				public close(): void;
				public flush(): void;
				public publish(param0: java.util.logging.LogRecord): void;
				public getEncoding(): string;
				public getErrorManager(): java.util.logging.ErrorManager;
				public getFilter(): java.util.logging.Filter;
				public getFormatter(): java.util.logging.Formatter;
				public getLevel(): java.util.logging.Level;
				public isLoggable(param0: java.util.logging.LogRecord): boolean;
				public reportError(param0: string, param1: java.lang.Exception, param2: number): void;
				public setEncoding(param0: string): void;
				public setErrorManager(param0: java.util.logging.ErrorManager): void;
				public setFilter(param0: java.util.logging.Filter): void;
				public setFormatter(param0: java.util.logging.Formatter): void;
				public setLevel(param0: java.util.logging.Level): void;
			}
		}
	}
}
