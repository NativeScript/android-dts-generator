/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./javax.security.auth.callback.Callback.d.ts" />

declare module javax {
	export module security {
		export module auth {
			export module callback {
				export class UnsupportedCallbackException {
					public constructor();
					public constructor(param0: string);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: javax.security.auth.callback.Callback);
					public constructor(param0: javax.security.auth.callback.Callback, param1: string);
					public getCallback(): javax.security.auth.callback.Callback;
				}
			}
		}
	}
}
