/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothClass.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCallback.d.ts" />
/// <reference path="./android.bluetooth.BluetoothSocket.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothDevice {
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public getAddress(): string;
			public getName(): string;
			public getType(): number;
			public createBond(): boolean;
			public getBondState(): number;
			public getBluetoothClass(): android.bluetooth.BluetoothClass;
			public getUuids(): native.Array<android.os.ParcelUuid>;
			public fetchUuidsWithSdp(): boolean;
			public setPin(param0: native.Array<number>): boolean;
			public setPairingConfirmation(param0: boolean): boolean;
			public createRfcommSocketToServiceRecord(param0: java.util.UUID): android.bluetooth.BluetoothSocket;
			public createInsecureRfcommSocketToServiceRecord(param0: java.util.UUID): android.bluetooth.BluetoothSocket;
			public connectGatt(param0: android.content.Context, param1: boolean, param2: android.bluetooth.BluetoothGattCallback): android.bluetooth.BluetoothGatt;
			public connectGatt(param0: android.content.Context, param1: boolean, param2: android.bluetooth.BluetoothGattCallback, param3: number): android.bluetooth.BluetoothGatt;
			public static ACTION_ACL_CONNECTED: string;
			public static ACTION_ACL_DISCONNECTED: string;
			public static ACTION_ACL_DISCONNECT_REQUESTED: string;
			public static ACTION_BOND_STATE_CHANGED: string;
			public static ACTION_CLASS_CHANGED: string;
			public static ACTION_FOUND: string;
			public static ACTION_NAME_CHANGED: string;
			public static ACTION_PAIRING_REQUEST: string;
			public static ACTION_UUID: string;
			public static BOND_BONDED: number;
			public static BOND_BONDING: number;
			public static BOND_NONE: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static DEVICE_TYPE_CLASSIC: number;
			public static DEVICE_TYPE_DUAL: number;
			public static DEVICE_TYPE_LE: number;
			public static DEVICE_TYPE_UNKNOWN: number;
			public static ERROR: number;
			public static EXTRA_BOND_STATE: string;
			public static EXTRA_CLASS: string;
			public static EXTRA_DEVICE: string;
			public static EXTRA_NAME: string;
			public static EXTRA_PAIRING_KEY: string;
			public static EXTRA_PAIRING_VARIANT: string;
			public static EXTRA_PREVIOUS_BOND_STATE: string;
			public static EXTRA_RSSI: string;
			public static EXTRA_UUID: string;
			public static PAIRING_VARIANT_PASSKEY_CONFIRMATION: number;
			public static PAIRING_VARIANT_PIN: number;
			public static TRANSPORT_AUTO: number;
			public static TRANSPORT_BREDR: number;
			public static TRANSPORT_LE: number;
		}
	}
}
