/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.net.ssl.HandshakeCompletedEvent.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class HandshakeCompletedListener {
				public handshakeCompleted(param0: javax.net.ssl.HandshakeCompletedEvent): void;
			}
		}
	}
}
