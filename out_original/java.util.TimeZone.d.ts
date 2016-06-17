/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module util {
		export class TimeZone {
			public constructor();
			public clone(): java.lang.Object;
			public static getAvailableIDs(): native.Array<string>;
			public static getAvailableIDs(param0: number): native.Array<string>;
			public static getDefault(): java.util.TimeZone;
			public getDisplayName(): string;
			public getDisplayName(param0: java.util.Locale): string;
			public getDisplayName(param0: boolean, param1: number): string;
			public getDisplayName(param0: boolean, param1: number, param2: java.util.Locale): string;
			public getID(): string;
			public getDSTSavings(): number;
			public getOffset(param0: number): number;
			public getOffset(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
			public getRawOffset(): number;
			public static getTimeZone(param0: string): java.util.TimeZone;
			public hasSameRules(param0: java.util.TimeZone): boolean;
			public inDaylightTime(param0: java.util.Date): boolean;
			public static setDefault(param0: java.util.TimeZone): void;
			public setID(param0: string): void;
			public setRawOffset(param0: number): void;
			public useDaylightTime(): boolean;
			public static LONG: number;
			public static SHORT: number;
		}
	}
}
