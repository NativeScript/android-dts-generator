/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.NotificationBuilderWithBuilderAccessor.d.ts" />
/// <reference path="./android.support.v4.app.RemoteInput.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompat {
					public constructor();
					public static getExtras(param0: android.app.Notification): android.os.Bundle;
					public static getActionCount(param0: android.app.Notification): number;
					public static getAction(param0: android.app.Notification, param1: number): android.support.v4.app.NotificationCompat.Action;
					public static getCategory(param0: android.app.Notification): string;
					public static getLocalOnly(param0: android.app.Notification): boolean;
					public static getGroup(param0: android.app.Notification): string;
					public static isGroupSummary(param0: android.app.Notification): boolean;
					public static getSortKey(param0: android.app.Notification): string;
					public static DEFAULT_ALL: number;
					public static DEFAULT_SOUND: number;
					public static DEFAULT_VIBRATE: number;
					public static DEFAULT_LIGHTS: number;
					public static STREAM_DEFAULT: number;
					public static FLAG_SHOW_LIGHTS: number;
					public static FLAG_ONGOING_EVENT: number;
					public static FLAG_INSISTENT: number;
					public static FLAG_ONLY_ALERT_ONCE: number;
					public static FLAG_AUTO_CANCEL: number;
					public static FLAG_NO_CLEAR: number;
					public static FLAG_FOREGROUND_SERVICE: number;
					public static FLAG_HIGH_PRIORITY: number;
					public static FLAG_LOCAL_ONLY: number;
					public static FLAG_GROUP_SUMMARY: number;
					public static PRIORITY_DEFAULT: number;
					public static PRIORITY_LOW: number;
					public static PRIORITY_MIN: number;
					public static PRIORITY_HIGH: number;
					public static PRIORITY_MAX: number;
					public static EXTRA_TITLE: string;
					public static EXTRA_TITLE_BIG: string;
					public static EXTRA_TEXT: string;
					public static EXTRA_SUB_TEXT: string;
					public static EXTRA_INFO_TEXT: string;
					public static EXTRA_SUMMARY_TEXT: string;
					public static EXTRA_BIG_TEXT: string;
					public static EXTRA_SMALL_ICON: string;
					public static EXTRA_LARGE_ICON: string;
					public static EXTRA_LARGE_ICON_BIG: string;
					public static EXTRA_PROGRESS: string;
					public static EXTRA_PROGRESS_MAX: string;
					public static EXTRA_PROGRESS_INDETERMINATE: string;
					public static EXTRA_SHOW_CHRONOMETER: string;
					public static EXTRA_SHOW_WHEN: string;
					public static EXTRA_PICTURE: string;
					public static EXTRA_TEXT_LINES: string;
					public static EXTRA_TEMPLATE: string;
					public static EXTRA_PEOPLE: string;
					public static EXTRA_BACKGROUND_IMAGE_URI: string;
					public static EXTRA_MEDIA_SESSION: string;
					public static EXTRA_COMPACT_ACTIONS: string;
					public static COLOR_DEFAULT: number;
					public static VISIBILITY_PUBLIC: number;
					public static VISIBILITY_PRIVATE: number;
					public static VISIBILITY_SECRET: number;
					public static CATEGORY_CALL: string;
					public static CATEGORY_MESSAGE: string;
					public static CATEGORY_EMAIL: string;
					public static CATEGORY_EVENT: string;
					public static CATEGORY_PROMO: string;
					public static CATEGORY_ALARM: string;
					public static CATEGORY_PROGRESS: string;
					public static CATEGORY_SOCIAL: string;
					public static CATEGORY_ERROR: string;
					public static CATEGORY_TRANSPORT: string;
					public static CATEGORY_SYSTEM: string;
					public static CATEGORY_SERVICE: string;
					public static CATEGORY_RECOMMENDATION: string;
					public static CATEGORY_STATUS: string;
				}
				export module NotificationCompat {
					export class Action {
						public constructor();
						public constructor(param0: number, param1: string, param2: android.app.PendingIntent);
						public getIcon(): number;
						public getTitle(): string;
						public getActionIntent(): android.app.PendingIntent;
						public getExtras(): android.os.Bundle;
						public getRemoteInputs(): native.Array<android.support.v4.app.RemoteInputCompatBase.RemoteInput>;
						public getRemoteInputs(): native.Array<android.support.v4.app.RemoteInput>;
						public icon: number;
						public title: string;
						public actionIntent: android.app.PendingIntent;
						public static FACTORY: android.support.v4.app.NotificationCompatBase.Action.Factory;
					}
					export module Action {
						export class Builder {
							public constructor();
							public constructor(param0: number, param1: string, param2: android.app.PendingIntent);
							public constructor(param0: android.support.v4.app.NotificationCompat.Action);
							public addExtras(param0: android.os.Bundle): android.support.v4.app.NotificationCompat.Action.Builder;
							public getExtras(): android.os.Bundle;
							public addRemoteInput(param0: android.support.v4.app.RemoteInput): android.support.v4.app.NotificationCompat.Action.Builder;
							public extend(param0: android.support.v4.app.NotificationCompat.Action.Extender): android.support.v4.app.NotificationCompat.Action.Builder;
							public build(): android.support.v4.app.NotificationCompat.Action;
						}
						export class Extender {
							public extend(param0: android.support.v4.app.NotificationCompat.Action.Builder): android.support.v4.app.NotificationCompat.Action.Builder;
						}
						export class WearableExtender {
							public constructor();
							public constructor(param0: android.support.v4.app.NotificationCompat.Action);
							public extend(param0: android.support.v4.app.NotificationCompat.Action.Builder): android.support.v4.app.NotificationCompat.Action.Builder;
							public clone(): java.lang.Object;
							public clone(): android.support.v4.app.NotificationCompat.Action.WearableExtender;
							public setAvailableOffline(param0: boolean): android.support.v4.app.NotificationCompat.Action.WearableExtender;
							public isAvailableOffline(): boolean;
							public setInProgressLabel(param0: string): android.support.v4.app.NotificationCompat.Action.WearableExtender;
							public getInProgressLabel(): string;
							public setConfirmLabel(param0: string): android.support.v4.app.NotificationCompat.Action.WearableExtender;
							public getConfirmLabel(): string;
							public setCancelLabel(param0: string): android.support.v4.app.NotificationCompat.Action.WearableExtender;
							public getCancelLabel(): string;
						}
					}
					export class BigPictureStyle {
						public constructor();
						public constructor(param0: android.support.v4.app.NotificationCompat.Builder);
						public setBigContentTitle(param0: string): android.support.v4.app.NotificationCompat.BigPictureStyle;
						public setSummaryText(param0: string): android.support.v4.app.NotificationCompat.BigPictureStyle;
						public bigPicture(param0: android.graphics.Bitmap): android.support.v4.app.NotificationCompat.BigPictureStyle;
						public bigLargeIcon(param0: android.graphics.Bitmap): android.support.v4.app.NotificationCompat.BigPictureStyle;
					}
					export class BigTextStyle {
						public constructor();
						public constructor(param0: android.support.v4.app.NotificationCompat.Builder);
						public setBigContentTitle(param0: string): android.support.v4.app.NotificationCompat.BigTextStyle;
						public setSummaryText(param0: string): android.support.v4.app.NotificationCompat.BigTextStyle;
						public bigText(param0: string): android.support.v4.app.NotificationCompat.BigTextStyle;
					}
					export class Builder {
						public constructor();
						public constructor(param0: android.content.Context);
						public setWhen(param0: number): android.support.v4.app.NotificationCompat.Builder;
						public setShowWhen(param0: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setUsesChronometer(param0: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setSmallIcon(param0: number): android.support.v4.app.NotificationCompat.Builder;
						public setSmallIcon(param0: number, param1: number): android.support.v4.app.NotificationCompat.Builder;
						public setContentTitle(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setContentText(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setSubText(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setNumber(param0: number): android.support.v4.app.NotificationCompat.Builder;
						public setContentInfo(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setProgress(param0: number, param1: number, param2: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setContent(param0: android.widget.RemoteViews): android.support.v4.app.NotificationCompat.Builder;
						public setContentIntent(param0: android.app.PendingIntent): android.support.v4.app.NotificationCompat.Builder;
						public setDeleteIntent(param0: android.app.PendingIntent): android.support.v4.app.NotificationCompat.Builder;
						public setFullScreenIntent(param0: android.app.PendingIntent, param1: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setTicker(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setTicker(param0: string, param1: android.widget.RemoteViews): android.support.v4.app.NotificationCompat.Builder;
						public setLargeIcon(param0: android.graphics.Bitmap): android.support.v4.app.NotificationCompat.Builder;
						public setSound(param0: android.net.Uri): android.support.v4.app.NotificationCompat.Builder;
						public setSound(param0: android.net.Uri, param1: number): android.support.v4.app.NotificationCompat.Builder;
						public setVibrate(param0: native.Array<number>): android.support.v4.app.NotificationCompat.Builder;
						public setLights(param0: number, param1: number, param2: number): android.support.v4.app.NotificationCompat.Builder;
						public setOngoing(param0: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setOnlyAlertOnce(param0: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setAutoCancel(param0: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setLocalOnly(param0: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setCategory(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setDefaults(param0: number): android.support.v4.app.NotificationCompat.Builder;
						public setPriority(param0: number): android.support.v4.app.NotificationCompat.Builder;
						public addPerson(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setGroup(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public setGroupSummary(param0: boolean): android.support.v4.app.NotificationCompat.Builder;
						public setSortKey(param0: string): android.support.v4.app.NotificationCompat.Builder;
						public addExtras(param0: android.os.Bundle): android.support.v4.app.NotificationCompat.Builder;
						public setExtras(param0: android.os.Bundle): android.support.v4.app.NotificationCompat.Builder;
						public getExtras(): android.os.Bundle;
						public addAction(param0: number, param1: string, param2: android.app.PendingIntent): android.support.v4.app.NotificationCompat.Builder;
						public addAction(param0: android.support.v4.app.NotificationCompat.Action): android.support.v4.app.NotificationCompat.Builder;
						public setStyle(param0: android.support.v4.app.NotificationCompat.Style): android.support.v4.app.NotificationCompat.Builder;
						public setColor(param0: number): android.support.v4.app.NotificationCompat.Builder;
						public setVisibility(param0: number): android.support.v4.app.NotificationCompat.Builder;
						public setPublicVersion(param0: android.app.Notification): android.support.v4.app.NotificationCompat.Builder;
						public extend(param0: android.support.v4.app.NotificationCompat.Extender): android.support.v4.app.NotificationCompat.Builder;
						public getNotification(): android.app.Notification;
						public build(): android.app.Notification;
						public getExtender(): android.support.v4.app.NotificationCompat.BuilderExtender;
						public static limitCharSequenceLength(param0: string): string;
						public mContext: android.content.Context;
						public mContentTitle: string;
						public mContentText: string;
						public mLargeIcon: android.graphics.Bitmap;
						public mContentInfo: string;
						public mNumber: number;
						public mUseChronometer: boolean;
						public mStyle: android.support.v4.app.NotificationCompat.Style;
						public mSubText: string;
						public mActions: java.util.ArrayList;
						public mNotification: android.app.Notification;
						public mPeople: java.util.ArrayList;
					}
					export class BuilderExtender {
						public constructor();
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationBuilderWithBuilderAccessor): android.app.Notification;
					}
					export class CarExtender {
						public constructor();
						public constructor(param0: android.app.Notification);
						public extend(param0: android.support.v4.app.NotificationCompat.Builder): android.support.v4.app.NotificationCompat.Builder;
						public setColor(param0: number): android.support.v4.app.NotificationCompat.CarExtender;
						public getColor(): number;
						public setLargeIcon(param0: android.graphics.Bitmap): android.support.v4.app.NotificationCompat.CarExtender;
						public getLargeIcon(): android.graphics.Bitmap;
						public setUnreadConversation(param0: android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation): android.support.v4.app.NotificationCompat.CarExtender;
						public getUnreadConversation(): android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation;
					}
					export module CarExtender {
						export class UnreadConversation {
							public getMessages(): native.Array<string>;
							public getRemoteInput(): android.support.v4.app.RemoteInput;
							public getReplyPendingIntent(): android.app.PendingIntent;
							public getReadPendingIntent(): android.app.PendingIntent;
							public getParticipants(): native.Array<string>;
							public getParticipant(): string;
							public getLatestTimestamp(): number;
						}
						export module UnreadConversation {
							export class Builder {
								public constructor();
								public constructor(param0: string);
								public addMessage(param0: string): android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
								public setReplyAction(param0: android.app.PendingIntent, param1: android.support.v4.app.RemoteInput): android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
								public setReadPendingIntent(param0: android.app.PendingIntent): android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
								public setLatestTimestamp(param0: number): android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
								public build(): android.support.v4.app.NotificationCompat.CarExtender.UnreadConversation;
							}
						}
					}
					export class Extender {
						public extend(param0: android.support.v4.app.NotificationCompat.Builder): android.support.v4.app.NotificationCompat.Builder;
					}
					export class InboxStyle {
						public constructor();
						public constructor(param0: android.support.v4.app.NotificationCompat.Builder);
						public setBigContentTitle(param0: string): android.support.v4.app.NotificationCompat.InboxStyle;
						public setSummaryText(param0: string): android.support.v4.app.NotificationCompat.InboxStyle;
						public addLine(param0: string): android.support.v4.app.NotificationCompat.InboxStyle;
					}
					export class NotificationCompatImpl {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
						public getExtras(param0: android.app.Notification): android.os.Bundle;
						public getActionCount(param0: android.app.Notification): number;
						public getAction(param0: android.app.Notification, param1: number): android.support.v4.app.NotificationCompat.Action;
						public getActionsFromParcelableArrayList(param0: java.util.ArrayList): native.Array<android.support.v4.app.NotificationCompat.Action>;
						public getParcelableArrayListForActions(param0: native.Array<android.support.v4.app.NotificationCompat.Action>): java.util.ArrayList;
						public getCategory(param0: android.app.Notification): string;
						public getLocalOnly(param0: android.app.Notification): boolean;
						public getGroup(param0: android.app.Notification): string;
						public isGroupSummary(param0: android.app.Notification): boolean;
						public getSortKey(param0: android.app.Notification): string;
						public getBundleForUnreadConversation(param0: android.support.v4.app.NotificationCompatBase.UnreadConversation): android.os.Bundle;
						public getUnreadConversationFromBundle(param0: android.os.Bundle, param1: android.support.v4.app.NotificationCompatBase.UnreadConversation.Factory, param2: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory): android.support.v4.app.NotificationCompatBase.UnreadConversation;
					}
					export class NotificationCompatImplApi20 {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
						public getAction(param0: android.app.Notification, param1: number): android.support.v4.app.NotificationCompat.Action;
						public getActionsFromParcelableArrayList(param0: java.util.ArrayList): native.Array<android.support.v4.app.NotificationCompat.Action>;
						public getParcelableArrayListForActions(param0: native.Array<android.support.v4.app.NotificationCompat.Action>): java.util.ArrayList;
						public getLocalOnly(param0: android.app.Notification): boolean;
						public getGroup(param0: android.app.Notification): string;
						public isGroupSummary(param0: android.app.Notification): boolean;
						public getSortKey(param0: android.app.Notification): string;
					}
					export class NotificationCompatImplApi21 {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
						public getCategory(param0: android.app.Notification): string;
						public getBundleForUnreadConversation(param0: android.support.v4.app.NotificationCompatBase.UnreadConversation): android.os.Bundle;
						public getUnreadConversationFromBundle(param0: android.os.Bundle, param1: android.support.v4.app.NotificationCompatBase.UnreadConversation.Factory, param2: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory): android.support.v4.app.NotificationCompatBase.UnreadConversation;
					}
					export class NotificationCompatImplBase {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
						public getExtras(param0: android.app.Notification): android.os.Bundle;
						public getActionCount(param0: android.app.Notification): number;
						public getAction(param0: android.app.Notification, param1: number): android.support.v4.app.NotificationCompat.Action;
						public getActionsFromParcelableArrayList(param0: java.util.ArrayList): native.Array<android.support.v4.app.NotificationCompat.Action>;
						public getParcelableArrayListForActions(param0: native.Array<android.support.v4.app.NotificationCompat.Action>): java.util.ArrayList;
						public getCategory(param0: android.app.Notification): string;
						public getLocalOnly(param0: android.app.Notification): boolean;
						public getGroup(param0: android.app.Notification): string;
						public isGroupSummary(param0: android.app.Notification): boolean;
						public getSortKey(param0: android.app.Notification): string;
						public getBundleForUnreadConversation(param0: android.support.v4.app.NotificationCompatBase.UnreadConversation): android.os.Bundle;
						public getUnreadConversationFromBundle(param0: android.os.Bundle, param1: android.support.v4.app.NotificationCompatBase.UnreadConversation.Factory, param2: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory): android.support.v4.app.NotificationCompatBase.UnreadConversation;
					}
					export class NotificationCompatImplGingerbread {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
					}
					export class NotificationCompatImplHoneycomb {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
					}
					export class NotificationCompatImplIceCreamSandwich {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
					}
					export class NotificationCompatImplJellybean {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
						public getExtras(param0: android.app.Notification): android.os.Bundle;
						public getActionCount(param0: android.app.Notification): number;
						public getAction(param0: android.app.Notification, param1: number): android.support.v4.app.NotificationCompat.Action;
						public getActionsFromParcelableArrayList(param0: java.util.ArrayList): native.Array<android.support.v4.app.NotificationCompat.Action>;
						public getParcelableArrayListForActions(param0: native.Array<android.support.v4.app.NotificationCompat.Action>): java.util.ArrayList;
						public getLocalOnly(param0: android.app.Notification): boolean;
						public getGroup(param0: android.app.Notification): string;
						public isGroupSummary(param0: android.app.Notification): boolean;
						public getSortKey(param0: android.app.Notification): string;
					}
					export class NotificationCompatImplKitKat {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationCompat.BuilderExtender): android.app.Notification;
						public getExtras(param0: android.app.Notification): android.os.Bundle;
						public getActionCount(param0: android.app.Notification): number;
						public getAction(param0: android.app.Notification, param1: number): android.support.v4.app.NotificationCompat.Action;
						public getLocalOnly(param0: android.app.Notification): boolean;
						public getGroup(param0: android.app.Notification): string;
						public isGroupSummary(param0: android.app.Notification): boolean;
						public getSortKey(param0: android.app.Notification): string;
					}
					export class Style {
						public constructor();
						public setBuilder(param0: android.support.v4.app.NotificationCompat.Builder): void;
						public build(): android.app.Notification;
					}
					export class WearableExtender {
						public constructor();
						public constructor(param0: android.app.Notification);
						public extend(param0: android.support.v4.app.NotificationCompat.Builder): android.support.v4.app.NotificationCompat.Builder;
						public clone(): java.lang.Object;
						public clone(): android.support.v4.app.NotificationCompat.WearableExtender;
						public addAction(param0: android.support.v4.app.NotificationCompat.Action): android.support.v4.app.NotificationCompat.WearableExtender;
						public addActions(param0: java.util.List): android.support.v4.app.NotificationCompat.WearableExtender;
						public clearActions(): android.support.v4.app.NotificationCompat.WearableExtender;
						public getActions(): java.util.List;
						public setDisplayIntent(param0: android.app.PendingIntent): android.support.v4.app.NotificationCompat.WearableExtender;
						public getDisplayIntent(): android.app.PendingIntent;
						public addPage(param0: android.app.Notification): android.support.v4.app.NotificationCompat.WearableExtender;
						public addPages(param0: java.util.List): android.support.v4.app.NotificationCompat.WearableExtender;
						public clearPages(): android.support.v4.app.NotificationCompat.WearableExtender;
						public getPages(): java.util.List;
						public setBackground(param0: android.graphics.Bitmap): android.support.v4.app.NotificationCompat.WearableExtender;
						public getBackground(): android.graphics.Bitmap;
						public setContentIcon(param0: number): android.support.v4.app.NotificationCompat.WearableExtender;
						public getContentIcon(): number;
						public setContentIconGravity(param0: number): android.support.v4.app.NotificationCompat.WearableExtender;
						public getContentIconGravity(): number;
						public setContentAction(param0: number): android.support.v4.app.NotificationCompat.WearableExtender;
						public getContentAction(): number;
						public setGravity(param0: number): android.support.v4.app.NotificationCompat.WearableExtender;
						public getGravity(): number;
						public setCustomSizePreset(param0: number): android.support.v4.app.NotificationCompat.WearableExtender;
						public getCustomSizePreset(): number;
						public setCustomContentHeight(param0: number): android.support.v4.app.NotificationCompat.WearableExtender;
						public getCustomContentHeight(): number;
						public setStartScrollBottom(param0: boolean): android.support.v4.app.NotificationCompat.WearableExtender;
						public getStartScrollBottom(): boolean;
						public setContentIntentAvailableOffline(param0: boolean): android.support.v4.app.NotificationCompat.WearableExtender;
						public getContentIntentAvailableOffline(): boolean;
						public setHintHideIcon(param0: boolean): android.support.v4.app.NotificationCompat.WearableExtender;
						public getHintHideIcon(): boolean;
						public setHintShowBackgroundOnly(param0: boolean): android.support.v4.app.NotificationCompat.WearableExtender;
						public getHintShowBackgroundOnly(): boolean;
						public setHintAvoidBackgroundClipping(param0: boolean): android.support.v4.app.NotificationCompat.WearableExtender;
						public getHintAvoidBackgroundClipping(): boolean;
						public setHintScreenTimeout(param0: number): android.support.v4.app.NotificationCompat.WearableExtender;
						public getHintScreenTimeout(): number;
						public static UNSET_ACTION_INDEX: number;
						public static SIZE_DEFAULT: number;
						public static SIZE_XSMALL: number;
						public static SIZE_SMALL: number;
						public static SIZE_MEDIUM: number;
						public static SIZE_LARGE: number;
						public static SIZE_FULL_SCREEN: number;
						public static SCREEN_TIMEOUT_SHORT: number;
						public static SCREEN_TIMEOUT_LONG: number;
					}
				}
			}
		}
	}
}
