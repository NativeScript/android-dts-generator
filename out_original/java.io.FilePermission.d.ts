/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />

declare module java {
	export module io {
		export class FilePermission {
			public constructor(param0: string);
			public constructor();
			public constructor(param0: string, param1: string);
			public getActions(): string;
			public implies(param0: java.security.Permission): boolean;
		}
	}
}
