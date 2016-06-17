/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Phaser {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: java.util.concurrent.Phaser);
				public constructor(param0: java.util.concurrent.Phaser, param1: number);
				public register(): number;
				public bulkRegister(param0: number): number;
				public arrive(): number;
				public arriveAndDeregister(): number;
				public arriveAndAwaitAdvance(): number;
				public awaitAdvance(param0: number): number;
				public awaitAdvanceInterruptibly(param0: number): number;
				public awaitAdvanceInterruptibly(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): number;
				public forceTermination(): void;
				public getPhase(): number;
				public getRegisteredParties(): number;
				public getArrivedParties(): number;
				public getUnarrivedParties(): number;
				public getParent(): java.util.concurrent.Phaser;
				public getRoot(): java.util.concurrent.Phaser;
				public isTerminated(): boolean;
				public onAdvance(param0: number, param1: number): boolean;
				public toString(): string;
			}
		}
	}
}
