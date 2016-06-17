/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module net {
		export class PasswordAuthentication {
			public constructor();
			public constructor(param0: string, param1: native.Array<string>);
			public getPassword(): native.Array<string>;
			public getUserName(): string;
		}
	}
}
