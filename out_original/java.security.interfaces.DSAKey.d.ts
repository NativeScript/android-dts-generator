/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.interfaces.DSAParams.d.ts" />

declare module java {
	export module security {
		export module interfaces {
			export class DSAKey {
				public getParams(): java.security.interfaces.DSAParams;
			}
		}
	}
}
