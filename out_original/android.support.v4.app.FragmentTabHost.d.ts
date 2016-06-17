/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.LocalActivityManager.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentTabHost {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setup(param0: android.app.LocalActivityManager): void;
					public setup(): void;
					public setup(param0: android.content.Context, param1: android.support.v4.app.FragmentManager): void;
					public setup(param0: android.content.Context, param1: android.support.v4.app.FragmentManager, param2: number): void;
					public setOnTabChangedListener(param0: android.widget.TabHost.OnTabChangeListener): void;
					public addTab(param0: android.widget.TabHost.TabSpec): void;
					public addTab(param0: android.widget.TabHost.TabSpec, param1: java.lang.Class, param2: android.os.Bundle): void;
					public onAttachedToWindow(): void;
					public onDetachedFromWindow(): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public onTabChanged(param0: string): void;
				}
				export module FragmentTabHost {
					export class DummyTabFactory {
						public constructor();
						public constructor(param0: android.content.Context);
						public createTabContent(param0: string): android.view.View;
					}
					export class SavedState {
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public toString(): string;
						public static CREATOR: android.os.Parcelable.Creator;
					}
					export class TabInfo {
					}
				}
			}
		}
	}
}
