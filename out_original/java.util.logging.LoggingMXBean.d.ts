/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class LoggingMXBean {
				public getLoggerLevel(param0: string): string;
				public getLoggerNames(): java.util.List;
				public getParentLoggerName(param0: string): string;
				public setLoggerLevel(param0: string, param1: string): void;
			}
		}
	}
}
