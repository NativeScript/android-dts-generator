/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.app.SharedElementCallback.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.support.v4.app.LoaderManager.d.ts" />
/// <reference path="./android.support.v4.app.SharedElementCallback.d.ts" />
/// <reference path="./android.support.v4.media.session.MediaControllerCompat.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentActivity {
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public constructor(param0: android.content.Context);
					public constructor();
					public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
					public onBackPressed(): void;
					public setSupportMediaController(param0: android.support.v4.media.session.MediaControllerCompat): void;
					public getSupportMediaController(): android.support.v4.media.session.MediaControllerCompat;
					public supportFinishAfterTransition(): void;
					public setEnterSharedElementCallback(param0: android.app.SharedElementCallback): void;
					public setEnterSharedElementCallback(param0: android.support.v4.app.SharedElementCallback): void;
					public setExitSharedElementCallback(param0: android.app.SharedElementCallback): void;
					public setExitSharedElementCallback(param0: android.support.v4.app.SharedElementCallback): void;
					public supportPostponeEnterTransition(): void;
					public supportStartPostponedEnterTransition(): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onCreate(param0: android.os.Bundle): void;
					public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
					public onDestroy(): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onLowMemory(): void;
					public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public onPause(): void;
					public onNewIntent(param0: android.content.Intent): void;
					public onStateNotSaved(): void;
					public onResume(): void;
					public onPostResume(): void;
					public onResumeFragments(): void;
					public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
					public onPrepareOptionsPanel(param0: android.view.View, param1: android.view.Menu): boolean;
					public onRetainNonConfigurationInstance(): java.lang.Object;
					public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public onStart(): void;
					public onStop(): void;
					public onRetainCustomNonConfigurationInstance(): java.lang.Object;
					public getLastCustomNonConfigurationInstance(): java.lang.Object;
					public supportInvalidateOptionsMenu(): void;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
					public onAttachFragment(param0: android.app.Fragment): void;
					public onAttachFragment(param0: android.support.v4.app.Fragment): void;
					public getSupportFragmentManager(): android.support.v4.app.FragmentManager;
					public getSupportLoaderManager(): android.support.v4.app.LoaderManager;
					public startActivityForResult(param0: android.content.Intent, param1: number, param2: android.os.Bundle): void;
					public startActivityForResult(param0: android.content.Intent, param1: number): void;
					public validateRequestPermissionsRequestCode(param0: number): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public startActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number): void;
					public startActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
					public startActivityFromFragment(param0: android.support.v4.app.Fragment, param1: android.content.Intent, param2: number): void;
					public startActivityFromFragment(param0: android.support.v4.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
				}
				export module FragmentActivity {
					export class HostCallbacks {
						public constructor(param0: android.content.Context, param1: android.os.Handler, param2: number);
						public constructor();
						public constructor(param0: android.support.v4.app.FragmentActivity);
						public onDump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public onShouldSaveFragmentState(param0: android.support.v4.app.Fragment): boolean;
						public onGetLayoutInflater(): android.view.LayoutInflater;
						public onGetHost(): java.lang.Object;
						public onGetHost(): android.support.v4.app.FragmentActivity;
						public onSupportInvalidateOptionsMenu(): void;
						public onStartActivityFromFragment(param0: android.support.v4.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
						public onStartActivityFromFragment(param0: android.support.v4.app.Fragment, param1: android.content.Intent, param2: number): void;
						public onStartActivityFromFragment(param0: android.support.v4.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
						public onRequestPermissionsFromFragment(param0: android.support.v4.app.Fragment, param1: native.Array<string>, param2: number): void;
						public onShouldShowRequestPermissionRationale(param0: string): boolean;
						public onHasWindowAnimations(): boolean;
						public onGetWindowAnimations(): number;
						public onAttachFragment(param0: android.support.v4.app.Fragment): void;
						public onFindViewById(param0: number): android.view.View;
						public onHasView(): boolean;
					}
					export class NonConfigurationInstances {
					}
				}
			}
		}
	}
}
