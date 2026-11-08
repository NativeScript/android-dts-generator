/* eslint-disable */

/// <reference path="android-declarations.d.ts"/>

declare namespace fixture {
	export class Bounded<E>  extends java.lang.Object {
		public static class: java.lang.Class<fixture.Bounded<any>>;
		public constructor(error: E);
		public getError(): E;
	}
}

declare namespace fixture {
	export class Cache {
		public static class: java.lang.Class<fixture.Cache>;
		public constructor();
	}
	export namespace Cache {
		export class Editor {
			public static class: java.lang.Class<fixture.Cache.Editor>;
			public constructor(outer: fixture.Cache, key: string, note: string | null);
			public getKey(): string;
			public getNote(): string | null;
			public commit(): boolean;
		}
	}
}

declare namespace fixture {
	export class Callbacks {
		public static class: java.lang.Class<fixture.Callbacks>;
		public constructor();
		public register(callback: any): void;
		public handlers(): java.util.Map<string,any>;
	}
}

declare namespace fixture {
	export class Copyable<T>  extends java.lang.Object {
		public static class: java.lang.Class<fixture.Copyable<any>>;
		/**
		 * Constructs a new instance of the fixture.Copyable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			copyOf(): T | null;
		});
		public constructor();
		public copyOf(): T | null;
	}
}

declare namespace fixture {
	export class Factory {
		public static class: java.lang.Class<fixture.Factory>;
		public constructor();
	}
	export namespace Factory {
		export class Builder {
			public static class: java.lang.Class<fixture.Factory.Builder>;
			public create(): fixture.Factory;
			public static create(): fixture.Factory;
		}
	}
}

declare namespace fixture {
	export class Interceptor {
		public static class: java.lang.Class<fixture.Interceptor>;
		/**
		 * Constructs a new instance of the fixture.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			intercept(param0: string): string;
		});
		public constructor();
		public intercept(param0: string): string;
	}
	export namespace Interceptor {
		export class Companion {
			public static class: java.lang.Class<fixture.Interceptor.Companion>;
			public getNONE(): fixture.Interceptor;
			public static getNONE(): fixture.Interceptor;
		}
	}
}

declare namespace fixture {
	export class JavaOuter {
		public static class: java.lang.Class<fixture.JavaOuter>;
		public constructor();
		public static describe(size: number, count: number, ratio: number, label: string): string;
		public format(size: number, count: number, ratio: number, label: string): string;
	}
	export namespace JavaOuter {
		export class Inner {
			public static class: java.lang.Class<fixture.JavaOuter.Inner>;
			public constructor(outer: fixture.JavaOuter, items: java.util.List<string>, size: number);
			public constructor(outer: fixture.JavaOuter, count: number);
		}
	}
}

declare namespace fixture {
	export class Limits {
		public static class: java.lang.Class<fixture.Limits>;
		public static INSTANCE: fixture.Limits;
		public static readonly MAX_COUNT = 42;
		public static readonly NEGATIVE = -7;
		public static readonly SAFE_LONG = 9007199254740991;
		/** Constant value: 9223372036854775807 */
		public static BIG_LONG: number;
		public static readonly RATIO = 0.10000000149011612;
		/** Constant value: NaN */
		public static NOT_A_NUMBER: number;
		public static readonly INITIAL = "x";
		public static readonly QUOTE = "\"";
		public static readonly ENABLED = true;
		public static readonly GREETING = "say \"hi\"\n\\ */ done";
	}
}

declare namespace fixture {
	export class MediaKind {
		public static class: java.lang.Class<fixture.MediaKind>;
		public getValue(): string;
	}
	export namespace MediaKind {
		export class Companion {
			public static class: java.lang.Class<fixture.MediaKind.Companion>;
			public parse(value: string): fixture.MediaKind | null;
			public static parse(value: string): fixture.MediaKind | null;
			/** @deprecated */
			public "-deprecated_parse"(value: string): fixture.MediaKind | null;
			/** @deprecated */
			public static "-deprecated_parse"(value: string): fixture.MediaKind | null;
		}
	}
}

declare namespace fixture {
	export class Outer {
		public static class: java.lang.Class<fixture.Outer>;
		public constructor();
	}
	export namespace Outer {
		export class After {
			public static class: java.lang.Class<fixture.Outer.After>;
			public constructor();
		}
		export namespace Hidden {
			export class Visible {
				public static class: java.lang.Class<fixture.Outer.Hidden.Visible>;
				public constructor();
				public ping(): number;
			}
		}
	}
}

declare namespace fixture {
	export class Settings {
		public static class: java.lang.Class<fixture.Settings>;
		public label: string;
		public constructor();
		public getIdleCallback(): java.lang.Runnable | null;
		public setIdleCallback(idleCallback: java.lang.Runnable | null): void;
		public getLabel(): string;
		public setLabel(label: string): void;
	}
}

declare namespace fixture {
	export class Text {
		public static class: java.lang.Class<fixture.Text>;
		public static INSTANCE: fixture.Text;
		public shout(receiver: string, times: number): string;
	}
}

declare namespace fixture {
	export class Window {
		public static class: java.lang.Class<fixture.Window>;
		public constructor();
		public enable(scrim: number, label: string): string;
	}
}

//Generics information:
//fixture.Bounded:1
//fixture.Copyable:1

