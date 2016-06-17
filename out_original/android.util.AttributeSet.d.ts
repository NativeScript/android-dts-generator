/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class AttributeSet {
			public getAttributeCount(): number;
			public getAttributeName(param0: number): string;
			public getAttributeValue(param0: number): string;
			public getAttributeValue(param0: string, param1: string): string;
			public getPositionDescription(): string;
			public getAttributeNameResource(param0: number): number;
			public getAttributeListValue(param0: string, param1: string, param2: native.Array<string>, param3: number): number;
			public getAttributeBooleanValue(param0: string, param1: string, param2: boolean): boolean;
			public getAttributeResourceValue(param0: string, param1: string, param2: number): number;
			public getAttributeIntValue(param0: string, param1: string, param2: number): number;
			public getAttributeUnsignedIntValue(param0: string, param1: string, param2: number): number;
			public getAttributeFloatValue(param0: string, param1: string, param2: number): number;
			public getAttributeListValue(param0: number, param1: native.Array<string>, param2: number): number;
			public getAttributeBooleanValue(param0: number, param1: boolean): boolean;
			public getAttributeResourceValue(param0: number, param1: number): number;
			public getAttributeIntValue(param0: number, param1: number): number;
			public getAttributeUnsignedIntValue(param0: number, param1: number): number;
			public getAttributeFloatValue(param0: number, param1: number): number;
			public getIdAttribute(): string;
			public getClassAttribute(): string;
			public getIdAttributeResourceValue(param0: number): number;
			public getStyleAttribute(): number;
		}
	}
}
