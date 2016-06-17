/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module io {
		export class ObjectInput {
			public available(): number;
			public close(): void;
			public read(): number;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public readObject(): java.lang.Object;
			public skip(param0: number): number;
		}
	}
}
