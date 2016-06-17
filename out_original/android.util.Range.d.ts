/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Comparable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module util {
		export class Range {
			public constructor();
			public constructor(param0: java.lang.Comparable, param1: java.lang.Comparable);
			public static create(param0: java.lang.Comparable, param1: java.lang.Comparable): android.util.Range;
			public getLower(): java.lang.Comparable;
			public getUpper(): java.lang.Comparable;
			public contains(param0: java.lang.Comparable): boolean;
			public contains(param0: android.util.Range): boolean;
			public equals(param0: java.lang.Object): boolean;
			public clamp(param0: java.lang.Comparable): java.lang.Comparable;
			public intersect(param0: android.util.Range): android.util.Range;
			public intersect(param0: java.lang.Comparable, param1: java.lang.Comparable): android.util.Range;
			public extend(param0: android.util.Range): android.util.Range;
			public extend(param0: java.lang.Comparable, param1: java.lang.Comparable): android.util.Range;
			public extend(param0: java.lang.Comparable): android.util.Range;
			public toString(): string;
			public hashCode(): number;
		}
	}
}
