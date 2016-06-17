/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export module logging {
			export class Level {
				public constructor();
				public constructor(param0: string, param1: number);
				public constructor(param0: string, param1: number, param2: string);
				public static parse(param0: string): java.util.logging.Level;
				public getName(): string;
				public getResourceBundleName(): string;
				public intValue(): number;
				public getLocalizedName(): string;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public static ALL: java.util.logging.Level;
				public static CONFIG: java.util.logging.Level;
				public static FINE: java.util.logging.Level;
				public static FINER: java.util.logging.Level;
				public static FINEST: java.util.logging.Level;
				public static INFO: java.util.logging.Level;
				public static OFF: java.util.logging.Level;
				public static SEVERE: java.util.logging.Level;
				public static WARNING: java.util.logging.Level;
			}
		}
	}
}
