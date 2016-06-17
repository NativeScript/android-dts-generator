/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class TextureView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public isOpaque(): boolean;
			public setOpaque(param0: boolean): void;
			public onAttachedToWindow(): void;
			public setLayerType(param0: number, param1: android.graphics.Paint): void;
			public setLayerPaint(param0: android.graphics.Paint): void;
			public getLayerType(): number;
			public buildLayer(): void;
			public draw(param0: android.graphics.Canvas): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public onVisibilityChanged(param0: android.view.View, param1: number): void;
			public setTransform(param0: android.graphics.Matrix): void;
			public getTransform(param0: android.graphics.Matrix): android.graphics.Matrix;
			public getBitmap(): android.graphics.Bitmap;
			public getBitmap(param0: number, param1: number): android.graphics.Bitmap;
			public getBitmap(param0: android.graphics.Bitmap): android.graphics.Bitmap;
			public isAvailable(): boolean;
			public lockCanvas(): android.graphics.Canvas;
			public lockCanvas(param0: android.graphics.Rect): android.graphics.Canvas;
			public unlockCanvasAndPost(param0: android.graphics.Canvas): void;
			public getSurfaceTexture(): android.graphics.SurfaceTexture;
			public setSurfaceTexture(param0: android.graphics.SurfaceTexture): void;
			public getSurfaceTextureListener(): android.view.TextureView.SurfaceTextureListener;
			public setSurfaceTextureListener(param0: android.view.TextureView.SurfaceTextureListener): void;
		}
		export module TextureView {
			export class SurfaceTextureListener {
				public onSurfaceTextureAvailable(param0: android.graphics.SurfaceTexture, param1: number, param2: number): void;
				public onSurfaceTextureSizeChanged(param0: android.graphics.SurfaceTexture, param1: number, param2: number): void;
				public onSurfaceTextureDestroyed(param0: android.graphics.SurfaceTexture): boolean;
				public onSurfaceTextureUpdated(param0: android.graphics.SurfaceTexture): void;
			}
		}
	}
}
