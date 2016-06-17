/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class RatingBar {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public setOnRatingBarChangeListener(param0: android.widget.RatingBar.OnRatingBarChangeListener): void;
			public getOnRatingBarChangeListener(): android.widget.RatingBar.OnRatingBarChangeListener;
			public setIsIndicator(param0: boolean): void;
			public isIndicator(): boolean;
			public setNumStars(param0: number): void;
			public getNumStars(): number;
			public setRating(param0: number): void;
			public getRating(): number;
			public setStepSize(param0: number): void;
			public getStepSize(): number;
			public onMeasure(param0: number, param1: number): void;
			public setMax(param0: number): void;
			public getAccessibilityClassName(): string;
		}
		export module RatingBar {
			export class OnRatingBarChangeListener {
				public onRatingChanged(param0: android.widget.RatingBar, param1: number, param2: boolean): void;
			}
		}
	}
}
