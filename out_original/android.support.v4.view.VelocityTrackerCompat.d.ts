/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.VelocityTracker.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class VelocityTrackerCompat {
					public static getXVelocity(param0: android.view.VelocityTracker, param1: number): number;
					public static getYVelocity(param0: android.view.VelocityTracker, param1: number): number;
				}
				export module VelocityTrackerCompat {
					export class BaseVelocityTrackerVersionImpl {
						public getXVelocity(param0: android.view.VelocityTracker, param1: number): number;
						public getYVelocity(param0: android.view.VelocityTracker, param1: number): number;
					}
					export class HoneycombVelocityTrackerVersionImpl {
						public getXVelocity(param0: android.view.VelocityTracker, param1: number): number;
						public getYVelocity(param0: android.view.VelocityTracker, param1: number): number;
					}
					export class VelocityTrackerVersionImpl {
						public getXVelocity(param0: android.view.VelocityTracker, param1: number): number;
						public getYVelocity(param0: android.view.VelocityTracker, param1: number): number;
					}
				}
			}
		}
	}
}
