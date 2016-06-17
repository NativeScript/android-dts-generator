/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.test.ActivityInstrumentationTestCase.d.ts" />
/// <reference path="./android.test.InstrumentationTestCase.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module test {
		export class TouchUtils {
			public constructor();
			public static dragQuarterScreenDown(param0: android.test.ActivityInstrumentationTestCase): void;
			public static dragQuarterScreenDown(param0: android.test.InstrumentationTestCase, param1: android.app.Activity): void;
			public static dragQuarterScreenUp(param0: android.test.ActivityInstrumentationTestCase): void;
			public static dragQuarterScreenUp(param0: android.test.InstrumentationTestCase, param1: android.app.Activity): void;
			public static scrollToBottom(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.ViewGroup): void;
			public static scrollToBottom(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.ViewGroup): void;
			public static scrollToTop(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.ViewGroup): void;
			public static scrollToTop(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.ViewGroup): void;
			public static dragViewToBottom(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View): void;
			public static dragViewToBottom(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.View): void;
			public static dragViewToBottom(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number): void;
			public static dragViewToBottom(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.View, param3: number): void;
			public static tapView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;
			public static touchAndCancelView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;
			public static clickView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;
			public static longClickView(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View): void;
			public static longClickView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;
			public static dragViewToTop(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View): void;
			public static dragViewToTop(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number): void;
			public static dragViewToTop(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;
			public static dragViewToTop(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number): void;
			public static dragViewBy(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;
			public static dragViewBy(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;
			public static dragViewTo(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;
			public static dragViewTo(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;
			public static dragViewToX(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;
			public static dragViewToX(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;
			public static dragViewToY(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;
			public static dragViewToY(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;
			public static drag(param0: android.test.ActivityInstrumentationTestCase, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static drag(param0: android.test.InstrumentationTestCase, param1: number, param2: number, param3: number, param4: number, param5: number): void;
		}
	}
}
