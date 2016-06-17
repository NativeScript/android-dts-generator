/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module widget {
		export class EditText {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getDefaultEditable(): boolean;
			public getDefaultMovementMethod(): android.text.method.MovementMethod;
			public getText(): string;
			public getText(): android.text.Editable;
			public setText(param0: string): void;
			public setText(param0: native.Array<string>, param1: number, param2: number): void;
			public setText(param0: number): void;
			public setText(param0: number, param1: android.widget.TextView.BufferType): void;
			public setText(param0: string, param1: android.widget.TextView.BufferType): void;
			public setSelection(param0: number, param1: number): void;
			public setSelection(param0: number): void;
			public selectAll(): void;
			public extendSelection(param0: number): void;
			public setEllipsize(param0: android.text.TextUtils.TruncateAt): void;
			public getAccessibilityClassName(): string;
		}
	}
}
