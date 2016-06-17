/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export class Date {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: number);
			public constructor(param0: string);
			public after(param0: java.util.Date): boolean;
			public before(param0: java.util.Date): boolean;
			public clone(): java.lang.Object;
			public compareTo(param0: java.util.Date): number;
			public equals(param0: java.lang.Object): boolean;
			public getDate(): number;
			public getDay(): number;
			public getHours(): number;
			public getMinutes(): number;
			public getMonth(): number;
			public getSeconds(): number;
			public getTime(): number;
			public getTimezoneOffset(): number;
			public getYear(): number;
			public hashCode(): number;
			public static parse(param0: string): number;
			public setDate(param0: number): void;
			public setHours(param0: number): void;
			public setMinutes(param0: number): void;
			public setMonth(param0: number): void;
			public setSeconds(param0: number): void;
			public setTime(param0: number): void;
			public setYear(param0: number): void;
			public toGMTString(): string;
			public toLocaleString(): string;
			public toString(): string;
			public static UTC(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
		}
	}
}
