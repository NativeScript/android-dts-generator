/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module preference {
		export class Preference {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): java.lang.Object;
			public setIntent(param0: android.content.Intent): void;
			public getIntent(): android.content.Intent;
			public setFragment(param0: string): void;
			public getFragment(): string;
			public getExtras(): android.os.Bundle;
			public peekExtras(): android.os.Bundle;
			public setLayoutResource(param0: number): void;
			public getLayoutResource(): number;
			public setWidgetLayoutResource(param0: number): void;
			public getWidgetLayoutResource(): number;
			public getView(param0: android.view.View, param1: android.view.ViewGroup): android.view.View;
			public onCreateView(param0: android.view.ViewGroup): android.view.View;
			public onBindView(param0: android.view.View): void;
			public setOrder(param0: number): void;
			public getOrder(): number;
			public setTitle(param0: string): void;
			public setTitle(param0: number): void;
			public getTitleRes(): number;
			public getTitle(): string;
			public setIcon(param0: android.graphics.drawable.Drawable): void;
			public setIcon(param0: number): void;
			public getIcon(): android.graphics.drawable.Drawable;
			public getSummary(): string;
			public setSummary(param0: string): void;
			public setSummary(param0: number): void;
			public setEnabled(param0: boolean): void;
			public isEnabled(): boolean;
			public setSelectable(param0: boolean): void;
			public isSelectable(): boolean;
			public setShouldDisableView(param0: boolean): void;
			public getShouldDisableView(): boolean;
			public onClick(): void;
			public setKey(param0: string): void;
			public getKey(): string;
			public hasKey(): boolean;
			public isPersistent(): boolean;
			public shouldPersist(): boolean;
			public setPersistent(param0: boolean): void;
			public callChangeListener(param0: java.lang.Object): boolean;
			public setOnPreferenceChangeListener(param0: android.preference.Preference.OnPreferenceChangeListener): void;
			public getOnPreferenceChangeListener(): android.preference.Preference.OnPreferenceChangeListener;
			public setOnPreferenceClickListener(param0: android.preference.Preference.OnPreferenceClickListener): void;
			public getOnPreferenceClickListener(): android.preference.Preference.OnPreferenceClickListener;
			public getContext(): android.content.Context;
			public getSharedPreferences(): android.content.SharedPreferences;
			public getEditor(): android.content.SharedPreferences.Editor;
			public shouldCommit(): boolean;
			public compareTo(param0: android.preference.Preference): number;
			public notifyChanged(): void;
			public notifyHierarchyChanged(): void;
			public getPreferenceManager(): android.preference.PreferenceManager;
			public onAttachedToHierarchy(param0: android.preference.PreferenceManager): void;
			public onAttachedToActivity(): void;
			public findPreferenceInHierarchy(param0: string): android.preference.Preference;
			public notifyDependencyChange(param0: boolean): void;
			public onDependencyChanged(param0: android.preference.Preference, param1: boolean): void;
			public onParentChanged(param0: android.preference.Preference, param1: boolean): void;
			public shouldDisableDependents(): boolean;
			public setDependency(param0: string): void;
			public getDependency(): string;
			public onPrepareForRemoval(): void;
			public setDefaultValue(param0: java.lang.Object): void;
			public onSetInitialValue(param0: boolean, param1: java.lang.Object): void;
			public persistString(param0: string): boolean;
			public getPersistedString(param0: string): string;
			public persistInt(param0: number): boolean;
			public getPersistedInt(param0: number): number;
			public persistFloat(param0: number): boolean;
			public getPersistedFloat(param0: number): number;
			public persistLong(param0: number): boolean;
			public getPersistedLong(param0: number): number;
			public persistBoolean(param0: boolean): boolean;
			public getPersistedBoolean(param0: boolean): boolean;
			public toString(): string;
			public saveHierarchyState(param0: android.os.Bundle): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public restoreHierarchyState(param0: android.os.Bundle): void;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public static DEFAULT_ORDER: number;
		}
		export module Preference {
			export class BaseSavedState {
				public constructor(param0: android.os.Parcelable);
				public constructor();
				public constructor(param0: android.os.Parcel);
				public constructor(param0: android.os.Parcelable);
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export class OnPreferenceChangeListener {
				public onPreferenceChange(param0: android.preference.Preference, param1: java.lang.Object): boolean;
			}
			export class OnPreferenceClickListener {
				public onPreferenceClick(param0: android.preference.Preference): boolean;
			}
		}
	}
}
