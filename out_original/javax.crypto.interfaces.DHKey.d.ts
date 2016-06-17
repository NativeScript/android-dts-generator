/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.crypto.spec.DHParameterSpec.d.ts" />

declare module javax {
	export module crypto {
		export module interfaces {
			export class DHKey {
				public getParams(): javax.crypto.spec.DHParameterSpec;
			}
		}
	}
}
