/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Keyframe.d.ts" />
/// <reference path="./android.animation.TypeConverter.d.ts" />
/// <reference path="./android.animation.TypeEvaluator.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.Property.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module animation {
		export class PropertyValuesHolder {
			public static ofInt(param0: string, param1: native.Array<number>): android.animation.PropertyValuesHolder;
			public static ofInt(param0: android.util.Property, param1: native.Array<number>): android.animation.PropertyValuesHolder;
			public static ofMultiInt(param0: string, param1: native.Array<native.Array<number>>): android.animation.PropertyValuesHolder;
			public static ofMultiInt(param0: string, param1: android.graphics.Path): android.animation.PropertyValuesHolder;
			public static ofMultiInt(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<java.lang.Object>): android.animation.PropertyValuesHolder;
			public static ofMultiInt(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;
			public static ofFloat(param0: string, param1: native.Array<number>): android.animation.PropertyValuesHolder;
			public static ofFloat(param0: android.util.Property, param1: native.Array<number>): android.animation.PropertyValuesHolder;
			public static ofMultiFloat(param0: string, param1: native.Array<native.Array<number>>): android.animation.PropertyValuesHolder;
			public static ofMultiFloat(param0: string, param1: android.graphics.Path): android.animation.PropertyValuesHolder;
			public static ofMultiFloat(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<java.lang.Object>): android.animation.PropertyValuesHolder;
			public static ofMultiFloat(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;
			public static ofObject(param0: string, param1: android.animation.TypeEvaluator, param2: native.Array<java.lang.Object>): android.animation.PropertyValuesHolder;
			public static ofObject(param0: string, param1: android.animation.TypeConverter, param2: android.graphics.Path): android.animation.PropertyValuesHolder;
			public static ofObject(param0: android.util.Property, param1: android.animation.TypeEvaluator, param2: native.Array<java.lang.Object>): android.animation.PropertyValuesHolder;
			public static ofObject(param0: android.util.Property, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<java.lang.Object>): android.animation.PropertyValuesHolder;
			public static ofObject(param0: android.util.Property, param1: android.animation.TypeConverter, param2: android.graphics.Path): android.animation.PropertyValuesHolder;
			public static ofKeyframe(param0: string, param1: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;
			public static ofKeyframe(param0: android.util.Property, param1: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;
			public setIntValues(param0: native.Array<number>): void;
			public setFloatValues(param0: native.Array<number>): void;
			public setKeyframes(param0: native.Array<android.animation.Keyframe>): void;
			public setObjectValues(param0: native.Array<java.lang.Object>): void;
			public setConverter(param0: android.animation.TypeConverter): void;
			public clone(): java.lang.Object;
			public clone(): android.animation.PropertyValuesHolder;
			public setEvaluator(param0: android.animation.TypeEvaluator): void;
			public setPropertyName(param0: string): void;
			public setProperty(param0: android.util.Property): void;
			public getPropertyName(): string;
			public toString(): string;
		}
	}
}
