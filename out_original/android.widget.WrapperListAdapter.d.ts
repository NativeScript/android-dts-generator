/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />

declare module android {
	export module widget {
		export class WrapperListAdapter {
			public getWrappedAdapter(): android.widget.ListAdapter;
		}
	}
}
