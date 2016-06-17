/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class ConsoleMessage {
			public constructor();
			public constructor(param0: string, param1: string, param2: number, param3: android.webkit.ConsoleMessage.MessageLevel);
			public messageLevel(): android.webkit.ConsoleMessage.MessageLevel;
			public message(): string;
			public sourceId(): string;
			public lineNumber(): number;
		}
		export module ConsoleMessage {
			export class MessageLevel {
				public static values(): native.Array<android.webkit.ConsoleMessage.MessageLevel>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.webkit.ConsoleMessage.MessageLevel;
				public static DEBUG: android.webkit.ConsoleMessage.MessageLevel;
				public static ERROR: android.webkit.ConsoleMessage.MessageLevel;
				public static LOG: android.webkit.ConsoleMessage.MessageLevel;
				public static TIP: android.webkit.ConsoleMessage.MessageLevel;
				public static WARNING: android.webkit.ConsoleMessage.MessageLevel;
			}
		}
	}
}
