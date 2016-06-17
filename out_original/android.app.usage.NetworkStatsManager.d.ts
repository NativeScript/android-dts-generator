/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.usage.NetworkStats.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module usage {
			export class NetworkStatsManager {
				public querySummaryForDevice(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats.Bucket;
				public querySummaryForUser(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats.Bucket;
				public querySummary(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats;
				public queryDetailsForUid(param0: number, param1: string, param2: number, param3: number, param4: number): android.app.usage.NetworkStats;
				public queryDetails(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats;
			}
		}
	}
}
