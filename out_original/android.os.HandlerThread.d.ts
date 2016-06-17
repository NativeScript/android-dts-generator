/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.ThreadGroup.d.ts" />

declare module android {
	export module os {
		export class HandlerThread {
			public constructor();
			public constructor(param0: java.lang.Runnable);
			public constructor(param0: java.lang.Runnable, param1: string);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
			public constructor(param0: java.lang.ThreadGroup, param1: string);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
			public constructor(param0: string);
			public constructor(param0: string, param1: number);
			public onLooperPrepared(): void;
			public run(): void;
			public getLooper(): android.os.Looper;
			public quit(): boolean;
			public quitSafely(): boolean;
			public getThreadId(): number;
		}
	}
}
