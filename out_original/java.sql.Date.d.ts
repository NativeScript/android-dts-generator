/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module sql {
		export class Date {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: number);
			public constructor(param0: string);
			public constructor(param0: number, param1: number, param2: number);
			public constructor(param0: number);
			public getHours(): number;
			public getMinutes(): number;
			public getSeconds(): number;
			public setHours(param0: number): void;
			public setMinutes(param0: number): void;
			public setSeconds(param0: number): void;
			public setTime(param0: number): void;
			public toString(): string;
			public static valueOf(param0: string): java.sql.Date;
		}
	}
}
