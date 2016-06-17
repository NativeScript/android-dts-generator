/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module session {
			export class MediaSessionManager {
				public getActiveSessions(param0: android.content.ComponentName): java.util.List;
				public addOnActiveSessionsChangedListener(param0: android.media.session.MediaSessionManager.OnActiveSessionsChangedListener, param1: android.content.ComponentName): void;
				public addOnActiveSessionsChangedListener(param0: android.media.session.MediaSessionManager.OnActiveSessionsChangedListener, param1: android.content.ComponentName, param2: android.os.Handler): void;
				public removeOnActiveSessionsChangedListener(param0: android.media.session.MediaSessionManager.OnActiveSessionsChangedListener): void;
			}
			export module MediaSessionManager {
				export class OnActiveSessionsChangedListener {
					public onActiveSessionsChanged(param0: java.util.List): void;
				}
			}
		}
	}
}
