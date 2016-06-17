/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONException.d.ts" />

declare module org {
	export module json {
		export class JSONTokener {
			public constructor();
			public constructor(param0: string);
			public nextValue(): java.lang.Object;
			public nextString(param0: string): string;
			public syntaxError(param0: string): org.json.JSONException;
			public toString(): string;
			public more(): boolean;
			public next(): string;
			public next(param0: string): string;
			public nextClean(): string;
			public next(param0: number): string;
			public nextTo(param0: string): string;
			public nextTo(param0: string): string;
			public skipPast(param0: string): void;
			public skipTo(param0: string): string;
			public back(): void;
			public static dehexchar(param0: string): number;
		}
	}
}
