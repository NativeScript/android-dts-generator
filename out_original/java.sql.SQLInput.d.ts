/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
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

declare module java {
	export module sql {
		export class SQLInput {
			public readString(): string;
			public readBoolean(): boolean;
			public readByte(): number;
			public readShort(): number;
			public readInt(): number;
			public readLong(): number;
			public readFloat(): number;
			public readDouble(): number;
			public readBigDecimal(): java.math.BigDecimal;
			public readBytes(): native.Array<number>;
			public readDate(): java.sql.Date;
			public readTime(): java.sql.Time;
			public readTimestamp(): java.sql.Timestamp;
			public readCharacterStream(): java.io.Reader;
			public readAsciiStream(): java.io.InputStream;
			public readBinaryStream(): java.io.InputStream;
			public readObject(): java.lang.Object;
			public readRef(): java.sql.Ref;
			public readBlob(): java.sql.Blob;
			public readClob(): java.sql.Clob;
			public readArray(): java.sql.Array;
			public wasNull(): boolean;
			public readURL(): java.net.URL;
			public readNClob(): java.sql.NClob;
			public readNString(): string;
			public readSQLXML(): java.sql.SQLXML;
			public readRowId(): java.sql.RowId;
		}
	}
}
