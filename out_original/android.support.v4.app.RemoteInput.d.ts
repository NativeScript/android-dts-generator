/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class RemoteInput {
					public getResultKey(): string;
					public getLabel(): string;
					public getChoices(): native.Array<java.lang.CharSequence>;
					public getAllowFreeFormInput(): boolean;
					public getExtras(): android.os.Bundle;
					public static getResultsFromIntent(param0: android.content.Intent): android.os.Bundle;
					public static addResultsToIntent(param0: native.Array<android.support.v4.app.RemoteInput>, param1: android.content.Intent, param2: android.os.Bundle): void;
					public static RESULTS_CLIP_LABEL: string;
					public static EXTRA_RESULTS_DATA: string;
					public static FACTORY: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory;
				}
				export module RemoteInput {
					export class Builder {
						public constructor();
						public constructor(param0: string);
						public setLabel(param0: string): android.support.v4.app.RemoteInput.Builder;
						public setChoices(param0: native.Array<java.lang.CharSequence>): android.support.v4.app.RemoteInput.Builder;
						public setAllowFreeFormInput(param0: boolean): android.support.v4.app.RemoteInput.Builder;
						public addExtras(param0: android.os.Bundle): android.support.v4.app.RemoteInput.Builder;
						public getExtras(): android.os.Bundle;
						public build(): android.support.v4.app.RemoteInput;
					}
					export class Impl {
						public getResultsFromIntent(param0: android.content.Intent): android.os.Bundle;
						public addResultsToIntent(param0: native.Array<android.support.v4.app.RemoteInput>, param1: android.content.Intent, param2: android.os.Bundle): void;
					}
					export class ImplApi20 {
						public getResultsFromIntent(param0: android.content.Intent): android.os.Bundle;
						public addResultsToIntent(param0: native.Array<android.support.v4.app.RemoteInput>, param1: android.content.Intent, param2: android.os.Bundle): void;
					}
					export class ImplBase {
						public getResultsFromIntent(param0: android.content.Intent): android.os.Bundle;
						public addResultsToIntent(param0: native.Array<android.support.v4.app.RemoteInput>, param1: android.content.Intent, param2: android.os.Bundle): void;
					}
					export class ImplJellybean {
						public getResultsFromIntent(param0: android.content.Intent): android.os.Bundle;
						public addResultsToIntent(param0: native.Array<android.support.v4.app.RemoteInput>, param1: android.content.Intent, param2: android.os.Bundle): void;
					}
				}
			}
		}
	}
}
