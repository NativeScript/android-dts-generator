/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.telecom.Conference.d.ts" />
/// <reference path="./android.telecom.Connection.d.ts" />
/// <reference path="./android.telecom.ConnectionRequest.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./android.telecom.RemoteConference.d.ts" />
/// <reference path="./android.telecom.RemoteConnection.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module android {
	export module telecom {
		export class ConnectionService {
			public constructor(param0: android.content.Context);
			public constructor();
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onUnbind(param0: android.content.Intent): boolean;
			public createRemoteIncomingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.RemoteConnection;
			public createRemoteOutgoingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.RemoteConnection;
			public conferenceRemoteConnections(param0: android.telecom.RemoteConnection, param1: android.telecom.RemoteConnection): void;
			public addConference(param0: android.telecom.Conference): void;
			public addExistingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.Connection): void;
			public getAllConnections(): java.util.Collection;
			public onCreateIncomingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.Connection;
			public onCreateOutgoingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.Connection;
			public onConference(param0: android.telecom.Connection, param1: android.telecom.Connection): void;
			public onRemoteConferenceAdded(param0: android.telecom.RemoteConference): void;
			public onRemoteExistingConnectionAdded(param0: android.telecom.RemoteConnection): void;
			public static SERVICE_INTERFACE: string;
		}
	}
}
