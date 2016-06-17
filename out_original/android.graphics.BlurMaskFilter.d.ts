/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class BlurMaskFilter {
			public constructor();
			public constructor(param0: number, param1: android.graphics.BlurMaskFilter.Blur);
		}
		export module BlurMaskFilter {
			export class Blur {
				public static values(): native.Array<android.graphics.BlurMaskFilter.Blur>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.BlurMaskFilter.Blur;
				public static INNER: android.graphics.BlurMaskFilter.Blur;
				public static NORMAL: android.graphics.BlurMaskFilter.Blur;
				public static OUTER: android.graphics.BlurMaskFilter.Blur;
				public static SOLID: android.graphics.BlurMaskFilter.Blur;
			}
		}
	}
}
