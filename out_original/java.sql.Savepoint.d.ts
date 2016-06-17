/// <reference path="./_helpers.d.ts" />

declare module java {
	export module sql {
		export class Savepoint {
			public getSavepointId(): number;
			public getSavepointName(): string;
		}
	}
}
