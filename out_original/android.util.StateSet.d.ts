/// <reference path="./_helpers.d.ts" />

declare module android {
	export module util {
		export class StateSet {
			public static isWildCard(param0: native.Array<number>): boolean;
			public static stateSetMatches(param0: native.Array<number>, param1: native.Array<number>): boolean;
			public static stateSetMatches(param0: native.Array<number>, param1: number): boolean;
			public static trimStateSet(param0: native.Array<number>, param1: number): native.Array<number>;
			public static dump(param0: native.Array<number>): string;
			public static NOTHING: native.Array<number>;
			public static WILD_CARD: native.Array<number>;
		}
	}
}
