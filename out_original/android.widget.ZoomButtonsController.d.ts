/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module widget {
		export class ZoomButtonsController {
			public constructor();
			public constructor(param0: android.view.View);
			public setZoomInEnabled(param0: boolean): void;
			public setZoomOutEnabled(param0: boolean): void;
			public setZoomSpeed(param0: number): void;
			public setOnZoomListener(param0: android.widget.ZoomButtonsController.OnZoomListener): void;
			public setFocusable(param0: boolean): void;
			public isAutoDismissed(): boolean;
			public setAutoDismissed(param0: boolean): void;
			public isVisible(): boolean;
			public setVisible(param0: boolean): void;
			public getContainer(): android.view.ViewGroup;
			public getZoomControls(): android.view.View;
			public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
		}
		export module ZoomButtonsController {
			export class OnZoomListener {
				public onVisibilityChanged(param0: boolean): void;
				public onZoom(param0: boolean): void;
			}
		}
	}
}
