/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module app {
		export class FragmentBreadCrumbs {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public setActivity(param0: android.app.Activity): void;
			public setMaxVisible(param0: number): void;
			public setParentTitle(param0: string, param1: string, param2: android.view.View.OnClickListener): void;
			public setOnBreadCrumbClickListener(param0: android.app.FragmentBreadCrumbs.OnBreadCrumbClickListener): void;
			public setTitle(param0: string, param1: string): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onMeasure(param0: number, param1: number): void;
			public onBackStackChanged(): void;
		}
		export module FragmentBreadCrumbs {
			export class OnBreadCrumbClickListener {
				public onBreadCrumbClick(param0: android.app.FragmentManager.BackStackEntry, param1: number): boolean;
			}
		}
	}
}
