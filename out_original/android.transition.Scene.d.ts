/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module transition {
		export class Scene {
			public constructor();
			public constructor(param0: android.view.ViewGroup);
			public constructor(param0: android.view.ViewGroup, param1: android.view.View);
			public constructor(param0: android.view.ViewGroup, param1: android.view.ViewGroup);
			public static getSceneForLayout(param0: android.view.ViewGroup, param1: number, param2: android.content.Context): android.transition.Scene;
			public getSceneRoot(): android.view.ViewGroup;
			public exit(): void;
			public enter(): void;
			public setEnterAction(param0: java.lang.Runnable): void;
			public setExitAction(param0: java.lang.Runnable): void;
		}
	}
}
