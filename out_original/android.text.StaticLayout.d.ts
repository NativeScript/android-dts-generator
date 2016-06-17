/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextDirectionHeuristic.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class StaticLayout {
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);
			public constructor();
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: boolean);
			public constructor(param0: string, param1: number, param2: number, param3: android.text.TextPaint, param4: number, param5: android.text.Layout.Alignment, param6: number, param7: number, param8: boolean);
			public constructor(param0: string, param1: number, param2: number, param3: android.text.TextPaint, param4: number, param5: android.text.Layout.Alignment, param6: number, param7: number, param8: boolean, param9: android.text.TextUtils.TruncateAt, param10: number);
			public getLineForVertical(param0: number): number;
			public getLineCount(): number;
			public getLineTop(param0: number): number;
			public getLineDescent(param0: number): number;
			public getLineStart(param0: number): number;
			public getParagraphDirection(param0: number): number;
			public getLineContainsTab(param0: number): boolean;
			public getLineDirections(param0: number): android.text.Layout.Directions;
			public getTopPadding(): number;
			public getBottomPadding(): number;
			public getEllipsisCount(param0: number): number;
			public getEllipsisStart(param0: number): number;
			public getEllipsizedWidth(): number;
		}
		export module StaticLayout {
			export class Builder {
				public static obtain(param0: string, param1: number, param2: number, param3: android.text.TextPaint, param4: number): android.text.StaticLayout.Builder;
				public setText(param0: string): android.text.StaticLayout.Builder;
				public setAlignment(param0: android.text.Layout.Alignment): android.text.StaticLayout.Builder;
				public setTextDirection(param0: android.text.TextDirectionHeuristic): android.text.StaticLayout.Builder;
				public setLineSpacing(param0: number, param1: number): android.text.StaticLayout.Builder;
				public setIncludePad(param0: boolean): android.text.StaticLayout.Builder;
				public setEllipsizedWidth(param0: number): android.text.StaticLayout.Builder;
				public setEllipsize(param0: android.text.TextUtils.TruncateAt): android.text.StaticLayout.Builder;
				public setMaxLines(param0: number): android.text.StaticLayout.Builder;
				public setBreakStrategy(param0: number): android.text.StaticLayout.Builder;
				public setHyphenationFrequency(param0: number): android.text.StaticLayout.Builder;
				public setIndents(param0: native.Array<number>, param1: native.Array<number>): android.text.StaticLayout.Builder;
				public build(): android.text.StaticLayout;
				public finalize(): void;
			}
		}
	}
}
