/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.RemoteControlClient.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export class MediaRouter {
			public getDefaultRoute(): android.media.MediaRouter.RouteInfo;
			public getSelectedRoute(param0: number): android.media.MediaRouter.RouteInfo;
			public addCallback(param0: number, param1: android.media.MediaRouter.Callback): void;
			public addCallback(param0: number, param1: android.media.MediaRouter.Callback, param2: number): void;
			public removeCallback(param0: android.media.MediaRouter.Callback): void;
			public selectRoute(param0: number, param1: android.media.MediaRouter.RouteInfo): void;
			public addUserRoute(param0: android.media.MediaRouter.UserRouteInfo): void;
			public removeUserRoute(param0: android.media.MediaRouter.UserRouteInfo): void;
			public clearUserRoutes(): void;
			public getCategoryCount(): number;
			public getCategoryAt(param0: number): android.media.MediaRouter.RouteCategory;
			public getRouteCount(): number;
			public getRouteAt(param0: number): android.media.MediaRouter.RouteInfo;
			public createUserRoute(param0: android.media.MediaRouter.RouteCategory): android.media.MediaRouter.UserRouteInfo;
			public createRouteCategory(param0: string, param1: boolean): android.media.MediaRouter.RouteCategory;
			public createRouteCategory(param0: number, param1: boolean): android.media.MediaRouter.RouteCategory;
			public static CALLBACK_FLAG_PERFORM_ACTIVE_SCAN: number;
			public static CALLBACK_FLAG_UNFILTERED_EVENTS: number;
			public static ROUTE_TYPE_LIVE_AUDIO: number;
			public static ROUTE_TYPE_LIVE_VIDEO: number;
			public static ROUTE_TYPE_USER: number;
		}
		export module MediaRouter {
			export class Callback {
				public constructor();
				public onRouteSelected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;
				public onRouteUnselected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;
				public onRouteAdded(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
				public onRouteRemoved(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
				public onRouteChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
				public onRouteGrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup, param3: number): void;
				public onRouteUngrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup): void;
				public onRouteVolumeChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
				public onRoutePresentationDisplayChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
			}
			export class RouteCategory {
				public getName(): string;
				public getName(param0: android.content.Context): string;
				public getRoutes(param0: java.util.List): java.util.List;
				public getSupportedTypes(): number;
				public isGroupable(): boolean;
				public toString(): string;
			}
			export class RouteGroup {
				public addRoute(param0: android.media.MediaRouter.RouteInfo): void;
				public addRoute(param0: android.media.MediaRouter.RouteInfo, param1: number): void;
				public removeRoute(param0: android.media.MediaRouter.RouteInfo): void;
				public removeRoute(param0: number): void;
				public getRouteCount(): number;
				public getRouteAt(param0: number): android.media.MediaRouter.RouteInfo;
				public setIconDrawable(param0: android.graphics.drawable.Drawable): void;
				public setIconResource(param0: number): void;
				public requestSetVolume(param0: number): void;
				public requestUpdateVolume(param0: number): void;
				public toString(): string;
			}
			export class RouteInfo {
				public getName(): string;
				public getName(param0: android.content.Context): string;
				public getDescription(): string;
				public getStatus(): string;
				public getSupportedTypes(): number;
				public getGroup(): android.media.MediaRouter.RouteGroup;
				public getCategory(): android.media.MediaRouter.RouteCategory;
				public getIconDrawable(): android.graphics.drawable.Drawable;
				public setTag(param0: java.lang.Object): void;
				public getTag(): java.lang.Object;
				public getPlaybackType(): number;
				public getPlaybackStream(): number;
				public getVolume(): number;
				public requestSetVolume(param0: number): void;
				public requestUpdateVolume(param0: number): void;
				public getVolumeMax(): number;
				public getVolumeHandling(): number;
				public getPresentationDisplay(): android.view.Display;
				public isEnabled(): boolean;
				public isConnecting(): boolean;
				public toString(): string;
				public static PLAYBACK_TYPE_LOCAL: number;
				public static PLAYBACK_TYPE_REMOTE: number;
				public static PLAYBACK_VOLUME_FIXED: number;
				public static PLAYBACK_VOLUME_VARIABLE: number;
			}
			export class SimpleCallback {
				public constructor();
				public onRouteSelected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;
				public onRouteUnselected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;
				public onRouteAdded(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
				public onRouteRemoved(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
				public onRouteChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
				public onRouteGrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup, param3: number): void;
				public onRouteUngrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup): void;
				public onRouteVolumeChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
			}
			export class UserRouteInfo {
				public setName(param0: string): void;
				public setName(param0: number): void;
				public setDescription(param0: string): void;
				public setStatus(param0: string): void;
				public setRemoteControlClient(param0: android.media.RemoteControlClient): void;
				public getRemoteControlClient(): android.media.RemoteControlClient;
				public setIconDrawable(param0: android.graphics.drawable.Drawable): void;
				public setIconResource(param0: number): void;
				public setVolumeCallback(param0: android.media.MediaRouter.VolumeCallback): void;
				public setPlaybackType(param0: number): void;
				public setVolumeHandling(param0: number): void;
				public setVolume(param0: number): void;
				public requestSetVolume(param0: number): void;
				public requestUpdateVolume(param0: number): void;
				public setVolumeMax(param0: number): void;
				public setPlaybackStream(param0: number): void;
			}
			export class VolumeCallback {
				public constructor();
				public onVolumeUpdateRequest(param0: android.media.MediaRouter.RouteInfo, param1: number): void;
				public onVolumeSetRequest(param0: android.media.MediaRouter.RouteInfo, param1: number): void;
			}
		}
	}
}
