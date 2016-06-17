/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class StatFs {
			public constructor();
			public constructor(param0: string);
			public restat(param0: string): void;
			public getBlockSize(): number;
			public getBlockSizeLong(): number;
			public getBlockCount(): number;
			public getBlockCountLong(): number;
			public getFreeBlocks(): number;
			public getFreeBlocksLong(): number;
			public getFreeBytes(): number;
			public getAvailableBlocks(): number;
			public getAvailableBlocksLong(): number;
			public getAvailableBytes(): number;
			public getTotalBytes(): number;
		}
	}
}
