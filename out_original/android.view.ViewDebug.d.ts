/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export class ViewDebug {
			public constructor();
			public static trace(param0: android.view.View, param1: android.view.ViewDebug.RecyclerTraceType, param2: native.Array<number>): void;
			public static startRecyclerTracing(param0: string, param1: android.view.View): void;
			public static stopRecyclerTracing(): void;
			public static trace(param0: android.view.View, param1: android.view.ViewDebug.HierarchyTraceType): void;
			public static startHierarchyTracing(param0: string, param1: android.view.View): void;
			public static stopHierarchyTracing(): void;
			public static dumpCapturedView(param0: string, param1: java.lang.Object): void;
			public static TRACE_HIERARCHY: boolean;
			public static TRACE_RECYCLER: boolean;
		}
		export module ViewDebug {
			export class CapturedViewProperty {
				public retrieveReturn(): boolean;
			}
			export class ExportedProperty {
				public resolveId(): boolean;
				public mapping(): native.Array<android.view.ViewDebug.IntToString>;
				public indexMapping(): native.Array<android.view.ViewDebug.IntToString>;
				public flagMapping(): native.Array<android.view.ViewDebug.FlagToString>;
				public deepExport(): boolean;
				public prefix(): string;
				public category(): string;
				public formatToHexString(): boolean;
				public hasAdjacentMapping(): boolean;
			}
			export class FlagToString {
				public mask(): number;
				public equals(param0: java.lang.Object): boolean;
				public equals(): number;
				public name(): string;
				public outputIf(): boolean;
			}
			export class HierarchyTraceType {
				public static values(): native.Array<android.view.ViewDebug.HierarchyTraceType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.view.ViewDebug.HierarchyTraceType;
				public static BUILD_CACHE: android.view.ViewDebug.HierarchyTraceType;
				public static DRAW: android.view.ViewDebug.HierarchyTraceType;
				public static INVALIDATE: android.view.ViewDebug.HierarchyTraceType;
				public static INVALIDATE_CHILD: android.view.ViewDebug.HierarchyTraceType;
				public static INVALIDATE_CHILD_IN_PARENT: android.view.ViewDebug.HierarchyTraceType;
				public static ON_LAYOUT: android.view.ViewDebug.HierarchyTraceType;
				public static ON_MEASURE: android.view.ViewDebug.HierarchyTraceType;
				public static REQUEST_LAYOUT: android.view.ViewDebug.HierarchyTraceType;
			}
			export class IntToString {
				public from(): number;
				public to(): string;
			}
			export class RecyclerTraceType {
				public static values(): native.Array<android.view.ViewDebug.RecyclerTraceType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.view.ViewDebug.RecyclerTraceType;
				public static BIND_VIEW: android.view.ViewDebug.RecyclerTraceType;
				public static MOVE_FROM_ACTIVE_TO_SCRAP_HEAP: android.view.ViewDebug.RecyclerTraceType;
				public static MOVE_TO_SCRAP_HEAP: android.view.ViewDebug.RecyclerTraceType;
				public static NEW_VIEW: android.view.ViewDebug.RecyclerTraceType;
				public static RECYCLE_FROM_ACTIVE_HEAP: android.view.ViewDebug.RecyclerTraceType;
				public static RECYCLE_FROM_SCRAP_HEAP: android.view.ViewDebug.RecyclerTraceType;
			}
		}
	}
}
