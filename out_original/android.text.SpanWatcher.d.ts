/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export class SpanWatcher {
			public onSpanAdded(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number): void;
			public onSpanRemoved(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number): void;
			public onSpanChanged(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number, param4: number, param5: number): void;
		}
	}
}
