/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CameraConstrainedHighSpeedCaptureSession {
				public constructor();
				public createHighSpeedRequestList(param0: android.hardware.camera2.CaptureRequest): java.util.List;
			}
		}
	}
}
