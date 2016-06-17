/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.beans.PropertyChangeListener.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.logging.Logger.d.ts" />
/// <reference path="./java.util.logging.LoggingMXBean.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class LogManager {
				public constructor();
				public static getLoggingMXBean(): java.util.logging.LoggingMXBean;
				public checkAccess(): void;
				public addLogger(param0: java.util.logging.Logger): boolean;
				public getLogger(param0: string): java.util.logging.Logger;
				public getLoggerNames(): java.util.Enumeration;
				public static getLogManager(): java.util.logging.LogManager;
				public getProperty(param0: string): string;
				public readConfiguration(): void;
				public readConfiguration(param0: java.io.InputStream): void;
				public reset(): void;
				public addPropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
				public removePropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
				public static LOGGING_MXBEAN_NAME: string;
			}
		}
	}
}
