/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.Pair.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class ActivityOptions {
			public static makeCustomAnimation(param0: android.content.Context, param1: number, param2: number): android.app.ActivityOptions;
			public static makeScaleUpAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.app.ActivityOptions;
			public static makeClipRevealAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.app.ActivityOptions;
			public static makeThumbnailScaleUpAnimation(param0: android.view.View, param1: android.graphics.Bitmap, param2: number, param3: number): android.app.ActivityOptions;
			public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: android.view.View, param2: string): android.app.ActivityOptions;
			public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: native.Array<android.util.Pair>): android.app.ActivityOptions;
			public static makeTaskLaunchBehind(): android.app.ActivityOptions;
			public static makeBasic(): android.app.ActivityOptions;
			public update(param0: android.app.ActivityOptions): void;
			public toBundle(): android.os.Bundle;
			public requestUsageTimeReport(param0: android.app.PendingIntent): void;
			public static EXTRA_USAGE_TIME_REPORT: string;
			public static EXTRA_USAGE_TIME_REPORT_PACKAGES: string;
		}
	}
}
