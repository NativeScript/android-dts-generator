/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module util {
			export class Rfc822Token {
				public constructor();
				public constructor(param0: string, param1: string, param2: string);
				public getName(): string;
				public getAddress(): string;
				public getComment(): string;
				public setName(param0: string): void;
				public setAddress(param0: string): void;
				public setComment(param0: string): void;
				public toString(): string;
				public static quoteNameIfNecessary(param0: string): string;
				public static quoteName(param0: string): string;
				public static quoteComment(param0: string): string;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
			}
		}
	}
}
