/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export class Camera {
			public static getNumberOfCameras(): number;
			public static getCameraInfo(param0: number, param1: android.hardware.Camera.CameraInfo): void;
			public static open(param0: number): android.hardware.Camera;
			public static open(): android.hardware.Camera;
			public finalize(): void;
			public release(): void;
			public unlock(): void;
			public lock(): void;
			public reconnect(): void;
			public setPreviewDisplay(param0: android.view.SurfaceHolder): void;
			public setPreviewTexture(param0: android.graphics.SurfaceTexture): void;
			public startPreview(): void;
			public stopPreview(): void;
			public setPreviewCallback(param0: android.hardware.Camera.PreviewCallback): void;
			public setOneShotPreviewCallback(param0: android.hardware.Camera.PreviewCallback): void;
			public setPreviewCallbackWithBuffer(param0: android.hardware.Camera.PreviewCallback): void;
			public addCallbackBuffer(param0: native.Array<number>): void;
			public autoFocus(param0: android.hardware.Camera.AutoFocusCallback): void;
			public cancelAutoFocus(): void;
			public setAutoFocusMoveCallback(param0: android.hardware.Camera.AutoFocusMoveCallback): void;
			public takePicture(param0: android.hardware.Camera.ShutterCallback, param1: android.hardware.Camera.PictureCallback, param2: android.hardware.Camera.PictureCallback): void;
			public takePicture(param0: android.hardware.Camera.ShutterCallback, param1: android.hardware.Camera.PictureCallback, param2: android.hardware.Camera.PictureCallback, param3: android.hardware.Camera.PictureCallback): void;
			public startSmoothZoom(param0: number): void;
			public stopSmoothZoom(): void;
			public setDisplayOrientation(param0: number): void;
			public enableShutterSound(param0: boolean): boolean;
			public setZoomChangeListener(param0: android.hardware.Camera.OnZoomChangeListener): void;
			public setFaceDetectionListener(param0: android.hardware.Camera.FaceDetectionListener): void;
			public startFaceDetection(): void;
			public stopFaceDetection(): void;
			public setErrorCallback(param0: android.hardware.Camera.ErrorCallback): void;
			public setParameters(param0: android.hardware.Camera.Parameters): void;
			public getParameters(): android.hardware.Camera.Parameters;
			public static ACTION_NEW_PICTURE: string;
			public static ACTION_NEW_VIDEO: string;
			public static CAMERA_ERROR_EVICTED: number;
			public static CAMERA_ERROR_SERVER_DIED: number;
			public static CAMERA_ERROR_UNKNOWN: number;
		}
		export module Camera {
			export class Area {
				public constructor();
				public constructor(param0: android.graphics.Rect, param1: number);
				public equals(param0: java.lang.Object): boolean;
				public rect: android.graphics.Rect;
				public weight: number;
			}
			export class AutoFocusCallback {
				public onAutoFocus(param0: boolean, param1: android.hardware.Camera): void;
			}
			export class AutoFocusMoveCallback {
				public onAutoFocusMoving(param0: boolean, param1: android.hardware.Camera): void;
			}
			export class CameraInfo {
				public constructor();
				public static CAMERA_FACING_BACK: number;
				public static CAMERA_FACING_FRONT: number;
				public canDisableShutterSound: boolean;
				public facing: number;
				public orientation: number;
			}
			export class ErrorCallback {
				public onError(param0: number, param1: android.hardware.Camera): void;
			}
			export class Face {
				public constructor();
				public id: number;
				public leftEye: android.graphics.Point;
				public mouth: android.graphics.Point;
				public rect: android.graphics.Rect;
				public rightEye: android.graphics.Point;
				public score: number;
			}
			export class FaceDetectionListener {
				public onFaceDetection(param0: native.Array<android.hardware.Camera.Face>, param1: android.hardware.Camera): void;
			}
			export class OnZoomChangeListener {
				public onZoomChange(param0: number, param1: boolean, param2: android.hardware.Camera): void;
			}
			export class Parameters {
				public flatten(): string;
				public unflatten(param0: string): void;
				public remove(param0: string): void;
				public set(param0: string, param1: string): void;
				public set(param0: string, param1: number): void;
				public get(param0: string): string;
				public getInt(param0: string): number;
				public setPreviewSize(param0: number, param1: number): void;
				public getPreviewSize(): android.hardware.Camera.Size;
				public getSupportedPreviewSizes(): java.util.List;
				public getSupportedVideoSizes(): java.util.List;
				public getPreferredPreviewSizeForVideo(): android.hardware.Camera.Size;
				public setJpegThumbnailSize(param0: number, param1: number): void;
				public getJpegThumbnailSize(): android.hardware.Camera.Size;
				public getSupportedJpegThumbnailSizes(): java.util.List;
				public setJpegThumbnailQuality(param0: number): void;
				public getJpegThumbnailQuality(): number;
				public setJpegQuality(param0: number): void;
				public getJpegQuality(): number;
				public setPreviewFrameRate(param0: number): void;
				public getPreviewFrameRate(): number;
				public getSupportedPreviewFrameRates(): java.util.List;
				public setPreviewFpsRange(param0: number, param1: number): void;
				public getPreviewFpsRange(param0: native.Array<number>): void;
				public getSupportedPreviewFpsRange(): java.util.List;
				public setPreviewFormat(param0: number): void;
				public getPreviewFormat(): number;
				public getSupportedPreviewFormats(): java.util.List;
				public setPictureSize(param0: number, param1: number): void;
				public getPictureSize(): android.hardware.Camera.Size;
				public getSupportedPictureSizes(): java.util.List;
				public setPictureFormat(param0: number): void;
				public getPictureFormat(): number;
				public getSupportedPictureFormats(): java.util.List;
				public setRotation(param0: number): void;
				public setGpsLatitude(param0: number): void;
				public setGpsLongitude(param0: number): void;
				public setGpsAltitude(param0: number): void;
				public setGpsTimestamp(param0: number): void;
				public setGpsProcessingMethod(param0: string): void;
				public removeGpsData(): void;
				public getWhiteBalance(): string;
				public setWhiteBalance(param0: string): void;
				public getSupportedWhiteBalance(): java.util.List;
				public getColorEffect(): string;
				public setColorEffect(param0: string): void;
				public getSupportedColorEffects(): java.util.List;
				public getAntibanding(): string;
				public setAntibanding(param0: string): void;
				public getSupportedAntibanding(): java.util.List;
				public getSceneMode(): string;
				public setSceneMode(param0: string): void;
				public getSupportedSceneModes(): java.util.List;
				public getFlashMode(): string;
				public setFlashMode(param0: string): void;
				public getSupportedFlashModes(): java.util.List;
				public getFocusMode(): string;
				public setFocusMode(param0: string): void;
				public getSupportedFocusModes(): java.util.List;
				public getFocalLength(): number;
				public getHorizontalViewAngle(): number;
				public getVerticalViewAngle(): number;
				public getExposureCompensation(): number;
				public setExposureCompensation(param0: number): void;
				public getMaxExposureCompensation(): number;
				public getMinExposureCompensation(): number;
				public getExposureCompensationStep(): number;
				public setAutoExposureLock(param0: boolean): void;
				public getAutoExposureLock(): boolean;
				public isAutoExposureLockSupported(): boolean;
				public setAutoWhiteBalanceLock(param0: boolean): void;
				public getAutoWhiteBalanceLock(): boolean;
				public isAutoWhiteBalanceLockSupported(): boolean;
				public getZoom(): number;
				public setZoom(param0: number): void;
				public isZoomSupported(): boolean;
				public getMaxZoom(): number;
				public getZoomRatios(): java.util.List;
				public isSmoothZoomSupported(): boolean;
				public getFocusDistances(param0: native.Array<number>): void;
				public getMaxNumFocusAreas(): number;
				public getFocusAreas(): java.util.List;
				public setFocusAreas(param0: java.util.List): void;
				public getMaxNumMeteringAreas(): number;
				public getMeteringAreas(): java.util.List;
				public setMeteringAreas(param0: java.util.List): void;
				public getMaxNumDetectedFaces(): number;
				public setRecordingHint(param0: boolean): void;
				public isVideoSnapshotSupported(): boolean;
				public setVideoStabilization(param0: boolean): void;
				public getVideoStabilization(): boolean;
				public isVideoStabilizationSupported(): boolean;
				public static ANTIBANDING_50HZ: string;
				public static ANTIBANDING_60HZ: string;
				public static ANTIBANDING_AUTO: string;
				public static ANTIBANDING_OFF: string;
				public static EFFECT_AQUA: string;
				public static EFFECT_BLACKBOARD: string;
				public static EFFECT_MONO: string;
				public static EFFECT_NEGATIVE: string;
				public static EFFECT_NONE: string;
				public static EFFECT_POSTERIZE: string;
				public static EFFECT_SEPIA: string;
				public static EFFECT_SOLARIZE: string;
				public static EFFECT_WHITEBOARD: string;
				public static FLASH_MODE_AUTO: string;
				public static FLASH_MODE_OFF: string;
				public static FLASH_MODE_ON: string;
				public static FLASH_MODE_RED_EYE: string;
				public static FLASH_MODE_TORCH: string;
				public static FOCUS_DISTANCE_FAR_INDEX: number;
				public static FOCUS_DISTANCE_NEAR_INDEX: number;
				public static FOCUS_DISTANCE_OPTIMAL_INDEX: number;
				public static FOCUS_MODE_AUTO: string;
				public static FOCUS_MODE_CONTINUOUS_PICTURE: string;
				public static FOCUS_MODE_CONTINUOUS_VIDEO: string;
				public static FOCUS_MODE_EDOF: string;
				public static FOCUS_MODE_FIXED: string;
				public static FOCUS_MODE_INFINITY: string;
				public static FOCUS_MODE_MACRO: string;
				public static PREVIEW_FPS_MAX_INDEX: number;
				public static PREVIEW_FPS_MIN_INDEX: number;
				public static SCENE_MODE_ACTION: string;
				public static SCENE_MODE_AUTO: string;
				public static SCENE_MODE_BARCODE: string;
				public static SCENE_MODE_BEACH: string;
				public static SCENE_MODE_CANDLELIGHT: string;
				public static SCENE_MODE_FIREWORKS: string;
				public static SCENE_MODE_HDR: string;
				public static SCENE_MODE_LANDSCAPE: string;
				public static SCENE_MODE_NIGHT: string;
				public static SCENE_MODE_NIGHT_PORTRAIT: string;
				public static SCENE_MODE_PARTY: string;
				public static SCENE_MODE_PORTRAIT: string;
				public static SCENE_MODE_SNOW: string;
				public static SCENE_MODE_SPORTS: string;
				public static SCENE_MODE_STEADYPHOTO: string;
				public static SCENE_MODE_SUNSET: string;
				public static SCENE_MODE_THEATRE: string;
				public static WHITE_BALANCE_AUTO: string;
				public static WHITE_BALANCE_CLOUDY_DAYLIGHT: string;
				public static WHITE_BALANCE_DAYLIGHT: string;
				public static WHITE_BALANCE_FLUORESCENT: string;
				public static WHITE_BALANCE_INCANDESCENT: string;
				public static WHITE_BALANCE_SHADE: string;
				public static WHITE_BALANCE_TWILIGHT: string;
				public static WHITE_BALANCE_WARM_FLUORESCENT: string;
			}
			export class PictureCallback {
				public onPictureTaken(param0: native.Array<number>, param1: android.hardware.Camera): void;
			}
			export class PreviewCallback {
				public onPreviewFrame(param0: native.Array<number>, param1: android.hardware.Camera): void;
			}
			export class ShutterCallback {
				public onShutter(): void;
			}
			export class Size {
				public constructor();
				public constructor(param0: android.hardware.Camera, param1: number, param2: number);
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public height: number;
				public width: number;
			}
		}
	}
}
