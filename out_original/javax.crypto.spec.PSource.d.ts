/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class PSource {
				public constructor();
				public constructor(param0: string);
				public getAlgorithm(): string;
			}
			export module PSource {
				export class PSpecified {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: native.Array<number>);
					public getValue(): native.Array<number>;
					public static DEFAULT: javax.crypto.spec.PSource.PSpecified;
				}
			}
		}
	}
}
