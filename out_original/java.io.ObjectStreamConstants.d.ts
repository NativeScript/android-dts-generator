/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.SerializablePermission.d.ts" />

declare module java {
	export module io {
		export class ObjectStreamConstants {
			public static PROTOCOL_VERSION_1: number;
			public static PROTOCOL_VERSION_2: number;
			public static SC_BLOCK_DATA: number;
			public static SC_ENUM: number;
			public static SC_EXTERNALIZABLE: number;
			public static SC_SERIALIZABLE: number;
			public static SC_WRITE_METHOD: number;
			public static STREAM_MAGIC: number;
			public static STREAM_VERSION: number;
			public static SUBCLASS_IMPLEMENTATION_PERMISSION: java.io.SerializablePermission;
			public static SUBSTITUTION_PERMISSION: java.io.SerializablePermission;
			public static TC_ARRAY: number;
			public static TC_BASE: number;
			public static TC_BLOCKDATA: number;
			public static TC_BLOCKDATALONG: number;
			public static TC_CLASS: number;
			public static TC_CLASSDESC: number;
			public static TC_ENDBLOCKDATA: number;
			public static TC_ENUM: number;
			public static TC_EXCEPTION: number;
			public static TC_LONGSTRING: number;
			public static TC_MAX: number;
			public static TC_NULL: number;
			public static TC_OBJECT: number;
			public static TC_PROXYCLASSDESC: number;
			public static TC_REFERENCE: number;
			public static TC_RESET: number;
			public static TC_STRING: number;
			public static baseWireHandle: number;
		}
	}
}
