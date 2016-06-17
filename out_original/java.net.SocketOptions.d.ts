/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module net {
		export class SocketOptions {
			public getOption(param0: number): java.lang.Object;
			public setOption(param0: number, param1: java.lang.Object): void;
			public static IP_MULTICAST_IF: number;
			public static IP_MULTICAST_IF2: number;
			public static IP_MULTICAST_LOOP: number;
			public static IP_TOS: number;
			public static SO_BINDADDR: number;
			public static SO_BROADCAST: number;
			public static SO_KEEPALIVE: number;
			public static SO_LINGER: number;
			public static SO_OOBINLINE: number;
			public static SO_RCVBUF: number;
			public static SO_REUSEADDR: number;
			public static SO_SNDBUF: number;
			public static SO_TIMEOUT: number;
			public static TCP_NODELAY: number;
		}
	}
}
