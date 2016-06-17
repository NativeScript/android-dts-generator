/// <reference path="./_helpers.d.ts" />

declare module android {
	export module system {
		export class StructStat {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number);
			public toString(): string;
			public st_atime: number;
			public st_blksize: number;
			public st_blocks: number;
			public st_ctime: number;
			public st_dev: number;
			public st_gid: number;
			public st_ino: number;
			public st_mode: number;
			public st_mtime: number;
			public st_nlink: number;
			public st_rdev: number;
			public st_size: number;
			public st_uid: number;
		}
	}
}
