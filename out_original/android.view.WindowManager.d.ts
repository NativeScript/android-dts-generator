/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module view {
		export class WindowManager {
			public getDefaultDisplay(): android.view.Display;
			public removeViewImmediate(param0: android.view.View): void;
		}
		export module WindowManager {
			export class BadTokenException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
			}
			export class InvalidDisplayException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
			}
			export class LayoutParams {
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
				public constructor(param0: android.os.Parcel);
				public static mayUseInputMethod(param0: number): boolean;
				public setTitle(param0: string): void;
				public getTitle(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public copyFrom(param0: android.view.WindowManager.LayoutParams): number;
				public debug(param0: string): string;
				public toString(): string;
				public static ALPHA_CHANGED: number;
				public static ANIMATION_CHANGED: number;
				public static BRIGHTNESS_OVERRIDE_FULL: number;
				public static BRIGHTNESS_OVERRIDE_NONE: number;
				public static BRIGHTNESS_OVERRIDE_OFF: number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static DIM_AMOUNT_CHANGED: number;
				public static FIRST_APPLICATION_WINDOW: number;
				public static FIRST_SUB_WINDOW: number;
				public static FIRST_SYSTEM_WINDOW: number;
				public static FLAGS_CHANGED: number;
				public static FLAG_ALLOW_LOCK_WHILE_SCREEN_ON: number;
				public static FLAG_ALT_FOCUSABLE_IM: number;
				public static FLAG_BLUR_BEHIND: number;
				public static FLAG_DIM_BEHIND: number;
				public static FLAG_DISMISS_KEYGUARD: number;
				public static FLAG_DITHER: number;
				public static FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS: number;
				public static FLAG_FORCE_NOT_FULLSCREEN: number;
				public static FLAG_FULLSCREEN: number;
				public static FLAG_HARDWARE_ACCELERATED: number;
				public static FLAG_IGNORE_CHEEK_PRESSES: number;
				public static FLAG_KEEP_SCREEN_ON: number;
				public static FLAG_LAYOUT_ATTACHED_IN_DECOR: number;
				public static FLAG_LAYOUT_INSET_DECOR: number;
				public static FLAG_LAYOUT_IN_OVERSCAN: number;
				public static FLAG_LAYOUT_IN_SCREEN: number;
				public static FLAG_LAYOUT_NO_LIMITS: number;
				public static FLAG_LOCAL_FOCUS_MODE: number;
				public static FLAG_NOT_FOCUSABLE: number;
				public static FLAG_NOT_TOUCHABLE: number;
				public static FLAG_NOT_TOUCH_MODAL: number;
				public static FLAG_SCALED: number;
				public static FLAG_SECURE: number;
				public static FLAG_SHOW_WALLPAPER: number;
				public static FLAG_SHOW_WHEN_LOCKED: number;
				public static FLAG_SPLIT_TOUCH: number;
				public static FLAG_TOUCHABLE_WHEN_WAKING: number;
				public static FLAG_TRANSLUCENT_NAVIGATION: number;
				public static FLAG_TRANSLUCENT_STATUS: number;
				public static FLAG_TURN_SCREEN_ON: number;
				public static FLAG_WATCH_OUTSIDE_TOUCH: number;
				public static FORMAT_CHANGED: number;
				public static LAST_APPLICATION_WINDOW: number;
				public static LAST_SUB_WINDOW: number;
				public static LAST_SYSTEM_WINDOW: number;
				public static LAYOUT_CHANGED: number;
				public static MEMORY_TYPE_CHANGED: number;
				public static MEMORY_TYPE_GPU: number;
				public static MEMORY_TYPE_HARDWARE: number;
				public static MEMORY_TYPE_NORMAL: number;
				public static MEMORY_TYPE_PUSH_BUFFERS: number;
				public static ROTATION_ANIMATION_CHANGED: number;
				public static ROTATION_ANIMATION_CROSSFADE: number;
				public static ROTATION_ANIMATION_JUMPCUT: number;
				public static ROTATION_ANIMATION_ROTATE: number;
				public static SCREEN_BRIGHTNESS_CHANGED: number;
				public static SCREEN_ORIENTATION_CHANGED: number;
				public static SOFT_INPUT_ADJUST_NOTHING: number;
				public static SOFT_INPUT_ADJUST_PAN: number;
				public static SOFT_INPUT_ADJUST_RESIZE: number;
				public static SOFT_INPUT_ADJUST_UNSPECIFIED: number;
				public static SOFT_INPUT_IS_FORWARD_NAVIGATION: number;
				public static SOFT_INPUT_MASK_ADJUST: number;
				public static SOFT_INPUT_MASK_STATE: number;
				public static SOFT_INPUT_MODE_CHANGED: number;
				public static SOFT_INPUT_STATE_ALWAYS_HIDDEN: number;
				public static SOFT_INPUT_STATE_ALWAYS_VISIBLE: number;
				public static SOFT_INPUT_STATE_HIDDEN: number;
				public static SOFT_INPUT_STATE_UNCHANGED: number;
				public static SOFT_INPUT_STATE_UNSPECIFIED: number;
				public static SOFT_INPUT_STATE_VISIBLE: number;
				public static TITLE_CHANGED: number;
				public static TYPE_ACCESSIBILITY_OVERLAY: number;
				public static TYPE_APPLICATION: number;
				public static TYPE_APPLICATION_ATTACHED_DIALOG: number;
				public static TYPE_APPLICATION_MEDIA: number;
				public static TYPE_APPLICATION_PANEL: number;
				public static TYPE_APPLICATION_STARTING: number;
				public static TYPE_APPLICATION_SUB_PANEL: number;
				public static TYPE_BASE_APPLICATION: number;
				public static TYPE_CHANGED: number;
				public static TYPE_INPUT_METHOD: number;
				public static TYPE_INPUT_METHOD_DIALOG: number;
				public static TYPE_KEYGUARD_DIALOG: number;
				public static TYPE_PHONE: number;
				public static TYPE_PRIORITY_PHONE: number;
				public static TYPE_PRIVATE_PRESENTATION: number;
				public static TYPE_SEARCH_BAR: number;
				public static TYPE_STATUS_BAR: number;
				public static TYPE_STATUS_BAR_PANEL: number;
				public static TYPE_SYSTEM_ALERT: number;
				public static TYPE_SYSTEM_DIALOG: number;
				public static TYPE_SYSTEM_ERROR: number;
				public static TYPE_SYSTEM_OVERLAY: number;
				public static TYPE_TOAST: number;
				public static TYPE_WALLPAPER: number;
				public alpha: number;
				public buttonBrightness: number;
				public dimAmount: number;
				public flags: number;
				public format: number;
				public gravity: number;
				public horizontalMargin: number;
				public horizontalWeight: number;
				public memoryType: number;
				public packageName: string;
				public preferredDisplayModeId: number;
				public preferredRefreshRate: number;
				public rotationAnimation: number;
				public screenBrightness: number;
				public screenOrientation: number;
				public softInputMode: number;
				public systemUiVisibility: number;
				public token: android.os.IBinder;
				public type: number;
				public verticalMargin: number;
				public verticalWeight: number;
				public windowAnimations: number;
				public x: number;
				public y: number;
			}
		}
	}
}
