/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />

declare module java {
	export module sql {
		export class Timestamp {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: number);
			public constructor(param0: string);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
			public constructor(param0: number);
			public after(param0: java.util.Date): boolean;
			public after(param0: java.sql.Timestamp): boolean;
			public before(param0: java.util.Date): boolean;
			public before(param0: java.sql.Timestamp): boolean;
			public compareTo(param0: java.util.Date): number;
			public compareTo(param0: java.sql.Timestamp): number;
			public equals(param0: java.lang.Object): boolean;
			public equals(param0: java.sql.Timestamp): boolean;
			public getNanos(): number;
			public getTime(): number;
			public setNanos(param0: number): void;
			public setTime(param0: number): void;
			public toString(): string;
			public static valueOf(param0: string): java.sql.Timestamp;
		}
	}
}
