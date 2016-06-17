/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class KeyStoreBuilderParameters {
				public constructor();
				public constructor(param0: java.security.KeyStore.Builder);
				public constructor(param0: java.util.List);
				public getParameters(): java.util.List;
			}
		}
	}
}
