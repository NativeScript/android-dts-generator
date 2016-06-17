/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class JsonToken {
			public static values(): native.Array<android.util.JsonToken>;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): android.util.JsonToken;
			public static BEGIN_ARRAY: android.util.JsonToken;
			public static BEGIN_OBJECT: android.util.JsonToken;
			public static BOOLEAN: android.util.JsonToken;
			public static END_ARRAY: android.util.JsonToken;
			public static END_DOCUMENT: android.util.JsonToken;
			public static END_OBJECT: android.util.JsonToken;
			public static NAME: android.util.JsonToken;
			public static NULL: android.util.JsonToken;
			public static NUMBER: android.util.JsonToken;
			public static STRING: android.util.JsonToken;
		}
	}
}
