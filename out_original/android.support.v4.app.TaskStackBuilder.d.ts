/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class TaskStackBuilder {
					public static create(param0: android.content.Context): android.support.v4.app.TaskStackBuilder;
					public static from(param0: android.content.Context): android.support.v4.app.TaskStackBuilder;
					public addNextIntent(param0: android.content.Intent): android.support.v4.app.TaskStackBuilder;
					public addNextIntentWithParentStack(param0: android.content.Intent): android.support.v4.app.TaskStackBuilder;
					public addParentStack(param0: android.app.Activity): android.support.v4.app.TaskStackBuilder;
					public addParentStack(param0: java.lang.Class): android.support.v4.app.TaskStackBuilder;
					public addParentStack(param0: android.content.ComponentName): android.support.v4.app.TaskStackBuilder;
					public getIntentCount(): number;
					public getIntent(param0: number): android.content.Intent;
					public editIntentAt(param0: number): android.content.Intent;
					public iterator(): java.util.Iterator;
					public startActivities(): void;
					public startActivities(param0: android.os.Bundle): void;
					public getPendingIntent(param0: number, param1: number): android.app.PendingIntent;
					public getPendingIntent(param0: number, param1: number, param2: android.os.Bundle): android.app.PendingIntent;
					public getIntents(): native.Array<android.content.Intent>;
				}
				export module TaskStackBuilder {
					export class SupportParentable {
						public getSupportParentActivityIntent(): android.content.Intent;
					}
					export class TaskStackBuilderImpl {
						public getPendingIntent(param0: android.content.Context, param1: native.Array<android.content.Intent>, param2: number, param3: number, param4: android.os.Bundle): android.app.PendingIntent;
					}
					export class TaskStackBuilderImplBase {
						public getPendingIntent(param0: android.content.Context, param1: native.Array<android.content.Intent>, param2: number, param3: number, param4: android.os.Bundle): android.app.PendingIntent;
					}
					export class TaskStackBuilderImplHoneycomb {
						public getPendingIntent(param0: android.content.Context, param1: native.Array<android.content.Intent>, param2: number, param3: number, param4: android.os.Bundle): android.app.PendingIntent;
					}
					export class TaskStackBuilderImplJellybean {
						public getPendingIntent(param0: android.content.Context, param1: native.Array<android.content.Intent>, param2: number, param3: number, param4: android.os.Bundle): android.app.PendingIntent;
					}
				}
			}
		}
	}
}
