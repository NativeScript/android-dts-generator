/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.camera2.TotalCaptureResult.d.ts" />
/// <reference path="./android.hardware.camera2.params.InputConfiguration.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CameraDevice {
				public getId(): string;
				public createCaptureSession(param0: java.util.List, param1: android.hardware.camera2.CameraCaptureSession.StateCallback, param2: android.os.Handler): void;
				public createReprocessableCaptureSession(param0: android.hardware.camera2.params.InputConfiguration, param1: java.util.List, param2: android.hardware.camera2.CameraCaptureSession.StateCallback, param3: android.os.Handler): void;
				public createConstrainedHighSpeedCaptureSession(param0: java.util.List, param1: android.hardware.camera2.CameraCaptureSession.StateCallback, param2: android.os.Handler): void;
				public createCaptureRequest(param0: number): android.hardware.camera2.CaptureRequest.Builder;
				public createReprocessCaptureRequest(param0: android.hardware.camera2.TotalCaptureResult): android.hardware.camera2.CaptureRequest.Builder;
				public close(): void;
				public static TEMPLATE_MANUAL: number;
				public static TEMPLATE_PREVIEW: number;
				public static TEMPLATE_RECORD: number;
				public static TEMPLATE_STILL_CAPTURE: number;
				public static TEMPLATE_VIDEO_SNAPSHOT: number;
				public static TEMPLATE_ZERO_SHUTTER_LAG: number;
			}
			export module CameraDevice {
				export class StateCallback {
					public constructor();
					public onOpened(param0: android.hardware.camera2.CameraDevice): void;
					public onClosed(param0: android.hardware.camera2.CameraDevice): void;
					public onDisconnected(param0: android.hardware.camera2.CameraDevice): void;
					public onError(param0: android.hardware.camera2.CameraDevice, param1: number): void;
					public static ERROR_CAMERA_DEVICE: number;
					public static ERROR_CAMERA_DISABLED: number;
					public static ERROR_CAMERA_IN_USE: number;
					public static ERROR_CAMERA_SERVICE: number;
					public static ERROR_MAX_CAMERAS_IN_USE: number;
				}
			}
		}
	}
}
