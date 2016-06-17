/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module widget {
		export class Toast {
			public constructor();
			public constructor(param0: android.content.Context);
			public show(): void;
			public cancel(): void;
			public setView(param0: android.view.View): void;
			public getView(): android.view.View;
			public setDuration(param0: number): void;
			public getDuration(): number;
			public setMargin(param0: number, param1: number): void;
			public getHorizontalMargin(): number;
			public getVerticalMargin(): number;
			public setGravity(param0: number, param1: number, param2: number): void;
			public getGravity(): number;
			public getXOffset(): number;
			public getYOffset(): number;
			public static makeText(param0: android.content.Context, param1: string, param2: number): android.widget.Toast;
			public static makeText(param0: android.content.Context, param1: number, param2: number): android.widget.Toast;
			public setText(param0: number): void;
			public setText(param0: string): void;
			public static LENGTH_LONG: number;
			public static LENGTH_SHORT: number;
		}
	}
}
