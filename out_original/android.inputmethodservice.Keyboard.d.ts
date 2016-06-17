/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module inputmethodservice {
		export class Keyboard {
			public constructor();
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: number, param2: number, param3: number, param4: number);
			public constructor(param0: android.content.Context, param1: number, param2: number);
			public constructor(param0: android.content.Context, param1: number, param2: string, param3: number, param4: number);
			public getKeys(): java.util.List;
			public getModifierKeys(): java.util.List;
			public getHorizontalGap(): number;
			public setHorizontalGap(param0: number): void;
			public getVerticalGap(): number;
			public setVerticalGap(param0: number): void;
			public getKeyHeight(): number;
			public setKeyHeight(param0: number): void;
			public getKeyWidth(): number;
			public setKeyWidth(param0: number): void;
			public getHeight(): number;
			public getMinWidth(): number;
			public setShifted(param0: boolean): boolean;
			public isShifted(): boolean;
			public getShiftKeyIndex(): number;
			public getNearestKeys(param0: number, param1: number): native.Array<number>;
			public createRowFromXml(param0: android.content.res.Resources, param1: android.content.res.XmlResourceParser): android.inputmethodservice.Keyboard.Row;
			public createKeyFromXml(param0: android.content.res.Resources, param1: android.inputmethodservice.Keyboard.Row, param2: number, param3: number, param4: android.content.res.XmlResourceParser): android.inputmethodservice.Keyboard.Key;
			public static EDGE_BOTTOM: number;
			public static EDGE_LEFT: number;
			public static EDGE_RIGHT: number;
			public static EDGE_TOP: number;
			public static KEYCODE_ALT: number;
			public static KEYCODE_CANCEL: number;
			public static KEYCODE_DELETE: number;
			public static KEYCODE_DONE: number;
			public static KEYCODE_MODE_CHANGE: number;
			public static KEYCODE_SHIFT: number;
		}
		export module Keyboard {
			export class Key {
				public constructor();
				public constructor(param0: android.inputmethodservice.Keyboard.Row);
				public constructor(param0: android.content.res.Resources, param1: android.inputmethodservice.Keyboard.Row, param2: number, param3: number, param4: android.content.res.XmlResourceParser);
				public onPressed(): void;
				public onReleased(param0: boolean): void;
				public isInside(param0: number, param1: number): boolean;
				public squaredDistanceFrom(param0: number, param1: number): number;
				public getCurrentDrawableState(): native.Array<number>;
				public codes: native.Array<number>;
				public edgeFlags: number;
				public gap: number;
				public height: number;
				public icon: android.graphics.drawable.Drawable;
				public iconPreview: android.graphics.drawable.Drawable;
				public label: string;
				public modifier: boolean;
				public on: boolean;
				public popupCharacters: string;
				public popupResId: number;
				public pressed: boolean;
				public repeatable: boolean;
				public sticky: boolean;
				public text: string;
				public width: number;
				public x: number;
				public y: number;
			}
			export class Row {
				public constructor();
				public constructor(param0: android.inputmethodservice.Keyboard);
				public constructor(param0: android.content.res.Resources, param1: android.inputmethodservice.Keyboard, param2: android.content.res.XmlResourceParser);
				public defaultHeight: number;
				public defaultHorizontalGap: number;
				public defaultWidth: number;
				public mode: number;
				public rowEdgeFlags: number;
				public verticalGap: number;
			}
		}
	}
}
