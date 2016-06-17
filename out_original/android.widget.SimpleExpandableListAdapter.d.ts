/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module widget {
		export class SimpleExpandableListAdapter {
			public constructor();
			public constructor(param0: android.content.Context, param1: java.util.List, param2: number, param3: native.Array<string>, param4: native.Array<number>, param5: java.util.List, param6: number, param7: native.Array<string>, param8: native.Array<number>);
			public constructor(param0: android.content.Context, param1: java.util.List, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: java.util.List, param7: number, param8: native.Array<string>, param9: native.Array<number>);
			public constructor(param0: android.content.Context, param1: java.util.List, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: java.util.List, param7: number, param8: number, param9: native.Array<string>, param10: native.Array<number>);
			public getChild(param0: number, param1: number): java.lang.Object;
			public getChildId(param0: number, param1: number): number;
			public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;
			public newChildView(param0: boolean, param1: android.view.ViewGroup): android.view.View;
			public getChildrenCount(param0: number): number;
			public getGroup(param0: number): java.lang.Object;
			public getGroupCount(): number;
			public getGroupId(param0: number): number;
			public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;
			public newGroupView(param0: boolean, param1: android.view.ViewGroup): android.view.View;
			public isChildSelectable(param0: number, param1: number): boolean;
			public hasStableIds(): boolean;
		}
	}
}
