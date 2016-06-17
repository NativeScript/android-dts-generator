/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.nfc.NfcAdapter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module nfc {
		export module cardemulation {
			export class CardEmulation {
				public static getInstance(param0: android.nfc.NfcAdapter): android.nfc.cardemulation.CardEmulation;
				public isDefaultServiceForCategory(param0: android.content.ComponentName, param1: string): boolean;
				public isDefaultServiceForAid(param0: android.content.ComponentName, param1: string): boolean;
				public categoryAllowsForegroundPreference(param0: string): boolean;
				public getSelectionModeForCategory(param0: string): number;
				public registerAidsForService(param0: android.content.ComponentName, param1: string, param2: java.util.List): boolean;
				public getAidsForService(param0: android.content.ComponentName, param1: string): java.util.List;
				public removeAidsForService(param0: android.content.ComponentName, param1: string): boolean;
				public setPreferredService(param0: android.app.Activity, param1: android.content.ComponentName): boolean;
				public unsetPreferredService(param0: android.app.Activity): boolean;
				public supportsAidPrefixRegistration(): boolean;
				public static ACTION_CHANGE_DEFAULT: string;
				public static CATEGORY_OTHER: string;
				public static CATEGORY_PAYMENT: string;
				public static EXTRA_CATEGORY: string;
				public static EXTRA_SERVICE_COMPONENT: string;
				public static SELECTION_MODE_ALWAYS_ASK: number;
				public static SELECTION_MODE_ASK_IF_CONFLICT: number;
				public static SELECTION_MODE_PREFER_DEFAULT: number;
			}
		}
	}
}
