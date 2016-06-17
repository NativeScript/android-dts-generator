/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.DatagramSocket.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />

declare module android {
	export module net {
		export class Network {
			public getAllByName(param0: string): native.Array<java.net.InetAddress>;
			public getByName(param0: string): java.net.InetAddress;
			public getSocketFactory(): javax.net.SocketFactory;
			public openConnection(param0: java.net.URL): java.net.URLConnection;
			public openConnection(param0: java.net.URL, param1: java.net.Proxy): java.net.URLConnection;
			public bindSocket(param0: java.net.DatagramSocket): void;
			public bindSocket(param0: java.net.Socket): void;
			public bindSocket(param0: java.io.FileDescriptor): void;
			public getNetworkHandle(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
