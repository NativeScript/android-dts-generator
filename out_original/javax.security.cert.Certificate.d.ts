/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />

declare module javax {
	export module security {
		export module cert {
			export class Certificate {
				public constructor();
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public getEncoded(): native.Array<number>;
				public verify(param0: java.security.PublicKey): void;
				public verify(param0: java.security.PublicKey, param1: string): void;
				public toString(): string;
				public getPublicKey(): java.security.PublicKey;
			}
		}
	}
}
