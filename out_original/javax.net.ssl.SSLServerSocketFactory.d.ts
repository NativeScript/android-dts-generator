/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.net.ServerSocketFactory.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLServerSocketFactory {
				public constructor();
				public static getDefault(): javax.net.ServerSocketFactory;
				public getDefaultCipherSuites(): native.Array<string>;
				public getSupportedCipherSuites(): native.Array<string>;
			}
		}
	}
}
