/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class SharedElementCallback {
					public constructor();
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
