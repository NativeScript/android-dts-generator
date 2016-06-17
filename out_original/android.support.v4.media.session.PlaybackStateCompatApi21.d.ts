/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class PlaybackStateCompatApi21 {
						public static getState(param0: java.lang.Object): number;
						public static getPosition(param0: java.lang.Object): number;
						public static getBufferedPosition(param0: java.lang.Object): number;
						public static getPlaybackSpeed(param0: java.lang.Object): number;
						public static getActions(param0: java.lang.Object): number;
						public static getErrorMessage(param0: java.lang.Object): string;
						public static getLastPositionUpdateTime(param0: java.lang.Object): number;
						public static getCustomActions(param0: java.lang.Object): java.util.List;
						public static getActiveQueueItemId(param0: java.lang.Object): number;
						public static newInstance(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: number, param7: java.util.List, param8: number): java.lang.Object;
					}
					export module PlaybackStateCompatApi21 {
						export class CustomAction {
							public static getAction(param0: java.lang.Object): string;
							public static getName(param0: java.lang.Object): string;
							public static getIcon(param0: java.lang.Object): number;
							public static getExtras(param0: java.lang.Object): android.os.Bundle;
							public static newInstance(param0: string, param1: string, param2: number, param3: android.os.Bundle): java.lang.Object;
						}
					}
				}
			}
		}
	}
}
