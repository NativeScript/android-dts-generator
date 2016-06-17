/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class TagTechnology {
				public getTag(): android.nfc.Tag;
				public connect(): void;
				public close(): void;
				public isConnected(): boolean;
			}
		}
	}
}
