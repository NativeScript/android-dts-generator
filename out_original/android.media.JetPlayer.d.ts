/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class JetPlayer {
			public static getJetPlayer(): android.media.JetPlayer;
			public clone(): java.lang.Object;
			public finalize(): void;
			public release(): void;
			public static getMaxTracks(): number;
			public loadJetFile(param0: string): boolean;
			public loadJetFile(param0: android.content.res.AssetFileDescriptor): boolean;
			public closeJetFile(): boolean;
			public play(): boolean;
			public pause(): boolean;
			public queueJetSegment(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
			public queueJetSegmentMuteArray(param0: number, param1: number, param2: number, param3: number, param4: native.Array<boolean>, param5: number): boolean;
			public setMuteFlags(param0: number, param1: boolean): boolean;
			public setMuteArray(param0: native.Array<boolean>, param1: boolean): boolean;
			public setMuteFlag(param0: number, param1: boolean, param2: boolean): boolean;
			public triggerClip(param0: number): boolean;
			public clearQueue(): boolean;
			public setEventListener(param0: android.media.JetPlayer.OnJetEventListener): void;
			public setEventListener(param0: android.media.JetPlayer.OnJetEventListener, param1: android.os.Handler): void;
		}
		export module JetPlayer {
			export class OnJetEventListener {
				public onJetEvent(param0: android.media.JetPlayer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onJetUserIdUpdate(param0: android.media.JetPlayer, param1: number, param2: number): void;
				public onJetNumQueuedSegmentUpdate(param0: android.media.JetPlayer, param1: number): void;
				public onJetPauseUpdate(param0: android.media.JetPlayer, param1: number): void;
			}
		}
	}
}
