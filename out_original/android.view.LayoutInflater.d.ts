/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module view {
		export class LayoutInflater {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.view.LayoutInflater, param1: android.content.Context);
			public static from(param0: android.content.Context): android.view.LayoutInflater;
			public cloneInContext(param0: android.content.Context): android.view.LayoutInflater;
			public getContext(): android.content.Context;
			public getFactory(): android.view.LayoutInflater.Factory;
			public getFactory2(): android.view.LayoutInflater.Factory2;
			public setFactory(param0: android.view.LayoutInflater.Factory): void;
			public setFactory2(param0: android.view.LayoutInflater.Factory2): void;
			public getFilter(): android.view.LayoutInflater.Filter;
			public setFilter(param0: android.view.LayoutInflater.Filter): void;
			public inflate(param0: number, param1: android.view.ViewGroup): android.view.View;
			public inflate(param0: org.xmlpull.v1.XmlPullParser, param1: android.view.ViewGroup): android.view.View;
			public inflate(param0: number, param1: android.view.ViewGroup, param2: boolean): android.view.View;
			public inflate(param0: org.xmlpull.v1.XmlPullParser, param1: android.view.ViewGroup, param2: boolean): android.view.View;
			public createView(param0: string, param1: string, param2: android.util.AttributeSet): android.view.View;
			public onCreateView(param0: string, param1: android.util.AttributeSet): android.view.View;
			public onCreateView(param0: android.view.View, param1: string, param2: android.util.AttributeSet): android.view.View;
		}
		export module LayoutInflater {
			export class Factory {
				public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
			}
			export class Factory2 {
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			}
			export class Filter {
				public onLoadClass(param0: java.lang.Class): boolean;
			}
		}
	}
}
