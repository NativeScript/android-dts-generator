/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module annotation {
			export class IntDef {
				public value(): native.Array<number>;
				public flag(): boolean;
			}
		}
	}
}
