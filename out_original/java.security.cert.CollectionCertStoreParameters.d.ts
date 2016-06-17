/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CollectionCertStoreParameters {
				public constructor();
				public constructor(param0: java.util.Collection);
				public clone(): java.lang.Object;
				public getCollection(): java.util.Collection;
				public toString(): string;
			}
		}
	}
}
