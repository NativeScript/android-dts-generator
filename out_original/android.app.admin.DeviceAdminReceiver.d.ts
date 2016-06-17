/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.admin.DevicePolicyManager.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module admin {
			export class DeviceAdminReceiver {
				public constructor();
				public getManager(param0: android.content.Context): android.app.admin.DevicePolicyManager;
				public getWho(param0: android.content.Context): android.content.ComponentName;
				public onEnabled(param0: android.content.Context, param1: android.content.Intent): void;
				public onDisableRequested(param0: android.content.Context, param1: android.content.Intent): string;
				public onDisabled(param0: android.content.Context, param1: android.content.Intent): void;
				public onPasswordChanged(param0: android.content.Context, param1: android.content.Intent): void;
				public onPasswordFailed(param0: android.content.Context, param1: android.content.Intent): void;
				public onPasswordSucceeded(param0: android.content.Context, param1: android.content.Intent): void;
				public onPasswordExpiring(param0: android.content.Context, param1: android.content.Intent): void;
				public onProfileProvisioningComplete(param0: android.content.Context, param1: android.content.Intent): void;
				public onReadyForUserInitialization(param0: android.content.Context, param1: android.content.Intent): void;
				public onLockTaskModeEntering(param0: android.content.Context, param1: android.content.Intent, param2: string): void;
				public onLockTaskModeExiting(param0: android.content.Context, param1: android.content.Intent): void;
				public onChoosePrivateKeyAlias(param0: android.content.Context, param1: android.content.Intent, param2: number, param3: android.net.Uri, param4: string): string;
				public onSystemUpdatePending(param0: android.content.Context, param1: android.content.Intent, param2: number): void;
				public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
				public static ACTION_DEVICE_ADMIN_DISABLED: string;
				public static ACTION_DEVICE_ADMIN_DISABLE_REQUESTED: string;
				public static ACTION_DEVICE_ADMIN_ENABLED: string;
				public static ACTION_LOCK_TASK_ENTERING: string;
				public static ACTION_LOCK_TASK_EXITING: string;
				public static ACTION_PASSWORD_CHANGED: string;
				public static ACTION_PASSWORD_EXPIRING: string;
				public static ACTION_PASSWORD_FAILED: string;
				public static ACTION_PASSWORD_SUCCEEDED: string;
				public static ACTION_PROFILE_PROVISIONING_COMPLETE: string;
				public static DEVICE_ADMIN_META_DATA: string;
				public static EXTRA_DISABLE_WARNING: string;
				public static EXTRA_LOCK_TASK_PACKAGE: string;
			}
		}
	}
}
