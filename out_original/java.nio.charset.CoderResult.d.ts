/// <reference path="./_helpers.d.ts" />

declare module java {
	export module nio {
		export module charset {
			export class CoderResult {
				public static malformedForLength(param0: number): java.nio.charset.CoderResult;
				public static unmappableForLength(param0: number): java.nio.charset.CoderResult;
				public isUnderflow(): boolean;
				public isError(): boolean;
				public isMalformed(): boolean;
				public isOverflow(): boolean;
				public isUnmappable(): boolean;
				public length(): number;
				public throwException(): void;
				public toString(): string;
				public static OVERFLOW: java.nio.charset.CoderResult;
				public static UNDERFLOW: java.nio.charset.CoderResult;
			}
		}
	}
}
