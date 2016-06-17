/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module animation {
		export class Keyframe {
			public constructor();
			public static ofInt(param0: number, param1: number): android.animation.Keyframe;
			public static ofInt(param0: number): android.animation.Keyframe;
			public static ofFloat(param0: number, param1: number): android.animation.Keyframe;
			public static ofFloat(param0: number): android.animation.Keyframe;
			public static ofObject(param0: number, param1: java.lang.Object): android.animation.Keyframe;
			public static ofObject(param0: number): android.animation.Keyframe;
			public hasValue(): boolean;
			public getValue(): java.lang.Object;
			public setValue(param0: java.lang.Object): void;
			public getFraction(): number;
			public setFraction(param0: number): void;
			public getInterpolator(): android.animation.TimeInterpolator;
			public setInterpolator(param0: android.animation.TimeInterpolator): void;
			public getType(): java.lang.Class;
			public clone(): java.lang.Object;
			public clone(): android.animation.Keyframe;
		}
	}
}
