/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONTokener.d.ts" />

declare module org {
	export module json {
		export class JSONObject {
			public constructor();
			public constructor(param0: java.util.Map);
			public constructor(param0: org.json.JSONTokener);
			public constructor(param0: string);
			public constructor(param0: org.json.JSONObject, param1: native.Array<string>);
			public length(): number;
			public put(param0: string, param1: boolean): org.json.JSONObject;
			public put(param0: string, param1: number): org.json.JSONObject;
			public put(param0: string, param1: number): org.json.JSONObject;
			public put(param0: string, param1: number): org.json.JSONObject;
			public put(param0: string, param1: java.lang.Object): org.json.JSONObject;
			public putOpt(param0: string, param1: java.lang.Object): org.json.JSONObject;
			public accumulate(param0: string, param1: java.lang.Object): org.json.JSONObject;
			public remove(param0: string): java.lang.Object;
			public isNull(param0: string): boolean;
			public has(param0: string): boolean;
			public get(param0: string): java.lang.Object;
			public opt(param0: string): java.lang.Object;
			public getBoolean(param0: string): boolean;
			public optBoolean(param0: string): boolean;
			public optBoolean(param0: string, param1: boolean): boolean;
			public getDouble(param0: string): number;
			public optDouble(param0: string): number;
			public optDouble(param0: string, param1: number): number;
			public getInt(param0: string): number;
			public optInt(param0: string): number;
			public optInt(param0: string, param1: number): number;
			public getLong(param0: string): number;
			public optLong(param0: string): number;
			public optLong(param0: string, param1: number): number;
			public getString(param0: string): string;
			public optString(param0: string): string;
			public optString(param0: string, param1: string): string;
			public getJSONArray(param0: string): org.json.JSONArray;
			public optJSONArray(param0: string): org.json.JSONArray;
			public getJSONObject(param0: string): org.json.JSONObject;
			public optJSONObject(param0: string): org.json.JSONObject;
			public toJSONArray(param0: org.json.JSONArray): org.json.JSONArray;
			public keys(): java.util.Iterator;
			public names(): org.json.JSONArray;
			public toString(): string;
			public toString(param0: number): string;
			public static numberToString(param0: java.lang.Number): string;
			public static quote(param0: string): string;
			public static wrap(param0: java.lang.Object): java.lang.Object;
			public static NULL: java.lang.Object;
		}
	}
}
