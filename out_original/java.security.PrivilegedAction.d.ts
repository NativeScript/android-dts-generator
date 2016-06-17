/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module security {
		export class PrivilegedAction {
			public run(): java.lang.Object;
		}
	}
}
