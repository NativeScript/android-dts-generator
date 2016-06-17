/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class PathDashPathEffect {
			public constructor();
			public constructor(param0: android.graphics.Path, param1: number, param2: number, param3: android.graphics.PathDashPathEffect.Style);
		}
		export module PathDashPathEffect {
			export class Style {
				public static values(): native.Array<android.graphics.PathDashPathEffect.Style>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.PathDashPathEffect.Style;
				public static MORPH: android.graphics.PathDashPathEffect.Style;
				public static ROTATE: android.graphics.PathDashPathEffect.Style;
				public static TRANSLATE: android.graphics.PathDashPathEffect.Style;
			}
		}
	}
}
