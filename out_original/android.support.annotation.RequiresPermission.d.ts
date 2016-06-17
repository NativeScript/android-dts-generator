/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module annotation {
			export class RequiresPermission {
				public value(): string;
				public allOf(): native.Array<string>;
				public anyOf(): native.Array<string>;
				public conditional(): boolean;
			}
			export module RequiresPermission {
				export class Read {
					public value(): android.support.annotation.RequiresPermission;
				}
				export class Write {
					public value(): android.support.annotation.RequiresPermission;
				}
			}
		}
	}
}
