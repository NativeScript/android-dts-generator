/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export class Random {
			public constructor();
			public constructor(param0: number);
			public next(param0: number): number;
			public nextBoolean(): boolean;
			public nextBytes(param0: native.Array<number>): void;
			public nextDouble(): number;
			public nextFloat(): number;
			public nextGaussian(): number;
			public nextInt(): number;
			public nextInt(param0: number): number;
			public nextLong(): number;
			public setSeed(param0: number): void;
		}
	}
}
