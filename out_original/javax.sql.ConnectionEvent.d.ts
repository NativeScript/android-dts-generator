/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.SQLException.d.ts" />
/// <reference path="./javax.sql.PooledConnection.d.ts" />

declare module javax {
	export module sql {
		export class ConnectionEvent {
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: javax.sql.PooledConnection);
			public constructor(param0: javax.sql.PooledConnection, param1: java.sql.SQLException);
			public getSQLException(): java.sql.SQLException;
		}
	}
}
