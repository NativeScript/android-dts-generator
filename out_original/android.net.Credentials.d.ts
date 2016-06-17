/// <reference path="./_helpers.d.ts" />

declare module android {
	export module net {
		export class Credentials {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public getPid(): number;
			public getUid(): number;
			public getGid(): number;
		}
	}
}
