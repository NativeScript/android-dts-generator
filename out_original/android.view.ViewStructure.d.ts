/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export class ViewStructure {
			public constructor();
			public setId(param0: number, param1: string, param2: string, param3: string): void;
			public setDimens(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public setTransformation(param0: android.graphics.Matrix): void;
			public setElevation(param0: number): void;
			public setAlpha(param0: number): void;
			public setVisibility(param0: number): void;
			public setEnabled(param0: boolean): void;
			public setClickable(param0: boolean): void;
			public setLongClickable(param0: boolean): void;
			public setContextClickable(param0: boolean): void;
			public setFocusable(param0: boolean): void;
			public setFocused(param0: boolean): void;
			public setAccessibilityFocused(param0: boolean): void;
			public setCheckable(param0: boolean): void;
			public setChecked(param0: boolean): void;
			public setSelected(param0: boolean): void;
			public setActivated(param0: boolean): void;
			public setClassName(param0: string): void;
			public setContentDescription(param0: string): void;
			public setText(param0: string): void;
			public setText(param0: string, param1: number, param2: number): void;
			public setTextStyle(param0: number, param1: number, param2: number, param3: number): void;
			public setTextLines(param0: native.Array<number>, param1: native.Array<number>): void;
			public setHint(param0: string): void;
			public getText(): string;
			public getTextSelectionStart(): number;
			public getTextSelectionEnd(): number;
			public getHint(): string;
			public getExtras(): android.os.Bundle;
			public hasExtras(): boolean;
			public setChildCount(param0: number): void;
			public addChildCount(param0: number): number;
			public getChildCount(): number;
			public newChild(param0: number): android.view.ViewStructure;
			public asyncNewChild(param0: number): android.view.ViewStructure;
			public asyncCommit(): void;
		}
	}
}
