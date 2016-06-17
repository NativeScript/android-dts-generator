/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class EdgeEffectCompat {
					public constructor();
					public constructor(param0: android.content.Context);
					public setSize(param0: number, param1: number): void;
					public isFinished(): boolean;
					public finish(): void;
					public onPull(param0: number): boolean;
					public onPull(param0: number, param1: number): boolean;
					public onRelease(): boolean;
					public onAbsorb(param0: number): boolean;
					public draw(param0: android.graphics.Canvas): boolean;
				}
				export module EdgeEffectCompat {
					export class BaseEdgeEffectImpl {
						public newEdgeEffect(param0: android.content.Context): java.lang.Object;
						public setSize(param0: java.lang.Object, param1: number, param2: number): void;
						public isFinished(param0: java.lang.Object): boolean;
						public finish(param0: java.lang.Object): void;
						public onPull(param0: java.lang.Object, param1: number): boolean;
						public onRelease(param0: java.lang.Object): boolean;
						public onAbsorb(param0: java.lang.Object, param1: number): boolean;
						public draw(param0: java.lang.Object, param1: android.graphics.Canvas): boolean;
						public onPull(param0: java.lang.Object, param1: number, param2: number): boolean;
					}
					export class EdgeEffectIcsImpl {
						public newEdgeEffect(param0: android.content.Context): java.lang.Object;
						public setSize(param0: java.lang.Object, param1: number, param2: number): void;
						public isFinished(param0: java.lang.Object): boolean;
						public finish(param0: java.lang.Object): void;
						public onPull(param0: java.lang.Object, param1: number): boolean;
						public onRelease(param0: java.lang.Object): boolean;
						public onAbsorb(param0: java.lang.Object, param1: number): boolean;
						public draw(param0: java.lang.Object, param1: android.graphics.Canvas): boolean;
						public onPull(param0: java.lang.Object, param1: number, param2: number): boolean;
					}
					export class EdgeEffectImpl {
						public newEdgeEffect(param0: android.content.Context): java.lang.Object;
						public setSize(param0: java.lang.Object, param1: number, param2: number): void;
						public isFinished(param0: java.lang.Object): boolean;
						public finish(param0: java.lang.Object): void;
						public onPull(param0: java.lang.Object, param1: number): boolean;
						public onRelease(param0: java.lang.Object): boolean;
						public onAbsorb(param0: java.lang.Object, param1: number): boolean;
						public draw(param0: java.lang.Object, param1: android.graphics.Canvas): boolean;
						public onPull(param0: java.lang.Object, param1: number, param2: number): boolean;
					}
					export class EdgeEffectLollipopImpl {
						public onPull(param0: java.lang.Object, param1: number): boolean;
						public onPull(param0: java.lang.Object, param1: number, param2: number): boolean;
					}
				}
			}
		}
	}
}
