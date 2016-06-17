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
/// <reference path="./java.sql.Ref.d.ts" />
/// <reference path="./java.sql.RowId.d.ts" />
/// <reference path="./java.sql.SQLXML.d.ts" />
/// <reference path="./java.sql.Time.d.ts" />
/// <reference path="./java.sql.Timestamp.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./javax.sql.RowSetListener.d.ts" />

declare module javax {
	export module sql {
		export class RowSet {
			public addRowSetListener(param0: javax.sql.RowSetListener): void;
			public clearParameters(): void;
			public execute(): void;
			public getCommand(): string;
			public getDataSourceName(): string;
			public getEscapeProcessing(): boolean;
			public getMaxFieldSize(): number;
			public getMaxRows(): number;
			public getPassword(): string;
			public getQueryTimeout(): number;
			public getTransactionIsolation(): number;
			public getTypeMap(): java.util.Map;
			public getUrl(): string;
			public getUsername(): string;
			public isReadOnly(): boolean;
			public removeRowSetListener(param0: javax.sql.RowSetListener): void;
			public setArray(param0: number, param1: java.sql.Array): void;
			public setAsciiStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public setAsciiStream(param0: number, param1: java.io.InputStream): void;
			public setAsciiStream(param0: string, param1: java.io.InputStream): void;
			public setAsciiStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public setBigDecimal(param0: number, param1: java.math.BigDecimal): void;
			public setBigDecimal(param0: string, param1: java.math.BigDecimal): void;
			public setBinaryStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public setBinaryStream(param0: number, param1: java.io.InputStream): void;
			public setBinaryStream(param0: string, param1: java.io.InputStream): void;
			public setBinaryStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public setBlob(param0: number, param1: java.sql.Blob): void;
			public setBlob(param0: number, param1: java.io.InputStream): void;
			public setBlob(param0: number, param1: java.io.InputStream, param2: number): void;
			public setBlob(param0: string, param1: java.io.InputStream): void;
			public setBlob(param0: string, param1: java.io.InputStream, param2: number): void;
			public setBlob(param0: string, param1: java.sql.Blob): void;
			public setBoolean(param0: number, param1: boolean): void;
			public setBoolean(param0: string, param1: boolean): void;
			public setByte(param0: number, param1: number): void;
			public setByte(param0: string, param1: number): void;
			public setBytes(param0: number, param1: native.Array<number>): void;
			public setBytes(param0: string, param1: native.Array<number>): void;
			public setCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public setCharacterStream(param0: number, param1: java.io.Reader): void;
			public setCharacterStream(param0: string, param1: java.io.Reader): void;
			public setCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public setClob(param0: number, param1: java.sql.Clob): void;
			public setClob(param0: number, param1: java.io.Reader): void;
			public setClob(param0: number, param1: java.io.Reader, param2: number): void;
			public setClob(param0: string, param1: java.sql.Clob): void;
			public setClob(param0: string, param1: java.io.Reader): void;
			public setClob(param0: string, param1: java.io.Reader, param2: number): void;
			public setCommand(param0: string): void;
			public setConcurrency(param0: number): void;
			public setDataSourceName(param0: string): void;
			public setDate(param0: number, param1: java.sql.Date): void;
			public setDate(param0: number, param1: java.sql.Date, param2: java.util.Calendar): void;
			public setDate(param0: string, param1: java.sql.Date): void;
			public setDate(param0: string, param1: java.sql.Date, param2: java.util.Calendar): void;
			public setDouble(param0: number, param1: number): void;
			public setDouble(param0: string, param1: number): void;
			public setEscapeProcessing(param0: boolean): void;
			public setFloat(param0: number, param1: number): void;
			public setFloat(param0: string, param1: number): void;
			public setInt(param0: number, param1: number): void;
			public setInt(param0: string, param1: number): void;
			public setLong(param0: number, param1: number): void;
			public setLong(param0: string, param1: number): void;
			public setMaxFieldSize(param0: number): void;
			public setMaxRows(param0: number): void;
			public setNCharacterStream(param0: number, param1: java.io.Reader): void;
			public setNCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public setNCharacterStream(param0: string, param1: java.io.Reader): void;
			public setNCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public setNClob(param0: number, param1: java.sql.NClob): void;
			public setNClob(param0: number, param1: java.io.Reader): void;
			public setNClob(param0: number, param1: java.io.Reader, param2: number): void;
			public setNClob(param0: string, param1: java.sql.NClob): void;
			public setNClob(param0: string, param1: java.io.Reader): void;
			public setNClob(param0: string, param1: java.io.Reader, param2: number): void;
			public setNString(param0: number, param1: string): void;
			public setNString(param0: string, param1: string): void;
			public setNull(param0: number, param1: number): void;
			public setNull(param0: number, param1: number, param2: string): void;
			public setNull(param0: string, param1: number): void;
			public setNull(param0: string, param1: number, param2: string): void;
			public setObject(param0: number, param1: java.lang.Object): void;
			public setObject(param0: number, param1: java.lang.Object, param2: number): void;
			public setObject(param0: number, param1: java.lang.Object, param2: number, param3: number): void;
			public setObject(param0: string, param1: java.lang.Object): void;
			public setObject(param0: string, param1: java.lang.Object, param2: number): void;
			public setObject(param0: string, param1: java.lang.Object, param2: number, param3: number): void;
			public setPassword(param0: string): void;
			public setQueryTimeout(param0: number): void;
			public setReadOnly(param0: boolean): void;
			public setRef(param0: number, param1: java.sql.Ref): void;
			public setShort(param0: number, param1: number): void;
			public setShort(param0: string, param1: number): void;
			public setString(param0: number, param1: string): void;
			public setString(param0: string, param1: string): void;
			public setRowId(param0: number, param1: java.sql.RowId): void;
			public setRowId(param0: string, param1: java.sql.RowId): void;
			public setSQLXML(param0: number, param1: java.sql.SQLXML): void;
			public setSQLXML(param0: string, param1: java.sql.SQLXML): void;
			public setTime(param0: number, param1: java.sql.Time): void;
			public setTime(param0: number, param1: java.sql.Time, param2: java.util.Calendar): void;
			public setTime(param0: string, param1: java.sql.Time): void;
			public setTime(param0: string, param1: java.sql.Time, param2: java.util.Calendar): void;
			public setTimestamp(param0: number, param1: java.sql.Timestamp): void;
			public setTimestamp(param0: number, param1: java.sql.Timestamp, param2: java.util.Calendar): void;
			public setTimestamp(param0: string, param1: java.sql.Timestamp): void;
			public setTimestamp(param0: string, param1: java.sql.Timestamp, param2: java.util.Calendar): void;
			public setTransactionIsolation(param0: number): void;
			public setType(param0: number): void;
			public setTypeMap(param0: java.util.Map): void;
			public setUrl(param0: string): void;
			public setURL(param0: number, param1: java.net.URL): void;
			public setUsername(param0: string): void;
		}
	}
}
