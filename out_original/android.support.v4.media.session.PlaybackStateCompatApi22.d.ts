/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class PlaybackStateCompatApi22 {
						public static getExtras(param0: java.lang.Object): android.os.Bundle;
						public static newInstance(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: number, param7: java.util.List, param8: number, param9: android.os.Bundle): java.lang.Object;
					}
				}
			}
		}
	}
}
