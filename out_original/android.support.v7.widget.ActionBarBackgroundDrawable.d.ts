/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.support.v7.widget.ActionBarContainer.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarBackgroundDrawable {
					public constructor();
					public constructor(param0: android.support.v7.widget.ActionBarContainer);
					public draw(param0: android.graphics.Canvas): void;
					public setAlpha(param0: number): void;
					public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public getOpacity(): number;
				}
			}
		}
	}
}
