/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class FileObserver {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: number);
			public finalize(): void;
			public startWatching(): void;
			public stopWatching(): void;
			public onEvent(param0: number, param1: string): void;
			public static ACCESS: number;
			public static ALL_EVENTS: number;
			public static ATTRIB: number;
			public static CLOSE_NOWRITE: number;
			public static CLOSE_WRITE: number;
			public static CREATE: number;
			public static DELETE: number;
			public static DELETE_SELF: number;
			public static MODIFY: number;
			public static MOVED_FROM: number;
			public static MOVED_TO: number;
			public static MOVE_SELF: number;
			public static OPEN: number;
		}
	}
}
