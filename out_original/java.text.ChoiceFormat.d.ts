/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.text.FieldPosition.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />

declare module java {
	export module text {
		export class ChoiceFormat {
			public constructor();
			public constructor(param0: native.Array<number>, param1: native.Array<string>);
			public constructor(param0: string);
			public applyPattern(param0: string): void;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public format(param0: number): string;
			public format(param0: number): string;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.lang.Object, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: java.lang.Object): string;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public format(param0: number, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
			public getFormats(): native.Array<java.lang.Object>;
			public getLimits(): native.Array<number>;
			public hashCode(): number;
			public static nextDouble(param0: number): number;
			public static nextDouble(param0: number, param1: boolean): number;
			public parse(param0: string): java.lang.Number;
			public parse(param0: string, param1: java.text.ParsePosition): java.lang.Number;
			public static previousDouble(param0: number): number;
			public setChoices(param0: native.Array<number>, param1: native.Array<string>): void;
			public toPattern(): string;
		}
	}
}
