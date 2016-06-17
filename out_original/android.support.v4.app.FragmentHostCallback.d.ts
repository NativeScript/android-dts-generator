/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentHostCallback {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.os.Handler, param2: number);
					public onDump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
					public onShouldSaveFragmentState(param0: android.support.v4.app.Fragment): boolean;
					public onGetLayoutInflater(): android.view.LayoutInflater;
					public onGetHost(): java.lang.Object;
					public onSupportInvalidateOptionsMenu(): void;
					public onStartActivityFromFragment(param0: android.support.v4.app.Fragment, param1: android.content.Intent, param2: number): void;
					public onStartActivityFromFragment(param0: android.support.v4.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
					public onRequestPermissionsFromFragment(param0: android.support.v4.app.Fragment, param1: native.Array<string>, param2: number): void;
					public onShouldShowRequestPermissionRationale(param0: string): boolean;
					public onHasWindowAnimations(): boolean;
					public onGetWindowAnimations(): number;
					public onFindViewById(param0: number): android.view.View;
					public onHasView(): boolean;
				}
			}
		}
	}
}
