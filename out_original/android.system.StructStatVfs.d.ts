/// <reference path="./_helpers.d.ts" />

declare module android {
	export module system {
		export class StructStatVfs {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number);
			public toString(): string;
			public f_bavail: number;
			public f_bfree: number;
			public f_blocks: number;
			public f_bsize: number;
			public f_favail: number;
			public f_ffree: number;
			public f_files: number;
			public f_flag: number;
			public f_frsize: number;
			public f_fsid: number;
			public f_namemax: number;
		}
	}
}
