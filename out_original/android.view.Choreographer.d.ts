/// <reference path="./_helpers.d.ts" />

declare module android {
	export module view {
		export class Choreographer {
			public static getInstance(): android.view.Choreographer;
			public postFrameCallback(param0: android.view.Choreographer.FrameCallback): void;
			public postFrameCallbackDelayed(param0: android.view.Choreographer.FrameCallback, param1: number): void;
			public removeFrameCallback(param0: android.view.Choreographer.FrameCallback): void;
		}
		export module Choreographer {
			export class FrameCallback {
				public doFrame(param0: number): void;
			}
		}
	}
}
