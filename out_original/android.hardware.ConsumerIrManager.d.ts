/// <reference path="./_helpers.d.ts" />

declare module android {
	export module hardware {
		export class ConsumerIrManager {
			public hasIrEmitter(): boolean;
			public transmit(param0: number, param1: native.Array<number>): void;
			public getCarrierFrequencies(): native.Array<android.hardware.ConsumerIrManager.CarrierFrequencyRange>;
		}
		export module ConsumerIrManager {
			export class CarrierFrequencyRange {
				public constructor();
				public constructor(param0: android.hardware.ConsumerIrManager, param1: number, param2: number);
				public getMinFrequency(): number;
				public getMaxFrequency(): number;
			}
		}
	}
}
