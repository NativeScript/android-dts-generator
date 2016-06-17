/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.usage.UsageEvents.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module app {
		export module usage {
			export class UsageStatsManager {
				public queryUsageStats(param0: number, param1: number, param2: number): java.util.List;
				public queryConfigurations(param0: number, param1: number, param2: number): java.util.List;
				public queryEvents(param0: number, param1: number): android.app.usage.UsageEvents;
				public queryAndAggregateUsageStats(param0: number, param1: number): java.util.Map;
				public isAppInactive(param0: string): boolean;
				public static INTERVAL_BEST: number;
				public static INTERVAL_DAILY: number;
				public static INTERVAL_MONTHLY: number;
				public static INTERVAL_WEEKLY: number;
				public static INTERVAL_YEARLY: number;
			}
		}
	}
}
