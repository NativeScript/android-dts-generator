/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.support.v7.widget.ActionBarContainer.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarBackgroundDrawableV21 {
					public constructor();
					public constructor(param0: android.support.v7.widget.ActionBarContainer);
					public getOutline(param0: android.graphics.Outline): void;
				}
			}
		}
	}
}
