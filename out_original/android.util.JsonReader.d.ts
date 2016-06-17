/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.util.JsonToken.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />

declare module android {
	export module util {
		export class JsonReader {
			public constructor();
			public constructor(param0: java.io.Reader);
			public setLenient(param0: boolean): void;
			public isLenient(): boolean;
			public beginArray(): void;
			public endArray(): void;
			public beginObject(): void;
			public endObject(): void;
			public hasNext(): boolean;
			public peek(): android.util.JsonToken;
			public nextName(): string;
			public nextString(): string;
			public nextBoolean(): boolean;
			public nextNull(): void;
			public nextDouble(): number;
			public nextLong(): number;
			public nextInt(): number;
			public close(): void;
			public skipValue(): void;
			public toString(): string;
		}
	}
}
