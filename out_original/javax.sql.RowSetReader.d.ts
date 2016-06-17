/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.sql.RowSetInternal.d.ts" />

declare module javax {
	export module sql {
		export class RowSetReader {
			public readData(param0: javax.sql.RowSetInternal): void;
		}
	}
}
