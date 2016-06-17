/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class Browser {
			public constructor();
			public static sendString(param0: android.content.Context, param1: string): void;
			public static EXTRA_APPLICATION_ID: string;
			public static EXTRA_CREATE_NEW_TAB: string;
			public static EXTRA_HEADERS: string;
			public static INITIAL_ZOOM_LEVEL: string;
		}
	}
}
