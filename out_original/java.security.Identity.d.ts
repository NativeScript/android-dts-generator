/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Certificate.d.ts" />
/// <reference path="./java.security.IdentityScope.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />

declare module java {
	export module security {
		export class Identity {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.security.IdentityScope);
			public addCertificate(param0: java.security.Certificate): void;
			public removeCertificate(param0: java.security.Certificate): void;
			public certificates(): native.Array<java.security.Certificate>;
			public identityEquals(param0: java.security.Identity): boolean;
			public toString(): string;
			public toString(param0: boolean): string;
			public getScope(): java.security.IdentityScope;
			public setPublicKey(param0: java.security.PublicKey): void;
			public getPublicKey(): java.security.PublicKey;
			public setInfo(param0: string): void;
			public getInfo(): string;
			public equals(param0: java.lang.Object): boolean;
			public getName(): string;
			public hashCode(): number;
			public toString(): string;
		}
	}
}
