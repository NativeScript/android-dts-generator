/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.media.AudioDeviceCallback.d.ts" />
/// <reference path="./android.media.AudioDeviceInfo.d.ts" />
/// <reference path="./android.media.RemoteControlClient.d.ts" />
/// <reference path="./android.media.RemoteController.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class AudioManager {
			public dispatchMediaKeyEvent(param0: android.view.KeyEvent): void;
			public isVolumeFixed(): boolean;
			public adjustStreamVolume(param0: number, param1: number, param2: number): void;
			public adjustVolume(param0: number, param1: number): void;
			public adjustSuggestedStreamVolume(param0: number, param1: number, param2: number): void;
			public getRingerMode(): number;
			public getStreamMaxVolume(param0: number): number;
			public getStreamVolume(param0: number): number;
			public setRingerMode(param0: number): void;
			public setStreamVolume(param0: number, param1: number, param2: number): void;
			public setStreamSolo(param0: number, param1: boolean): void;
			public setStreamMute(param0: number, param1: boolean): void;
			public isStreamMute(param0: number): boolean;
			public shouldVibrate(param0: number): boolean;
			public getVibrateSetting(param0: number): number;
			public setVibrateSetting(param0: number, param1: number): void;
			public setSpeakerphoneOn(param0: boolean): void;
			public isSpeakerphoneOn(): boolean;
			public isBluetoothScoAvailableOffCall(): boolean;
			public startBluetoothSco(): void;
			public stopBluetoothSco(): void;
			public setBluetoothScoOn(param0: boolean): void;
			public isBluetoothScoOn(): boolean;
			public setBluetoothA2dpOn(param0: boolean): void;
			public isBluetoothA2dpOn(): boolean;
			public setWiredHeadsetOn(param0: boolean): void;
			public isWiredHeadsetOn(): boolean;
			public setMicrophoneMute(param0: boolean): void;
			public isMicrophoneMute(): boolean;
			public setMode(param0: number): void;
			public getMode(): number;
			public setRouting(param0: number, param1: number, param2: number): void;
			public getRouting(param0: number): number;
			public isMusicActive(): boolean;
			public generateAudioSessionId(): number;
			public setParameters(param0: string): void;
			public getParameters(param0: string): string;
			public playSoundEffect(param0: number): void;
			public playSoundEffect(param0: number, param1: number): void;
			public loadSoundEffects(): void;
			public unloadSoundEffects(): void;
			public requestAudioFocus(param0: android.media.AudioManager.OnAudioFocusChangeListener, param1: number, param2: number): number;
			public abandonAudioFocus(param0: android.media.AudioManager.OnAudioFocusChangeListener): number;
			public registerMediaButtonEventReceiver(param0: android.content.ComponentName): void;
			public registerMediaButtonEventReceiver(param0: android.app.PendingIntent): void;
			public unregisterMediaButtonEventReceiver(param0: android.content.ComponentName): void;
			public unregisterMediaButtonEventReceiver(param0: android.app.PendingIntent): void;
			public registerRemoteControlClient(param0: android.media.RemoteControlClient): void;
			public unregisterRemoteControlClient(param0: android.media.RemoteControlClient): void;
			public registerRemoteController(param0: android.media.RemoteController): boolean;
			public unregisterRemoteController(param0: android.media.RemoteController): void;
			public getProperty(param0: string): string;
			public getDevices(param0: number): native.Array<android.media.AudioDeviceInfo>;
			public registerAudioDeviceCallback(param0: android.media.AudioDeviceCallback, param1: android.os.Handler): void;
			public unregisterAudioDeviceCallback(param0: android.media.AudioDeviceCallback): void;
			public static ACTION_AUDIO_BECOMING_NOISY: string;
			public static ACTION_HDMI_AUDIO_PLUG: string;
			public static ACTION_HEADSET_PLUG: string;
			public static ACTION_SCO_AUDIO_STATE_CHANGED: string;
			public static ACTION_SCO_AUDIO_STATE_UPDATED: string;
			public static ADJUST_LOWER: number;
			public static ADJUST_MUTE: number;
			public static ADJUST_RAISE: number;
			public static ADJUST_SAME: number;
			public static ADJUST_TOGGLE_MUTE: number;
			public static ADJUST_UNMUTE: number;
			public static AUDIOFOCUS_GAIN: number;
			public static AUDIOFOCUS_GAIN_TRANSIENT: number;
			public static AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE: number;
			public static AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK: number;
			public static AUDIOFOCUS_LOSS: number;
			public static AUDIOFOCUS_LOSS_TRANSIENT: number;
			public static AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK: number;
			public static AUDIOFOCUS_REQUEST_FAILED: number;
			public static AUDIOFOCUS_REQUEST_GRANTED: number;
			public static AUDIO_SESSION_ID_GENERATE: number;
			public static ERROR: number;
			public static ERROR_DEAD_OBJECT: number;
			public static EXTRA_AUDIO_PLUG_STATE: string;
			public static EXTRA_ENCODINGS: string;
			public static EXTRA_MAX_CHANNEL_COUNT: string;
			public static EXTRA_RINGER_MODE: string;
			public static EXTRA_SCO_AUDIO_PREVIOUS_STATE: string;
			public static EXTRA_SCO_AUDIO_STATE: string;
			public static EXTRA_VIBRATE_SETTING: string;
			public static EXTRA_VIBRATE_TYPE: string;
			public static FLAG_ALLOW_RINGER_MODES: number;
			public static FLAG_PLAY_SOUND: number;
			public static FLAG_REMOVE_SOUND_AND_VIBRATE: number;
			public static FLAG_SHOW_UI: number;
			public static FLAG_VIBRATE: number;
			public static FX_FOCUS_NAVIGATION_DOWN: number;
			public static FX_FOCUS_NAVIGATION_LEFT: number;
			public static FX_FOCUS_NAVIGATION_RIGHT: number;
			public static FX_FOCUS_NAVIGATION_UP: number;
			public static FX_KEYPRESS_DELETE: number;
			public static FX_KEYPRESS_INVALID: number;
			public static FX_KEYPRESS_RETURN: number;
			public static FX_KEYPRESS_SPACEBAR: number;
			public static FX_KEYPRESS_STANDARD: number;
			public static FX_KEY_CLICK: number;
			public static GET_DEVICES_ALL: number;
			public static GET_DEVICES_INPUTS: number;
			public static GET_DEVICES_OUTPUTS: number;
			public static MODE_CURRENT: number;
			public static MODE_INVALID: number;
			public static MODE_IN_CALL: number;
			public static MODE_IN_COMMUNICATION: number;
			public static MODE_NORMAL: number;
			public static MODE_RINGTONE: number;
			public static NUM_STREAMS: number;
			public static PROPERTY_OUTPUT_FRAMES_PER_BUFFER: string;
			public static PROPERTY_OUTPUT_SAMPLE_RATE: string;
			public static PROPERTY_SUPPORT_MIC_NEAR_ULTRASOUND: string;
			public static PROPERTY_SUPPORT_SPEAKER_NEAR_ULTRASOUND: string;
			public static RINGER_MODE_CHANGED_ACTION: string;
			public static RINGER_MODE_NORMAL: number;
			public static RINGER_MODE_SILENT: number;
			public static RINGER_MODE_VIBRATE: number;
			public static ROUTE_ALL: number;
			public static ROUTE_BLUETOOTH: number;
			public static ROUTE_BLUETOOTH_A2DP: number;
			public static ROUTE_BLUETOOTH_SCO: number;
			public static ROUTE_EARPIECE: number;
			public static ROUTE_HEADSET: number;
			public static ROUTE_SPEAKER: number;
			public static SCO_AUDIO_STATE_CONNECTED: number;
			public static SCO_AUDIO_STATE_CONNECTING: number;
			public static SCO_AUDIO_STATE_DISCONNECTED: number;
			public static SCO_AUDIO_STATE_ERROR: number;
			public static STREAM_ALARM: number;
			public static STREAM_DTMF: number;
			public static STREAM_MUSIC: number;
			public static STREAM_NOTIFICATION: number;
			public static STREAM_RING: number;
			public static STREAM_SYSTEM: number;
			public static STREAM_VOICE_CALL: number;
			public static USE_DEFAULT_STREAM_TYPE: number;
			public static VIBRATE_SETTING_CHANGED_ACTION: string;
			public static VIBRATE_SETTING_OFF: number;
			public static VIBRATE_SETTING_ON: number;
			public static VIBRATE_SETTING_ONLY_SILENT: number;
			public static VIBRATE_TYPE_NOTIFICATION: number;
			public static VIBRATE_TYPE_RINGER: number;
		}
		export module AudioManager {
			export class OnAudioFocusChangeListener {
				public onAudioFocusChange(param0: number): void;
			}
		}
	}
}
