/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLSessionBindingEvent {
				public constructor(param0: java.lang.Object);
				public constructor();
				public constructor(param0: javax.net.ssl.SSLSession, param1: string);
				public getName(): string;
				public getSession(): javax.net.ssl.SSLSession;
			}
		}
	}
}
