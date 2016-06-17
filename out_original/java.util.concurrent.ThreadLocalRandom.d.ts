/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ThreadLocalRandom {
				public static current(): java.util.concurrent.ThreadLocalRandom;
				public setSeed(param0: number): void;
				public next(param0: number): number;
				public nextInt(): number;
				public nextInt(param0: number): number;
				public nextInt(param0: number, param1: number): number;
				public nextLong(): number;
				public nextLong(param0: number): number;
				public nextLong(param0: number, param1: number): number;
				public nextDouble(): number;
				public nextDouble(param0: number): number;
				public nextDouble(param0: number, param1: number): number;
			}
		}
	}
}
