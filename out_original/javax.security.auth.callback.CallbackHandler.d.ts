/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.security.auth.callback.Callback.d.ts" />

declare module javax {
	export module security {
		export module auth {
			export module callback {
				export class CallbackHandler {
					public handle(param0: native.Array<javax.security.auth.callback.Callback>): void;
				}
			}
		}
	}
}
