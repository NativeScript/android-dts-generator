/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />
/// <reference path="./java.sql.DriverPropertyInfo.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />

declare module java {
	export module sql {
		export class Driver {
			public acceptsURL(param0: string): boolean;
			public connect(param0: string, param1: java.util.Properties): java.sql.Connection;
			public getMajorVersion(): number;
			public getMinorVersion(): number;
			public getPropertyInfo(param0: string, param1: java.util.Properties): native.Array<java.sql.DriverPropertyInfo>;
			public jdbcCompliant(): boolean;
		}
	}
}
