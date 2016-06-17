/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.net.ssl.SSLSessionBindingEvent.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLSessionBindingListener {
				public valueBound(param0: javax.net.ssl.SSLSessionBindingEvent): void;
				public valueUnbound(param0: javax.net.ssl.SSLSessionBindingEvent): void;
			}
		}
	}
}
