/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.regex.MatchResult.d.ts" />

declare module android {
	export module test {
		export class MoreAsserts {
			public static assertAssignableFrom(param0: java.lang.Class, param1: java.lang.Object): void;
			public static assertAssignableFrom(param0: java.lang.Class, param1: java.lang.Class): void;
			public static assertNotEqual(param0: string, param1: java.lang.Object, param2: java.lang.Object): void;
			public static assertNotEqual(param0: java.lang.Object, param1: java.lang.Object): void;
			public static assertEquals(param0: string, param1: native.Array<number>, param2: native.Array<number>): void;
			public static assertEquals(param0: native.Array<number>, param1: native.Array<number>): void;
			public static assertEquals(param0: string, param1: native.Array<number>, param2: native.Array<number>): void;
			public static assertEquals(param0: native.Array<number>, param1: native.Array<number>): void;
			public static assertEquals(param0: string, param1: native.Array<number>, param2: native.Array<number>): void;
			public static assertEquals(param0: native.Array<number>, param1: native.Array<number>): void;
			public static assertEquals(param0: string, param1: native.Array<java.lang.Object>, param2: native.Array<java.lang.Object>): void;
			public static assertEquals(param0: native.Array<java.lang.Object>, param1: native.Array<java.lang.Object>): void;
			public static assertEquals(param0: string, param1: java.util.Set, param2: java.util.Set): void;
			public static assertEquals(param0: java.util.Set, param1: java.util.Set): void;
			public static assertMatchesRegex(param0: string, param1: string, param2: string): java.util.regex.MatchResult;
			public static assertMatchesRegex(param0: string, param1: string): java.util.regex.MatchResult;
			public static assertContainsRegex(param0: string, param1: string, param2: string): java.util.regex.MatchResult;
			public static assertContainsRegex(param0: string, param1: string): java.util.regex.MatchResult;
			public static assertNotMatchesRegex(param0: string, param1: string, param2: string): void;
			public static assertNotMatchesRegex(param0: string, param1: string): void;
			public static assertNotContainsRegex(param0: string, param1: string, param2: string): void;
			public static assertNotContainsRegex(param0: string, param1: string): void;
			public static assertContentsInOrder(param0: string, param1: java.lang.Iterable, param2: native.Array<java.lang.Object>): void;
			public static assertContentsInOrder(param0: java.lang.Iterable, param1: native.Array<java.lang.Object>): void;
			public static assertContentsInAnyOrder(param0: string, param1: java.lang.Iterable, param2: native.Array<java.lang.Object>): void;
			public static assertContentsInAnyOrder(param0: java.lang.Iterable, param1: native.Array<java.lang.Object>): void;
			public static assertEmpty(param0: string, param1: java.lang.Iterable): void;
			public static assertEmpty(param0: java.lang.Iterable): void;
			public static assertEmpty(param0: string, param1: java.util.Map): void;
			public static assertEmpty(param0: java.util.Map): void;
			public static assertNotEmpty(param0: string, param1: java.lang.Iterable): void;
			public static assertNotEmpty(param0: java.lang.Iterable): void;
			public static assertNotEmpty(param0: string, param1: java.util.Map): void;
			public static assertNotEmpty(param0: java.util.Map): void;
			public static checkEqualsAndHashCodeMethods(param0: string, param1: java.lang.Object, param2: java.lang.Object, param3: boolean): void;
			public static checkEqualsAndHashCodeMethods(param0: java.lang.Object, param1: java.lang.Object, param2: boolean): void;
		}
	}
}
