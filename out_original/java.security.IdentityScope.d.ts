/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Identity.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module security {
		export class IdentityScope {
			public constructor(param0: string);
			public constructor(param0: string, param1: java.security.IdentityScope);
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.security.IdentityScope);
			public static getSystemScope(): java.security.IdentityScope;
			public static setSystemScope(param0: java.security.IdentityScope): void;
			public size(): number;
			public getIdentity(param0: string): java.security.Identity;
			public getIdentity(param0: java.security.Principal): java.security.Identity;
			public getIdentity(param0: java.security.PublicKey): java.security.Identity;
			public addIdentity(param0: java.security.Identity): void;
			public removeIdentity(param0: java.security.Identity): void;
			public identities(): java.util.Enumeration;
			public toString(param0: boolean): string;
			public toString(): string;
		}
	}
}
