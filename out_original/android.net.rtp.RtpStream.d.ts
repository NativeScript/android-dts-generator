/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module android {
	export module net {
		export module rtp {
			export class RtpStream {
				public getLocalAddress(): java.net.InetAddress;
				public getLocalPort(): number;
				public getRemoteAddress(): java.net.InetAddress;
				public getRemotePort(): number;
				public isBusy(): boolean;
				public getMode(): number;
				public setMode(param0: number): void;
				public associate(param0: java.net.InetAddress, param1: number): void;
				public release(): void;
				public finalize(): void;
				public static MODE_NORMAL: number;
				public static MODE_RECEIVE_ONLY: number;
				public static MODE_SEND_ONLY: number;
			}
		}
	}
}
