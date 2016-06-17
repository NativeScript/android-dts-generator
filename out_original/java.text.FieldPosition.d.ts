/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module text {
		export class FieldPosition {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: java.text.Format.Field);
			public constructor(param0: java.text.Format.Field, param1: number);
			public equals(param0: java.lang.Object): boolean;
			public getBeginIndex(): number;
			public getEndIndex(): number;
			public getField(): number;
			public getFieldAttribute(): java.text.Format.Field;
			public hashCode(): number;
			public setBeginIndex(param0: number): void;
			public setEndIndex(param0: number): void;
			public toString(): string;
		}
	}
}
