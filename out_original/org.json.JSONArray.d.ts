/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
/// <reference path="./org.json.JSONTokener.d.ts" />

declare module org {
	export module json {
		export class JSONArray {
			public constructor();
			public constructor(param0: java.util.Collection);
			public constructor(param0: org.json.JSONTokener);
			public constructor(param0: string);
			public constructor(param0: java.lang.Object);
			public length(): number;
			public put(param0: boolean): org.json.JSONArray;
			public put(param0: number): org.json.JSONArray;
			public put(param0: number): org.json.JSONArray;
			public put(param0: number): org.json.JSONArray;
			public put(param0: java.lang.Object): org.json.JSONArray;
			public put(param0: number, param1: boolean): org.json.JSONArray;
			public put(param0: number, param1: number): org.json.JSONArray;
			public put(param0: number, param1: number): org.json.JSONArray;
			public put(param0: number, param1: number): org.json.JSONArray;
			public put(param0: number, param1: java.lang.Object): org.json.JSONArray;
			public isNull(param0: number): boolean;
			public get(param0: number): java.lang.Object;
			public opt(param0: number): java.lang.Object;
			public remove(param0: number): java.lang.Object;
			public getBoolean(param0: number): boolean;
			public optBoolean(param0: number): boolean;
			public optBoolean(param0: number, param1: boolean): boolean;
			public getDouble(param0: number): number;
			public optDouble(param0: number): number;
			public optDouble(param0: number, param1: number): number;
			public getInt(param0: number): number;
			public optInt(param0: number): number;
			public optInt(param0: number, param1: number): number;
			public getLong(param0: number): number;
			public optLong(param0: number): number;
			public optLong(param0: number, param1: number): number;
			public getString(param0: number): string;
			public optString(param0: number): string;
			public optString(param0: number, param1: string): string;
			public getJSONArray(param0: number): org.json.JSONArray;
			public optJSONArray(param0: number): org.json.JSONArray;
			public getJSONObject(param0: number): org.json.JSONObject;
			public optJSONObject(param0: number): org.json.JSONObject;
			public toJSONObject(param0: org.json.JSONArray): org.json.JSONObject;
			public join(param0: string): string;
			public toString(): string;
			public toString(param0: number): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
		}
	}
}
