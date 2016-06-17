/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module res {
			export class TypedArray {
				public length(): number;
				public getIndexCount(): number;
				public getIndex(param0: number): number;
				public getResources(): android.content.res.Resources;
				public getText(param0: number): string;
				public getString(param0: number): string;
				public getNonResourceString(param0: number): string;
				public getBoolean(param0: number, param1: boolean): boolean;
				public getInt(param0: number, param1: number): number;
				public getFloat(param0: number, param1: number): number;
				public getColor(param0: number, param1: number): number;
				public getColorStateList(param0: number): android.content.res.ColorStateList;
				public getInteger(param0: number, param1: number): number;
				public getDimension(param0: number, param1: number): number;
				public getDimensionPixelOffset(param0: number, param1: number): number;
				public getDimensionPixelSize(param0: number, param1: number): number;
				public getLayoutDimension(param0: number, param1: string): number;
				public getLayoutDimension(param0: number, param1: number): number;
				public getFraction(param0: number, param1: number, param2: number, param3: number): number;
				public getResourceId(param0: number, param1: number): number;
				public getDrawable(param0: number): android.graphics.drawable.Drawable;
				public getTextArray(param0: number): native.Array<java.lang.CharSequence>;
				public getValue(param0: number, param1: android.util.TypedValue): boolean;
				public getType(param0: number): number;
				public hasValue(param0: number): boolean;
				public hasValueOrEmpty(param0: number): boolean;
				public peekValue(param0: number): android.util.TypedValue;
				public getPositionDescription(): string;
				public recycle(): void;
				public getChangingConfigurations(): number;
				public toString(): string;
			}
		}
	}
}
