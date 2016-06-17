/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMStringList {
				public item(param0: number): string;
				public getLength(): number;
				public contains(param0: string): boolean;
			}
		}
	}
}
