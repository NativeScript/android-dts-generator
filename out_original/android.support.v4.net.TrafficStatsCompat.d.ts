/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module net {
				export class TrafficStatsCompat {
					public static clearThreadStatsTag(): void;
					public static getThreadStatsTag(): number;
					public static incrementOperationCount(param0: number): void;
					public static incrementOperationCount(param0: number, param1: number): void;
					public static setThreadStatsTag(param0: number): void;
					public static tagSocket(param0: java.net.Socket): void;
					public static untagSocket(param0: java.net.Socket): void;
				}
				export module TrafficStatsCompat {
					export class BaseTrafficStatsCompatImpl {
						public clearThreadStatsTag(): void;
						public getThreadStatsTag(): number;
						public incrementOperationCount(param0: number): void;
						public incrementOperationCount(param0: number, param1: number): void;
						public setThreadStatsTag(param0: number): void;
						public tagSocket(param0: java.net.Socket): void;
						public untagSocket(param0: java.net.Socket): void;
					}
					export module BaseTrafficStatsCompatImpl {
						export class SocketTags {
							public statsTag: number;
						}
					}
					export class IcsTrafficStatsCompatImpl {
						public clearThreadStatsTag(): void;
						public getThreadStatsTag(): number;
						public incrementOperationCount(param0: number): void;
						public incrementOperationCount(param0: number, param1: number): void;
						public setThreadStatsTag(param0: number): void;
						public tagSocket(param0: java.net.Socket): void;
						public untagSocket(param0: java.net.Socket): void;
					}
					export class TrafficStatsCompatImpl {
						public clearThreadStatsTag(): void;
						public getThreadStatsTag(): number;
						public incrementOperationCount(param0: number): void;
						public incrementOperationCount(param0: number, param1: number): void;
						public setThreadStatsTag(param0: number): void;
						public tagSocket(param0: java.net.Socket): void;
						public untagSocket(param0: java.net.Socket): void;
					}
				}
			}
		}
	}
}
