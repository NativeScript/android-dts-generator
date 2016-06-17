/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.sql.PooledConnection.d.ts" />

declare module javax {
	export module sql {
		export class ConnectionPoolDataSource {
			public getPooledConnection(): javax.sql.PooledConnection;
			public getPooledConnection(param0: string, param1: string): javax.sql.PooledConnection;
		}
	}
}
