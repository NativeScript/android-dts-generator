/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class CircleImageView {
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context, param1: number, param2: number);
					public onMeasure(param0: number, param1: number): void;
					public setAnimationListener(param0: android.view.animation.Animation.AnimationListener): void;
					public onAnimationStart(): void;
					public onAnimationEnd(): void;
					public setBackgroundColorRes(param0: number): void;
					public setBackgroundColor(param0: number): void;
				}
				export module CircleImageView {
					export class OvalShadow {
						public constructor();
						public constructor(param0: android.support.v4.widget.CircleImageView, param1: number, param2: number);
						public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;
					}
				}
			}
		}
	}
}
