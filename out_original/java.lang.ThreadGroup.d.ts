/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module java {
	export module lang {
		export class ThreadGroup {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: java.lang.ThreadGroup, param1: string);
			public activeCount(): number;
			public activeGroupCount(): number;
			public allowThreadSuspension(param0: boolean): boolean;
			public checkAccess(): void;
			public destroy(): void;
			public enumerate(param0: native.Array<java.lang.Thread>): number;
			public enumerate(param0: native.Array<java.lang.Thread>, param1: boolean): number;
			public enumerate(param0: native.Array<java.lang.ThreadGroup>): number;
			public enumerate(param0: native.Array<java.lang.ThreadGroup>, param1: boolean): number;
			public getMaxPriority(): number;
			public getName(): string;
			public getParent(): java.lang.ThreadGroup;
			public interrupt(): void;
			public isDaemon(): boolean;
			public isDestroyed(): boolean;
			public list(): void;
			public parentOf(param0: java.lang.ThreadGroup): boolean;
			public resume(): void;
			public setDaemon(param0: boolean): void;
			public setMaxPriority(param0: number): void;
			public stop(): void;
			public suspend(): void;
			public toString(): string;
			public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
		}
	}
}
