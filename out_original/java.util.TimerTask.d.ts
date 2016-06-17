/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export class TimerTask {
			public constructor();
			public cancel(): boolean;
			public scheduledExecutionTime(): number;
			public run(): void;
		}
	}
}
