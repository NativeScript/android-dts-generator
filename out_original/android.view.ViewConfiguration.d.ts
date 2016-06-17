/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module view {
		export class ViewConfiguration {
			public constructor();
			public static get(param0: android.content.Context): android.view.ViewConfiguration;
			public static getScrollBarSize(): number;
			public getScaledScrollBarSize(): number;
			public static getScrollBarFadeDuration(): number;
			public static getScrollDefaultDelay(): number;
			public static getFadingEdgeLength(): number;
			public getScaledFadingEdgeLength(): number;
			public static getPressedStateDuration(): number;
			public static getLongPressTimeout(): number;
			public static getKeyRepeatTimeout(): number;
			public static getKeyRepeatDelay(): number;
			public static getTapTimeout(): number;
			public static getJumpTapTimeout(): number;
			public static getDoubleTapTimeout(): number;
			public static getEdgeSlop(): number;
			public getScaledEdgeSlop(): number;
			public static getTouchSlop(): number;
			public getScaledTouchSlop(): number;
			public getScaledPagingTouchSlop(): number;
			public getScaledDoubleTapSlop(): number;
			public static getWindowTouchSlop(): number;
			public getScaledWindowTouchSlop(): number;
			public static getMinimumFlingVelocity(): number;
			public getScaledMinimumFlingVelocity(): number;
			public static getMaximumFlingVelocity(): number;
			public getScaledMaximumFlingVelocity(): number;
			public static getMaximumDrawingCacheSize(): number;
			public getScaledMaximumDrawingCacheSize(): number;
			public getScaledOverscrollDistance(): number;
			public getScaledOverflingDistance(): number;
			public static getZoomControlsTimeout(): number;
			public static getGlobalActionKeyTimeout(): number;
			public static getScrollFriction(): number;
			public static getDefaultActionModeHideDuration(): number;
			public hasPermanentMenuKey(): boolean;
		}
	}
}
