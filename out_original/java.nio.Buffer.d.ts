/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module nio {
		export class Buffer {
			public array(): java.lang.Object;
			public arrayOffset(): number;
			public capacity(): number;
			public clear(): java.nio.Buffer;
			public flip(): java.nio.Buffer;
			public hasArray(): boolean;
			public hasRemaining(): boolean;
			public isDirect(): boolean;
			public isReadOnly(): boolean;
			public limit(): number;
			public limit(param0: number): java.nio.Buffer;
			public mark(): java.nio.Buffer;
			public position(): number;
			public position(param0: number): java.nio.Buffer;
			public remaining(): number;
			public reset(): java.nio.Buffer;
			public rewind(): java.nio.Buffer;
			public toString(): string;
		}
	}
}
