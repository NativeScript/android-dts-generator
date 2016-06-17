/// <reference path="./_helpers.d.ts" />

declare module android {
	export module os {
		export class CountDownTimer {
			public constructor();
			public constructor(param0: number, param1: number);
			public cancel(): void;
			public start(): android.os.CountDownTimer;
			public onTick(param0: number): void;
			public onFinish(): void;
		}
	}
}
