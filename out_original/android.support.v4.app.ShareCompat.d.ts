/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ShareCompat {
					public static getCallingPackage(param0: android.app.Activity): string;
					public static getCallingActivity(param0: android.app.Activity): android.content.ComponentName;
					public static configureMenuItem(param0: android.view.MenuItem, param1: android.support.v4.app.ShareCompat.IntentBuilder): void;
					public static configureMenuItem(param0: android.view.Menu, param1: number, param2: android.support.v4.app.ShareCompat.IntentBuilder): void;
					public static EXTRA_CALLING_PACKAGE: string;
					public static EXTRA_CALLING_ACTIVITY: string;
				}
				export module ShareCompat {
					export class IntentBuilder {
						public static from(param0: android.app.Activity): android.support.v4.app.ShareCompat.IntentBuilder;
						public getIntent(): android.content.Intent;
						public createChooserIntent(): android.content.Intent;
						public startChooser(): void;
						public setChooserTitle(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
						public setChooserTitle(param0: number): android.support.v4.app.ShareCompat.IntentBuilder;
						public setType(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
						public setText(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
						public setHtmlText(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
						public setStream(param0: android.net.Uri): android.support.v4.app.ShareCompat.IntentBuilder;
						public addStream(param0: android.net.Uri): android.support.v4.app.ShareCompat.IntentBuilder;
						public setEmailTo(param0: native.Array<string>): android.support.v4.app.ShareCompat.IntentBuilder;
						public addEmailTo(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
						public addEmailTo(param0: native.Array<string>): android.support.v4.app.ShareCompat.IntentBuilder;
						public setEmailCc(param0: native.Array<string>): android.support.v4.app.ShareCompat.IntentBuilder;
						public addEmailCc(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
						public addEmailCc(param0: native.Array<string>): android.support.v4.app.ShareCompat.IntentBuilder;
						public setEmailBcc(param0: native.Array<string>): android.support.v4.app.ShareCompat.IntentBuilder;
						public addEmailBcc(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
						public addEmailBcc(param0: native.Array<string>): android.support.v4.app.ShareCompat.IntentBuilder;
						public setSubject(param0: string): android.support.v4.app.ShareCompat.IntentBuilder;
					}
					export class IntentReader {
						public static from(param0: android.app.Activity): android.support.v4.app.ShareCompat.IntentReader;
						public isShareIntent(): boolean;
						public isSingleShare(): boolean;
						public isMultipleShare(): boolean;
						public getType(): string;
						public getText(): string;
						public getHtmlText(): string;
						public getStream(): android.net.Uri;
						public getStream(param0: number): android.net.Uri;
						public getStreamCount(): number;
						public getEmailTo(): native.Array<string>;
						public getEmailCc(): native.Array<string>;
						public getEmailBcc(): native.Array<string>;
						public getSubject(): string;
						public getCallingPackage(): string;
						public getCallingActivity(): android.content.ComponentName;
						public getCallingActivityIcon(): android.graphics.drawable.Drawable;
						public getCallingApplicationIcon(): android.graphics.drawable.Drawable;
						public getCallingApplicationLabel(): string;
					}
					export class ShareCompatImpl {
						public configureMenuItem(param0: android.view.MenuItem, param1: android.support.v4.app.ShareCompat.IntentBuilder): void;
						public escapeHtml(param0: string): string;
					}
					export class ShareCompatImplBase {
						public configureMenuItem(param0: android.view.MenuItem, param1: android.support.v4.app.ShareCompat.IntentBuilder): void;
						public escapeHtml(param0: string): string;
					}
					export class ShareCompatImplICS {
						public configureMenuItem(param0: android.view.MenuItem, param1: android.support.v4.app.ShareCompat.IntentBuilder): void;
					}
					export class ShareCompatImplJB {
						public escapeHtml(param0: string): string;
					}
				}
			}
		}
	}
}
