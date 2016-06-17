/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v7.widget.AppCompatDrawableManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatImageHelper {
					public constructor();
					public constructor(param0: android.widget.ImageView, param1: android.support.v7.widget.AppCompatDrawableManager);
					public loadFromAttributes(param0: android.util.AttributeSet, param1: number): void;
					public setImageResource(param0: number): void;
				}
			}
		}
	}
}
