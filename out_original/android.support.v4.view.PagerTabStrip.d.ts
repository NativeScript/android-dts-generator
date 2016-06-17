/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class PagerTabStrip {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setTabIndicatorColor(param0: number): void;
					public setTabIndicatorColorResource(param0: number): void;
					public getTabIndicatorColor(): number;
					public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					public setTextSpacing(param0: number): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setBackgroundColor(param0: number): void;
					public setBackgroundResource(param0: number): void;
					public setDrawFullUnderline(param0: boolean): void;
					public getDrawFullUnderline(): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onDraw(param0: android.graphics.Canvas): void;
				}
			}
		}
	}
}
