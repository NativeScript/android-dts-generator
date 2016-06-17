/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class SourceLocator {
				public getPublicId(): string;
				public getSystemId(): string;
				public getLineNumber(): number;
				public getColumnNumber(): number;
			}
		}
	}
}
