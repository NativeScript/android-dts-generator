/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module crypto {
		export module interfaces {
			export class PBEKey {
				public getIterationCount(): number;
				public getSalt(): native.Array<number>;
				public getPassword(): native.Array<string>;
				public static serialVersionUID: number;
			}
		}
	}
}
