/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module net {
		export class HttpCookie {
			public constructor();
			public constructor(param0: string, param1: string);
			public static domainMatches(param0: string, param1: string): boolean;
			public static parse(param0: string): java.util.List;
			public getComment(): string;
			public getCommentURL(): string;
			public getDiscard(): boolean;
			public getDomain(): string;
			public getMaxAge(): number;
			public getName(): string;
			public getPath(): string;
			public getPortlist(): string;
			public getSecure(): boolean;
			public getValue(): string;
			public getVersion(): number;
			public hasExpired(): boolean;
			public setComment(param0: string): void;
			public setCommentURL(param0: string): void;
			public setDiscard(param0: boolean): void;
			public setDomain(param0: string): void;
			public setMaxAge(param0: number): void;
			public setPath(param0: string): void;
			public setPortlist(param0: string): void;
			public setSecure(param0: boolean): void;
			public setValue(param0: string): void;
			public setVersion(param0: number): void;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
		}
	}
}
