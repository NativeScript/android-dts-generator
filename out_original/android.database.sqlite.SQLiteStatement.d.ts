/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteStatement {
				public execute(): void;
				public executeUpdateDelete(): number;
				public executeInsert(): number;
				public simpleQueryForLong(): number;
				public simpleQueryForString(): string;
				public simpleQueryForBlobFileDescriptor(): android.os.ParcelFileDescriptor;
				public toString(): string;
			}
		}
	}
}
