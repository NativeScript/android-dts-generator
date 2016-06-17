/// <reference path="./_helpers.d.ts" />

declare module android {
	export module gesture {
		export class OrientedBoundingBox {
			public centerX: number;
			public centerY: number;
			public height: number;
			public orientation: number;
			public squareness: number;
			public width: number;
		}
	}
}
