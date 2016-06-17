/// <reference path="./_helpers.d.ts" />

declare module java {
	export module net {
		export class Inet4Address {
			public isAnyLocalAddress(): boolean;
			public isLinkLocalAddress(): boolean;
			public isLoopbackAddress(): boolean;
			public isMCGlobal(): boolean;
			public isMCLinkLocal(): boolean;
			public isMCNodeLocal(): boolean;
			public isMCOrgLocal(): boolean;
			public isMCSiteLocal(): boolean;
			public isMulticastAddress(): boolean;
			public isSiteLocalAddress(): boolean;
		}
	}
}
