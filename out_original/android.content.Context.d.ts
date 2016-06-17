/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.BroadcastReceiver.d.ts" />
/// <reference path="./android.content.ComponentCallbacks.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.content.ServiceConnection.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class Context {
			public constructor();
			public getAssets(): android.content.res.AssetManager;
			public getResources(): android.content.res.Resources;
			public getPackageManager(): android.content.pm.PackageManager;
			public getContentResolver(): android.content.ContentResolver;
			public getMainLooper(): android.os.Looper;
			public getApplicationContext(): android.content.Context;
			public registerComponentCallbacks(param0: android.content.ComponentCallbacks): void;
			public unregisterComponentCallbacks(param0: android.content.ComponentCallbacks): void;
			public getText(param0: number): string;
			public getString(param0: number): string;
			public getString(param0: number, param1: native.Array<java.lang.Object>): string;
			public getColor(param0: number): number;
			public getDrawable(param0: number): android.graphics.drawable.Drawable;
			public getColorStateList(param0: number): android.content.res.ColorStateList;
			public setTheme(param0: number): void;
			public getTheme(): android.content.res.Resources.Theme;
			public obtainStyledAttributes(param0: native.Array<number>): android.content.res.TypedArray;
			public obtainStyledAttributes(param0: number, param1: native.Array<number>): android.content.res.TypedArray;
			public obtainStyledAttributes(param0: android.util.AttributeSet, param1: native.Array<number>): android.content.res.TypedArray;
			public obtainStyledAttributes(param0: android.util.AttributeSet, param1: native.Array<number>, param2: number, param3: number): android.content.res.TypedArray;
			public getClassLoader(): java.lang.ClassLoader;
			public getPackageName(): string;
			public getApplicationInfo(): android.content.pm.ApplicationInfo;
			public getPackageResourcePath(): string;
			public getPackageCodePath(): string;
			public getSharedPreferences(param0: string, param1: number): android.content.SharedPreferences;
			public openFileInput(param0: string): java.io.FileInputStream;
			public openFileOutput(param0: string, param1: number): java.io.FileOutputStream;
			public deleteFile(param0: string): boolean;
			public getFileStreamPath(param0: string): java.io.File;
			public getFilesDir(): java.io.File;
			public getNoBackupFilesDir(): java.io.File;
			public getExternalFilesDir(param0: string): java.io.File;
			public getExternalFilesDirs(param0: string): native.Array<java.io.File>;
			public getObbDir(): java.io.File;
			public getObbDirs(): native.Array<java.io.File>;
			public getCacheDir(): java.io.File;
			public getCodeCacheDir(): java.io.File;
			public getExternalCacheDir(): java.io.File;
			public getExternalCacheDirs(): native.Array<java.io.File>;
			public getExternalMediaDirs(): native.Array<java.io.File>;
			public fileList(): native.Array<string>;
			public getDir(param0: string, param1: number): java.io.File;
			public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;
			public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
			public deleteDatabase(param0: string): boolean;
			public getDatabasePath(param0: string): java.io.File;
			public databaseList(): native.Array<string>;
			public getWallpaper(): android.graphics.drawable.Drawable;
			public peekWallpaper(): android.graphics.drawable.Drawable;
			public getWallpaperDesiredMinimumWidth(): number;
			public getWallpaperDesiredMinimumHeight(): number;
			public setWallpaper(param0: android.graphics.Bitmap): void;
			public setWallpaper(param0: java.io.InputStream): void;
			public clearWallpaper(): void;
			public startActivity(param0: android.content.Intent): void;
			public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;
			public startActivities(param0: native.Array<android.content.Intent>): void;
			public startActivities(param0: native.Array<android.content.Intent>, param1: android.os.Bundle): void;
			public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number): void;
			public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;
			public sendBroadcast(param0: android.content.Intent): void;
			public sendBroadcast(param0: android.content.Intent, param1: string): void;
			public sendOrderedBroadcast(param0: android.content.Intent, param1: string): void;
			public sendOrderedBroadcast(param0: android.content.Intent, param1: string, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;
			public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;
			public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string): void;
			public sendOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string, param3: android.content.BroadcastReceiver, param4: android.os.Handler, param5: number, param6: string, param7: android.os.Bundle): void;
			public sendStickyBroadcast(param0: android.content.Intent): void;
			public sendStickyOrderedBroadcast(param0: android.content.Intent, param1: android.content.BroadcastReceiver, param2: android.os.Handler, param3: number, param4: string, param5: android.os.Bundle): void;
			public removeStickyBroadcast(param0: android.content.Intent): void;
			public sendStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;
			public sendStickyOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;
			public removeStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;
			public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter): android.content.Intent;
			public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter, param2: string, param3: android.os.Handler): android.content.Intent;
			public unregisterReceiver(param0: android.content.BroadcastReceiver): void;
			public startService(param0: android.content.Intent): android.content.ComponentName;
			public stopService(param0: android.content.Intent): boolean;
			public bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;
			public unbindService(param0: android.content.ServiceConnection): void;
			public startInstrumentation(param0: android.content.ComponentName, param1: string, param2: android.os.Bundle): boolean;
			public getSystemService(param0: string): java.lang.Object;
			public getSystemService(param0: java.lang.Class): java.lang.Object;
			public getSystemServiceName(param0: java.lang.Class): string;
			public checkPermission(param0: string, param1: number, param2: number): number;
			public checkCallingPermission(param0: string): number;
			public checkCallingOrSelfPermission(param0: string): number;
			public checkSelfPermission(param0: string): number;
			public enforcePermission(param0: string, param1: number, param2: number, param3: string): void;
			public enforceCallingPermission(param0: string, param1: string): void;
			public enforceCallingOrSelfPermission(param0: string, param1: string): void;
			public grantUriPermission(param0: string, param1: android.net.Uri, param2: number): void;
			public revokeUriPermission(param0: android.net.Uri, param1: number): void;
			public checkUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number): number;
			public checkCallingUriPermission(param0: android.net.Uri, param1: number): number;
			public checkCallingOrSelfUriPermission(param0: android.net.Uri, param1: number): number;
			public checkUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number): number;
			public enforceUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number, param4: string): void;
			public enforceCallingUriPermission(param0: android.net.Uri, param1: number, param2: string): void;
			public enforceCallingOrSelfUriPermission(param0: android.net.Uri, param1: number, param2: string): void;
			public enforceUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number, param6: string): void;
			public createPackageContext(param0: string, param1: number): android.content.Context;
			public createConfigurationContext(param0: android.content.res.Configuration): android.content.Context;
			public createDisplayContext(param0: android.view.Display): android.content.Context;
			public isRestricted(): boolean;
			public static ACCESSIBILITY_SERVICE: string;
			public static ACCOUNT_SERVICE: string;
			public static ACTIVITY_SERVICE: string;
			public static ALARM_SERVICE: string;
			public static APPWIDGET_SERVICE: string;
			public static APP_OPS_SERVICE: string;
			public static AUDIO_SERVICE: string;
			public static BATTERY_SERVICE: string;
			public static BIND_ABOVE_CLIENT: number;
			public static BIND_ADJUST_WITH_ACTIVITY: number;
			public static BIND_ALLOW_OOM_MANAGEMENT: number;
			public static BIND_AUTO_CREATE: number;
			public static BIND_DEBUG_UNBIND: number;
			public static BIND_IMPORTANT: number;
			public static BIND_NOT_FOREGROUND: number;
			public static BIND_WAIVE_PRIORITY: number;
			public static BLUETOOTH_SERVICE: string;
			public static CAMERA_SERVICE: string;
			public static CAPTIONING_SERVICE: string;
			public static CARRIER_CONFIG_SERVICE: string;
			public static CLIPBOARD_SERVICE: string;
			public static CONNECTIVITY_SERVICE: string;
			public static CONSUMER_IR_SERVICE: string;
			public static CONTEXT_IGNORE_SECURITY: number;
			public static CONTEXT_INCLUDE_CODE: number;
			public static CONTEXT_RESTRICTED: number;
			public static DEVICE_POLICY_SERVICE: string;
			public static DISPLAY_SERVICE: string;
			public static DOWNLOAD_SERVICE: string;
			public static DROPBOX_SERVICE: string;
			public static FINGERPRINT_SERVICE: string;
			public static INPUT_METHOD_SERVICE: string;
			public static INPUT_SERVICE: string;
			public static JOB_SCHEDULER_SERVICE: string;
			public static KEYGUARD_SERVICE: string;
			public static LAUNCHER_APPS_SERVICE: string;
			public static LAYOUT_INFLATER_SERVICE: string;
			public static LOCATION_SERVICE: string;
			public static MEDIA_PROJECTION_SERVICE: string;
			public static MEDIA_ROUTER_SERVICE: string;
			public static MEDIA_SESSION_SERVICE: string;
			public static MIDI_SERVICE: string;
			public static MODE_APPEND: number;
			public static MODE_ENABLE_WRITE_AHEAD_LOGGING: number;
			public static MODE_MULTI_PROCESS: number;
			public static MODE_PRIVATE: number;
			public static MODE_WORLD_READABLE: number;
			public static MODE_WORLD_WRITEABLE: number;
			public static NETWORK_STATS_SERVICE: string;
			public static NFC_SERVICE: string;
			public static NOTIFICATION_SERVICE: string;
			public static NSD_SERVICE: string;
			public static POWER_SERVICE: string;
			public static PRINT_SERVICE: string;
			public static RESTRICTIONS_SERVICE: string;
			public static SEARCH_SERVICE: string;
			public static SENSOR_SERVICE: string;
			public static STORAGE_SERVICE: string;
			public static TELECOM_SERVICE: string;
			public static TELEPHONY_SERVICE: string;
			public static TELEPHONY_SUBSCRIPTION_SERVICE: string;
			public static TEXT_SERVICES_MANAGER_SERVICE: string;
			public static TV_INPUT_SERVICE: string;
			public static UI_MODE_SERVICE: string;
			public static USAGE_STATS_SERVICE: string;
			public static USB_SERVICE: string;
			public static USER_SERVICE: string;
			public static VIBRATOR_SERVICE: string;
			public static WALLPAPER_SERVICE: string;
			public static WIFI_P2P_SERVICE: string;
			public static WIFI_SERVICE: string;
			public static WINDOW_SERVICE: string;
		}
	}
}
