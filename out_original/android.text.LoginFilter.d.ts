/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class LoginFilter {
			public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
			public onStart(): void;
			public onInvalidCharacter(param0: string): void;
			public onStop(): void;
			public isAllowed(param0: string): boolean;
		}
		export module LoginFilter {
			export class PasswordFilterGMail {
				public constructor();
				public constructor(param0: boolean);
				public isAllowed(param0: string): boolean;
			}
			export class UsernameFilterGMail {
				public constructor();
				public constructor(param0: boolean);
				public isAllowed(param0: string): boolean;
			}
			export class UsernameFilterGeneric {
				public constructor();
				public constructor(param0: boolean);
				public isAllowed(param0: string): boolean;
			}
		}
	}
}
