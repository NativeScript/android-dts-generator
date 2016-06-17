/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.StackTraceElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.ThreadGroup.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module lang {
		export class Thread {
			public constructor();
			public constructor(param0: java.lang.Runnable);
			public constructor(param0: java.lang.Runnable, param1: string);
			public constructor(param0: string);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
			public constructor(param0: java.lang.ThreadGroup, param1: string);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
			public static activeCount(): number;
			public checkAccess(): void;
			public countStackFrames(): number;
			public static currentThread(): java.lang.Thread;
			public destroy(): void;
			public static dumpStack(): void;
			public static enumerate(param0: native.Array<java.lang.Thread>): number;
			public static getAllStackTraces(): java.util.Map;
			public getContextClassLoader(): java.lang.ClassLoader;
			public static getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			public getId(): number;
			public getName(): string;
			public getPriority(): number;
			public getStackTrace(): native.Array<java.lang.StackTraceElement>;
			public getState(): java.lang.Thread.State;
			public getThreadGroup(): java.lang.ThreadGroup;
			public getUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			public interrupt(): void;
			public static interrupted(): boolean;
			public isAlive(): boolean;
			public isDaemon(): boolean;
			public isInterrupted(): boolean;
			public join(): void;
			public join(param0: number): void;
			public join(param0: number, param1: number): void;
			public resume(): void;
			public run(): void;
			public setContextClassLoader(param0: java.lang.ClassLoader): void;
			public setDaemon(param0: boolean): void;
			public static setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
			public setName(param0: string): void;
			public setPriority(param0: number): void;
			public setUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
			public static sleep(param0: number): void;
			public static sleep(param0: number, param1: number): void;
			public start(): void;
			public stop(): void;
			public stop(param0: java.lang.Throwable): void;
			public suspend(): void;
			public toString(): string;
			public static yield(): void;
			public static holdsLock(param0: java.lang.Object): boolean;
			public static MAX_PRIORITY: number;
			public static MIN_PRIORITY: number;
			public static NORM_PRIORITY: number;
		}
		export module Thread {
			export class State {
				public static values(): native.Array<java.lang.Thread.State>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.lang.Thread.State;
				public static BLOCKED: java.lang.Thread.State;
				public static NEW: java.lang.Thread.State;
				public static RUNNABLE: java.lang.Thread.State;
				public static TERMINATED: java.lang.Thread.State;
				public static TIMED_WAITING: java.lang.Thread.State;
				public static WAITING: java.lang.Thread.State;
			}
			export class UncaughtExceptionHandler {
				public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
			}
		}
	}
}
