/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />

declare module java {
	export module io {
		export class StreamTokenizer {
			public constructor();
			public constructor(param0: java.io.InputStream);
			public constructor(param0: java.io.Reader);
			public commentChar(param0: number): void;
			public eolIsSignificant(param0: boolean): void;
			public lineno(): number;
			public lowerCaseMode(param0: boolean): void;
			public nextToken(): number;
			public ordinaryChar(param0: number): void;
			public ordinaryChars(param0: number, param1: number): void;
			public parseNumbers(): void;
			public pushBack(): void;
			public quoteChar(param0: number): void;
			public resetSyntax(): void;
			public slashSlashComments(param0: boolean): void;
			public slashStarComments(param0: boolean): void;
			public toString(): string;
			public whitespaceChars(param0: number, param1: number): void;
			public wordChars(param0: number, param1: number): void;
			public static TT_EOF: number;
			public static TT_EOL: number;
			public static TT_NUMBER: number;
			public static TT_WORD: number;
			public nval: number;
			public sval: string;
			public ttype: number;
		}
	}
}
