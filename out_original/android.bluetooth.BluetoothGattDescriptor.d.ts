/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothGattDescriptor {
			public constructor();
			public constructor(param0: java.util.UUID, param1: number);
			public getCharacteristic(): android.bluetooth.BluetoothGattCharacteristic;
			public getUuid(): java.util.UUID;
			public getPermissions(): number;
			public getValue(): native.Array<number>;
			public setValue(param0: native.Array<number>): boolean;
			public static DISABLE_NOTIFICATION_VALUE: native.Array<number>;
			public static ENABLE_INDICATION_VALUE: native.Array<number>;
			public static ENABLE_NOTIFICATION_VALUE: native.Array<number>;
			public static PERMISSION_READ: number;
			public static PERMISSION_READ_ENCRYPTED: number;
			public static PERMISSION_READ_ENCRYPTED_MITM: number;
			public static PERMISSION_WRITE: number;
			public static PERMISSION_WRITE_ENCRYPTED: number;
			public static PERMISSION_WRITE_ENCRYPTED_MITM: number;
			public static PERMISSION_WRITE_SIGNED: number;
			public static PERMISSION_WRITE_SIGNED_MITM: number;
		}
	}
}
