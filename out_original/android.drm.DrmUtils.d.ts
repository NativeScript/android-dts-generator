/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module android {
	export module drm {
		export class DrmUtils {
			public constructor();
			public static getExtendedMetadataParser(param0: native.Array<number>): android.drm.DrmUtils.ExtendedMetadataParser;
		}
		export module DrmUtils {
			export class ExtendedMetadataParser {
				public iterator(): java.util.Iterator;
				public keyIterator(): java.util.Iterator;
				public get(param0: string): string;
			}
		}
	}
}
