/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.ResourceBundle.d.ts" />
/// <reference path="./java.util.logging.Filter.d.ts" />
/// <reference path="./java.util.logging.Handler.d.ts" />
/// <reference path="./java.util.logging.Level.d.ts" />
/// <reference path="./java.util.logging.LogRecord.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class Logger {
				public constructor();
				public constructor(param0: string, param1: string);
				public static getAnonymousLogger(): java.util.logging.Logger;
				public static getAnonymousLogger(param0: string): java.util.logging.Logger;
				public static getLogger(param0: string): java.util.logging.Logger;
				public static getLogger(param0: string, param1: string): java.util.logging.Logger;
				public static getGlobal(): java.util.logging.Logger;
				public addHandler(param0: java.util.logging.Handler): void;
				public getHandlers(): native.Array<java.util.logging.Handler>;
				public removeHandler(param0: java.util.logging.Handler): void;
				public getFilter(): java.util.logging.Filter;
				public setFilter(param0: java.util.logging.Filter): void;
				public getLevel(): java.util.logging.Level;
				public setLevel(param0: java.util.logging.Level): void;
				public getUseParentHandlers(): boolean;
				public setUseParentHandlers(param0: boolean): void;
				public getParent(): java.util.logging.Logger;
				public setParent(param0: java.util.logging.Logger): void;
				public getName(): string;
				public getResourceBundle(): java.util.ResourceBundle;
				public getResourceBundleName(): string;
				public isLoggable(param0: java.util.logging.Level): boolean;
				public entering(param0: string, param1: string): void;
				public entering(param0: string, param1: string, param2: java.lang.Object): void;
				public entering(param0: string, param1: string, param2: native.Array<java.lang.Object>): void;
				public exiting(param0: string, param1: string): void;
				public exiting(param0: string, param1: string, param2: java.lang.Object): void;
				public throwing(param0: string, param1: string, param2: java.lang.Throwable): void;
				public severe(param0: string): void;
				public warning(param0: string): void;
				public info(param0: string): void;
				public config(param0: string): void;
				public fine(param0: string): void;
				public finer(param0: string): void;
				public finest(param0: string): void;
				public log(param0: java.util.logging.Level, param1: string): void;
				public log(param0: java.util.logging.Level, param1: string, param2: java.lang.Object): void;
				public log(param0: java.util.logging.Level, param1: string, param2: native.Array<java.lang.Object>): void;
				public log(param0: java.util.logging.Level, param1: string, param2: java.lang.Throwable): void;
				public log(param0: java.util.logging.LogRecord): void;
				public logp(param0: java.util.logging.Level, param1: string, param2: string, param3: string): void;
				public logp(param0: java.util.logging.Level, param1: string, param2: string, param3: string, param4: java.lang.Object): void;
				public logp(param0: java.util.logging.Level, param1: string, param2: string, param3: string, param4: native.Array<java.lang.Object>): void;
				public logp(param0: java.util.logging.Level, param1: string, param2: string, param3: string, param4: java.lang.Throwable): void;
				public logrb(param0: java.util.logging.Level, param1: string, param2: string, param3: string, param4: string): void;
				public logrb(param0: java.util.logging.Level, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Object): void;
				public logrb(param0: java.util.logging.Level, param1: string, param2: string, param3: string, param4: string, param5: native.Array<java.lang.Object>): void;
				public logrb(param0: java.util.logging.Level, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Throwable): void;
				public static GLOBAL_LOGGER_NAME: string;
				public static global: java.util.logging.Logger;
			}
		}
	}
}
