/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.camera2.CameraCharacteristics.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CameraManager {
				public getCameraIdList(): native.Array<string>;
				public registerAvailabilityCallback(param0: android.hardware.camera2.CameraManager.AvailabilityCallback, param1: android.os.Handler): void;
				public unregisterAvailabilityCallback(param0: android.hardware.camera2.CameraManager.AvailabilityCallback): void;
				public registerTorchCallback(param0: android.hardware.camera2.CameraManager.TorchCallback, param1: android.os.Handler): void;
				public unregisterTorchCallback(param0: android.hardware.camera2.CameraManager.TorchCallback): void;
				public getCameraCharacteristics(param0: string): android.hardware.camera2.CameraCharacteristics;
				public openCamera(param0: string, param1: android.hardware.camera2.CameraDevice.StateCallback, param2: android.os.Handler): void;
				public setTorchMode(param0: string, param1: boolean): void;
			}
			export module CameraManager {
				export class AvailabilityCallback {
					public constructor();
					public onCameraAvailable(param0: string): void;
					public onCameraUnavailable(param0: string): void;
				}
				export class TorchCallback {
					public constructor();
					public onTorchModeUnavailable(param0: string): void;
					public onTorchModeChanged(param0: string, param1: boolean): void;
				}
			}
		}
	}
}
