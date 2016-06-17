/// <reference path="./_helpers.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteTransactionListener {
				public onBegin(): void;
				public onCommit(): void;
				public onRollback(): void;
			}
		}
	}
}
