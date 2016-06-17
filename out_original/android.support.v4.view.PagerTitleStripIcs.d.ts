/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class PagerTitleStripIcs {
					public static setSingleLineAllCaps(param0: android.widget.TextView): void;
				}
				export module PagerTitleStripIcs {
					export class SingleLineAllCapsTransform {
						public constructor();
						public constructor(param0: android.content.Context);
						public getTransformation(param0: string, param1: android.view.View): string;
					}
				}
			}
		}
	}
}
