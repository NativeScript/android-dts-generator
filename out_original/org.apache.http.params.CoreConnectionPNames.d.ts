/// <reference path="./_helpers.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module params {
				export class CoreConnectionPNames {
					public static CONNECTION_TIMEOUT: string;
					public static MAX_HEADER_COUNT: string;
					public static MAX_LINE_LENGTH: string;
					public static SOCKET_BUFFER_SIZE: string;
					public static SO_LINGER: string;
					public static SO_TIMEOUT: string;
					public static STALE_CONNECTION_CHECK: string;
					public static TCP_NODELAY: string;
				}
			}
		}
	}
}
