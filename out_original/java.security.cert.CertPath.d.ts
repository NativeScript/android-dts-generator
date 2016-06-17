/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertPath {
				public constructor();
				public constructor(param0: string);
				public getType(): string;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public getCertificates(): java.util.List;
				public getEncoded(): native.Array<number>;
				public getEncoded(param0: string): native.Array<number>;
				public getEncodings(): java.util.Iterator;
				public writeReplace(): java.lang.Object;
			}
			export module CertPath {
				export class CertPathRep {
					public constructor();
					public constructor(param0: string, param1: native.Array<number>);
					public readResolve(): java.lang.Object;
				}
			}
		}
	}
}
