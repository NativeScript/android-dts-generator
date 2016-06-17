/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.ClipDescription.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module content {
		export class ClipboardManager {
			public setPrimaryClip(param0: android.content.ClipData): void;
			public getPrimaryClip(): android.content.ClipData;
			public getPrimaryClipDescription(): android.content.ClipDescription;
			public hasPrimaryClip(): boolean;
			public addPrimaryClipChangedListener(param0: android.content.ClipboardManager.OnPrimaryClipChangedListener): void;
			public removePrimaryClipChangedListener(param0: android.content.ClipboardManager.OnPrimaryClipChangedListener): void;
			public getText(): string;
			public setText(param0: string): void;
			public hasText(): boolean;
		}
		export module ClipboardManager {
			export class OnPrimaryClipChangedListener {
				public onPrimaryClipChanged(): void;
			}
		}
	}
}
