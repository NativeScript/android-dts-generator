/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.sql.RowSetInternal.d.ts" />

declare module javax {
	export module sql {
		export class RowSetWriter {
			public writeData(param0: javax.sql.RowSetInternal): boolean;
		}
	}
}
