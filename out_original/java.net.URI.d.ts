/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />

declare module java {
	export module net {
		export class URI {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: string, param2: string);
			public constructor(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: string);
			public constructor(param0: string, param1: string, param2: string, param3: string);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
			public compareTo(param0: java.net.URI): number;
			public static create(param0: string): java.net.URI;
			public equals(param0: java.lang.Object): boolean;
			public getScheme(): string;
			public getSchemeSpecificPart(): string;
			public getRawSchemeSpecificPart(): string;
			public getAuthority(): string;
			public getRawAuthority(): string;
			public getUserInfo(): string;
			public getRawUserInfo(): string;
			public getHost(): string;
			public getPort(): number;
			public getPath(): string;
			public getRawPath(): string;
			public getQuery(): string;
			public getRawQuery(): string;
			public getFragment(): string;
			public getRawFragment(): string;
			public hashCode(): number;
			public isAbsolute(): boolean;
			public isOpaque(): boolean;
			public normalize(): java.net.URI;
			public parseServerAuthority(): java.net.URI;
			public relativize(param0: java.net.URI): java.net.URI;
			public resolve(param0: java.net.URI): java.net.URI;
			public resolve(param0: string): java.net.URI;
			public toASCIIString(): string;
			public toString(): string;
			public toURL(): java.net.URL;
		}
	}
}
