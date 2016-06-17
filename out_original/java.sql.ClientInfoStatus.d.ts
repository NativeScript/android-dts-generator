/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module sql {
		export class ClientInfoStatus {
			public static values(): native.Array<java.sql.ClientInfoStatus>;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): java.sql.ClientInfoStatus;
			public static REASON_UNKNOWN: java.sql.ClientInfoStatus;
			public static REASON_UNKNOWN_PROPERTY: java.sql.ClientInfoStatus;
			public static REASON_VALUE_INVALID: java.sql.ClientInfoStatus;
			public static REASON_VALUE_TRUNCATED: java.sql.ClientInfoStatus;
		}
	}
}
