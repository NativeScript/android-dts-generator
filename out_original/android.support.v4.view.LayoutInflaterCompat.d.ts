/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.LayoutInflaterFactory.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class LayoutInflaterCompat {
					public static setFactory(param0: android.view.LayoutInflater, param1: android.support.v4.view.LayoutInflaterFactory): void;
					public static getFactory(param0: android.view.LayoutInflater): android.support.v4.view.LayoutInflaterFactory;
				}
				export module LayoutInflaterCompat {
					export class LayoutInflaterCompatImpl {
						public setFactory(param0: android.view.LayoutInflater, param1: android.support.v4.view.LayoutInflaterFactory): void;
						public getFactory(param0: android.view.LayoutInflater): android.support.v4.view.LayoutInflaterFactory;
					}
					export class LayoutInflaterCompatImplBase {
						public setFactory(param0: android.view.LayoutInflater, param1: android.support.v4.view.LayoutInflaterFactory): void;
						public getFactory(param0: android.view.LayoutInflater): android.support.v4.view.LayoutInflaterFactory;
					}
					export class LayoutInflaterCompatImplV11 {
						public setFactory(param0: android.view.LayoutInflater, param1: android.support.v4.view.LayoutInflaterFactory): void;
					}
					export class LayoutInflaterCompatImplV21 {
						public setFactory(param0: android.view.LayoutInflater, param1: android.support.v4.view.LayoutInflaterFactory): void;
					}
				}
			}
		}
	}
}
