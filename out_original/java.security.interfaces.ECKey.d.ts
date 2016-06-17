/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.spec.ECParameterSpec.d.ts" />

declare module java {
	export module security {
		export module interfaces {
			export class ECKey {
				public getParams(): java.security.spec.ECParameterSpec;
			}
		}
	}
}
