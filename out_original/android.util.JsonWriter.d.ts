/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class JsonWriter {
			public constructor();
			public constructor(param0: java.io.Writer);
			public setIndent(param0: string): void;
			public setLenient(param0: boolean): void;
			public isLenient(): boolean;
			public beginArray(): android.util.JsonWriter;
			public endArray(): android.util.JsonWriter;
			public beginObject(): android.util.JsonWriter;
			public endObject(): android.util.JsonWriter;
			public name(param0: string): android.util.JsonWriter;
			public value(param0: string): android.util.JsonWriter;
			public nullValue(): android.util.JsonWriter;
			public value(param0: boolean): android.util.JsonWriter;
			public value(param0: number): android.util.JsonWriter;
			public value(param0: number): android.util.JsonWriter;
			public value(param0: java.lang.Number): android.util.JsonWriter;
			public flush(): void;
			public close(): void;
		}
	}
}
