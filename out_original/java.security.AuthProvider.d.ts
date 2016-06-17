/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./javax.security.auth.Subject.d.ts" />
/// <reference path="./javax.security.auth.callback.CallbackHandler.d.ts" />

declare module java {
	export module security {
		export class AuthProvider {
			public constructor();
			public constructor(param0: java.util.Properties);
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Map);
			public constructor(param0: string, param1: number, param2: string);
			public login(param0: javax.security.auth.Subject, param1: javax.security.auth.callback.CallbackHandler): void;
			public logout(): void;
			public setCallbackHandler(param0: javax.security.auth.callback.CallbackHandler): void;
		}
	}
}
