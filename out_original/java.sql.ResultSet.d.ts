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
/// <reference path="./java.sql.ResultSetMetaData.d.ts" />
/// <reference path="./java.sql.RowId.d.ts" />
/// <reference path="./java.sql.SQLWarning.d.ts" />
/// <reference path="./java.sql.SQLXML.d.ts" />
/// <reference path="./java.sql.Statement.d.ts" />
/// <reference path="./java.sql.Time.d.ts" />
/// <reference path="./java.sql.Timestamp.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module sql {
		export class ResultSet {
			public absolute(param0: number): boolean;
			public afterLast(): void;
			public beforeFirst(): void;
			public cancelRowUpdates(): void;
			public clearWarnings(): void;
			public close(): void;
			public deleteRow(): void;
			public findColumn(param0: string): number;
			public first(): boolean;
			public getArray(param0: number): java.sql.Array;
			public getArray(param0: string): java.sql.Array;
			public getAsciiStream(param0: number): java.io.InputStream;
			public getAsciiStream(param0: string): java.io.InputStream;
			public getBigDecimal(param0: number): java.math.BigDecimal;
			public getBigDecimal(param0: number, param1: number): java.math.BigDecimal;
			public getBigDecimal(param0: string): java.math.BigDecimal;
			public getBigDecimal(param0: string, param1: number): java.math.BigDecimal;
			public getBinaryStream(param0: number): java.io.InputStream;
			public getBinaryStream(param0: string): java.io.InputStream;
			public getBlob(param0: number): java.sql.Blob;
			public getBlob(param0: string): java.sql.Blob;
			public getBoolean(param0: number): boolean;
			public getBoolean(param0: string): boolean;
			public getByte(param0: number): number;
			public getByte(param0: string): number;
			public getBytes(param0: number): native.Array<number>;
			public getBytes(param0: string): native.Array<number>;
			public getCharacterStream(param0: number): java.io.Reader;
			public getCharacterStream(param0: string): java.io.Reader;
			public getClob(param0: number): java.sql.Clob;
			public getClob(param0: string): java.sql.Clob;
			public getConcurrency(): number;
			public getCursorName(): string;
			public getDate(param0: number): java.sql.Date;
			public getDate(param0: number, param1: java.util.Calendar): java.sql.Date;
			public getDate(param0: string): java.sql.Date;
			public getDate(param0: string, param1: java.util.Calendar): java.sql.Date;
			public getDouble(param0: number): number;
			public getDouble(param0: string): number;
			public getFetchDirection(): number;
			public getFetchSize(): number;
			public getFloat(param0: number): number;
			public getFloat(param0: string): number;
			public getInt(param0: number): number;
			public getInt(param0: string): number;
			public getLong(param0: number): number;
			public getLong(param0: string): number;
			public getMetaData(): java.sql.ResultSetMetaData;
			public getObject(param0: number): java.lang.Object;
			public getObject(param0: number, param1: java.util.Map): java.lang.Object;
			public getObject(param0: string): java.lang.Object;
			public getObject(param0: string, param1: java.util.Map): java.lang.Object;
			public getRef(param0: number): java.sql.Ref;
			public getRef(param0: string): java.sql.Ref;
			public getRow(): number;
			public getShort(param0: number): number;
			public getShort(param0: string): number;
			public getStatement(): java.sql.Statement;
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
			public getType(): number;
			public getUnicodeStream(param0: number): java.io.InputStream;
			public getUnicodeStream(param0: string): java.io.InputStream;
			public getURL(param0: number): java.net.URL;
			public getURL(param0: string): java.net.URL;
			public getWarnings(): java.sql.SQLWarning;
			public insertRow(): void;
			public isAfterLast(): boolean;
			public isBeforeFirst(): boolean;
			public isFirst(): boolean;
			public isLast(): boolean;
			public last(): boolean;
			public moveToCurrentRow(): void;
			public moveToInsertRow(): void;
			public next(): boolean;
			public previous(): boolean;
			public refreshRow(): void;
			public relative(param0: number): boolean;
			public rowDeleted(): boolean;
			public rowInserted(): boolean;
			public rowUpdated(): boolean;
			public setFetchDirection(param0: number): void;
			public setFetchSize(param0: number): void;
			public updateArray(param0: number, param1: java.sql.Array): void;
			public updateArray(param0: string, param1: java.sql.Array): void;
			public updateAsciiStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public updateAsciiStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public updateBigDecimal(param0: number, param1: java.math.BigDecimal): void;
			public updateBigDecimal(param0: string, param1: java.math.BigDecimal): void;
			public updateBinaryStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public updateBinaryStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public updateBlob(param0: number, param1: java.sql.Blob): void;
			public updateBlob(param0: string, param1: java.sql.Blob): void;
			public updateBoolean(param0: number, param1: boolean): void;
			public updateBoolean(param0: string, param1: boolean): void;
			public updateByte(param0: number, param1: number): void;
			public updateByte(param0: string, param1: number): void;
			public updateBytes(param0: number, param1: native.Array<number>): void;
			public updateBytes(param0: string, param1: native.Array<number>): void;
			public updateCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public updateCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public updateClob(param0: number, param1: java.sql.Clob): void;
			public updateClob(param0: string, param1: java.sql.Clob): void;
			public updateDate(param0: number, param1: java.sql.Date): void;
			public updateDate(param0: string, param1: java.sql.Date): void;
			public updateDouble(param0: number, param1: number): void;
			public updateDouble(param0: string, param1: number): void;
			public updateFloat(param0: number, param1: number): void;
			public updateFloat(param0: string, param1: number): void;
			public updateInt(param0: number, param1: number): void;
			public updateInt(param0: string, param1: number): void;
			public updateLong(param0: number, param1: number): void;
			public updateLong(param0: string, param1: number): void;
			public updateNull(param0: number): void;
			public updateNull(param0: string): void;
			public updateObject(param0: number, param1: java.lang.Object): void;
			public updateObject(param0: number, param1: java.lang.Object, param2: number): void;
			public updateObject(param0: string, param1: java.lang.Object): void;
			public updateObject(param0: string, param1: java.lang.Object, param2: number): void;
			public updateRef(param0: number, param1: java.sql.Ref): void;
			public updateRef(param0: string, param1: java.sql.Ref): void;
			public updateRow(): void;
			public updateShort(param0: number, param1: number): void;
			public updateShort(param0: string, param1: number): void;
			public updateString(param0: number, param1: string): void;
			public updateString(param0: string, param1: string): void;
			public updateTime(param0: number, param1: java.sql.Time): void;
			public updateTime(param0: string, param1: java.sql.Time): void;
			public updateTimestamp(param0: number, param1: java.sql.Timestamp): void;
			public updateTimestamp(param0: string, param1: java.sql.Timestamp): void;
			public wasNull(): boolean;
			public getRowId(param0: number): java.sql.RowId;
			public getRowId(param0: string): java.sql.RowId;
			public updateRowId(param0: number, param1: java.sql.RowId): void;
			public updateRowId(param0: string, param1: java.sql.RowId): void;
			public getHoldability(): number;
			public isClosed(): boolean;
			public updateNString(param0: number, param1: string): void;
			public updateNString(param0: string, param1: string): void;
			public updateNClob(param0: number, param1: java.sql.NClob): void;
			public updateNClob(param0: string, param1: java.sql.NClob): void;
			public getNClob(param0: number): java.sql.NClob;
			public getNClob(param0: string): java.sql.NClob;
			public getSQLXML(param0: number): java.sql.SQLXML;
			public getSQLXML(param0: string): java.sql.SQLXML;
			public updateSQLXML(param0: number, param1: java.sql.SQLXML): void;
			public updateSQLXML(param0: string, param1: java.sql.SQLXML): void;
			public getNString(param0: number): string;
			public getNString(param0: string): string;
			public getNCharacterStream(param0: number): java.io.Reader;
			public getNCharacterStream(param0: string): java.io.Reader;
			public updateNCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public updateNCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public updateAsciiStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public updateBinaryStream(param0: number, param1: java.io.InputStream, param2: number): void;
			public updateCharacterStream(param0: number, param1: java.io.Reader, param2: number): void;
			public updateAsciiStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public updateBinaryStream(param0: string, param1: java.io.InputStream, param2: number): void;
			public updateCharacterStream(param0: string, param1: java.io.Reader, param2: number): void;
			public updateBlob(param0: number, param1: java.io.InputStream, param2: number): void;
			public updateBlob(param0: string, param1: java.io.InputStream, param2: number): void;
			public updateClob(param0: number, param1: java.io.Reader, param2: number): void;
			public updateClob(param0: string, param1: java.io.Reader, param2: number): void;
			public updateNClob(param0: number, param1: java.io.Reader, param2: number): void;
			public updateNClob(param0: string, param1: java.io.Reader, param2: number): void;
			public updateNCharacterStream(param0: number, param1: java.io.Reader): void;
			public updateNCharacterStream(param0: string, param1: java.io.Reader): void;
			public updateAsciiStream(param0: number, param1: java.io.InputStream): void;
			public updateBinaryStream(param0: number, param1: java.io.InputStream): void;
			public updateCharacterStream(param0: number, param1: java.io.Reader): void;
			public updateAsciiStream(param0: string, param1: java.io.InputStream): void;
			public updateBinaryStream(param0: string, param1: java.io.InputStream): void;
			public updateCharacterStream(param0: string, param1: java.io.Reader): void;
			public updateBlob(param0: number, param1: java.io.InputStream): void;
			public updateBlob(param0: string, param1: java.io.InputStream): void;
			public updateClob(param0: number, param1: java.io.Reader): void;
			public updateClob(param0: string, param1: java.io.Reader): void;
			public updateNClob(param0: number, param1: java.io.Reader): void;
			public updateNClob(param0: string, param1: java.io.Reader): void;
			public static CLOSE_CURSORS_AT_COMMIT: number;
			public static CONCUR_READ_ONLY: number;
			public static CONCUR_UPDATABLE: number;
			public static FETCH_FORWARD: number;
			public static FETCH_REVERSE: number;
			public static FETCH_UNKNOWN: number;
			public static HOLD_CURSORS_OVER_COMMIT: number;
			public static TYPE_FORWARD_ONLY: number;
			public static TYPE_SCROLL_INSENSITIVE: number;
			public static TYPE_SCROLL_SENSITIVE: number;
		}
	}
}
