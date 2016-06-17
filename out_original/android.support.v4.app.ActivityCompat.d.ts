/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.app.SharedElementCallback.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityCompat {
					public constructor();
					public static invalidateOptionsMenu(param0: android.app.Activity): boolean;
					public static startActivity(param0: android.app.Activity, param1: android.content.Intent, param2: android.os.Bundle): void;
					public static startActivityForResult(param0: android.app.Activity, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
					public static finishAffinity(param0: android.app.Activity): void;
					public static finishAfterTransition(param0: android.app.Activity): void;
					public getReferrer(param0: android.app.Activity): android.net.Uri;
					public static setEnterSharedElementCallback(param0: android.app.Activity, param1: android.support.v4.app.SharedElementCallback): void;
					public static setExitSharedElementCallback(param0: android.app.Activity, param1: android.support.v4.app.SharedElementCallback): void;
					public static postponeEnterTransition(param0: android.app.Activity): void;
					public static startPostponedEnterTransition(param0: android.app.Activity): void;
					public static requestPermissions(param0: android.app.Activity, param1: native.Array<string>, param2: number): void;
					public static shouldShowRequestPermissionRationale(param0: android.app.Activity, param1: string): boolean;
				}
				export module ActivityCompat {
					export class OnRequestPermissionsResultCallback {
						public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					}
					export class SharedElementCallback21Impl {
						public constructor();
						public constructor(param0: android.support.v4.app.SharedElementCallback);
						public onSharedElementStart(param0: java.util.List, param1: java.util.List, param2: java.util.List): void;
						public onSharedElementEnd(param0: java.util.List, param1: java.util.List, param2: java.util.List): void;
						public onRejectSharedElements(param0: java.util.List): void;
						public onMapSharedElements(param0: java.util.List, param1: java.util.Map): void;
						public onCaptureSharedElementSnapshot(param0: android.view.View, param1: android.graphics.Matrix, param2: android.graphics.RectF): android.os.Parcelable;
						public onCreateSnapshotView(param0: android.content.Context, param1: android.os.Parcelable): android.view.View;
					}
				}
			}
		}
	}
}
