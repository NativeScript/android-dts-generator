/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />
/// <reference path="./javax.sql.ConnectionEventListener.d.ts" />
/// <reference path="./javax.sql.StatementEventListener.d.ts" />

declare module javax {
	export module sql {
		export class PooledConnection {
			public addConnectionEventListener(param0: javax.sql.ConnectionEventListener): void;
			public close(): void;
			public getConnection(): java.sql.Connection;
			public removeConnectionEventListener(param0: javax.sql.ConnectionEventListener): void;
			public addStatementEventListener(param0: javax.sql.StatementEventListener): void;
			public removeStatementEventListener(param0: javax.sql.StatementEventListener): void;
		}
	}
}
