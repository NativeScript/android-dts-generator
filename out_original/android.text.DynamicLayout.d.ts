/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class DynamicLayout {
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);
			public constructor();
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: boolean);
			public constructor(param0: string, param1: string, param2: android.text.TextPaint, param3: number, param4: android.text.Layout.Alignment, param5: number, param6: number, param7: boolean);
			public constructor(param0: string, param1: string, param2: android.text.TextPaint, param3: number, param4: android.text.Layout.Alignment, param5: number, param6: number, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number);
			public getLineCount(): number;
			public getLineTop(param0: number): number;
			public getLineDescent(param0: number): number;
			public getLineStart(param0: number): number;
			public getLineContainsTab(param0: number): boolean;
			public getParagraphDirection(param0: number): number;
			public getLineDirections(param0: number): android.text.Layout.Directions;
			public getTopPadding(): number;
			public getBottomPadding(): number;
			public getEllipsizedWidth(): number;
			public getEllipsisStart(param0: number): number;
			public getEllipsisCount(param0: number): number;
		}
	}
}
