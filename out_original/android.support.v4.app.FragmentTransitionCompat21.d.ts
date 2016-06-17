/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentTransitionCompat21 {
					public static getTransitionName(param0: android.view.View): string;
					public static cloneTransition(param0: java.lang.Object): java.lang.Object;
					public static captureExitingViews(param0: java.lang.Object, param1: android.view.View, param2: java.util.ArrayList, param3: java.util.Map, param4: android.view.View): java.lang.Object;
					public static excludeTarget(param0: java.lang.Object, param1: android.view.View, param2: boolean): void;
					public static beginDelayedTransition(param0: android.view.ViewGroup, param1: java.lang.Object): void;
					public static setEpicenter(param0: java.lang.Object, param1: android.view.View): void;
					public static wrapSharedElementTransition(param0: java.lang.Object): java.lang.Object;
					public static addTransitionTargets(param0: java.lang.Object, param1: java.lang.Object, param2: android.view.View, param3: android.support.v4.app.FragmentTransitionCompat21.ViewRetriever, param4: android.view.View, param5: android.support.v4.app.FragmentTransitionCompat21.EpicenterView, param6: java.util.Map, param7: java.util.ArrayList, param8: java.util.Map, param9: java.util.Map, param10: java.util.ArrayList): void;
					public static mergeTransitions(param0: java.lang.Object, param1: java.lang.Object, param2: java.lang.Object, param3: boolean): java.lang.Object;
					public static setSharedElementTargets(param0: java.lang.Object, param1: android.view.View, param2: java.util.Map, param3: java.util.ArrayList): void;
					public static findNamedViews(param0: java.util.Map, param1: android.view.View): void;
					public static cleanupTransitions(param0: android.view.View, param1: android.view.View, param2: java.lang.Object, param3: java.util.ArrayList, param4: java.lang.Object, param5: java.util.ArrayList, param6: java.lang.Object, param7: java.util.ArrayList, param8: java.lang.Object, param9: java.util.ArrayList, param10: java.util.Map): void;
					public static removeTargets(param0: java.lang.Object, param1: java.util.ArrayList): void;
					public static addTargets(param0: java.lang.Object, param1: java.util.ArrayList): void;
				}
				export module FragmentTransitionCompat21 {
					export class EpicenterView {
						public constructor();
						public epicenter: android.view.View;
					}
					export class ViewRetriever {
						public getView(): android.view.View;
					}
				}
			}
		}
	}
}
