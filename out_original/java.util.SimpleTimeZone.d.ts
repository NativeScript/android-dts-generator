/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />

declare module java {
	export module util {
		export class SimpleTimeZone {
			public constructor();
			public constructor(param0: number, param1: string);
			public constructor(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number);
			public constructor(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number);
			public constructor(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number);
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public getDSTSavings(): number;
			public getOffset(param0: number): number;
			public getOffset(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
			public getOffset(param0: number): number;
			public getRawOffset(): number;
			public hashCode(): number;
			public hasSameRules(param0: java.util.TimeZone): boolean;
			public inDaylightTime(param0: java.util.Date): boolean;
			public setDSTSavings(param0: number): void;
			public setEndRule(param0: number, param1: number, param2: number): void;
			public setEndRule(param0: number, param1: number, param2: number, param3: number): void;
			public setEndRule(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
			public setRawOffset(param0: number): void;
			public setStartRule(param0: number, param1: number, param2: number): void;
			public setStartRule(param0: number, param1: number, param2: number, param3: number): void;
			public setStartRule(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
			public setStartYear(param0: number): void;
			public toString(): string;
			public useDaylightTime(): boolean;
			public static STANDARD_TIME: number;
			public static UTC_TIME: number;
			public static WALL_TIME: number;
		}
	}
}
