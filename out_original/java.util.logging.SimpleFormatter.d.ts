/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.logging.LogRecord.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class SimpleFormatter {
				public constructor();
				public format(param0: java.util.logging.LogRecord): string;
			}
		}
	}
}
