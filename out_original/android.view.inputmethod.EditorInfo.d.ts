/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class EditorInfo {
				public constructor();
				public makeCompatible(param0: number): void;
				public dump(param0: android.util.Printer, param1: string): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static IME_ACTION_DONE: number;
				public static IME_ACTION_GO: number;
				public static IME_ACTION_NEXT: number;
				public static IME_ACTION_NONE: number;
				public static IME_ACTION_PREVIOUS: number;
				public static IME_ACTION_SEARCH: number;
				public static IME_ACTION_SEND: number;
				public static IME_ACTION_UNSPECIFIED: number;
				public static IME_FLAG_FORCE_ASCII: number;
				public static IME_FLAG_NAVIGATE_NEXT: number;
				public static IME_FLAG_NAVIGATE_PREVIOUS: number;
				public static IME_FLAG_NO_ACCESSORY_ACTION: number;
				public static IME_FLAG_NO_ENTER_ACTION: number;
				public static IME_FLAG_NO_EXTRACT_UI: number;
				public static IME_FLAG_NO_FULLSCREEN: number;
				public static IME_MASK_ACTION: number;
				public static IME_NULL: number;
				public actionId: number;
				public actionLabel: string;
				public extras: android.os.Bundle;
				public fieldId: number;
				public fieldName: string;
				public hintText: string;
				public imeOptions: number;
				public initialCapsMode: number;
				public initialSelEnd: number;
				public initialSelStart: number;
				public inputType: number;
				public label: string;
				public packageName: string;
				public privateImeOptions: string;
			}
		}
	}
}
