/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.app.RemoteInput.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module app {
		export class Notification {
			public constructor();
			public constructor(param0: number, param1: string, param2: number);
			public constructor(param0: android.os.Parcel);
			public getGroup(): string;
			public getSortKey(): string;
			public clone(): java.lang.Object;
			public clone(): android.app.Notification;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public getSmallIcon(): android.graphics.drawable.Icon;
			public getLargeIcon(): android.graphics.drawable.Icon;
			public static AUDIO_ATTRIBUTES_DEFAULT: android.media.AudioAttributes;
			public static CATEGORY_ALARM: string;
			public static CATEGORY_CALL: string;
			public static CATEGORY_EMAIL: string;
			public static CATEGORY_ERROR: string;
			public static CATEGORY_EVENT: string;
			public static CATEGORY_MESSAGE: string;
			public static CATEGORY_PROGRESS: string;
			public static CATEGORY_PROMO: string;
			public static CATEGORY_RECOMMENDATION: string;
			public static CATEGORY_REMINDER: string;
			public static CATEGORY_SERVICE: string;
			public static CATEGORY_SOCIAL: string;
			public static CATEGORY_STATUS: string;
			public static CATEGORY_SYSTEM: string;
			public static CATEGORY_TRANSPORT: string;
			public static COLOR_DEFAULT: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static DEFAULT_ALL: number;
			public static DEFAULT_LIGHTS: number;
			public static DEFAULT_SOUND: number;
			public static DEFAULT_VIBRATE: number;
			public static EXTRA_BACKGROUND_IMAGE_URI: string;
			public static EXTRA_BIG_TEXT: string;
			public static EXTRA_COMPACT_ACTIONS: string;
			public static EXTRA_INFO_TEXT: string;
			public static EXTRA_LARGE_ICON: string;
			public static EXTRA_LARGE_ICON_BIG: string;
			public static EXTRA_MEDIA_SESSION: string;
			public static EXTRA_PEOPLE: string;
			public static EXTRA_PICTURE: string;
			public static EXTRA_PROGRESS: string;
			public static EXTRA_PROGRESS_INDETERMINATE: string;
			public static EXTRA_PROGRESS_MAX: string;
			public static EXTRA_SHOW_CHRONOMETER: string;
			public static EXTRA_SHOW_WHEN: string;
			public static EXTRA_SMALL_ICON: string;
			public static EXTRA_SUB_TEXT: string;
			public static EXTRA_SUMMARY_TEXT: string;
			public static EXTRA_TEMPLATE: string;
			public static EXTRA_TEXT: string;
			public static EXTRA_TEXT_LINES: string;
			public static EXTRA_TITLE: string;
			public static EXTRA_TITLE_BIG: string;
			public static FLAG_AUTO_CANCEL: number;
			public static FLAG_FOREGROUND_SERVICE: number;
			public static FLAG_GROUP_SUMMARY: number;
			public static FLAG_HIGH_PRIORITY: number;
			public static FLAG_INSISTENT: number;
			public static FLAG_LOCAL_ONLY: number;
			public static FLAG_NO_CLEAR: number;
			public static FLAG_ONGOING_EVENT: number;
			public static FLAG_ONLY_ALERT_ONCE: number;
			public static FLAG_SHOW_LIGHTS: number;
			public static INTENT_CATEGORY_NOTIFICATION_PREFERENCES: string;
			public static PRIORITY_DEFAULT: number;
			public static PRIORITY_HIGH: number;
			public static PRIORITY_LOW: number;
			public static PRIORITY_MAX: number;
			public static PRIORITY_MIN: number;
			public static STREAM_DEFAULT: number;
			public static VISIBILITY_PRIVATE: number;
			public static VISIBILITY_PUBLIC: number;
			public static VISIBILITY_SECRET: number;
			public actions: native.Array<android.app.Notification.Action>;
			public audioAttributes: android.media.AudioAttributes;
			public audioStreamType: number;
			public bigContentView: android.widget.RemoteViews;
			public category: string;
			public color: number;
			public contentIntent: android.app.PendingIntent;
			public contentView: android.widget.RemoteViews;
			public defaults: number;
			public deleteIntent: android.app.PendingIntent;
			public extras: android.os.Bundle;
			public flags: number;
			public fullScreenIntent: android.app.PendingIntent;
			public headsUpContentView: android.widget.RemoteViews;
			public icon: number;
			public iconLevel: number;
			public largeIcon: android.graphics.Bitmap;
			public ledARGB: number;
			public ledOffMS: number;
			public ledOnMS: number;
			public number: number;
			public priority: number;
			public publicVersion: android.app.Notification;
			public sound: android.net.Uri;
			public tickerText: string;
			public tickerView: android.widget.RemoteViews;
			public vibrate: native.Array<number>;
			public visibility: number;
			public when: number;
		}
		export module Notification {
			export class Action {
				public constructor();
				public constructor(param0: number, param1: string, param2: android.app.PendingIntent);
				public getIcon(): android.graphics.drawable.Icon;
				public getExtras(): android.os.Bundle;
				public getRemoteInputs(): native.Array<android.app.RemoteInput>;
				public clone(): java.lang.Object;
				public clone(): android.app.Notification.Action;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public actionIntent: android.app.PendingIntent;
				public icon: number;
				public title: string;
			}
			export module Action {
				export class Builder {
					public constructor();
					public constructor(param0: number, param1: string, param2: android.app.PendingIntent);
					public constructor(param0: android.graphics.drawable.Icon, param1: string, param2: android.app.PendingIntent);
					public constructor(param0: android.app.Notification.Action);
					public addExtras(param0: android.os.Bundle): android.app.Notification.Action.Builder;
					public getExtras(): android.os.Bundle;
					public addRemoteInput(param0: android.app.RemoteInput): android.app.Notification.Action.Builder;
					public extend(param0: android.app.Notification.Action.Extender): android.app.Notification.Action.Builder;
					public build(): android.app.Notification.Action;
				}
				export class Extender {
					public extend(param0: android.app.Notification.Action.Builder): android.app.Notification.Action.Builder;
				}
				export class WearableExtender {
					public constructor();
					public constructor(param0: android.app.Notification.Action);
					public extend(param0: android.app.Notification.Action.Builder): android.app.Notification.Action.Builder;
					public clone(): java.lang.Object;
					public clone(): android.app.Notification.Action.WearableExtender;
					public setAvailableOffline(param0: boolean): android.app.Notification.Action.WearableExtender;
					public isAvailableOffline(): boolean;
					public setInProgressLabel(param0: string): android.app.Notification.Action.WearableExtender;
					public getInProgressLabel(): string;
					public setConfirmLabel(param0: string): android.app.Notification.Action.WearableExtender;
					public getConfirmLabel(): string;
					public setCancelLabel(param0: string): android.app.Notification.Action.WearableExtender;
					public getCancelLabel(): string;
				}
			}
			export class BigPictureStyle {
				public constructor();
				public constructor(param0: android.app.Notification.Builder);
				public setBigContentTitle(param0: string): android.app.Notification.BigPictureStyle;
				public setSummaryText(param0: string): android.app.Notification.BigPictureStyle;
				public bigPicture(param0: android.graphics.Bitmap): android.app.Notification.BigPictureStyle;
				public bigLargeIcon(param0: android.graphics.Bitmap): android.app.Notification.BigPictureStyle;
				public bigLargeIcon(param0: android.graphics.drawable.Icon): android.app.Notification.BigPictureStyle;
			}
			export class BigTextStyle {
				public constructor();
				public constructor(param0: android.app.Notification.Builder);
				public setBigContentTitle(param0: string): android.app.Notification.BigTextStyle;
				public setSummaryText(param0: string): android.app.Notification.BigTextStyle;
				public bigText(param0: string): android.app.Notification.BigTextStyle;
			}
			export class Builder {
				public constructor();
				public constructor(param0: android.content.Context);
				public setWhen(param0: number): android.app.Notification.Builder;
				public setShowWhen(param0: boolean): android.app.Notification.Builder;
				public setUsesChronometer(param0: boolean): android.app.Notification.Builder;
				public setSmallIcon(param0: number): android.app.Notification.Builder;
				public setSmallIcon(param0: number, param1: number): android.app.Notification.Builder;
				public setSmallIcon(param0: android.graphics.drawable.Icon): android.app.Notification.Builder;
				public setContentTitle(param0: string): android.app.Notification.Builder;
				public setContentText(param0: string): android.app.Notification.Builder;
				public setSubText(param0: string): android.app.Notification.Builder;
				public setNumber(param0: number): android.app.Notification.Builder;
				public setContentInfo(param0: string): android.app.Notification.Builder;
				public setProgress(param0: number, param1: number, param2: boolean): android.app.Notification.Builder;
				public setContent(param0: android.widget.RemoteViews): android.app.Notification.Builder;
				public setContentIntent(param0: android.app.PendingIntent): android.app.Notification.Builder;
				public setDeleteIntent(param0: android.app.PendingIntent): android.app.Notification.Builder;
				public setFullScreenIntent(param0: android.app.PendingIntent, param1: boolean): android.app.Notification.Builder;
				public setTicker(param0: string): android.app.Notification.Builder;
				public setTicker(param0: string, param1: android.widget.RemoteViews): android.app.Notification.Builder;
				public setLargeIcon(param0: android.graphics.Bitmap): android.app.Notification.Builder;
				public setLargeIcon(param0: android.graphics.drawable.Icon): android.app.Notification.Builder;
				public setSound(param0: android.net.Uri): android.app.Notification.Builder;
				public setSound(param0: android.net.Uri, param1: number): android.app.Notification.Builder;
				public setSound(param0: android.net.Uri, param1: android.media.AudioAttributes): android.app.Notification.Builder;
				public setVibrate(param0: native.Array<number>): android.app.Notification.Builder;
				public setLights(param0: number, param1: number, param2: number): android.app.Notification.Builder;
				public setOngoing(param0: boolean): android.app.Notification.Builder;
				public setOnlyAlertOnce(param0: boolean): android.app.Notification.Builder;
				public setAutoCancel(param0: boolean): android.app.Notification.Builder;
				public setLocalOnly(param0: boolean): android.app.Notification.Builder;
				public setDefaults(param0: number): android.app.Notification.Builder;
				public setPriority(param0: number): android.app.Notification.Builder;
				public setCategory(param0: string): android.app.Notification.Builder;
				public addPerson(param0: string): android.app.Notification.Builder;
				public setGroup(param0: string): android.app.Notification.Builder;
				public setGroupSummary(param0: boolean): android.app.Notification.Builder;
				public setSortKey(param0: string): android.app.Notification.Builder;
				public addExtras(param0: android.os.Bundle): android.app.Notification.Builder;
				public setExtras(param0: android.os.Bundle): android.app.Notification.Builder;
				public getExtras(): android.os.Bundle;
				public addAction(param0: number, param1: string, param2: android.app.PendingIntent): android.app.Notification.Builder;
				public addAction(param0: android.app.Notification.Action): android.app.Notification.Builder;
				public setStyle(param0: android.app.Notification.Style): android.app.Notification.Builder;
				public setVisibility(param0: number): android.app.Notification.Builder;
				public setPublicVersion(param0: android.app.Notification): android.app.Notification.Builder;
				public extend(param0: android.app.Notification.Extender): android.app.Notification.Builder;
				public setColor(param0: number): android.app.Notification.Builder;
				public getNotification(): android.app.Notification;
				public build(): android.app.Notification;
			}
			export class CarExtender {
				public constructor();
				public constructor(param0: android.app.Notification);
				public extend(param0: android.app.Notification.Builder): android.app.Notification.Builder;
				public setColor(param0: number): android.app.Notification.CarExtender;
				public getColor(): number;
				public setLargeIcon(param0: android.graphics.Bitmap): android.app.Notification.CarExtender;
				public getLargeIcon(): android.graphics.Bitmap;
				public setUnreadConversation(param0: android.app.Notification.CarExtender.UnreadConversation): android.app.Notification.CarExtender;
				public getUnreadConversation(): android.app.Notification.CarExtender.UnreadConversation;
			}
			export module CarExtender {
				export class Builder {
					public constructor();
					public constructor(param0: string);
					public addMessage(param0: string): android.app.Notification.CarExtender.Builder;
					public setReplyAction(param0: android.app.PendingIntent, param1: android.app.RemoteInput): android.app.Notification.CarExtender.Builder;
					public setReadPendingIntent(param0: android.app.PendingIntent): android.app.Notification.CarExtender.Builder;
					public setLatestTimestamp(param0: number): android.app.Notification.CarExtender.Builder;
					public build(): android.app.Notification.CarExtender.UnreadConversation;
				}
				export class UnreadConversation {
					public getMessages(): native.Array<string>;
					public getRemoteInput(): android.app.RemoteInput;
					public getReplyPendingIntent(): android.app.PendingIntent;
					public getReadPendingIntent(): android.app.PendingIntent;
					public getParticipants(): native.Array<string>;
					public getParticipant(): string;
					public getLatestTimestamp(): number;
				}
			}
			export class Extender {
				public extend(param0: android.app.Notification.Builder): android.app.Notification.Builder;
			}
			export class InboxStyle {
				public constructor();
				public constructor(param0: android.app.Notification.Builder);
				public setBigContentTitle(param0: string): android.app.Notification.InboxStyle;
				public setSummaryText(param0: string): android.app.Notification.InboxStyle;
				public addLine(param0: string): android.app.Notification.InboxStyle;
			}
			export class MediaStyle {
				public constructor();
				public constructor(param0: android.app.Notification.Builder);
				public setShowActionsInCompactView(param0: native.Array<number>): android.app.Notification.MediaStyle;
				public setMediaSession(param0: android.media.session.MediaSession.Token): android.app.Notification.MediaStyle;
			}
			export class Style {
				public constructor();
				public internalSetBigContentTitle(param0: string): void;
				public internalSetSummaryText(param0: string): void;
				public setBuilder(param0: android.app.Notification.Builder): void;
				public checkBuilder(): void;
				public getStandardView(param0: number): android.widget.RemoteViews;
				public build(): android.app.Notification;
				public mBuilder: android.app.Notification.Builder;
			}
			export class WearableExtender {
				public constructor();
				public constructor(param0: android.app.Notification);
				public extend(param0: android.app.Notification.Builder): android.app.Notification.Builder;
				public clone(): java.lang.Object;
				public clone(): android.app.Notification.WearableExtender;
				public addAction(param0: android.app.Notification.Action): android.app.Notification.WearableExtender;
				public addActions(param0: java.util.List): android.app.Notification.WearableExtender;
				public clearActions(): android.app.Notification.WearableExtender;
				public getActions(): java.util.List;
				public setDisplayIntent(param0: android.app.PendingIntent): android.app.Notification.WearableExtender;
				public getDisplayIntent(): android.app.PendingIntent;
				public addPage(param0: android.app.Notification): android.app.Notification.WearableExtender;
				public addPages(param0: java.util.List): android.app.Notification.WearableExtender;
				public clearPages(): android.app.Notification.WearableExtender;
				public getPages(): java.util.List;
				public setBackground(param0: android.graphics.Bitmap): android.app.Notification.WearableExtender;
				public getBackground(): android.graphics.Bitmap;
				public setContentIcon(param0: number): android.app.Notification.WearableExtender;
				public getContentIcon(): number;
				public setContentIconGravity(param0: number): android.app.Notification.WearableExtender;
				public getContentIconGravity(): number;
				public setContentAction(param0: number): android.app.Notification.WearableExtender;
				public getContentAction(): number;
				public setGravity(param0: number): android.app.Notification.WearableExtender;
				public getGravity(): number;
				public setCustomSizePreset(param0: number): android.app.Notification.WearableExtender;
				public getCustomSizePreset(): number;
				public setCustomContentHeight(param0: number): android.app.Notification.WearableExtender;
				public getCustomContentHeight(): number;
				public setStartScrollBottom(param0: boolean): android.app.Notification.WearableExtender;
				public getStartScrollBottom(): boolean;
				public setContentIntentAvailableOffline(param0: boolean): android.app.Notification.WearableExtender;
				public getContentIntentAvailableOffline(): boolean;
				public setHintHideIcon(param0: boolean): android.app.Notification.WearableExtender;
				public getHintHideIcon(): boolean;
				public setHintShowBackgroundOnly(param0: boolean): android.app.Notification.WearableExtender;
				public getHintShowBackgroundOnly(): boolean;
				public setHintAvoidBackgroundClipping(param0: boolean): android.app.Notification.WearableExtender;
				public getHintAvoidBackgroundClipping(): boolean;
				public setHintScreenTimeout(param0: number): android.app.Notification.WearableExtender;
				public getHintScreenTimeout(): number;
				public static SCREEN_TIMEOUT_LONG: number;
				public static SCREEN_TIMEOUT_SHORT: number;
				public static SIZE_DEFAULT: number;
				public static SIZE_FULL_SCREEN: number;
				public static SIZE_LARGE: number;
				public static SIZE_MEDIUM: number;
				public static SIZE_SMALL: number;
				public static SIZE_XSMALL: number;
				public static UNSET_ACTION_INDEX: number;
			}
		}
	}
}
