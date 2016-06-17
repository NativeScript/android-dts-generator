/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class Certificate {
				public constructor();
				public constructor(param0: string);
				public getType(): string;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public getEncoded(): native.Array<number>;
				public verify(param0: java.security.PublicKey): void;
				public verify(param0: java.security.PublicKey, param1: string): void;
				public toString(): string;
				public getPublicKey(): java.security.PublicKey;
				public writeReplace(): java.lang.Object;
			}
			export module Certificate {
				export class CertificateRep {
					public constructor();
					public constructor(param0: string, param1: native.Array<number>);
					public readResolve(): java.lang.Object;
				}
			}
		}
	}
}
