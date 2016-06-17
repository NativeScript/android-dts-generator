/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.sql.ConnectionEvent.d.ts" />

declare module javax {
	export module sql {
		export class ConnectionEventListener {
			public connectionClosed(param0: javax.sql.ConnectionEvent): void;
			public connectionErrorOccurred(param0: javax.sql.ConnectionEvent): void;
		}
	}
}
