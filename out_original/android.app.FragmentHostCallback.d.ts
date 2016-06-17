/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class FragmentHostCallback {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.os.Handler, param2: number);
			public onDump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
			public onShouldSaveFragmentState(param0: android.app.Fragment): boolean;
			public onGetLayoutInflater(): android.view.LayoutInflater;
			public onUseFragmentManagerInflaterFactory(): boolean;
			public onGetHost(): java.lang.Object;
			public onInvalidateOptionsMenu(): void;
			public onStartActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
			public onRequestPermissionsFromFragment(param0: android.app.Fragment, param1: native.Array<string>, param2: number): void;
			public onHasWindowAnimations(): boolean;
			public onGetWindowAnimations(): number;
			public onAttachFragment(param0: android.app.Fragment): void;
			public onFindViewById(param0: number): android.view.View;
			public onHasView(): boolean;
		}
	}
}
