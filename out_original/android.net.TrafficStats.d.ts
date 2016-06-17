/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />

declare module android {
	export module net {
		export class TrafficStats {
			public constructor();
			public static setThreadStatsTag(param0: number): void;
			public static getThreadStatsTag(): number;
			public static clearThreadStatsTag(): void;
			public static tagSocket(param0: java.net.Socket): void;
			public static untagSocket(param0: java.net.Socket): void;
			public static incrementOperationCount(param0: number): void;
			public static incrementOperationCount(param0: number, param1: number): void;
			public static getMobileTxPackets(): number;
			public static getMobileRxPackets(): number;
			public static getMobileTxBytes(): number;
			public static getMobileRxBytes(): number;
			public static getTotalTxPackets(): number;
			public static getTotalRxPackets(): number;
			public static getTotalTxBytes(): number;
			public static getTotalRxBytes(): number;
			public static getUidTxBytes(param0: number): number;
			public static getUidRxBytes(param0: number): number;
			public static getUidTxPackets(param0: number): number;
			public static getUidRxPackets(param0: number): number;
			public static getUidTcpTxBytes(param0: number): number;
			public static getUidTcpRxBytes(param0: number): number;
			public static getUidUdpTxBytes(param0: number): number;
			public static getUidUdpRxBytes(param0: number): number;
			public static getUidTcpTxSegments(param0: number): number;
			public static getUidTcpRxSegments(param0: number): number;
			public static getUidUdpTxPackets(param0: number): number;
			public static getUidUdpRxPackets(param0: number): number;
			public static UNSUPPORTED: number;
		}
	}
}
