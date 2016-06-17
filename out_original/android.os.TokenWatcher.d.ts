/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class TokenWatcher {
			public constructor();
			public constructor(param0: android.os.Handler, param1: string);
			public acquired(): void;
			public released(): void;
			public acquire(param0: android.os.IBinder, param1: string): void;
			public cleanup(param0: android.os.IBinder, param1: boolean): void;
			public release(param0: android.os.IBinder): void;
			public isAcquired(): boolean;
			public dump(): void;
			public dump(param0: java.io.PrintWriter): void;
		}
	}
}
