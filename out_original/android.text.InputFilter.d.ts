/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class InputFilter {
			public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
		}
		export module InputFilter {
			export class AllCaps {
				public constructor();
				public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
			}
			export class LengthFilter {
				public constructor();
				public constructor(param0: number);
				public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
				public getMax(): number;
			}
		}
	}
}
