/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.drm.DrmConvertedStatus.d.ts" />
/// <reference path="./android.drm.DrmErrorEvent.d.ts" />
/// <reference path="./android.drm.DrmEvent.d.ts" />
/// <reference path="./android.drm.DrmInfo.d.ts" />
/// <reference path="./android.drm.DrmInfoEvent.d.ts" />
/// <reference path="./android.drm.DrmInfoRequest.d.ts" />
/// <reference path="./android.drm.DrmRights.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module drm {
		export class DrmManagerClient {
			public constructor();
			public constructor(param0: android.content.Context);
			public finalize(): void;
			public release(): void;
			public setOnInfoListener(param0: android.drm.DrmManagerClient.OnInfoListener): void;
			public setOnEventListener(param0: android.drm.DrmManagerClient.OnEventListener): void;
			public setOnErrorListener(param0: android.drm.DrmManagerClient.OnErrorListener): void;
			public getAvailableDrmEngines(): native.Array<string>;
			public getConstraints(param0: string, param1: number): android.content.ContentValues;
			public getMetadata(param0: string): android.content.ContentValues;
			public getConstraints(param0: android.net.Uri, param1: number): android.content.ContentValues;
			public getMetadata(param0: android.net.Uri): android.content.ContentValues;
			public saveRights(param0: android.drm.DrmRights, param1: string, param2: string): number;
			public canHandle(param0: string, param1: string): boolean;
			public canHandle(param0: android.net.Uri, param1: string): boolean;
			public processDrmInfo(param0: android.drm.DrmInfo): number;
			public acquireDrmInfo(param0: android.drm.DrmInfoRequest): android.drm.DrmInfo;
			public acquireRights(param0: android.drm.DrmInfoRequest): number;
			public getDrmObjectType(param0: string, param1: string): number;
			public getDrmObjectType(param0: android.net.Uri, param1: string): number;
			public getOriginalMimeType(param0: string): string;
			public getOriginalMimeType(param0: android.net.Uri): string;
			public checkRightsStatus(param0: string): number;
			public checkRightsStatus(param0: android.net.Uri): number;
			public checkRightsStatus(param0: string, param1: number): number;
			public checkRightsStatus(param0: android.net.Uri, param1: number): number;
			public removeRights(param0: string): number;
			public removeRights(param0: android.net.Uri): number;
			public removeAllRights(): number;
			public openConvertSession(param0: string): number;
			public convertData(param0: number, param1: native.Array<number>): android.drm.DrmConvertedStatus;
			public closeConvertSession(param0: number): android.drm.DrmConvertedStatus;
			public static ERROR_NONE: number;
			public static ERROR_UNKNOWN: number;
		}
		export module DrmManagerClient {
			export class OnErrorListener {
				public onError(param0: android.drm.DrmManagerClient, param1: android.drm.DrmErrorEvent): void;
			}
			export class OnEventListener {
				public onEvent(param0: android.drm.DrmManagerClient, param1: android.drm.DrmEvent): void;
			}
			export class OnInfoListener {
				public onInfo(param0: android.drm.DrmManagerClient, param1: android.drm.DrmInfoEvent): void;
			}
		}
	}
}
