/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class AlphaAnimation {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;
				public willChangeTransformationMatrix(): boolean;
				public willChangeBounds(): boolean;
			}
		}
	}
}
