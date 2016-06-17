/// <reference path="./_helpers.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class Animatable {
				public start(): void;
				public stop(): void;
				public isRunning(): boolean;
			}
		}
	}
}
