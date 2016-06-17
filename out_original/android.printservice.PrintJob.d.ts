/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.print.PrintJobId.d.ts" />
/// <reference path="./android.print.PrintJobInfo.d.ts" />
/// <reference path="./android.printservice.PrintDocument.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module printservice {
		export class PrintJob {
			public getId(): android.print.PrintJobId;
			public getInfo(): android.print.PrintJobInfo;
			public getDocument(): android.printservice.PrintDocument;
			public isQueued(): boolean;
			public isStarted(): boolean;
			public isBlocked(): boolean;
			public isCompleted(): boolean;
			public isFailed(): boolean;
			public isCancelled(): boolean;
			public start(): boolean;
			public block(param0: string): boolean;
			public complete(): boolean;
			public fail(param0: string): boolean;
			public cancel(): boolean;
			public setTag(param0: string): boolean;
			public getTag(): string;
			public getAdvancedStringOption(param0: string): string;
			public hasAdvancedOption(param0: string): boolean;
			public getAdvancedIntOption(param0: string): number;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
		}
	}
}
