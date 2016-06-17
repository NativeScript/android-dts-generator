/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLSessionContext {
				public getIds(): java.util.Enumeration;
				public getSession(param0: native.Array<number>): javax.net.ssl.SSLSession;
				public getSessionCacheSize(): number;
				public getSessionTimeout(): number;
				public setSessionCacheSize(param0: number): void;
				public setSessionTimeout(param0: number): void;
			}
		}
	}
}
