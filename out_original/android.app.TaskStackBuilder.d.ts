/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />

declare module android {
	export module app {
		export class TaskStackBuilder {
			public static create(param0: android.content.Context): android.app.TaskStackBuilder;
			public addNextIntent(param0: android.content.Intent): android.app.TaskStackBuilder;
			public addNextIntentWithParentStack(param0: android.content.Intent): android.app.TaskStackBuilder;
			public addParentStack(param0: android.app.Activity): android.app.TaskStackBuilder;
			public addParentStack(param0: java.lang.Class): android.app.TaskStackBuilder;
			public addParentStack(param0: android.content.ComponentName): android.app.TaskStackBuilder;
			public getIntentCount(): number;
			public editIntentAt(param0: number): android.content.Intent;
			public startActivities(): void;
			public startActivities(param0: android.os.Bundle): void;
			public getPendingIntent(param0: number, param1: number): android.app.PendingIntent;
			public getPendingIntent(param0: number, param1: number, param2: android.os.Bundle): android.app.PendingIntent;
			public getIntents(): native.Array<android.content.Intent>;
		}
	}
}
