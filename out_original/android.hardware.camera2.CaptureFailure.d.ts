/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CaptureFailure {
				public getRequest(): android.hardware.camera2.CaptureRequest;
				public getFrameNumber(): number;
				public getReason(): number;
				public wasImageCaptured(): boolean;
				public getSequenceId(): number;
				public static REASON_ERROR: number;
				public static REASON_FLUSHED: number;
			}
		}
	}
}
