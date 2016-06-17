/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class BasicTagTechnology {
				public getTag(): android.nfc.Tag;
				public isConnected(): boolean;
				public connect(): void;
				public close(): void;
			}
		}
	}
}
