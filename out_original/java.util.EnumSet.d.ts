/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module java {
	export module util {
		export class EnumSet {
			public static noneOf(param0: java.lang.Class): java.util.EnumSet;
			public static allOf(param0: java.lang.Class): java.util.EnumSet;
			public static copyOf(param0: java.util.EnumSet): java.util.EnumSet;
			public static copyOf(param0: java.util.Collection): java.util.EnumSet;
			public static complementOf(param0: java.util.EnumSet): java.util.EnumSet;
			public static of(param0: java.lang.Enum): java.util.EnumSet;
			public static of(param0: java.lang.Enum, param1: java.lang.Enum): java.util.EnumSet;
			public static of(param0: java.lang.Enum, param1: java.lang.Enum, param2: java.lang.Enum): java.util.EnumSet;
			public static of(param0: java.lang.Enum, param1: java.lang.Enum, param2: java.lang.Enum, param3: java.lang.Enum): java.util.EnumSet;
			public static of(param0: java.lang.Enum, param1: java.lang.Enum, param2: java.lang.Enum, param3: java.lang.Enum, param4: java.lang.Enum): java.util.EnumSet;
			public static of(param0: java.lang.Enum, param1: native.Array<java.lang.Enum>): java.util.EnumSet;
			public static range(param0: java.lang.Enum, param1: java.lang.Enum): java.util.EnumSet;
			public clone(): java.lang.Object;
			public clone(): java.util.EnumSet;
		}
	}
}
