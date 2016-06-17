/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class PorterDuff {
			public constructor();
		}
		export module PorterDuff {
			export class Mode {
				public static values(): native.Array<android.graphics.PorterDuff.Mode>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.PorterDuff.Mode;
				public static ADD: android.graphics.PorterDuff.Mode;
				public static CLEAR: android.graphics.PorterDuff.Mode;
				public static DARKEN: android.graphics.PorterDuff.Mode;
				public static DST: android.graphics.PorterDuff.Mode;
				public static DST_ATOP: android.graphics.PorterDuff.Mode;
				public static DST_IN: android.graphics.PorterDuff.Mode;
				public static DST_OUT: android.graphics.PorterDuff.Mode;
				public static DST_OVER: android.graphics.PorterDuff.Mode;
				public static LIGHTEN: android.graphics.PorterDuff.Mode;
				public static MULTIPLY: android.graphics.PorterDuff.Mode;
				public static OVERLAY: android.graphics.PorterDuff.Mode;
				public static SCREEN: android.graphics.PorterDuff.Mode;
				public static SRC: android.graphics.PorterDuff.Mode;
				public static SRC_ATOP: android.graphics.PorterDuff.Mode;
				public static SRC_IN: android.graphics.PorterDuff.Mode;
				public static SRC_OUT: android.graphics.PorterDuff.Mode;
				public static SRC_OVER: android.graphics.PorterDuff.Mode;
				public static XOR: android.graphics.PorterDuff.Mode;
			}
		}
	}
}
