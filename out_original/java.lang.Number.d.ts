/// <reference path="./_helpers.d.ts" />

declare module java {
	export module lang {
		export class Number {
			public constructor();
			public byteValue(): number;
			public doubleValue(): number;
			public floatValue(): number;
			public intValue(): number;
			public longValue(): number;
			public shortValue(): number;
		}
	}
}
