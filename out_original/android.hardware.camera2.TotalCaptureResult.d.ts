/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class TotalCaptureResult {
				public getPartialResults(): java.util.List;
			}
		}
	}
}
