/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.TimerTask.d.ts" />

declare module java {
	export module util {
		export class Timer {
			public constructor();
			public constructor(param0: string, param1: boolean);
			public constructor(param0: string);
			public constructor(param0: boolean);
			public constructor();
			public cancel(): void;
			public purge(): number;
			public schedule(param0: java.util.TimerTask, param1: java.util.Date): void;
			public schedule(param0: java.util.TimerTask, param1: number): void;
			public schedule(param0: java.util.TimerTask, param1: number, param2: number): void;
			public schedule(param0: java.util.TimerTask, param1: java.util.Date, param2: number): void;
			public scheduleAtFixedRate(param0: java.util.TimerTask, param1: number, param2: number): void;
			public scheduleAtFixedRate(param0: java.util.TimerTask, param1: java.util.Date, param2: number): void;
		}
	}
}
