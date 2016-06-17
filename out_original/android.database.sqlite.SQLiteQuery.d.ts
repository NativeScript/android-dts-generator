/// <reference path="./_helpers.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteQuery {
				public toString(): string;
			}
		}
	}
}
