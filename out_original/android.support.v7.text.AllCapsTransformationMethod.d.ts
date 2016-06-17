/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module text {
				export class AllCapsTransformationMethod {
					public constructor();
					public constructor(param0: android.content.Context);
					public getTransformation(param0: string, param1: android.view.View): string;
					public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
				}
			}
		}
	}
}
