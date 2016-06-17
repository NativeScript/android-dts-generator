/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLParameters {
				public constructor();
				public constructor(param0: native.Array<string>);
				public constructor(param0: native.Array<string>, param1: native.Array<string>);
				public getCipherSuites(): native.Array<string>;
				public setCipherSuites(param0: native.Array<string>): void;
				public getProtocols(): native.Array<string>;
				public setProtocols(param0: native.Array<string>): void;
				public getNeedClientAuth(): boolean;
				public setNeedClientAuth(param0: boolean): void;
				public getWantClientAuth(): boolean;
				public setWantClientAuth(param0: boolean): void;
			}
		}
	}
}
