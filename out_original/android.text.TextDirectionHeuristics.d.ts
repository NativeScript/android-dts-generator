/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextDirectionHeuristic.d.ts" />

declare module android {
	export module text {
		export class TextDirectionHeuristics {
			public constructor();
			public static ANYRTL_LTR: android.text.TextDirectionHeuristic;
			public static FIRSTSTRONG_LTR: android.text.TextDirectionHeuristic;
			public static FIRSTSTRONG_RTL: android.text.TextDirectionHeuristic;
			public static LOCALE: android.text.TextDirectionHeuristic;
			public static LTR: android.text.TextDirectionHeuristic;
			public static RTL: android.text.TextDirectionHeuristic;
		}
	}
}
