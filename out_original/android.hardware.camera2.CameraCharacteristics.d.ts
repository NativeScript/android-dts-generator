/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CameraCharacteristics {
				public get(param0: android.hardware.camera2.CameraCharacteristics.Key): java.lang.Object;
				public getKeys(): java.util.List;
				public getAvailableCaptureRequestKeys(): java.util.List;
				public getAvailableCaptureResultKeys(): java.util.List;
				public static COLOR_CORRECTION_AVAILABLE_ABERRATION_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AE_AVAILABLE_ANTIBANDING_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AE_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AE_COMPENSATION_RANGE: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AE_COMPENSATION_STEP: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AE_LOCK_AVAILABLE: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AF_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AVAILABLE_EFFECTS: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AVAILABLE_SCENE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AVAILABLE_VIDEO_STABILIZATION_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AWB_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_AWB_LOCK_AVAILABLE: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_MAX_REGIONS_AE: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_MAX_REGIONS_AF: android.hardware.camera2.CameraCharacteristics.Key;
				public static CONTROL_MAX_REGIONS_AWB: android.hardware.camera2.CameraCharacteristics.Key;
				public static DEPTH_DEPTH_IS_EXCLUSIVE: android.hardware.camera2.CameraCharacteristics.Key;
				public static EDGE_AVAILABLE_EDGE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static FLASH_INFO_AVAILABLE: android.hardware.camera2.CameraCharacteristics.Key;
				public static HOT_PIXEL_AVAILABLE_HOT_PIXEL_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static INFO_SUPPORTED_HARDWARE_LEVEL: android.hardware.camera2.CameraCharacteristics.Key;
				public static JPEG_AVAILABLE_THUMBNAIL_SIZES: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_FACING: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INFO_AVAILABLE_APERTURES: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INFO_AVAILABLE_FILTER_DENSITIES: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INFO_AVAILABLE_FOCAL_LENGTHS: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INFO_AVAILABLE_OPTICAL_STABILIZATION: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INFO_FOCUS_DISTANCE_CALIBRATION: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INFO_HYPERFOCAL_DISTANCE: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INFO_MINIMUM_FOCUS_DISTANCE: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_INTRINSIC_CALIBRATION: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_POSE_ROTATION: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_POSE_TRANSLATION: android.hardware.camera2.CameraCharacteristics.Key;
				public static LENS_RADIAL_DISTORTION: android.hardware.camera2.CameraCharacteristics.Key;
				public static NOISE_REDUCTION_AVAILABLE_NOISE_REDUCTION_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static REPROCESS_MAX_CAPTURE_STALL: android.hardware.camera2.CameraCharacteristics.Key;
				public static REQUEST_AVAILABLE_CAPABILITIES: android.hardware.camera2.CameraCharacteristics.Key;
				public static REQUEST_MAX_NUM_INPUT_STREAMS: android.hardware.camera2.CameraCharacteristics.Key;
				public static REQUEST_MAX_NUM_OUTPUT_PROC: android.hardware.camera2.CameraCharacteristics.Key;
				public static REQUEST_MAX_NUM_OUTPUT_PROC_STALLING: android.hardware.camera2.CameraCharacteristics.Key;
				public static REQUEST_MAX_NUM_OUTPUT_RAW: android.hardware.camera2.CameraCharacteristics.Key;
				public static REQUEST_PARTIAL_RESULT_COUNT: android.hardware.camera2.CameraCharacteristics.Key;
				public static REQUEST_PIPELINE_MAX_DEPTH: android.hardware.camera2.CameraCharacteristics.Key;
				public static SCALER_AVAILABLE_MAX_DIGITAL_ZOOM: android.hardware.camera2.CameraCharacteristics.Key;
				public static SCALER_CROPPING_TYPE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SCALER_STREAM_CONFIGURATION_MAP: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_AVAILABLE_TEST_PATTERN_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_BLACK_LEVEL_PATTERN: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_CALIBRATION_TRANSFORM1: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_CALIBRATION_TRANSFORM2: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_COLOR_TRANSFORM1: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_COLOR_TRANSFORM2: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_FORWARD_MATRIX1: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_FORWARD_MATRIX2: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_ACTIVE_ARRAY_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_COLOR_FILTER_ARRANGEMENT: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_EXPOSURE_TIME_RANGE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_LENS_SHADING_APPLIED: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_MAX_FRAME_DURATION: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_PHYSICAL_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_PIXEL_ARRAY_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_PRE_CORRECTION_ACTIVE_ARRAY_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_SENSITIVITY_RANGE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_TIMESTAMP_SOURCE: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_INFO_WHITE_LEVEL: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_MAX_ANALOG_SENSITIVITY: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_ORIENTATION: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_REFERENCE_ILLUMINANT1: android.hardware.camera2.CameraCharacteristics.Key;
				public static SENSOR_REFERENCE_ILLUMINANT2: android.hardware.camera2.CameraCharacteristics.Key;
				public static SHADING_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static STATISTICS_INFO_AVAILABLE_FACE_DETECT_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static STATISTICS_INFO_AVAILABLE_HOT_PIXEL_MAP_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static STATISTICS_INFO_AVAILABLE_LENS_SHADING_MAP_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static STATISTICS_INFO_MAX_FACE_COUNT: android.hardware.camera2.CameraCharacteristics.Key;
				public static SYNC_MAX_LATENCY: android.hardware.camera2.CameraCharacteristics.Key;
				public static TONEMAP_AVAILABLE_TONE_MAP_MODES: android.hardware.camera2.CameraCharacteristics.Key;
				public static TONEMAP_MAX_CURVE_POINTS: android.hardware.camera2.CameraCharacteristics.Key;
			}
			export module CameraCharacteristics {
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
