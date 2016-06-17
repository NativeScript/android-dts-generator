/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class KeyEventCompatHoneycomb {
					public static normalizeMetaState(param0: number): number;
					public static metaStateHasModifiers(param0: number, param1: number): boolean;
					public static metaStateHasNoModifiers(param0: number): boolean;
				}
			}
		}
	}
}
