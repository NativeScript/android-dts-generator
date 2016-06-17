/// <reference path="./_helpers.d.ts" />

declare module android {
	export module app {
		export module usage {
			export class NetworkStats {
				public finalize(): void;
				public getNextBucket(param0: android.app.usage.NetworkStats.Bucket): boolean;
				public hasNextBucket(): boolean;
				public close(): void;
			}
			export module NetworkStats {
				export class Bucket {
					public constructor();
					public getUid(): number;
					public getState(): number;
					public getStartTimeStamp(): number;
					public getEndTimeStamp(): number;
					public getRxBytes(): number;
					public getTxBytes(): number;
					public getRxPackets(): number;
					public getTxPackets(): number;
					public static STATE_ALL: number;
					public static STATE_DEFAULT: number;
					public static STATE_FOREGROUND: number;
					public static UID_ALL: number;
					public static UID_REMOVED: number;
					public static UID_TETHERING: number;
				}
			}
		}
	}
}
