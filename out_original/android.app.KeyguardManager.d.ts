/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class KeyguardManager {
			public createConfirmDeviceCredentialIntent(param0: string, param1: string): android.content.Intent;
			public newKeyguardLock(param0: string): android.app.KeyguardManager.KeyguardLock;
			public isKeyguardLocked(): boolean;
			public isKeyguardSecure(): boolean;
			public inKeyguardRestrictedInputMode(): boolean;
			public isDeviceLocked(): boolean;
			public isDeviceSecure(): boolean;
			public exitKeyguardSecurely(param0: android.app.KeyguardManager.OnKeyguardExitResult): void;
		}
		export module KeyguardManager {
			export class KeyguardLock {
				public disableKeyguard(): void;
				public reenableKeyguard(): void;
			}
			export class OnKeyguardExitResult {
				public onKeyguardExitResult(param0: boolean): void;
			}
		}
	}
}
