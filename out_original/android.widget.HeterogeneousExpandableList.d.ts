/// <reference path="./_helpers.d.ts" />

declare module android {
	export module widget {
		export class HeterogeneousExpandableList {
			public getGroupType(param0: number): number;
			public getChildType(param0: number, param1: number): number;
			public getGroupTypeCount(): number;
			public getChildTypeCount(): number;
		}
	}
}
