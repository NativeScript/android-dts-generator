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

declare module java {
	export module sql {
		export class CallableStatement {
			public getArray(param0: number): java.sql.Array;
			public getArray(param0: string): java.sql.Array;
			public getBigDecimal(param0: number): java.math.BigDecimal;
			public getBigDecimal(param0: number, param1: number): java.math.BigDecimal;
			public getBigDecimal(param0: string): java.math.BigDecimal;
			public getBlob(param0: number): java.sql.Blob;
			public getBlob(param0: string): java.sql.Blob;
			public getBoolean(param0: number): boolean;
			public getBoolean(param0: string): boolean;
			public getByte(param0: number): number;
			public getByte(param0: string): number;
			public getBytes(param0: number): native.Array<number>;
			public getBytes(param0: string): native.Array<number>;
			public getClob(param0: number): java.sql.Clob;
			public getClob(param0: string): java.sql.Clob;
			public getDate(param0: number): java.sql.Date;
			public getDate(param0: number, param1: java.util.Calendar): java.sql.Date;
			public getDate(param0: string): java.sql.Date;
			public getDate(param0: string, param1: java.util.Calendar): java.sql.Date;
			public getDouble(param0: number): number;
			public getDouble(param0: string): number;
			public getFloat(param0: number): number;
			public getFloat(param0: string): number;
			public getInt(param0: number): number;
			public getInt(param0: string): number;
			public getLong(param0: number): number;
			public getLong(param0: string): number;
			public getObject(param0: number): java.lang.Object;
			public getObject(param0: number, param1: java.util.Map): java.lang.Object;
			public getObject(param0: string): java.lang.Object;
			public getObject(param0: string, param1: java.util.Map): java.lang.Object;
			public getRef(param0: number): java.sql.Ref;
			public getRef(param0: string): java.sql.Ref;
			public getShort(param0: number): number;
			public getShort(param0: string): number;
			public getString(param0: number): string;
			public getString(param0: string): string;
			public getTime(param0: number): java.sql.Time;
			public getTime(param0: number, param1: java.util.Calendar): java.sql.Time;
			public getTime(param0: string): java.sql.Time;
			public getTime(param0: string, param1: java.util.Calendar): java.sql.Time;
			public getTimestamp(param0: number): java.sql.Timestamp;
			public getTimestamp(param0: number, param1: java.util.Calendar): java.sql.Timestamp;
			public getTimestamp(param0: string): java.sql.Timestamp;
			public getTimestamp(param0: string, param1: java.util.Calendar): java.sql.Timestamp;
			public getURL(param0: number): java.net.URL;
			public getURL(param0: string): java.net.URL;
			public registerOutParameter(param0: number, param1: number): void;
			public registerOutParameter(param0: number, param1: number, param2: number): void;
			public registerOutParameter(param0: number, param1: number, param2: string): void;
			public registerOutParameter(param0: string, param1: number): void;
			public registerOutParameter(param0: string, param1: number, param2: number): void;
			public registerOutParameter(param0: string, param1: number, param2: string): void;
			public setAsciiStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public setBigDecimal(param0: string, param1: java.math.BigDecimal): void;
			public setBinaryStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public setBoolean(param0: string, param1: boolean): void;
			public setByte(param0: string, param1: number): void;
			public setBytes(param0: string, param1: native.Array<number>): void;
			public setCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public setDate(param0: string, param1: java.sql.Date): void;
			public setDate(param0: string, param1: java.sql.Date, param2: java.util.Calendar): void;
			public setDouble(param0: string, param1: number): void;
			public setFloat(param0: string, param1: number): void;
			public setInt(param0: string, param1: number): void;
			public setLong(param0: string, param1: number): void;
			public setNull(param0: string, param1: number): void;
			public setNull(param0: string, param1: number, param2: string): void;
			public setObject(param0: string, param1: java.lang.Object): void;
			public setObject(param0: string, param1: java.lang.Object, param2: number): void;
			public setObject(param0: string, param1: java.lang.Object, param2: number, param3: number): void;
			public setShort(param0: string, param1: number): void;
			public setString(param0: string, param1: string): void;
			public setTime(param0: string, param1: java.sql.Time): void;
			public setTime(param0: string, param1: java.sql.Time, param2: java.util.Calendar): void;
			public setTimestamp(param0: string, param1: java.sql.Timestamp): void;
			public setTimestamp(param0: string, param1: java.sql.Timestamp, param2: java.util.Calendar): void;
			public setURL(param0: string, param1: java.net.URL): void;
			public wasNull(): boolean;
			public getRowId(param0: number): java.sql.RowId;
			public getRowId(param0: string): java.sql.RowId;
			public setRowId(param0: string, param1: java.sql.RowId): void;
			public setNString(param0: string, param1: string): void;
			public setNCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public setNClob(param0: string, param1: java.sql.NClob): void;
			public setClob(param0: string, param1: java.io.Reader, param2: number): void;
			public setBlob(param0: string, param1: java.io.InputStream, param2: number): void;
			public setNClob(param0: string, param1: java.io.Reader, param2: number): void;
			public getNClob(param0: number): java.sql.NClob;
			public getNClob(param0: string): java.sql.NClob;
			public setSQLXML(param0: string, param1: java.sql.SQLXML): void;
			public getSQLXML(param0: number): java.sql.SQLXML;
			public getSQLXML(param0: string): java.sql.SQLXML;
			public getNString(param0: number): string;
			public getNString(param0: string): string;
			public getNCharacterStream(param0: number): java.io.Reader;
			public getNCharacterStream(param0: string): java.io.Reader;
			public getCharacterStream(param0: number): java.io.Reader;
			public getCharacterStream(param0: string): java.io.Reader;
			public setBlob(param0: string, param1: java.sql.Blob): void;
			public setClob(param0: string, param1: java.sql.Clob): void;
			public setAsciiStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public setAsciiStream(param0: string, param1: java.io.InputStream): void;
			public setBinaryStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public setBinaryStream(param0: string, param1: java.io.InputStream): void;
			public setCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public setCharacterStream(param0: string, param1: java.io.Reader): void;
			public setNCharacterStream(param0: string, param1: java.io.Reader): void;
			public setClob(param0: string, param1: java.io.Reader): void;
			public setBlob(param0: string, param1: java.io.InputStream): void;
			public setNClob(param0: string, param1: java.io.Reader): void;
		}
	}
}
