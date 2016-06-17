/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.camera2.CameraDevice.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureFailure.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureResult.d.ts" />
/// <reference path="./android.hardware.camera2.TotalCaptureResult.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CameraCaptureSession {
				public constructor();
				public getDevice(): android.hardware.camera2.CameraDevice;
				public prepare(param0: android.view.Surface): void;
				public capture(param0: android.hardware.camera2.CaptureRequest, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;
				public captureBurst(param0: java.util.List, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;
				public setRepeatingRequest(param0: android.hardware.camera2.CaptureRequest, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;
				public setRepeatingBurst(param0: java.util.List, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;
				public stopRepeating(): void;
				public abortCaptures(): void;
				public isReprocessable(): boolean;
				public getInputSurface(): android.view.Surface;
				public close(): void;
			}
			export module CameraCaptureSession {
				export class CaptureCallback {
					public constructor();
					public onCaptureStarted(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: number, param3: number): void;
					public onCaptureProgressed(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: android.hardware.camera2.CaptureResult): void;
					public onCaptureCompleted(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: android.hardware.camera2.TotalCaptureResult): void;
					public onCaptureFailed(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: android.hardware.camera2.CaptureFailure): void;
					public onCaptureSequenceCompleted(param0: android.hardware.camera2.CameraCaptureSession, param1: number, param2: number): void;
					public onCaptureSequenceAborted(param0: android.hardware.camera2.CameraCaptureSession, param1: number): void;
				}
				export class StateCallback {
					public constructor();
					public onConfigured(param0: android.hardware.camera2.CameraCaptureSession): void;
					public onConfigureFailed(param0: android.hardware.camera2.CameraCaptureSession): void;
					public onReady(param0: android.hardware.camera2.CameraCaptureSession): void;
					public onActive(param0: android.hardware.camera2.CameraCaptureSession): void;
					public onClosed(param0: android.hardware.camera2.CameraCaptureSession): void;
					public onSurfacePrepared(param0: android.hardware.camera2.CameraCaptureSession, param1: android.view.Surface): void;
				}
			}
		}
	}
}
