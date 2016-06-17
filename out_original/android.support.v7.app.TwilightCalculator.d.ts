/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class TwilightCalculator {
					public calculateTwilight(param0: number, param1: number, param2: number): void;
					public static DAY: number;
					public static NIGHT: number;
					public sunset: number;
					public sunrise: number;
					public state: number;
				}
			}
		}
	}
}
