/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module transition {
		export class TransitionValues {
			public constructor();
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public values: java.util.Map;
			public view: android.view.View;
		}
	}
}
