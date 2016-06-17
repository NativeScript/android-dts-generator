/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class Process {
			public constructor();
			public static getElapsedCpuTime(): number;
			public static is64Bit(): boolean;
			public static myPid(): number;
			public static myTid(): number;
			public static myUid(): number;
			public static myUserHandle(): android.os.UserHandle;
			public static getUidForName(param0: string): number;
			public static getGidForName(param0: string): number;
			public static setThreadPriority(param0: number, param1: number): void;
			public static setThreadPriority(param0: number): void;
			public static getThreadPriority(param0: number): number;
			public static supportsProcesses(): boolean;
			public static killProcess(param0: number): void;
			public static sendSignal(param0: number, param1: number): void;
			public static FIRST_APPLICATION_UID: number;
			public static LAST_APPLICATION_UID: number;
			public static PHONE_UID: number;
			public static SIGNAL_KILL: number;
			public static SIGNAL_QUIT: number;
			public static SIGNAL_USR1: number;
			public static SYSTEM_UID: number;
			public static THREAD_PRIORITY_AUDIO: number;
			public static THREAD_PRIORITY_BACKGROUND: number;
			public static THREAD_PRIORITY_DEFAULT: number;
			public static THREAD_PRIORITY_DISPLAY: number;
			public static THREAD_PRIORITY_FOREGROUND: number;
			public static THREAD_PRIORITY_LESS_FAVORABLE: number;
			public static THREAD_PRIORITY_LOWEST: number;
			public static THREAD_PRIORITY_MORE_FAVORABLE: number;
			public static THREAD_PRIORITY_URGENT_AUDIO: number;
			public static THREAD_PRIORITY_URGENT_DISPLAY: number;
		}
	}
}
