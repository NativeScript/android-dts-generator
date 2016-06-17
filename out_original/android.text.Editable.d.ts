/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.InputFilter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class Editable {
			public replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.Editable;
			public replace(param0: number, param1: number, param2: string): android.text.Editable;
			public insert(param0: number, param1: string, param2: number, param3: number): android.text.Editable;
			public insert(param0: number, param1: string): android.text.Editable;
			public delete(param0: number, param1: number): android.text.Editable;
			public append(param0: string): android.text.Editable;
			public append(param0: string, param1: number, param2: number): android.text.Editable;
			public append(param0: string): android.text.Editable;
			public clear(): void;
			public clearSpans(): void;
			public setFilters(param0: native.Array<android.text.InputFilter>): void;
			public getFilters(): native.Array<android.text.InputFilter>;
		}
		export module Editable {
			export class Factory {
				public constructor();
				public static getInstance(): android.text.Editable.Factory;
				public newEditable(param0: string): android.text.Editable;
			}
		}
	}
}
