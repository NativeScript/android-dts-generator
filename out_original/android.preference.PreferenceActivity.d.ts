/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.preference.PreferenceFragment.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.preference.PreferenceScreen.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module preference {
		export class PreferenceActivity {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onCreate(param0: android.os.Bundle): void;
			public hasHeaders(): boolean;
			public isMultiPane(): boolean;
			public onIsMultiPane(): boolean;
			public onIsHidingHeaders(): boolean;
			public onGetInitialHeader(): android.preference.PreferenceActivity.Header;
			public onGetNewHeader(): android.preference.PreferenceActivity.Header;
			public onBuildHeaders(param0: java.util.List): void;
			public invalidateHeaders(): void;
			public loadHeadersFromResource(param0: number, param1: java.util.List): void;
			public isValidFragment(param0: string): boolean;
			public setListFooter(param0: android.view.View): void;
			public onStop(): void;
			public onDestroy(): void;
			public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
			public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
			public onContentChanged(): void;
			public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;
			public onHeaderClick(param0: android.preference.PreferenceActivity.Header, param1: number): void;
			public onBuildStartFragmentIntent(param0: string, param1: android.os.Bundle, param2: number, param3: number): android.content.Intent;
			public startWithFragment(param0: string, param1: android.os.Bundle, param2: android.app.Fragment, param3: number): void;
			public startWithFragment(param0: string, param1: android.os.Bundle, param2: android.app.Fragment, param3: number, param4: number, param5: number): void;
			public showBreadCrumbs(param0: string, param1: string): void;
			public setParentTitle(param0: string, param1: string, param2: android.view.View.OnClickListener): void;
			public switchToHeader(param0: string, param1: android.os.Bundle): void;
			public switchToHeader(param0: android.preference.PreferenceActivity.Header): void;
			public startPreferenceFragment(param0: android.app.Fragment, param1: boolean): void;
			public startPreferencePanel(param0: string, param1: android.os.Bundle, param2: number, param3: string, param4: android.app.Fragment, param5: number): void;
			public finishPreferencePanel(param0: android.app.Fragment, param1: number, param2: android.content.Intent): void;
			public onPreferenceStartFragment(param0: android.preference.PreferenceFragment, param1: android.preference.Preference): boolean;
			public getPreferenceManager(): android.preference.PreferenceManager;
			public setPreferenceScreen(param0: android.preference.PreferenceScreen): void;
			public getPreferenceScreen(): android.preference.PreferenceScreen;
			public addPreferencesFromIntent(param0: android.content.Intent): void;
			public addPreferencesFromResource(param0: number): void;
			public onPreferenceTreeClick(param0: android.preference.PreferenceScreen, param1: android.preference.Preference): boolean;
			public findPreference(param0: string): android.preference.Preference;
			public onNewIntent(param0: android.content.Intent): void;
			public static EXTRA_NO_HEADERS: string;
			public static EXTRA_SHOW_FRAGMENT: string;
			public static EXTRA_SHOW_FRAGMENT_ARGUMENTS: string;
			public static EXTRA_SHOW_FRAGMENT_SHORT_TITLE: string;
			public static EXTRA_SHOW_FRAGMENT_TITLE: string;
			public static HEADER_ID_UNDEFINED: number;
		}
		export module PreferenceActivity {
			export class Header {
				public constructor();
				public getTitle(param0: android.content.res.Resources): string;
				public getSummary(param0: android.content.res.Resources): string;
				public getBreadCrumbTitle(param0: android.content.res.Resources): string;
				public getBreadCrumbShortTitle(param0: android.content.res.Resources): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public breadCrumbShortTitle: string;
				public breadCrumbShortTitleRes: number;
				public breadCrumbTitle: string;
				public breadCrumbTitleRes: number;
				public extras: android.os.Bundle;
				public fragment: string;
				public fragmentArguments: android.os.Bundle;
				public iconRes: number;
				public id: number;
				public intent: android.content.Intent;
				public summary: string;
				public summaryRes: number;
				public title: string;
				public titleRes: number;
			}
		}
	}
}
