/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module android {
	export module drm {
		export class DrmSupportInfo {
			public constructor();
			public addMimeType(param0: string): void;
			public addFileSuffix(param0: string): void;
			public getMimeTypeIterator(): java.util.Iterator;
			public getFileSuffixIterator(): java.util.Iterator;
			public setDescription(param0: string): void;
			public getDescriprition(): string;
			public getDescription(): string;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
		}
	}
}
