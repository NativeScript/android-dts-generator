/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.logging.Handler.d.ts" />
/// <reference path="./java.util.logging.LogRecord.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class Formatter {
				public constructor();
				public format(param0: java.util.logging.LogRecord): string;
				public formatMessage(param0: java.util.logging.LogRecord): string;
				public getHead(param0: java.util.logging.Handler): string;
				public getTail(param0: java.util.logging.Handler): string;
			}
		}
	}
}
