/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class SectionIndexer {
			public getSections(): native.Array<java.lang.Object>;
			public getPositionForSection(param0: number): number;
			public getSectionForPosition(param0: number): number;
		}
	}
}
