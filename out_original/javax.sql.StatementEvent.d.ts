/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.PreparedStatement.d.ts" />
/// <reference path="./java.sql.SQLException.d.ts" />
/// <reference path="./javax.sql.PooledConnection.d.ts" />

declare module javax {
	export module sql {
		export class StatementEvent {
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: javax.sql.PooledConnection, param1: java.sql.PreparedStatement, param2: java.sql.SQLException);
			public constructor(param0: javax.sql.PooledConnection, param1: java.sql.PreparedStatement);
			public getStatement(): java.sql.PreparedStatement;
			public getSQLException(): java.sql.SQLException;
		}
	}
}
