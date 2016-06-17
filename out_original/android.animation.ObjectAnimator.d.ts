/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.PropertyValuesHolder.d.ts" />
/// <reference path="./android.animation.TypeConverter.d.ts" />
/// <reference path="./android.animation.TypeEvaluator.d.ts" />
/// <reference path="./android.animation.ValueAnimator.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.Property.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module animation {
		export class ObjectAnimator {
			public constructor();
			public setPropertyName(param0: string): void;
			public setProperty(param0: android.util.Property): void;
			public getPropertyName(): string;
			public static ofInt(param0: native.Array<number>): android.animation.ValueAnimator;
			public static ofInt(param0: java.lang.Object, param1: string, param2: native.Array<number>): android.animation.ObjectAnimator;
			public static ofInt(param0: java.lang.Object, param1: string, param2: string, param3: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofInt(param0: java.lang.Object, param1: android.util.Property, param2: native.Array<number>): android.animation.ObjectAnimator;
			public static ofInt(param0: java.lang.Object, param1: android.util.Property, param2: android.util.Property, param3: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofMultiInt(param0: java.lang.Object, param1: string, param2: native.Array<native.Array<number>>): android.animation.ObjectAnimator;
			public static ofMultiInt(param0: java.lang.Object, param1: string, param2: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofMultiInt(param0: java.lang.Object, param1: string, param2: android.animation.TypeConverter, param3: android.animation.TypeEvaluator, param4: native.Array<java.lang.Object>): android.animation.ObjectAnimator;
			public static ofArgb(param0: native.Array<number>): android.animation.ValueAnimator;
			public static ofArgb(param0: java.lang.Object, param1: string, param2: native.Array<number>): android.animation.ObjectAnimator;
			public static ofArgb(param0: java.lang.Object, param1: android.util.Property, param2: native.Array<number>): android.animation.ObjectAnimator;
			public static ofFloat(param0: native.Array<number>): android.animation.ValueAnimator;
			public static ofFloat(param0: java.lang.Object, param1: string, param2: native.Array<number>): android.animation.ObjectAnimator;
			public static ofFloat(param0: java.lang.Object, param1: string, param2: string, param3: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofFloat(param0: java.lang.Object, param1: android.util.Property, param2: native.Array<number>): android.animation.ObjectAnimator;
			public static ofFloat(param0: java.lang.Object, param1: android.util.Property, param2: android.util.Property, param3: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofMultiFloat(param0: java.lang.Object, param1: string, param2: native.Array<native.Array<number>>): android.animation.ObjectAnimator;
			public static ofMultiFloat(param0: java.lang.Object, param1: string, param2: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofMultiFloat(param0: java.lang.Object, param1: string, param2: android.animation.TypeConverter, param3: android.animation.TypeEvaluator, param4: native.Array<java.lang.Object>): android.animation.ObjectAnimator;
			public static ofObject(param0: android.animation.TypeEvaluator, param1: native.Array<java.lang.Object>): android.animation.ValueAnimator;
			public static ofObject(param0: java.lang.Object, param1: string, param2: android.animation.TypeEvaluator, param3: native.Array<java.lang.Object>): android.animation.ObjectAnimator;
			public static ofObject(param0: java.lang.Object, param1: string, param2: android.animation.TypeConverter, param3: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofObject(param0: java.lang.Object, param1: android.util.Property, param2: android.animation.TypeEvaluator, param3: native.Array<java.lang.Object>): android.animation.ObjectAnimator;
			public static ofObject(param0: java.lang.Object, param1: android.util.Property, param2: android.animation.TypeConverter, param3: android.animation.TypeEvaluator, param4: native.Array<java.lang.Object>): android.animation.ObjectAnimator;
			public static ofObject(param0: java.lang.Object, param1: android.util.Property, param2: android.animation.TypeConverter, param3: android.graphics.Path): android.animation.ObjectAnimator;
			public static ofPropertyValuesHolder(param0: native.Array<android.animation.PropertyValuesHolder>): android.animation.ValueAnimator;
			public static ofPropertyValuesHolder(param0: java.lang.Object, param1: native.Array<android.animation.PropertyValuesHolder>): android.animation.ObjectAnimator;
			public setIntValues(param0: native.Array<number>): void;
			public setFloatValues(param0: native.Array<number>): void;
			public setObjectValues(param0: native.Array<java.lang.Object>): void;
			public setAutoCancel(param0: boolean): void;
			public start(): void;
			public setDuration(param0: number): android.animation.ValueAnimator;
			public setDuration(param0: number): android.animation.Animator;
			public setDuration(param0: number): android.animation.ObjectAnimator;
			public getTarget(): java.lang.Object;
			public setTarget(param0: java.lang.Object): void;
			public setupStartValues(): void;
			public setupEndValues(): void;
			public clone(): android.animation.ValueAnimator;
			public clone(): android.animation.Animator;
			public clone(): java.lang.Object;
			public clone(): android.animation.ObjectAnimator;
			public toString(): string;
		}
	}
}
