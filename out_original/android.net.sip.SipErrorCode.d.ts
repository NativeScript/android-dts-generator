/// <reference path="./_helpers.d.ts" />

declare module android {
	export module net {
		export module sip {
			export class SipErrorCode {
				public toString(): string;
				public static toString(param0: number): string;
				public static CLIENT_ERROR: number;
				public static CROSS_DOMAIN_AUTHENTICATION: number;
				public static DATA_CONNECTION_LOST: number;
				public static INVALID_CREDENTIALS: number;
				public static INVALID_REMOTE_URI: number;
				public static IN_PROGRESS: number;
				public static NO_ERROR: number;
				public static PEER_NOT_REACHABLE: number;
				public static SERVER_ERROR: number;
				public static SERVER_UNREACHABLE: number;
				public static SOCKET_ERROR: number;
				public static TIME_OUT: number;
				public static TRANSACTION_TERMINTED: number;
			}
		}
	}
}
