/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />
/// <reference path="./java.sql.Driver.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />

declare module java {
	export module sql {
		export class DriverManager {
			public static deregisterDriver(param0: java.sql.Driver): void;
			public static getConnection(param0: string): java.sql.Connection;
			public static getConnection(param0: string, param1: java.util.Properties): java.sql.Connection;
			public static getConnection(param0: string, param1: string, param2: string): java.sql.Connection;
			public static getDriver(param0: string): java.sql.Driver;
			public static getDrivers(): java.util.Enumeration;
			public static getLoginTimeout(): number;
			public static getLogStream(): java.io.PrintStream;
			public static getLogWriter(): java.io.PrintWriter;
			public static println(param0: string): void;
			public static registerDriver(param0: java.sql.Driver): void;
			public static setLoginTimeout(param0: number): void;
			public static setLogStream(param0: java.io.PrintStream): void;
			public static setLogWriter(param0: java.io.PrintWriter): void;
		}
	}
}
