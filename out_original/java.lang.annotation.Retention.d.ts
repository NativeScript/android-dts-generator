/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.annotation.RetentionPolicy.d.ts" />

declare module java {
	export module lang {
		export module annotation {
			export class Retention {
				public value(): java.lang.annotation.RetentionPolicy;
			}
		}
	}
}
