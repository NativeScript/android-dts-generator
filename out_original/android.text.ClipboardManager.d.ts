/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class ClipboardManager {
			public constructor();
			public getText(): string;
			public setText(param0: string): void;
			public hasText(): boolean;
		}
	}
}
