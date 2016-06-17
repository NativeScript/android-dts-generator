/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatViewInflater {
					public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet, param4: boolean, param5: boolean, param6: boolean, param7: boolean): android.view.View;
				}
				export module AppCompatViewInflater {
					export class DeclaredOnClickListener {
						public constructor();
						public constructor(param0: android.view.View, param1: string);
						public onClick(param0: android.view.View): void;
					}
				}
			}
		}
	}
}
