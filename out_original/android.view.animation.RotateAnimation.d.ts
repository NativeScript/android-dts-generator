/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class RotateAnimation {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
				public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;
				public initialize(param0: number, param1: number, param2: number, param3: number): void;
			}
		}
	}
}
