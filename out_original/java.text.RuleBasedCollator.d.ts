/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.CharacterIterator.d.ts" />
/// <reference path="./java.text.CollationElementIterator.d.ts" />
/// <reference path="./java.text.CollationKey.d.ts" />

declare module java {
	export module text {
		export class RuleBasedCollator {
			public constructor();
			public constructor(param0: string);
			public getCollationElementIterator(param0: java.text.CharacterIterator): java.text.CollationElementIterator;
			public getCollationElementIterator(param0: string): java.text.CollationElementIterator;
			public getRules(): string;
			public clone(): java.lang.Object;
			public compare(param0: java.lang.Object, param1: java.lang.Object): number;
			public compare(param0: string, param1: string): number;
			public getCollationKey(param0: string): java.text.CollationKey;
			public hashCode(): number;
			public equals(param0: string, param1: string): boolean;
			public equals(param0: java.lang.Object): boolean;
		}
	}
}
