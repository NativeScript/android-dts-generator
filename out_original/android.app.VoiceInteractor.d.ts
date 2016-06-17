/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class VoiceInteractor {
			public submitRequest(param0: android.app.VoiceInteractor.Request): boolean;
			public submitRequest(param0: android.app.VoiceInteractor.Request, param1: string): boolean;
			public getActiveRequests(): native.Array<android.app.VoiceInteractor.Request>;
			public getActiveRequest(param0: string): android.app.VoiceInteractor.Request;
			public supportsCommands(param0: native.Array<string>): native.Array<boolean>;
		}
		export module VoiceInteractor {
			export class AbortVoiceRequest {
				public constructor();
				public constructor(param0: android.app.VoiceInteractor.Prompt, param1: android.os.Bundle);
				public onAbortResult(param0: android.os.Bundle): void;
			}
			export class CommandRequest {
				public constructor();
				public constructor(param0: string, param1: android.os.Bundle);
				public onCommandResult(param0: boolean, param1: android.os.Bundle): void;
			}
			export class CompleteVoiceRequest {
				public constructor();
				public constructor(param0: android.app.VoiceInteractor.Prompt, param1: android.os.Bundle);
				public onCompleteResult(param0: android.os.Bundle): void;
			}
			export class ConfirmationRequest {
				public constructor();
				public constructor(param0: android.app.VoiceInteractor.Prompt, param1: android.os.Bundle);
				public onConfirmationResult(param0: boolean, param1: android.os.Bundle): void;
			}
			export class PickOptionRequest {
				public constructor();
				public constructor(param0: android.app.VoiceInteractor.Prompt, param1: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param2: android.os.Bundle);
				public onPickOptionResult(param0: boolean, param1: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param2: android.os.Bundle): void;
			}
			export module PickOptionRequest {
				export class Option {
					public constructor();
					public constructor(param0: string, param1: number);
					public addSynonym(param0: string): android.app.VoiceInteractor.PickOptionRequest.Option;
					public getLabel(): string;
					public getIndex(): number;
					public countSynonyms(): number;
					public getSynonymAt(param0: number): string;
					public setExtras(param0: android.os.Bundle): void;
					public getExtras(): android.os.Bundle;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
			}
			export class Prompt {
				public constructor();
				public constructor(param0: native.Array<java.lang.CharSequence>, param1: string);
				public constructor(param0: string);
				public getVoicePromptAt(param0: number): string;
				public countVoicePrompts(): number;
				public getVisualPrompt(): string;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export class Request {
				public getName(): string;
				public cancel(): void;
				public getContext(): android.content.Context;
				public getActivity(): android.app.Activity;
				public onCancel(): void;
				public onAttached(param0: android.app.Activity): void;
				public onDetached(): void;
				public toString(): string;
			}
		}
	}
}
