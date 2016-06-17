/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module view {
		export class ViewStub {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getInflatedId(): number;
			public setInflatedId(param0: number): void;
			public getLayoutResource(): number;
			public setLayoutResource(param0: number): void;
			public setLayoutInflater(param0: android.view.LayoutInflater): void;
			public getLayoutInflater(): android.view.LayoutInflater;
			public onMeasure(param0: number, param1: number): void;
			public draw(param0: android.graphics.Canvas): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public setVisibility(param0: number): void;
			public static inflate(param0: android.content.Context, param1: number, param2: android.view.ViewGroup): android.view.View;
			public inflate(): android.view.View;
			public setOnInflateListener(param0: android.view.ViewStub.OnInflateListener): void;
		}
		export module ViewStub {
			export class OnInflateListener {
				public onInflate(param0: android.view.ViewStub, param1: android.view.View): void;
			}
		}
	}
}
