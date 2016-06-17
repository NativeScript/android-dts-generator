/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />

declare module android {
	export module widget {
		export class EdgeEffect {
			public constructor();
			public constructor(param0: android.content.Context);
			public setSize(param0: number, param1: number): void;
			public isFinished(): boolean;
			public finish(): void;
			public onPull(param0: number): void;
			public onPull(param0: number, param1: number): void;
			public onRelease(): void;
			public onAbsorb(param0: number): void;
			public setColor(param0: number): void;
			public getColor(): number;
			public draw(param0: android.graphics.Canvas): boolean;
			public getMaxHeight(): number;
		}
	}
}
