/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.Guard.d.ts" />

declare module java {
	export module security {
		export class GuardedObject {
			public constructor();
			public constructor(param0: java.lang.Object, param1: java.security.Guard);
			public getObject(): java.lang.Object;
		}
	}
}
