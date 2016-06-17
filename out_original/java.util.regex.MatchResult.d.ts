/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module regex {
			export class MatchResult {
				public end(): number;
				public end(param0: number): number;
				public group(): string;
				public group(param0: number): string;
				public groupCount(): number;
				public start(): number;
				public start(param0: number): number;
			}
		}
	}
}
