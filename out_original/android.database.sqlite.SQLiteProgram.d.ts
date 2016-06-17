/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteProgram {
				public getUniqueId(): number;
				public bindNull(param0: number): void;
				public bindLong(param0: number, param1: number): void;
				public bindDouble(param0: number, param1: number): void;
				public bindString(param0: number, param1: string): void;
				public bindBlob(param0: number, param1: native.Array<number>): void;
				public clearBindings(): void;
				public bindAllArgsAsStrings(param0: native.Array<string>): void;
				public onAllReferencesReleased(): void;
			}
		}
	}
}
