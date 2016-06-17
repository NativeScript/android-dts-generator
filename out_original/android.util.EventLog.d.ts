/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module android {
	export module util {
		export class EventLog {
			public static writeEvent(param0: number, param1: number): number;
			public static writeEvent(param0: number, param1: number): number;
			public static writeEvent(param0: number, param1: number): number;
			public static writeEvent(param0: number, param1: string): number;
			public static writeEvent(param0: number, param1: native.Array<java.lang.Object>): number;
			public static readEvents(param0: native.Array<number>, param1: java.util.Collection): void;
			public static getTagName(param0: number): string;
			public static getTagCode(param0: string): number;
		}
		export module EventLog {
			export class Event {
				public getProcessId(): number;
				public getThreadId(): number;
				public getTimeNanos(): number;
				public getTag(): number;
				public getData(): java.lang.Object;
			}
		}
	}
}
