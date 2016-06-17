/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />

declare module android {
	export module widget {
		export class RemoteViewsService {
			public constructor(param0: android.content.Context);
			public constructor();
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onGetViewFactory(param0: android.content.Intent): android.widget.RemoteViewsService.RemoteViewsFactory;
		}
		export module RemoteViewsService {
			export class RemoteViewsFactory {
				public onCreate(): void;
				public onDataSetChanged(): void;
				public onDestroy(): void;
				public getCount(): number;
				public getViewAt(param0: number): android.widget.RemoteViews;
				public getLoadingView(): android.widget.RemoteViews;
				public getViewTypeCount(): number;
				public getItemId(param0: number): number;
				public hasStableIds(): boolean;
			}
		}
	}
}
