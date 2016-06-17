/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.sql.Array.d.ts" />
/// <reference path="./java.sql.Blob.d.ts" />
/// <reference path="./java.sql.CallableStatement.d.ts" />
/// <reference path="./java.sql.Clob.d.ts" />
/// <reference path="./java.sql.DatabaseMetaData.d.ts" />
/// <reference path="./java.sql.NClob.d.ts" />
/// <reference path="./java.sql.PreparedStatement.d.ts" />
/// <reference path="./java.sql.SQLWarning.d.ts" />
/// <reference path="./java.sql.SQLXML.d.ts" />
/// <reference path="./java.sql.Savepoint.d.ts" />
/// <reference path="./java.sql.Statement.d.ts" />
/// <reference path="./java.sql.Struct.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />

declare module java {
	export module sql {
		export class Connection {
			public clearWarnings(): void;
			public close(): void;
			public commit(): void;
			public createStatement(): java.sql.Statement;
			public createStatement(param0: number, param1: number): java.sql.Statement;
			public createStatement(param0: number, param1: number, param2: number): java.sql.Statement;
			public getAutoCommit(): boolean;
			public getCatalog(): string;
			public getHoldability(): number;
			public getMetaData(): java.sql.DatabaseMetaData;
			public getTransactionIsolation(): number;
			public getTypeMap(): java.util.Map;
			public getWarnings(): java.sql.SQLWarning;
			public isClosed(): boolean;
			public isReadOnly(): boolean;
			public nativeSQL(param0: string): string;
			public prepareCall(param0: string): java.sql.CallableStatement;
			public prepareCall(param0: string, param1: number, param2: number): java.sql.CallableStatement;
			public prepareCall(param0: string, param1: number, param2: number, param3: number): java.sql.CallableStatement;
			public prepareStatement(param0: string): java.sql.PreparedStatement;
			public prepareStatement(param0: string, param1: number): java.sql.PreparedStatement;
			public prepareStatement(param0: string, param1: native.Array<number>): java.sql.PreparedStatement;
			public prepareStatement(param0: string, param1: number, param2: number): java.sql.PreparedStatement;
			public prepareStatement(param0: string, param1: number, param2: number, param3: number): java.sql.PreparedStatement;
			public prepareStatement(param0: string, param1: native.Array<string>): java.sql.PreparedStatement;
			public releaseSavepoint(param0: java.sql.Savepoint): void;
			public rollback(): void;
			public rollback(param0: java.sql.Savepoint): void;
			public setAutoCommit(param0: boolean): void;
			public setCatalog(param0: string): void;
			public setHoldability(param0: number): void;
			public setReadOnly(param0: boolean): void;
			public setSavepoint(): java.sql.Savepoint;
			public setSavepoint(param0: string): java.sql.Savepoint;
			public setTransactionIsolation(param0: number): void;
			public setTypeMap(param0: java.util.Map): void;
			public createClob(): java.sql.Clob;
			public createBlob(): java.sql.Blob;
			public createNClob(): java.sql.NClob;
			public createSQLXML(): java.sql.SQLXML;
			public isValid(param0: number): boolean;
			public setClientInfo(param0: string, param1: string): void;
			public setClientInfo(param0: java.util.Properties): void;
			public getClientInfo(param0: string): string;
			public getClientInfo(): java.util.Properties;
			public createArrayOf(param0: string, param1: native.Array<java.lang.Object>): java.sql.Array;
			public createStruct(param0: string, param1: native.Array<java.lang.Object>): java.sql.Struct;
			public static TRANSACTION_NONE: number;
			public static TRANSACTION_READ_COMMITTED: number;
			public static TRANSACTION_READ_UNCOMMITTED: number;
			public static TRANSACTION_REPEATABLE_READ: number;
			public static TRANSACTION_SERIALIZABLE: number;
		}
	}
}
