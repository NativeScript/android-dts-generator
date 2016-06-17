/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.gesture.Gesture.d.ts" />
/// <reference path="./android.gesture.GestureStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module gesture {
		export class GestureLibrary {
			public constructor();
			public save(): boolean;
			public load(): boolean;
			public isReadOnly(): boolean;
			public setOrientationStyle(param0: number): void;
			public getOrientationStyle(): number;
			public setSequenceType(param0: number): void;
			public getSequenceType(): number;
			public getGestureEntries(): java.util.Set;
			public recognize(param0: android.gesture.Gesture): java.util.ArrayList;
			public addGesture(param0: string, param1: android.gesture.Gesture): void;
			public removeGesture(param0: string, param1: android.gesture.Gesture): void;
			public removeEntry(param0: string): void;
			public getGestures(param0: string): java.util.ArrayList;
			public mStore: android.gesture.GestureStore;
		}
	}
}
