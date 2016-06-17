/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./javax.crypto.CipherSpi.d.ts" />

declare module javax {
	export module crypto {
		export class NullCipher {
			public constructor(param0: javax.crypto.CipherSpi, param1: java.security.Provider, param2: string);
			public constructor();
		}
	}
}
