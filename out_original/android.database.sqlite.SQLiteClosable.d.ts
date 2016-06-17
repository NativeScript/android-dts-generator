/// <reference path="./_helpers.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteClosable {
				public constructor();
				public onAllReferencesReleased(): void;
				public onAllReferencesReleasedFromContainer(): void;
				public acquireReference(): void;
				public releaseReference(): void;
				public releaseReferenceFromContainer(): void;
				public close(): void;
			}
		}
	}
}
