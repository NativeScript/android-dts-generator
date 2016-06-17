/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export class Selection {
			public static getSelectionStart(param0: string): number;
			public static getSelectionEnd(param0: string): number;
			public static setSelection(param0: android.text.Spannable, param1: number, param2: number): void;
			public static setSelection(param0: android.text.Spannable, param1: number): void;
			public static selectAll(param0: android.text.Spannable): void;
			public static extendSelection(param0: android.text.Spannable, param1: number): void;
			public static removeSelection(param0: android.text.Spannable): void;
			public static moveUp(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static moveDown(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static moveLeft(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static moveRight(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static extendUp(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static extendDown(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static extendLeft(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static extendRight(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static extendToLeftEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static extendToRightEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static moveToLeftEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static moveToRightEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;
			public static SELECTION_END: java.lang.Object;
			public static SELECTION_START: java.lang.Object;
		}
	}
}
