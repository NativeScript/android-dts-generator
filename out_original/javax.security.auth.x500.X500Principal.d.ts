/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module javax {
	export module security {
		export module auth {
			export module x500 {
				export class X500Principal {
					public constructor();
					public constructor(param0: native.Array<number>);
					public constructor(param0: java.io.InputStream);
					public constructor(param0: string);
					public constructor(param0: string, param1: java.util.Map);
					public equals(param0: java.lang.Object): boolean;
					public getEncoded(): native.Array<number>;
					public getName(): string;
					public getName(param0: string): string;
					public getName(param0: string, param1: java.util.Map): string;
					public hashCode(): number;
					public toString(): string;
					public static CANONICAL: string;
					public static RFC1779: string;
					public static RFC2253: string;
				}
			}
		}
	}
}
