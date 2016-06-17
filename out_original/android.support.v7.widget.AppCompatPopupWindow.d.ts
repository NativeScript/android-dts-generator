/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatPopupWindow {
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.view.View);
					public constructor(param0: number, param1: number);
					public constructor(param0: android.view.View, param1: number, param2: number);
					public constructor(param0: android.view.View, param1: number, param2: number, param3: boolean);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public showAsDropDown(param0: android.view.View): void;
					public showAsDropDown(param0: android.view.View, param1: number, param2: number, param3: number): void;
					public showAsDropDown(param0: android.view.View, param1: number, param2: number): void;
					public showAsDropDown(param0: android.view.View, param1: number, param2: number, param3: number): void;
					public update(): void;
					public update(param0: number, param1: number): void;
					public update(param0: number, param1: number, param2: number, param3: number): void;
					public update(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
					public update(param0: android.view.View, param1: number, param2: number): void;
					public update(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public setSupportOverlapAnchor(param0: boolean): void;
					public getSupportOverlapAnchor(): boolean;
				}
			}
		}
	}
}
