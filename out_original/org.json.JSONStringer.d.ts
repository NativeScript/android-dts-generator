/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module json {
		export class JSONStringer {
			public constructor();
			public array(): org.json.JSONStringer;
			public endArray(): org.json.JSONStringer;
			public object(): org.json.JSONStringer;
			public endObject(): org.json.JSONStringer;
			public value(param0: java.lang.Object): org.json.JSONStringer;
			public value(param0: boolean): org.json.JSONStringer;
			public value(param0: number): org.json.JSONStringer;
			public value(param0: number): org.json.JSONStringer;
			public key(param0: string): org.json.JSONStringer;
			public toString(): string;
		}
	}
}
