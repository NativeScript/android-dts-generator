/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMException {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: number, param1: string);
				public static DOMSTRING_SIZE_ERR: number;
				public static HIERARCHY_REQUEST_ERR: number;
				public static INDEX_SIZE_ERR: number;
				public static INUSE_ATTRIBUTE_ERR: number;
				public static INVALID_ACCESS_ERR: number;
				public static INVALID_CHARACTER_ERR: number;
				public static INVALID_MODIFICATION_ERR: number;
				public static INVALID_STATE_ERR: number;
				public static NAMESPACE_ERR: number;
				public static NOT_FOUND_ERR: number;
				public static NOT_SUPPORTED_ERR: number;
				public static NO_DATA_ALLOWED_ERR: number;
				public static NO_MODIFICATION_ALLOWED_ERR: number;
				public static SYNTAX_ERR: number;
				public static TYPE_MISMATCH_ERR: number;
				public static VALIDATION_ERR: number;
				public static WRONG_DOCUMENT_ERR: number;
				public code: number;
			}
		}
	}
}
