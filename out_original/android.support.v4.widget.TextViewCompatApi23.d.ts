/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class TextViewCompatApi23 {
					public static setTextAppearance(param0: android.widget.TextView, param1: number): void;
				}
			}
		}
	}
}
