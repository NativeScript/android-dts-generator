/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module security {
		export module auth {
			export module callback {
				export class PasswordCallback {
					public constructor();
					public constructor(param0: string, param1: boolean);
					public getPrompt(): string;
					public isEchoOn(): boolean;
					public setPassword(param0: native.Array<string>): void;
					public getPassword(): native.Array<string>;
					public clearPassword(): void;
				}
			}
		}
	}
}
