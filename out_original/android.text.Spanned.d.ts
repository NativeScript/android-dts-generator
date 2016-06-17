/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export class Spanned {
			public getSpans(param0: number, param1: number, param2: java.lang.Class): native.Array<java.lang.Object>;
			public getSpanStart(param0: java.lang.Object): number;
			public getSpanEnd(param0: java.lang.Object): number;
			public getSpanFlags(param0: java.lang.Object): number;
			public nextSpanTransition(param0: number, param1: number, param2: java.lang.Class): number;
			public static SPAN_COMPOSING: number;
			public static SPAN_EXCLUSIVE_EXCLUSIVE: number;
			public static SPAN_EXCLUSIVE_INCLUSIVE: number;
			public static SPAN_INCLUSIVE_EXCLUSIVE: number;
			public static SPAN_INCLUSIVE_INCLUSIVE: number;
			public static SPAN_INTERMEDIATE: number;
			public static SPAN_MARK_MARK: number;
			public static SPAN_MARK_POINT: number;
			public static SPAN_PARAGRAPH: number;
			public static SPAN_POINT_MARK: number;
			public static SPAN_POINT_MARK_MASK: number;
			public static SPAN_POINT_POINT: number;
			public static SPAN_PRIORITY: number;
			public static SPAN_PRIORITY_SHIFT: number;
			public static SPAN_USER: number;
			public static SPAN_USER_SHIFT: number;
		}
	}
}
