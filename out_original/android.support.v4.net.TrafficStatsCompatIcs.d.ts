/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module net {
				export class TrafficStatsCompatIcs {
					public static clearThreadStatsTag(): void;
					public static getThreadStatsTag(): number;
					public static incrementOperationCount(param0: number): void;
					public static incrementOperationCount(param0: number, param1: number): void;
					public static setThreadStatsTag(param0: number): void;
					public static tagSocket(param0: java.net.Socket): void;
					public static untagSocket(param0: java.net.Socket): void;
				}
			}
		}
	}
}
