/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PackageInstaller {
				public createSession(param0: android.content.pm.PackageInstaller.SessionParams): number;
				public openSession(param0: number): android.content.pm.PackageInstaller.Session;
				public updateSessionAppIcon(param0: number, param1: android.graphics.Bitmap): void;
				public updateSessionAppLabel(param0: number, param1: string): void;
				public abandonSession(param0: number): void;
				public getSessionInfo(param0: number): android.content.pm.PackageInstaller.SessionInfo;
				public getAllSessions(): java.util.List;
				public getMySessions(): java.util.List;
				public uninstall(param0: string, param1: android.content.IntentSender): void;
				public registerSessionCallback(param0: android.content.pm.PackageInstaller.SessionCallback): void;
				public registerSessionCallback(param0: android.content.pm.PackageInstaller.SessionCallback, param1: android.os.Handler): void;
				public unregisterSessionCallback(param0: android.content.pm.PackageInstaller.SessionCallback): void;
				public static ACTION_SESSION_DETAILS: string;
				public static EXTRA_OTHER_PACKAGE_NAME: string;
				public static EXTRA_PACKAGE_NAME: string;
				public static EXTRA_SESSION_ID: string;
				public static EXTRA_STATUS: string;
				public static EXTRA_STATUS_MESSAGE: string;
				public static EXTRA_STORAGE_PATH: string;
				public static STATUS_FAILURE: number;
				public static STATUS_FAILURE_ABORTED: number;
				public static STATUS_FAILURE_BLOCKED: number;
				public static STATUS_FAILURE_CONFLICT: number;
				public static STATUS_FAILURE_INCOMPATIBLE: number;
				public static STATUS_FAILURE_INVALID: number;
				public static STATUS_FAILURE_STORAGE: number;
				public static STATUS_PENDING_USER_ACTION: number;
				public static STATUS_SUCCESS: number;
			}
			export module PackageInstaller {
				export class Session {
					public setStagingProgress(param0: number): void;
					public openWrite(param0: string, param1: number, param2: number): java.io.OutputStream;
					public fsync(param0: java.io.OutputStream): void;
					public getNames(): native.Array<string>;
					public openRead(param0: string): java.io.InputStream;
					public commit(param0: android.content.IntentSender): void;
					public close(): void;
					public abandon(): void;
				}
				export class SessionCallback {
					public constructor();
					public onCreated(param0: number): void;
					public onBadgingChanged(param0: number): void;
					public onActiveChanged(param0: number, param1: boolean): void;
					public onProgressChanged(param0: number, param1: number): void;
					public onFinished(param0: number, param1: boolean): void;
				}
				export class SessionInfo {
					public getSessionId(): number;
					public getInstallerPackageName(): string;
					public getProgress(): number;
					public isActive(): boolean;
					public getAppPackageName(): string;
					public getAppIcon(): android.graphics.Bitmap;
					public getAppLabel(): string;
					public createDetailsIntent(): android.content.Intent;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
				export class SessionParams {
					public constructor();
					public constructor(param0: number);
					public setInstallLocation(param0: number): void;
					public setSize(param0: number): void;
					public setAppPackageName(param0: string): void;
					public setAppIcon(param0: android.graphics.Bitmap): void;
					public setAppLabel(param0: string): void;
					public setOriginatingUri(param0: android.net.Uri): void;
					public setReferrerUri(param0: android.net.Uri): void;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
					public static MODE_FULL_INSTALL: number;
					public static MODE_INHERIT_EXISTING: number;
				}
			}
		}
	}
}
