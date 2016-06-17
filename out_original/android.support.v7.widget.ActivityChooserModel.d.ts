/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActivityChooserModel {
					public static get(param0: android.content.Context, param1: string): android.support.v7.widget.ActivityChooserModel;
					public setIntent(param0: android.content.Intent): void;
					public getIntent(): android.content.Intent;
					public getActivityCount(): number;
					public getActivity(param0: number): android.content.pm.ResolveInfo;
					public getActivityIndex(param0: android.content.pm.ResolveInfo): number;
					public chooseActivity(param0: number): android.content.Intent;
					public setOnChooseActivityListener(param0: android.support.v7.widget.ActivityChooserModel.OnChooseActivityListener): void;
					public getDefaultActivity(): android.content.pm.ResolveInfo;
					public setDefaultActivity(param0: number): void;
					public setActivitySorter(param0: android.support.v7.widget.ActivityChooserModel.ActivitySorter): void;
					public setHistoryMaxSize(param0: number): void;
					public getHistoryMaxSize(): number;
					public getHistorySize(): number;
					public static DEFAULT_HISTORY_FILE_NAME: string;
					public static DEFAULT_HISTORY_MAX_LENGTH: number;
				}
				export module ActivityChooserModel {
					export class ActivityChooserModelClient {
						public setActivityChooserModel(param0: android.support.v7.widget.ActivityChooserModel): void;
					}
					export class ActivityResolveInfo {
						public constructor();
						public constructor(param0: android.support.v7.widget.ActivityChooserModel, param1: android.content.pm.ResolveInfo);
						public hashCode(): number;
						public equals(param0: java.lang.Object): boolean;
						public compareTo(param0: android.support.v7.widget.ActivityChooserModel.ActivityResolveInfo): number;
						public toString(): string;
						public resolveInfo: android.content.pm.ResolveInfo;
						public weight: number;
					}
					export class ActivitySorter {
						public sort(param0: android.content.Intent, param1: java.util.List, param2: java.util.List): void;
					}
					export class DefaultSorter {
						public sort(param0: android.content.Intent, param1: java.util.List, param2: java.util.List): void;
					}
					export class HistoricalRecord {
						public constructor();
						public constructor(param0: string, param1: number, param2: number);
						public constructor(param0: android.content.ComponentName, param1: number, param2: number);
						public hashCode(): number;
						public equals(param0: java.lang.Object): boolean;
						public toString(): string;
						public activity: android.content.ComponentName;
						public time: number;
						public weight: number;
					}
					export class OnChooseActivityListener {
						public onChooseActivity(param0: android.support.v7.widget.ActivityChooserModel, param1: android.content.Intent): boolean;
					}
					export class PersistHistoryAsyncTask {
						public doInBackground(param0: native.Array<java.lang.Object>): java.lang.Object;
						public doInBackground(param0: native.Array<java.lang.Object>): java.lang.Void;
					}
				}
			}
		}
	}
}
