/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class PerformanceTestCase {
			public startPerformance(param0: android.test.PerformanceTestCase.Intermediates): number;
			public isPerformanceOnly(): boolean;
		}
		export module PerformanceTestCase {
			export class Intermediates {
				public setInternalIterations(param0: number): void;
				public startTiming(param0: boolean): void;
				public addIntermediate(param0: string): void;
				public addIntermediate(param0: string, param1: number): void;
				public finishTiming(param0: boolean): void;
			}
		}
	}
}
