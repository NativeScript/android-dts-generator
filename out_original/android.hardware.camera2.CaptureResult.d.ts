/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CaptureResult {
				public get(param0: android.hardware.camera2.CaptureResult.Key): java.lang.Object;
				public getKeys(): java.util.List;
				public getRequest(): android.hardware.camera2.CaptureRequest;
				public getFrameNumber(): number;
				public getSequenceId(): number;
				public static BLACK_LEVEL_LOCK: android.hardware.camera2.CaptureResult.Key;
				public static COLOR_CORRECTION_ABERRATION_MODE: android.hardware.camera2.CaptureResult.Key;
				public static COLOR_CORRECTION_GAINS: android.hardware.camera2.CaptureResult.Key;
				public static COLOR_CORRECTION_MODE: android.hardware.camera2.CaptureResult.Key;
				public static COLOR_CORRECTION_TRANSFORM: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_ANTIBANDING_MODE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_EXPOSURE_COMPENSATION: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_LOCK: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_MODE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_PRECAPTURE_TRIGGER: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_REGIONS: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_STATE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AE_TARGET_FPS_RANGE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AF_MODE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AF_REGIONS: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AF_STATE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AF_TRIGGER: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AWB_LOCK: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AWB_MODE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AWB_REGIONS: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_AWB_STATE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_CAPTURE_INTENT: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_EFFECT_MODE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_MODE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_SCENE_MODE: android.hardware.camera2.CaptureResult.Key;
				public static CONTROL_VIDEO_STABILIZATION_MODE: android.hardware.camera2.CaptureResult.Key;
				public static EDGE_MODE: android.hardware.camera2.CaptureResult.Key;
				public static FLASH_MODE: android.hardware.camera2.CaptureResult.Key;
				public static FLASH_STATE: android.hardware.camera2.CaptureResult.Key;
				public static HOT_PIXEL_MODE: android.hardware.camera2.CaptureResult.Key;
				public static JPEG_GPS_LOCATION: android.hardware.camera2.CaptureResult.Key;
				public static JPEG_ORIENTATION: android.hardware.camera2.CaptureResult.Key;
				public static JPEG_QUALITY: android.hardware.camera2.CaptureResult.Key;
				public static JPEG_THUMBNAIL_QUALITY: android.hardware.camera2.CaptureResult.Key;
				public static JPEG_THUMBNAIL_SIZE: android.hardware.camera2.CaptureResult.Key;
				public static LENS_APERTURE: android.hardware.camera2.CaptureResult.Key;
				public static LENS_FILTER_DENSITY: android.hardware.camera2.CaptureResult.Key;
				public static LENS_FOCAL_LENGTH: android.hardware.camera2.CaptureResult.Key;
				public static LENS_FOCUS_DISTANCE: android.hardware.camera2.CaptureResult.Key;
				public static LENS_FOCUS_RANGE: android.hardware.camera2.CaptureResult.Key;
				public static LENS_INTRINSIC_CALIBRATION: android.hardware.camera2.CaptureResult.Key;
				public static LENS_OPTICAL_STABILIZATION_MODE: android.hardware.camera2.CaptureResult.Key;
				public static LENS_POSE_ROTATION: android.hardware.camera2.CaptureResult.Key;
				public static LENS_POSE_TRANSLATION: android.hardware.camera2.CaptureResult.Key;
				public static LENS_RADIAL_DISTORTION: android.hardware.camera2.CaptureResult.Key;
				public static LENS_STATE: android.hardware.camera2.CaptureResult.Key;
				public static NOISE_REDUCTION_MODE: android.hardware.camera2.CaptureResult.Key;
				public static REPROCESS_EFFECTIVE_EXPOSURE_FACTOR: android.hardware.camera2.CaptureResult.Key;
				public static REQUEST_PIPELINE_DEPTH: android.hardware.camera2.CaptureResult.Key;
				public static SCALER_CROP_REGION: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_EXPOSURE_TIME: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_FRAME_DURATION: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_GREEN_SPLIT: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_NEUTRAL_COLOR_POINT: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_NOISE_PROFILE: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_ROLLING_SHUTTER_SKEW: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_SENSITIVITY: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_TEST_PATTERN_DATA: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_TEST_PATTERN_MODE: android.hardware.camera2.CaptureResult.Key;
				public static SENSOR_TIMESTAMP: android.hardware.camera2.CaptureResult.Key;
				public static SHADING_MODE: android.hardware.camera2.CaptureResult.Key;
				public static STATISTICS_FACES: android.hardware.camera2.CaptureResult.Key;
				public static STATISTICS_FACE_DETECT_MODE: android.hardware.camera2.CaptureResult.Key;
				public static STATISTICS_HOT_PIXEL_MAP: android.hardware.camera2.CaptureResult.Key;
				public static STATISTICS_HOT_PIXEL_MAP_MODE: android.hardware.camera2.CaptureResult.Key;
				public static STATISTICS_LENS_SHADING_CORRECTION_MAP: android.hardware.camera2.CaptureResult.Key;
				public static STATISTICS_LENS_SHADING_MAP_MODE: android.hardware.camera2.CaptureResult.Key;
				public static STATISTICS_SCENE_FLICKER: android.hardware.camera2.CaptureResult.Key;
				public static TONEMAP_CURVE: android.hardware.camera2.CaptureResult.Key;
				public static TONEMAP_GAMMA: android.hardware.camera2.CaptureResult.Key;
				public static TONEMAP_MODE: android.hardware.camera2.CaptureResult.Key;
				public static TONEMAP_PRESET_CURVE: android.hardware.camera2.CaptureResult.Key;
			}
			export module CaptureResult {
				export class Key {
					public getName(): string;
					public hashCode(): number;
					public equals(param0: java.lang.Object): boolean;
					public toString(): string;
				}
			}
		}
	}
}
