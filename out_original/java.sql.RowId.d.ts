/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module sql {
		export class RowId {
			public equals(param0: java.lang.Object): boolean;
			public getBytes(): native.Array<number>;
			public toString(): string;
			public hashCode(): number;
		}
	}
}
