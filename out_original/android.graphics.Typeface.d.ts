/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Typeface {
			public getStyle(): number;
			public isBold(): boolean;
			public isItalic(): boolean;
			public static create(param0: string, param1: number): android.graphics.Typeface;
			public static create(param0: android.graphics.Typeface, param1: number): android.graphics.Typeface;
			public static defaultFromStyle(param0: number): android.graphics.Typeface;
			public static createFromAsset(param0: android.content.res.AssetManager, param1: string): android.graphics.Typeface;
			public static createFromFile(param0: java.io.File): android.graphics.Typeface;
			public static createFromFile(param0: string): android.graphics.Typeface;
			public finalize(): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public static BOLD: number;
			public static BOLD_ITALIC: number;
			public static DEFAULT: android.graphics.Typeface;
			public static DEFAULT_BOLD: android.graphics.Typeface;
			public static ITALIC: number;
			public static MONOSPACE: android.graphics.Typeface;
			public static NORMAL: number;
			public static SANS_SERIF: android.graphics.Typeface;
			public static SERIF: android.graphics.Typeface;
		}
	}
}
