/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.sql.StatementEvent.d.ts" />

declare module javax {
	export module sql {
		export class StatementEventListener {
			public statementClosed(param0: javax.sql.StatementEvent): void;
			public statementErrorOccurred(param0: javax.sql.StatementEvent): void;
		}
	}
}
