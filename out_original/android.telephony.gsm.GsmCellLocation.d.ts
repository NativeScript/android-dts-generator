/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telephony {
		export module gsm {
			export class GsmCellLocation {
				public constructor();
				public constructor(param0: android.os.Bundle);
				public getLac(): number;
				public getCid(): number;
				public getPsc(): number;
				public setStateInvalid(): void;
				public setLacAndCid(param0: number, param1: number): void;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public fillInNotifierBundle(param0: android.os.Bundle): void;
			}
		}
	}
}
