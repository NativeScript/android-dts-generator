/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class ECGenParameterSpec {
				public constructor();
				public constructor(param0: string);
				public getName(): string;
			}
		}
	}
}
