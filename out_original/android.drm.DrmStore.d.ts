/// <reference path="./_helpers.d.ts" />

declare module android {
	export module drm {
		export class DrmStore {
			public constructor();
		}
		export module DrmStore {
			export class Action {
				public constructor();
				public static DEFAULT: number;
				public static DISPLAY: number;
				public static EXECUTE: number;
				public static OUTPUT: number;
				public static PLAY: number;
				public static PREVIEW: number;
				public static RINGTONE: number;
				public static TRANSFER: number;
			}
			export class ConstraintsColumns {
				public static EXTENDED_METADATA: string;
				public static LICENSE_AVAILABLE_TIME: string;
				public static LICENSE_EXPIRY_TIME: string;
				public static LICENSE_START_TIME: string;
				public static MAX_REPEAT_COUNT: string;
				public static REMAINING_REPEAT_COUNT: string;
			}
			export class DrmObjectType {
				public constructor();
				public static CONTENT: number;
				public static RIGHTS_OBJECT: number;
				public static TRIGGER_OBJECT: number;
				public static UNKNOWN: number;
			}
			export class Playback {
				public constructor();
				public static PAUSE: number;
				public static RESUME: number;
				public static START: number;
				public static STOP: number;
			}
			export class RightsStatus {
				public constructor();
				public static RIGHTS_EXPIRED: number;
				public static RIGHTS_INVALID: number;
				public static RIGHTS_NOT_ACQUIRED: number;
				public static RIGHTS_VALID: number;
			}
		}
	}
}
