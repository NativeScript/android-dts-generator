/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.sql.RowSetEvent.d.ts" />

declare module javax {
	export module sql {
		export class RowSetListener {
			public cursorMoved(param0: javax.sql.RowSetEvent): void;
			public rowChanged(param0: javax.sql.RowSetEvent): void;
			public rowSetChanged(param0: javax.sql.RowSetEvent): void;
		}
	}
}
