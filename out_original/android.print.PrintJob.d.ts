/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.print.PrintJobId.d.ts" />
/// <reference path="./android.print.PrintJobInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module print {
		export class PrintJob {
			public getId(): android.print.PrintJobId;
			public getInfo(): android.print.PrintJobInfo;
			public cancel(): void;
			public restart(): void;
			public isQueued(): boolean;
			public isStarted(): boolean;
			public isBlocked(): boolean;
			public isCompleted(): boolean;
			public isFailed(): boolean;
			public isCancelled(): boolean;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
		}
	}
}
