/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module beans {
		export class IndexedPropertyChangeEvent {
			public constructor(param0: java.lang.Object, param1: string, param2: java.lang.Object, param3: java.lang.Object);
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: java.lang.Object, param1: string, param2: java.lang.Object, param3: java.lang.Object, param4: number);
			public getIndex(): number;
		}
	}
}
