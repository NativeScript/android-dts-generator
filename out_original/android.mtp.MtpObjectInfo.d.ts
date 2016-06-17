/// <reference path="./_helpers.d.ts" />

declare module android {
	export module mtp {
		export class MtpObjectInfo {
			public getObjectHandle(): number;
			public getStorageId(): number;
			public getFormat(): number;
			public getProtectionStatus(): number;
			public getCompressedSize(): number;
			public getThumbFormat(): number;
			public getThumbCompressedSize(): number;
			public getThumbPixWidth(): number;
			public getThumbPixHeight(): number;
			public getImagePixWidth(): number;
			public getImagePixHeight(): number;
			public getImagePixDepth(): number;
			public getParent(): number;
			public getAssociationType(): number;
			public getAssociationDesc(): number;
			public getSequenceNumber(): number;
			public getName(): string;
			public getDateCreated(): number;
			public getDateModified(): number;
			public getKeywords(): string;
		}
	}
}
