/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class ProcessingInstruction {
				public getTarget(): string;
				public getData(): string;
				public setData(param0: string): void;
			}
		}
	}
}
