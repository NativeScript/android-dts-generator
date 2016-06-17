/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module junit {
	export module framework {
		export class Assert {
			public constructor();
			public static assertTrue(param0: string, param1: boolean): void;
			public static assertTrue(param0: boolean): void;
			public static assertFalse(param0: string, param1: boolean): void;
			public static assertFalse(param0: boolean): void;
			public static fail(param0: string): void;
			public static fail(): void;
			public static assertEquals(param0: string, param1: java.lang.Object, param2: java.lang.Object): void;
			public static assertEquals(param0: java.lang.Object, param1: java.lang.Object): void;
			public static assertEquals(param0: string, param1: string, param2: string): void;
			public static assertEquals(param0: string, param1: string): void;
			public static assertEquals(param0: string, param1: number, param2: number, param3: number): void;
			public static assertEquals(param0: number, param1: number, param2: number): void;
			public static assertEquals(param0: string, param1: number, param2: number, param3: number): void;
			public static assertEquals(param0: number, param1: number, param2: number): void;
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static assertEquals(param0: number, param1: number): void;
			public static assertEquals(param0: string, param1: boolean, param2: boolean): void;
			public static assertEquals(param0: boolean, param1: boolean): void;
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static assertEquals(param0: number, param1: number): void;
			public static assertEquals(param0: string, param1: string, param2: string): void;
			public static assertEquals(param0: string, param1: string): void;
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static assertEquals(param0: number, param1: number): void;
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static assertEquals(param0: number, param1: number): void;
			public static assertNotNull(param0: java.lang.Object): void;
			public static assertNotNull(param0: string, param1: java.lang.Object): void;
			public static assertNull(param0: java.lang.Object): void;
			public static assertNull(param0: string, param1: java.lang.Object): void;
			public static assertSame(param0: string, param1: java.lang.Object, param2: java.lang.Object): void;
			public static assertSame(param0: java.lang.Object, param1: java.lang.Object): void;
			public static assertNotSame(param0: string, param1: java.lang.Object, param2: java.lang.Object): void;
			public static assertNotSame(param0: java.lang.Object, param1: java.lang.Object): void;
			public static failSame(param0: string): void;
			public static failNotSame(param0: string, param1: java.lang.Object, param2: java.lang.Object): void;
			public static failNotEquals(param0: string, param1: java.lang.Object, param2: java.lang.Object): void;
			public static format(param0: string, param1: java.lang.Object, param2: java.lang.Object): string;
		}
	}
}
