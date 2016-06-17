/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.sql.RowSet.d.ts" />

declare module javax {
	export module sql {
		export class RowSetEvent {
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: javax.sql.RowSet);
		}
	}
}
