/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class EdgeEffectCompatIcs {
					public static newEdgeEffect(param0: android.content.Context): java.lang.Object;
					public static setSize(param0: java.lang.Object, param1: number, param2: number): void;
					public static isFinished(param0: java.lang.Object): boolean;
					public static finish(param0: java.lang.Object): void;
					public static onPull(param0: java.lang.Object, param1: number): boolean;
					public static onRelease(param0: java.lang.Object): boolean;
					public static onAbsorb(param0: java.lang.Object, param1: number): boolean;
					public static draw(param0: java.lang.Object, param1: android.graphics.Canvas): boolean;
				}
			}
		}
	}
}
