/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.sql.Array.d.ts" />
/// <reference path="./java.sql.Blob.d.ts" />
/// <reference path="./java.sql.Clob.d.ts" />
/// <reference path="./java.sql.Date.d.ts" />
/// <reference path="./java.sql.NClob.d.ts" />
/// <reference path="./java.sql.ParameterMetaData.d.ts" />
/// <reference path="./java.sql.Ref.d.ts" />
/// <reference path="./java.sql.ResultSet.d.ts" />
/// <reference path="./java.sql.ResultSetMetaData.d.ts" />
/// <reference path="./java.sql.RowId.d.ts" />
/// <reference path="./java.sql.SQLXML.d.ts" />
/// <reference path="./java.sql.Time.d.ts" />
/// <reference path="./java.sql.Timestamp.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />

declare module java {
	export module sql {
		export class PreparedStatement {
			public addBatch(): void;
			public clearParameters(): void;
			public execute(): boolean;
			public executeQuery(): java.sql.ResultSet;
			public executeUpdate(): number;
			public getMetaData(): java.sql.ResultSetMetaData;
			public getParameterMetaData(): java.sql.ParameterMetaData;
			public setArray(param0: number, param1: java.sql.Array): void;
			public setAsciiStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public setBigDecimal(param0: number, param1: java.math.BigDecimal): void;
			public setBinaryStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public setBlob(param0: number, param1: java.sql.Blob): void;
			public setBoolean(param0: number, param1: boolean): void;
			public setByte(param0: number, param1: number): void;
			public setBytes(param0: number, param1: native.Array<number>): void;
			public setCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public setClob(param0: number, param1: java.sql.Clob): void;
			public setDate(param0: number, param1: java.sql.Date): void;
			public setDate(param0: number, param1: java.sql.Date, param2: java.util.Calendar): void;
			public setDouble(param0: number, param1: number): void;
			public setFloat(param0: number, param1: number): void;
			public setInt(param0: number, param1: number): void;
			public setLong(param0: number, param1: number): void;
			public setNull(param0: number, param1: number): void;
			public setNull(param0: number, param1: number, param2: string): void;
			public setObject(param0: number, param1: java.lang.Object): void;
			public setObject(param0: number, param1: java.lang.Object, param2: number): void;
			public setObject(param0: number, param1: java.lang.Object, param2: number, param3: number): void;
			public setRef(param0: number, param1: java.sql.Ref): void;
			public setShort(param0: number, param1: number): void;
			public setString(param0: number, param1: string): void;
			public setTime(param0: number, param1: java.sql.Time): void;
			public setTime(param0: number, param1: java.sql.Time, param2: java.util.Calendar): void;
			public setTimestamp(param0: number, param1: java.sql.Timestamp): void;
			public setTimestamp(param0: number, param1: java.sql.Timestamp, param2: java.util.Calendar): void;
			public setUnicodeStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public setURL(param0: number, param1: java.net.URL): void;
			public setRowId(param0: number, param1: java.sql.RowId): void;
			public setNString(param0: number, param1: string): void;
			public setNCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public setNClob(param0: number, param1: java.sql.NClob): void;
			public setClob(param0: number, param1: java.io.Reader, param2: number): void;
			public setBlob(param0: number, param1: java.io.InputStream, param2: number): void;
			public setNClob(param0: number, param1: java.io.Reader, param2: number): void;
			public setSQLXML(param0: number, param1: java.sql.SQLXML): void;
			public setAsciiStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public setBinaryStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public setCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public setAsciiStream(param0: number, param1: java.io.InputStream): void;
			public setBinaryStream(param0: number, param1: java.io.InputStream): void;
			public setCharacterStream(param0: number, param1: java.io.Reader): void;
			public setNCharacterStream(param0: number, param1: java.io.Reader): void;
			public setClob(param0: number, param1: java.io.Reader): void;
			public setBlob(param0: number, param1: java.io.InputStream): void;
			public setNClob(param0: number, param1: java.io.Reader): void;
		}
	}
}
