import * as $protobuf from 'protobufjs';
import Long = require('long');
export namespace signalservice {
  interface IArtProvisioningEnvelope {
    publicKey?: Uint8Array | null;
    ciphertext?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ArtProvisioningEnvelope implements IArtProvisioningEnvelope {
    constructor(properties?: signalservice.IArtProvisioningEnvelope);
    public publicKey: Uint8Array;
    public ciphertext: Uint8Array;
    public static encode(
      message: signalservice.IArtProvisioningEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IArtProvisioningEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ArtProvisioningEnvelope;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ArtProvisioningEnvelope;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IArtProvisioningMessage {
    username?: string | null;
    password?: string | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ArtProvisioningMessage implements IArtProvisioningMessage {
    constructor(properties?: signalservice.IArtProvisioningMessage);
    public username: string;
    public password: string;
    public static encode(
      message: signalservice.IArtProvisioningMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IArtProvisioningMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ArtProvisioningMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ArtProvisioningMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface ICDSClientRequest {
    aciUakPairs?: Uint8Array | null;
    prevE164s?: Uint8Array | null;
    newE164s?: Uint8Array | null;
    discardE164s?: Uint8Array | null;
    hasMore?: boolean | null;
    token?: Uint8Array | null;
    tokenAck?: boolean | null;
    returnAcisWithoutUaks?: boolean | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class CDSClientRequest implements ICDSClientRequest {
    constructor(properties?: signalservice.ICDSClientRequest);
    public aciUakPairs: Uint8Array;
    public prevE164s: Uint8Array;
    public newE164s: Uint8Array;
    public discardE164s: Uint8Array;
    public hasMore: boolean;
    public token: Uint8Array;
    public tokenAck: boolean;
    public returnAcisWithoutUaks: boolean;
    public static encode(
      message: signalservice.ICDSClientRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ICDSClientRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CDSClientRequest;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CDSClientRequest;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface ICDSClientResponse {
    e164PniAciTriples?: Uint8Array | null;
    token?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class CDSClientResponse implements ICDSClientResponse {
    constructor(properties?: signalservice.ICDSClientResponse);
    public e164PniAciTriples: Uint8Array;
    public token: Uint8Array;
    public static encode(
      message: signalservice.ICDSClientResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ICDSClientResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CDSClientResponse;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CDSClientResponse;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface ICrashReport {
    filename?: string | null;
    content?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class CrashReport implements ICrashReport {
    constructor(properties?: signalservice.ICrashReport);
    public filename: string;
    public content: Uint8Array;
    public static encode(
      message: signalservice.ICrashReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ICrashReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CrashReport;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CrashReport;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface ICrashReportList {
    reports?: signalservice.ICrashReport[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class CrashReportList implements ICrashReportList {
    constructor(properties?: signalservice.ICrashReportList);
    public reports: signalservice.ICrashReport[];
    public static encode(
      message: signalservice.ICrashReportList,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ICrashReportList,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CrashReportList;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CrashReportList;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IProvisioningUuid {
    uuid?: string | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ProvisioningUuid implements IProvisioningUuid {
    constructor(properties?: signalservice.IProvisioningUuid);
    public uuid: string;
    public static encode(
      message: signalservice.IProvisioningUuid,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IProvisioningUuid,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ProvisioningUuid;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ProvisioningUuid;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IProvisionEnvelope {
    publicKey?: Uint8Array | null;
    body?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ProvisionEnvelope implements IProvisionEnvelope {
    constructor(properties?: signalservice.IProvisionEnvelope);
    public publicKey: Uint8Array;
    public body: Uint8Array;
    public static encode(
      message: signalservice.IProvisionEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IProvisionEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ProvisionEnvelope;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ProvisionEnvelope;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IProvisionMessage {
    aciIdentityKeyPublic?: Uint8Array | null;
    aciIdentityKeyPrivate?: Uint8Array | null;
    pniIdentityKeyPublic?: Uint8Array | null;
    pniIdentityKeyPrivate?: Uint8Array | null;
    aci?: string | null;
    pni?: string | null;
    number?: string | null;
    provisioningCode?: string | null;
    userAgent?: string | null;
    profileKey?: Uint8Array | null;
    readReceipts?: boolean | null;
    ProvisioningVersion?: number | null;
    masterKey?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ProvisionMessage implements IProvisionMessage {
    constructor(properties?: signalservice.IProvisionMessage);
    public aciIdentityKeyPublic: Uint8Array;
    public aciIdentityKeyPrivate: Uint8Array;
    public pniIdentityKeyPublic: Uint8Array;
    public pniIdentityKeyPrivate: Uint8Array;
    public aci: string;
    public pni: string;
    public number: string;
    public provisioningCode: string;
    public userAgent: string;
    public profileKey: Uint8Array;
    public readReceipts: boolean;
    public ProvisioningVersion: number;
    public masterKey: Uint8Array;
    public static encode(
      message: signalservice.IProvisionMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IProvisionMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ProvisionMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ProvisionMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  enum ProvisioningVersion {
    INITIAL = 0,
    TABLET_SUPPORT = 1,
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    CURRENT = 1,
  }

  interface IDeviceName {
    ephemeralPublic?: Uint8Array | null;
    syntheticIv?: Uint8Array | null;
    ciphertext?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class DeviceName implements IDeviceName {
    constructor(properties?: signalservice.IDeviceName);
    public ephemeralPublic: Uint8Array;
    public syntheticIv: Uint8Array;
    public ciphertext: Uint8Array;
    public static encode(
      message: signalservice.IDeviceName,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IDeviceName,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.DeviceName;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.DeviceName;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IAvatarUploadAttributes {
    key?: string | null;
    credential?: string | null;
    acl?: string | null;
    algorithm?: string | null;
    date?: string | null;
    policy?: string | null;
    signature?: string | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class AvatarUploadAttributes implements IAvatarUploadAttributes {
    constructor(properties?: signalservice.IAvatarUploadAttributes);
    public key: string;
    public credential: string;
    public acl: string;
    public algorithm: string;
    public date: string;
    public policy: string;
    public signature: string;
    public static encode(
      message: signalservice.IAvatarUploadAttributes,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IAvatarUploadAttributes,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AvatarUploadAttributes;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AvatarUploadAttributes;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IMember {
    userId?: Uint8Array | null;
    role?: signalservice.Member.Role | null;
    profileKey?: Uint8Array | null;
    presentation?: Uint8Array | null;
    joinedAtVersion?: number | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class Member implements IMember {
    constructor(properties?: signalservice.IMember);
    public userId: Uint8Array;
    public role: signalservice.Member.Role;
    public profileKey: Uint8Array;
    public presentation: Uint8Array;
    public joinedAtVersion: number;
    public static encode(
      message: signalservice.IMember,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IMember,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Member;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Member;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace Member {
    enum Role {
      UNKNOWN = 0,
      DEFAULT = 1,
      ADMINISTRATOR = 2,
    }
  }

  interface IMemberPendingProfileKey {
    member?: signalservice.IMember | null;
    addedByUserId?: Uint8Array | null;
    timestamp?: Long | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class MemberPendingProfileKey implements IMemberPendingProfileKey {
    constructor(properties?: signalservice.IMemberPendingProfileKey);
    public member?: signalservice.IMember | null;
    public addedByUserId: Uint8Array;
    public timestamp: Long;
    public static encode(
      message: signalservice.IMemberPendingProfileKey,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IMemberPendingProfileKey,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.MemberPendingProfileKey;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.MemberPendingProfileKey;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IMemberPendingAdminApproval {
    userId?: Uint8Array | null;
    profileKey?: Uint8Array | null;
    presentation?: Uint8Array | null;
    timestamp?: Long | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class MemberPendingAdminApproval implements IMemberPendingAdminApproval {
    constructor(properties?: signalservice.IMemberPendingAdminApproval);
    public userId: Uint8Array;
    public profileKey: Uint8Array;
    public presentation: Uint8Array;
    public timestamp: Long;
    public static encode(
      message: signalservice.IMemberPendingAdminApproval,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IMemberPendingAdminApproval,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.MemberPendingAdminApproval;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.MemberPendingAdminApproval;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IMemberBanned {
    userId?: Uint8Array | null;
    timestamp?: Long | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class MemberBanned implements IMemberBanned {
    constructor(properties?: signalservice.IMemberBanned);
    public userId: Uint8Array;
    public timestamp: Long;
    public static encode(
      message: signalservice.IMemberBanned,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IMemberBanned,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.MemberBanned;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.MemberBanned;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IAccessControl {
    attributes?: signalservice.AccessControl.AccessRequired | null;
    members?: signalservice.AccessControl.AccessRequired | null;
    addFromInviteLink?: signalservice.AccessControl.AccessRequired | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class AccessControl implements IAccessControl {
    constructor(properties?: signalservice.IAccessControl);
    public attributes: signalservice.AccessControl.AccessRequired;
    public members: signalservice.AccessControl.AccessRequired;
    public addFromInviteLink: signalservice.AccessControl.AccessRequired;
    public static encode(
      message: signalservice.IAccessControl,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IAccessControl,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AccessControl;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AccessControl;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace AccessControl {
    enum AccessRequired {
      UNKNOWN = 0,
      ANY = 1,
      MEMBER = 2,
      ADMINISTRATOR = 3,
      UNSATISFIABLE = 4,
    }
  }

  interface IGroup {
    publicKey?: Uint8Array | null;
    title?: Uint8Array | null;
    avatar?: string | null;
    disappearingMessagesTimer?: Uint8Array | null;
    accessControl?: signalservice.IAccessControl | null;
    version?: number | null;
    members?: signalservice.IMember[] | null;
    membersPendingProfileKey?: signalservice.IMemberPendingProfileKey[] | null;
    membersPendingAdminApproval?:
      | signalservice.IMemberPendingAdminApproval[]
      | null;
    inviteLinkPassword?: Uint8Array | null;
    descriptionBytes?: Uint8Array | null;
    announcementsOnly?: boolean | null;
    membersBanned?: signalservice.IMemberBanned[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class Group implements IGroup {
    constructor(properties?: signalservice.IGroup);
    public publicKey: Uint8Array;
    public title: Uint8Array;
    public avatar: string;
    public disappearingMessagesTimer: Uint8Array;
    public accessControl?: signalservice.IAccessControl | null;
    public version: number;
    public members: signalservice.IMember[];
    public membersPendingProfileKey: signalservice.IMemberPendingProfileKey[];
    public membersPendingAdminApproval: signalservice.IMemberPendingAdminApproval[];
    public inviteLinkPassword: Uint8Array;
    public descriptionBytes: Uint8Array;
    public announcementsOnly: boolean;
    public membersBanned: signalservice.IMemberBanned[];
    public static encode(
      message: signalservice.IGroup,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroup,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Group;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Group;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IGroupChange {
    actions?: Uint8Array | null;
    serverSignature?: Uint8Array | null;
    changeEpoch?: number | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupChange implements IGroupChange {
    constructor(properties?: signalservice.IGroupChange);
    public actions: Uint8Array;
    public serverSignature: Uint8Array;
    public changeEpoch: number;
    public static encode(
      message: signalservice.IGroupChange,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupChange,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupChange;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupChange;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupChange {
    interface IActions {
      sourceUserId?: Uint8Array | null;
      version?: number | null;
      addMembers?: signalservice.GroupChange.Actions.IAddMemberAction[] | null;
      deleteMembers?:
        | signalservice.GroupChange.Actions.IDeleteMemberAction[]
        | null;
      modifyMemberRoles?:
        | signalservice.GroupChange.Actions.IModifyMemberRoleAction[]
        | null;
      modifyMemberProfileKeys?:
        | signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction[]
        | null;
      addPendingMembers?:
        | signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction[]
        | null;
      deletePendingMembers?:
        | signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction[]
        | null;
      promotePendingMembers?:
        | signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction[]
        | null;
      modifyTitle?: signalservice.GroupChange.Actions.IModifyTitleAction | null;
      modifyAvatar?: signalservice.GroupChange.Actions.IModifyAvatarAction | null;
      modifyDisappearingMessagesTimer?: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction | null;
      modifyAttributesAccess?: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction | null;
      modifyMemberAccess?: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction | null;
      modifyAddFromInviteLinkAccess?: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction | null;
      addMemberPendingAdminApprovals?:
        | signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction[]
        | null;
      deleteMemberPendingAdminApprovals?:
        | signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction[]
        | null;
      promoteMemberPendingAdminApprovals?:
        | signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction[]
        | null;
      modifyInviteLinkPassword?: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction | null;
      modifyDescription?: signalservice.GroupChange.Actions.IModifyDescriptionAction | null;
      modifyAnnouncementsOnly?: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction | null;
      addMembersBanned?:
        | signalservice.GroupChange.Actions.IAddMemberBannedAction[]
        | null;
      deleteMembersBanned?:
        | signalservice.GroupChange.Actions.IDeleteMemberBannedAction[]
        | null;
      promoteMembersPendingPniAciProfileKey?:
        | signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction[]
        | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Actions implements IActions {
      constructor(properties?: signalservice.GroupChange.IActions);
      public sourceUserId: Uint8Array;
      public version: number;
      public addMembers: signalservice.GroupChange.Actions.IAddMemberAction[];
      public deleteMembers: signalservice.GroupChange.Actions.IDeleteMemberAction[];
      public modifyMemberRoles: signalservice.GroupChange.Actions.IModifyMemberRoleAction[];
      public modifyMemberProfileKeys: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction[];
      public addPendingMembers: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction[];
      public deletePendingMembers: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction[];
      public promotePendingMembers: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction[];
      public modifyTitle?: signalservice.GroupChange.Actions.IModifyTitleAction | null;
      public modifyAvatar?: signalservice.GroupChange.Actions.IModifyAvatarAction | null;
      public modifyDisappearingMessagesTimer?: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction | null;
      public modifyAttributesAccess?: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction | null;
      public modifyMemberAccess?: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction | null;
      public modifyAddFromInviteLinkAccess?: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction | null;
      public addMemberPendingAdminApprovals: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction[];
      public deleteMemberPendingAdminApprovals: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction[];
      public promoteMemberPendingAdminApprovals: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction[];
      public modifyInviteLinkPassword?: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction | null;
      public modifyDescription?: signalservice.GroupChange.Actions.IModifyDescriptionAction | null;
      public modifyAnnouncementsOnly?: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction | null;
      public addMembersBanned: signalservice.GroupChange.Actions.IAddMemberBannedAction[];
      public deleteMembersBanned: signalservice.GroupChange.Actions.IDeleteMemberBannedAction[];
      public promoteMembersPendingPniAciProfileKey: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction[];
      public static encode(
        message: signalservice.GroupChange.IActions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.GroupChange.IActions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupChange.Actions;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupChange.Actions;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Actions {
      interface IAddMemberAction {
        added?: signalservice.IMember | null;
        joinFromInviteLink?: boolean | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class AddMemberAction implements IAddMemberAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberAction
        );
        public added?: signalservice.IMember | null;
        public joinFromInviteLink: boolean;
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IDeleteMemberAction {
        deletedUserId?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class DeleteMemberAction implements IDeleteMemberAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberAction
        );
        public deletedUserId: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyMemberRoleAction {
        userId?: Uint8Array | null;
        role?: signalservice.Member.Role | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyMemberRoleAction implements IModifyMemberRoleAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyMemberRoleAction
        );
        public userId: Uint8Array;
        public role: signalservice.Member.Role;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyMemberRoleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyMemberRoleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyMemberRoleAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyMemberRoleAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyMemberProfileKeyAction {
        presentation?: Uint8Array | null;
        userId?: Uint8Array | null;
        profileKey?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyMemberProfileKeyAction
        implements IModifyMemberProfileKeyAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction
        );
        public presentation: Uint8Array;
        public userId: Uint8Array;
        public profileKey: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyMemberProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyMemberProfileKeyAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IAddMemberPendingProfileKeyAction {
        added?: signalservice.IMemberPendingProfileKey | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class AddMemberPendingProfileKeyAction
        implements IAddMemberPendingProfileKeyAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction
        );
        public added?: signalservice.IMemberPendingProfileKey | null;
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberPendingProfileKeyAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IDeleteMemberPendingProfileKeyAction {
        deletedUserId?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class DeleteMemberPendingProfileKeyAction
        implements IDeleteMemberPendingProfileKeyAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction
        );
        public deletedUserId: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberPendingProfileKeyAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IPromoteMemberPendingProfileKeyAction {
        presentation?: Uint8Array | null;
        userId?: Uint8Array | null;
        profileKey?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class PromoteMemberPendingProfileKeyAction
        implements IPromoteMemberPendingProfileKeyAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction
        );
        public presentation: Uint8Array;
        public userId: Uint8Array;
        public profileKey: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.PromoteMemberPendingProfileKeyAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IPromoteMemberPendingPniAciProfileKeyAction {
        presentation?: Uint8Array | null;
        userId?: Uint8Array | null;
        pni?: Uint8Array | null;
        profileKey?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class PromoteMemberPendingPniAciProfileKeyAction
        implements IPromoteMemberPendingPniAciProfileKeyAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction
        );
        public presentation: Uint8Array;
        public userId: Uint8Array;
        public pni: Uint8Array;
        public profileKey: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingPniAciProfileKeyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.PromoteMemberPendingPniAciProfileKeyAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IAddMemberPendingAdminApprovalAction {
        added?: signalservice.IMemberPendingAdminApproval | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class AddMemberPendingAdminApprovalAction
        implements IAddMemberPendingAdminApprovalAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction
        );
        public added?: signalservice.IMemberPendingAdminApproval | null;
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberPendingAdminApprovalAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IDeleteMemberPendingAdminApprovalAction {
        deletedUserId?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class DeleteMemberPendingAdminApprovalAction
        implements IDeleteMemberPendingAdminApprovalAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction
        );
        public deletedUserId: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberPendingAdminApprovalAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IPromoteMemberPendingAdminApprovalAction {
        userId?: Uint8Array | null;
        role?: signalservice.Member.Role | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class PromoteMemberPendingAdminApprovalAction
        implements IPromoteMemberPendingAdminApprovalAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction
        );
        public userId: Uint8Array;
        public role: signalservice.Member.Role;
        public static encode(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IPromoteMemberPendingAdminApprovalAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.PromoteMemberPendingAdminApprovalAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IAddMemberBannedAction {
        added?: signalservice.IMemberBanned | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class AddMemberBannedAction implements IAddMemberBannedAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IAddMemberBannedAction
        );
        public added?: signalservice.IMemberBanned | null;
        public static encode(
          message: signalservice.GroupChange.Actions.IAddMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IAddMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.AddMemberBannedAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.AddMemberBannedAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IDeleteMemberBannedAction {
        deletedUserId?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class DeleteMemberBannedAction implements IDeleteMemberBannedAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IDeleteMemberBannedAction
        );
        public deletedUserId: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IDeleteMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IDeleteMemberBannedAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.DeleteMemberBannedAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.DeleteMemberBannedAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyTitleAction {
        title?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyTitleAction implements IModifyTitleAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyTitleAction
        );
        public title: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyTitleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyTitleAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyTitleAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyTitleAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyAvatarAction {
        avatar?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyAvatarAction implements IModifyAvatarAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAvatarAction
        );
        public avatar: string;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAvatarAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAvatarAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAvatarAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAvatarAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyDisappearingMessagesTimerAction {
        timer?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyDisappearingMessagesTimerAction
        implements IModifyDisappearingMessagesTimerAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction
        );
        public timer: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyDisappearingMessagesTimerAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyDisappearingMessagesTimerAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyAttributesAccessControlAction {
        attributesAccess?: signalservice.AccessControl.AccessRequired | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyAttributesAccessControlAction
        implements IModifyAttributesAccessControlAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction
        );
        public attributesAccess: signalservice.AccessControl.AccessRequired;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAttributesAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAttributesAccessControlAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyAvatarAccessControlAction {
        avatarAccess?: signalservice.AccessControl.AccessRequired | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyAvatarAccessControlAction
        implements IModifyAvatarAccessControlAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAvatarAccessControlAction
        );
        public avatarAccess: signalservice.AccessControl.AccessRequired;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAvatarAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAvatarAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAvatarAccessControlAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyMembersAccessControlAction {
        membersAccess?: signalservice.AccessControl.AccessRequired | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyMembersAccessControlAction
        implements IModifyMembersAccessControlAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction
        );
        public membersAccess: signalservice.AccessControl.AccessRequired;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyMembersAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyMembersAccessControlAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyMembersAccessControlAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyAddFromInviteLinkAccessControlAction {
        addFromInviteLinkAccess?: signalservice.AccessControl.AccessRequired | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyAddFromInviteLinkAccessControlAction
        implements IModifyAddFromInviteLinkAccessControlAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction
        );
        public addFromInviteLinkAccess: signalservice.AccessControl.AccessRequired;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAddFromInviteLinkAccessControlAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAddFromInviteLinkAccessControlAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyInviteLinkPasswordAction {
        inviteLinkPassword?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyInviteLinkPasswordAction
        implements IModifyInviteLinkPasswordAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction
        );
        public inviteLinkPassword: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyInviteLinkPasswordAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyInviteLinkPasswordAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyDescriptionAction {
        descriptionBytes?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyDescriptionAction implements IModifyDescriptionAction {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyDescriptionAction
        );
        public descriptionBytes: Uint8Array;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyDescriptionAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyDescriptionAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyDescriptionAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyDescriptionAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IModifyAnnouncementsOnlyAction {
        announcementsOnly?: boolean | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class ModifyAnnouncementsOnlyAction
        implements IModifyAnnouncementsOnlyAction
      {
        constructor(
          properties?: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction
        );
        public announcementsOnly: boolean;
        public static encode(
          message: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.GroupChange.Actions.IModifyAnnouncementsOnlyAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.GroupChange.Actions.ModifyAnnouncementsOnlyAction;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }
  }

  interface IGroupChanges {
    groupChanges?: signalservice.GroupChanges.IGroupChangeState[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupChanges implements IGroupChanges {
    constructor(properties?: signalservice.IGroupChanges);
    public groupChanges: signalservice.GroupChanges.IGroupChangeState[];
    public static encode(
      message: signalservice.IGroupChanges,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupChanges,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupChanges;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupChanges;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupChanges {
    interface IGroupChangeState {
      groupChange?: signalservice.IGroupChange | null;
      groupState?: signalservice.IGroup | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class GroupChangeState implements IGroupChangeState {
      constructor(properties?: signalservice.GroupChanges.IGroupChangeState);
      public groupChange?: signalservice.IGroupChange | null;
      public groupState?: signalservice.IGroup | null;
      public static encode(
        message: signalservice.GroupChanges.IGroupChangeState,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.GroupChanges.IGroupChangeState,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupChanges.GroupChangeState;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupChanges.GroupChangeState;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface IGroupAttributeBlob {
    title?: string | null;
    avatar?: Uint8Array | null;
    disappearingMessagesDuration?: number | null;
    descriptionText?: string | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupAttributeBlob implements IGroupAttributeBlob {
    constructor(properties?: signalservice.IGroupAttributeBlob);
    public title?: string | null;
    public avatar?: Uint8Array | null;
    public disappearingMessagesDuration?: number | null;
    public descriptionText?: string | null;
    public content?:
      | 'title'
      | 'avatar'
      | 'disappearingMessagesDuration'
      | 'descriptionText';
    public static encode(
      message: signalservice.IGroupAttributeBlob,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupAttributeBlob,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupAttributeBlob;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupAttributeBlob;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IGroupExternalCredential {
    token?: string | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupExternalCredential implements IGroupExternalCredential {
    constructor(properties?: signalservice.IGroupExternalCredential);
    public token: string;
    public static encode(
      message: signalservice.IGroupExternalCredential,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupExternalCredential,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupExternalCredential;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupExternalCredential;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IGroupInviteLink {
    v1Contents?: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1 | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupInviteLink implements IGroupInviteLink {
    constructor(properties?: signalservice.IGroupInviteLink);
    public v1Contents?: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1 | null;
    public contents?: 'v1Contents';
    public static encode(
      message: signalservice.IGroupInviteLink,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupInviteLink,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupInviteLink;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupInviteLink;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupInviteLink {
    interface IGroupInviteLinkContentsV1 {
      groupMasterKey?: Uint8Array | null;
      inviteLinkPassword?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class GroupInviteLinkContentsV1 implements IGroupInviteLinkContentsV1 {
      constructor(
        properties?: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1
      );
      public groupMasterKey: Uint8Array;
      public inviteLinkPassword: Uint8Array;
      public static encode(
        message: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.GroupInviteLink.IGroupInviteLinkContentsV1,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.GroupInviteLink.GroupInviteLinkContentsV1;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.GroupInviteLink.GroupInviteLinkContentsV1;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface IGroupJoinInfo {
    publicKey?: Uint8Array | null;
    title?: Uint8Array | null;
    avatar?: string | null;
    memberCount?: number | null;
    addFromInviteLink?: signalservice.AccessControl.AccessRequired | null;
    version?: number | null;
    pendingAdminApproval?: boolean | null;
    descriptionBytes?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupJoinInfo implements IGroupJoinInfo {
    constructor(properties?: signalservice.IGroupJoinInfo);
    public publicKey: Uint8Array;
    public title: Uint8Array;
    public avatar: string;
    public memberCount: number;
    public addFromInviteLink: signalservice.AccessControl.AccessRequired;
    public version: number;
    public pendingAdminApproval: boolean;
    public descriptionBytes: Uint8Array;
    public static encode(
      message: signalservice.IGroupJoinInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupJoinInfo,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupJoinInfo;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupJoinInfo;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IEnvelope {
    type?: signalservice.Envelope.Type | null;
    sourceServiceId?: string | null;
    sourceDevice?: number | null;
    destinationServiceId?: string | null;
    timestamp?: Long | null;
    content?: Uint8Array | null;
    serverGuid?: string | null;
    serverTimestamp?: Long | null;
    ephemeral?: boolean | null;
    urgent?: boolean | null;
    updatedPni?: string | null;
    story?: boolean | null;
    reportingToken?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class Envelope implements IEnvelope {
    constructor(properties?: signalservice.IEnvelope);
    public type: signalservice.Envelope.Type;
    public sourceServiceId: string;
    public sourceDevice: number;
    public destinationServiceId: string;
    public timestamp: Long;
    public content: Uint8Array;
    public serverGuid: string;
    public serverTimestamp: Long;
    public ephemeral: boolean;
    public urgent: boolean;
    public updatedPni: string;
    public story: boolean;
    public reportingToken: Uint8Array;
    public static encode(
      message: signalservice.IEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IEnvelope,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Envelope;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Envelope;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace Envelope {
    enum Type {
      UNKNOWN = 0,
      CIPHERTEXT = 1,
      KEY_EXCHANGE = 2,
      PREKEY_BUNDLE = 3,
      RECEIPT = 5,
      UNIDENTIFIED_SENDER = 6,
      PLAINTEXT_CONTENT = 8,
    }
  }

  interface IContent {
    dataMessage?: signalservice.IDataMessage | null;
    syncMessage?: signalservice.ISyncMessage | null;
    callingMessage?: signalservice.ICallingMessage | null;
    nullMessage?: signalservice.INullMessage | null;
    receiptMessage?: signalservice.IReceiptMessage | null;
    typingMessage?: signalservice.ITypingMessage | null;
    senderKeyDistributionMessage?: Uint8Array | null;
    decryptionErrorMessage?: Uint8Array | null;
    storyMessage?: signalservice.IStoryMessage | null;
    pniSignatureMessage?: signalservice.IPniSignatureMessage | null;
    editMessage?: signalservice.IEditMessage | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class Content implements IContent {
    constructor(properties?: signalservice.IContent);
    public dataMessage?: signalservice.IDataMessage | null;
    public syncMessage?: signalservice.ISyncMessage | null;
    public callingMessage?: signalservice.ICallingMessage | null;
    public nullMessage?: signalservice.INullMessage | null;
    public receiptMessage?: signalservice.IReceiptMessage | null;
    public typingMessage?: signalservice.ITypingMessage | null;
    public senderKeyDistributionMessage: Uint8Array;
    public decryptionErrorMessage: Uint8Array;
    public storyMessage?: signalservice.IStoryMessage | null;
    public pniSignatureMessage?: signalservice.IPniSignatureMessage | null;
    public editMessage?: signalservice.IEditMessage | null;
    public static encode(
      message: signalservice.IContent,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IContent,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Content;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Content;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface ICallingMessage {
    offer?: signalservice.CallingMessage.IOffer | null;
    answer?: signalservice.CallingMessage.IAnswer | null;
    iceCandidates?: signalservice.CallingMessage.IIceCandidate[] | null;
    legacyHangup?: signalservice.CallingMessage.IHangup | null;
    busy?: signalservice.CallingMessage.IBusy | null;
    hangup?: signalservice.CallingMessage.IHangup | null;
    supportsMultiRing?: boolean | null;
    destinationDeviceId?: number | null;
    opaque?: signalservice.CallingMessage.IOpaque | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class CallingMessage implements ICallingMessage {
    constructor(properties?: signalservice.ICallingMessage);
    public offer?: signalservice.CallingMessage.IOffer | null;
    public answer?: signalservice.CallingMessage.IAnswer | null;
    public iceCandidates: signalservice.CallingMessage.IIceCandidate[];
    public legacyHangup?: signalservice.CallingMessage.IHangup | null;
    public busy?: signalservice.CallingMessage.IBusy | null;
    public hangup?: signalservice.CallingMessage.IHangup | null;
    public supportsMultiRing: boolean;
    public destinationDeviceId: number;
    public opaque?: signalservice.CallingMessage.IOpaque | null;
    public static encode(
      message: signalservice.ICallingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ICallingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.CallingMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.CallingMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace CallingMessage {
    interface IOffer {
      callId?: Long | null;
      sdp?: string | null;
      type?: signalservice.CallingMessage.Offer.Type | null;
      opaque?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Offer implements IOffer {
      constructor(properties?: signalservice.CallingMessage.IOffer);
      public callId: Long;
      public sdp: string;
      public type: signalservice.CallingMessage.Offer.Type;
      public opaque: Uint8Array;
      public static encode(
        message: signalservice.CallingMessage.IOffer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.CallingMessage.IOffer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Offer;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Offer;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Offer {
      enum Type {
        OFFER_AUDIO_CALL = 0,
        OFFER_VIDEO_CALL = 1,
      }
    }

    interface IAnswer {
      callId?: Long | null;
      sdp?: string | null;
      opaque?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Answer implements IAnswer {
      constructor(properties?: signalservice.CallingMessage.IAnswer);
      public callId: Long;
      public sdp: string;
      public opaque: Uint8Array;
      public static encode(
        message: signalservice.CallingMessage.IAnswer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.CallingMessage.IAnswer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Answer;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Answer;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IIceCandidate {
      callId?: Long | null;
      mid?: string | null;
      line?: number | null;
      sdp?: string | null;
      opaque?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class IceCandidate implements IIceCandidate {
      constructor(properties?: signalservice.CallingMessage.IIceCandidate);
      public callId: Long;
      public mid: string;
      public line: number;
      public sdp: string;
      public opaque: Uint8Array;
      public static encode(
        message: signalservice.CallingMessage.IIceCandidate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.CallingMessage.IIceCandidate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.IceCandidate;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.IceCandidate;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IBusy {
      callId?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Busy implements IBusy {
      constructor(properties?: signalservice.CallingMessage.IBusy);
      public callId: Long;
      public static encode(
        message: signalservice.CallingMessage.IBusy,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.CallingMessage.IBusy,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Busy;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Busy;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IHangup {
      callId?: Long | null;
      type?: signalservice.CallingMessage.Hangup.Type | null;
      deviceId?: number | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Hangup implements IHangup {
      constructor(properties?: signalservice.CallingMessage.IHangup);
      public callId: Long;
      public type: signalservice.CallingMessage.Hangup.Type;
      public deviceId: number;
      public static encode(
        message: signalservice.CallingMessage.IHangup,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.CallingMessage.IHangup,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Hangup;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Hangup;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Hangup {
      enum Type {
        HANGUP_NORMAL = 0,
        HANGUP_ACCEPTED = 1,
        HANGUP_DECLINED = 2,
        HANGUP_BUSY = 3,
        HANGUP_NEED_PERMISSION = 4,
      }
    }

    interface IOpaque {
      data?: Uint8Array | null;
      urgency?: signalservice.CallingMessage.Opaque.Urgency | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Opaque implements IOpaque {
      constructor(properties?: signalservice.CallingMessage.IOpaque);
      public data: Uint8Array;
      public urgency: signalservice.CallingMessage.Opaque.Urgency;
      public static encode(
        message: signalservice.CallingMessage.IOpaque,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.CallingMessage.IOpaque,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.CallingMessage.Opaque;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.CallingMessage.Opaque;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Opaque {
      enum Urgency {
        DROPPABLE = 0,
        HANDLE_IMMEDIATELY = 1,
      }
    }
  }

  interface IDataMessage {
    body?: string | null;
    attachments?: signalservice.IAttachmentPointer[] | null;
    groupV2?: signalservice.IGroupContextV2 | null;
    flags?: number | null;
    expireTimer?: number | null;
    profileKey?: Uint8Array | null;
    timestamp?: Long | null;
    quote?: signalservice.DataMessage.IQuote | null;
    contact?: signalservice.DataMessage.IContact[] | null;
    preview?: signalservice.DataMessage.IPreview[] | null;
    sticker?: signalservice.DataMessage.ISticker | null;
    requiredProtocolVersion?: number | null;
    isViewOnce?: boolean | null;
    reaction?: signalservice.DataMessage.IReaction | null;
    delete?: signalservice.DataMessage.IDelete | null;
    bodyRanges?: signalservice.DataMessage.IBodyRange[] | null;
    groupCallUpdate?: signalservice.DataMessage.IGroupCallUpdate | null;
    payment?: signalservice.DataMessage.IPayment | null;
    storyContext?: signalservice.DataMessage.IStoryContext | null;
    giftBadge?: signalservice.DataMessage.IGiftBadge | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class DataMessage implements IDataMessage {
    constructor(properties?: signalservice.IDataMessage);
    public body: string;
    public attachments: signalservice.IAttachmentPointer[];
    public groupV2?: signalservice.IGroupContextV2 | null;
    public flags: number;
    public expireTimer: number;
    public profileKey: Uint8Array;
    public timestamp: Long;
    public quote?: signalservice.DataMessage.IQuote | null;
    public contact: signalservice.DataMessage.IContact[];
    public preview: signalservice.DataMessage.IPreview[];
    public sticker?: signalservice.DataMessage.ISticker | null;
    public requiredProtocolVersion: number;
    public isViewOnce: boolean;
    public reaction?: signalservice.DataMessage.IReaction | null;
    public delete?: signalservice.DataMessage.IDelete | null;
    public bodyRanges: signalservice.DataMessage.IBodyRange[];
    public groupCallUpdate?: signalservice.DataMessage.IGroupCallUpdate | null;
    public payment?: signalservice.DataMessage.IPayment | null;
    public storyContext?: signalservice.DataMessage.IStoryContext | null;
    public giftBadge?: signalservice.DataMessage.IGiftBadge | null;
    public static encode(
      message: signalservice.IDataMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IDataMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.DataMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.DataMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace DataMessage {
    enum Flags {
      END_SESSION = 1,
      EXPIRATION_TIMER_UPDATE = 2,
      PROFILE_KEY_UPDATE = 4,
    }

    interface IPayment {
      notification?: signalservice.DataMessage.Payment.INotification | null;
      activation?: signalservice.DataMessage.Payment.IActivation | null;
      request?: signalservice.DataMessage.Payment.IRequest | null;
      cancellation?: signalservice.DataMessage.Payment.ICancellation | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Payment implements IPayment {
      constructor(properties?: signalservice.DataMessage.IPayment);
      public notification?: signalservice.DataMessage.Payment.INotification | null;
      public activation?: signalservice.DataMessage.Payment.IActivation | null;
      public request?: signalservice.DataMessage.Payment.IRequest | null;
      public cancellation?: signalservice.DataMessage.Payment.ICancellation | null;
      public Item?: 'notification' | 'activation' | 'request' | 'cancellation';
      public static encode(
        message: signalservice.DataMessage.IPayment,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IPayment,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Payment;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Payment;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Payment {
      interface IAmount {
        mobileCoin?: signalservice.DataMessage.Payment.Amount.IMobileCoin | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Amount implements IAmount {
        constructor(properties?: signalservice.DataMessage.Payment.IAmount);
        public mobileCoin?: signalservice.DataMessage.Payment.Amount.IMobileCoin | null;
        public Amount?: 'mobileCoin';
        public static encode(
          message: signalservice.DataMessage.Payment.IAmount,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Payment.IAmount,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Payment.Amount;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Payment.Amount;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace Amount {
        interface IMobileCoin {
          picoMob?: Long | null;

          $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class MobileCoin implements IMobileCoin {
          constructor(
            properties?: signalservice.DataMessage.Payment.Amount.IMobileCoin
          );
          public picoMob: Long;
          public static encode(
            message: signalservice.DataMessage.Payment.Amount.IMobileCoin,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static encodeDelimited(
            message: signalservice.DataMessage.Payment.Amount.IMobileCoin,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signalservice.DataMessage.Payment.Amount.MobileCoin;
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signalservice.DataMessage.Payment.Amount.MobileCoin;

          public $unknownFields?: ReadonlyArray<Uint8Array>;
        }
      }

      interface IRequestId {
        uuid?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class RequestId implements IRequestId {
        constructor(properties?: signalservice.DataMessage.Payment.IRequestId);
        public uuid: string;
        public static encode(
          message: signalservice.DataMessage.Payment.IRequestId,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Payment.IRequestId,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Payment.RequestId;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Payment.RequestId;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IRequest {
        requestId?: signalservice.DataMessage.Payment.IRequestId | null;
        amount?: signalservice.DataMessage.Payment.IAmount | null;
        note?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Request implements IRequest {
        constructor(properties?: signalservice.DataMessage.Payment.IRequest);
        public requestId?: signalservice.DataMessage.Payment.IRequestId | null;
        public amount?: signalservice.DataMessage.Payment.IAmount | null;
        public note: string;
        public static encode(
          message: signalservice.DataMessage.Payment.IRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Payment.IRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Payment.Request;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Payment.Request;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface INotification {
        mobileCoin?: signalservice.DataMessage.Payment.Notification.IMobileCoin | null;
        note?: string | null;
        requestId?: signalservice.DataMessage.Payment.IRequestId | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Notification implements INotification {
        constructor(
          properties?: signalservice.DataMessage.Payment.INotification
        );
        public mobileCoin?: signalservice.DataMessage.Payment.Notification.IMobileCoin | null;
        public note: string;
        public requestId?: signalservice.DataMessage.Payment.IRequestId | null;
        public Transaction?: 'mobileCoin';
        public static encode(
          message: signalservice.DataMessage.Payment.INotification,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Payment.INotification,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Payment.Notification;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Payment.Notification;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace Notification {
        interface IMobileCoin {
          receipt?: Uint8Array | null;

          $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class MobileCoin implements IMobileCoin {
          constructor(
            properties?: signalservice.DataMessage.Payment.Notification.IMobileCoin
          );
          public receipt: Uint8Array;
          public static encode(
            message: signalservice.DataMessage.Payment.Notification.IMobileCoin,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static encodeDelimited(
            message: signalservice.DataMessage.Payment.Notification.IMobileCoin,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signalservice.DataMessage.Payment.Notification.MobileCoin;
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signalservice.DataMessage.Payment.Notification.MobileCoin;

          public $unknownFields?: ReadonlyArray<Uint8Array>;
        }
      }

      interface ICancellation {
        requestId?: signalservice.DataMessage.Payment.IRequestId | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Cancellation implements ICancellation {
        constructor(
          properties?: signalservice.DataMessage.Payment.ICancellation
        );
        public requestId?: signalservice.DataMessage.Payment.IRequestId | null;
        public static encode(
          message: signalservice.DataMessage.Payment.ICancellation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Payment.ICancellation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Payment.Cancellation;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Payment.Cancellation;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IActivation {
        type?: signalservice.DataMessage.Payment.Activation.Type | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Activation implements IActivation {
        constructor(properties?: signalservice.DataMessage.Payment.IActivation);
        public type: signalservice.DataMessage.Payment.Activation.Type;
        public static encode(
          message: signalservice.DataMessage.Payment.IActivation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Payment.IActivation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Payment.Activation;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Payment.Activation;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace Activation {
        enum Type {
          REQUEST = 0,
          ACTIVATED = 1,
        }
      }
    }

    interface IQuote {
      id?: Long | null;
      authorAci?: string | null;
      text?: string | null;
      attachments?: signalservice.DataMessage.Quote.IQuotedAttachment[] | null;
      bodyRanges?: signalservice.DataMessage.IBodyRange[] | null;
      type?: signalservice.DataMessage.Quote.Type | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Quote implements IQuote {
      constructor(properties?: signalservice.DataMessage.IQuote);
      public id: Long;
      public authorAci: string;
      public text: string;
      public attachments: signalservice.DataMessage.Quote.IQuotedAttachment[];
      public bodyRanges: signalservice.DataMessage.IBodyRange[];
      public type: signalservice.DataMessage.Quote.Type;
      public static encode(
        message: signalservice.DataMessage.IQuote,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IQuote,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Quote;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Quote;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Quote {
      enum Type {
        NORMAL = 0,
        GIFT_BADGE = 1,
      }

      interface IQuotedAttachment {
        contentType?: string | null;
        fileName?: string | null;
        thumbnail?: signalservice.IAttachmentPointer | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class QuotedAttachment implements IQuotedAttachment {
        constructor(
          properties?: signalservice.DataMessage.Quote.IQuotedAttachment
        );
        public contentType: string;
        public fileName: string;
        public thumbnail?: signalservice.IAttachmentPointer | null;
        public static encode(
          message: signalservice.DataMessage.Quote.IQuotedAttachment,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Quote.IQuotedAttachment,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Quote.QuotedAttachment;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Quote.QuotedAttachment;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }

    interface IContact {
      name?: signalservice.DataMessage.Contact.IName | null;
      number?: signalservice.DataMessage.Contact.IPhone[] | null;
      email?: signalservice.DataMessage.Contact.IEmail[] | null;
      address?: signalservice.DataMessage.Contact.IPostalAddress[] | null;
      avatar?: signalservice.DataMessage.Contact.IAvatar | null;
      organization?: string | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Contact implements IContact {
      constructor(properties?: signalservice.DataMessage.IContact);
      public name?: signalservice.DataMessage.Contact.IName | null;
      public number: signalservice.DataMessage.Contact.IPhone[];
      public email: signalservice.DataMessage.Contact.IEmail[];
      public address: signalservice.DataMessage.Contact.IPostalAddress[];
      public avatar?: signalservice.DataMessage.Contact.IAvatar | null;
      public organization: string;
      public static encode(
        message: signalservice.DataMessage.IContact,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IContact,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Contact;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Contact;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Contact {
      interface IName {
        givenName?: string | null;
        familyName?: string | null;
        prefix?: string | null;
        suffix?: string | null;
        middleName?: string | null;
        displayName?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Name implements IName {
        constructor(properties?: signalservice.DataMessage.Contact.IName);
        public givenName: string;
        public familyName: string;
        public prefix: string;
        public suffix: string;
        public middleName: string;
        public displayName: string;
        public static encode(
          message: signalservice.DataMessage.Contact.IName,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IName,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Name;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Name;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IPhone {
        value?: string | null;
        type?: signalservice.DataMessage.Contact.Phone.Type | null;
        label?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Phone implements IPhone {
        constructor(properties?: signalservice.DataMessage.Contact.IPhone);
        public value: string;
        public type: signalservice.DataMessage.Contact.Phone.Type;
        public label: string;
        public static encode(
          message: signalservice.DataMessage.Contact.IPhone,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IPhone,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Phone;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Phone;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace Phone {
        enum Type {
          HOME = 1,
          MOBILE = 2,
          WORK = 3,
          CUSTOM = 4,
        }
      }

      interface IEmail {
        value?: string | null;
        type?: signalservice.DataMessage.Contact.Email.Type | null;
        label?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Email implements IEmail {
        constructor(properties?: signalservice.DataMessage.Contact.IEmail);
        public value: string;
        public type: signalservice.DataMessage.Contact.Email.Type;
        public label: string;
        public static encode(
          message: signalservice.DataMessage.Contact.IEmail,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IEmail,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Email;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Email;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace Email {
        enum Type {
          HOME = 1,
          MOBILE = 2,
          WORK = 3,
          CUSTOM = 4,
        }
      }

      interface IPostalAddress {
        type?: signalservice.DataMessage.Contact.PostalAddress.Type | null;
        label?: string | null;
        street?: string | null;
        pobox?: string | null;
        neighborhood?: string | null;
        city?: string | null;
        region?: string | null;
        postcode?: string | null;
        country?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class PostalAddress implements IPostalAddress {
        constructor(
          properties?: signalservice.DataMessage.Contact.IPostalAddress
        );
        public type: signalservice.DataMessage.Contact.PostalAddress.Type;
        public label: string;
        public street: string;
        public pobox: string;
        public neighborhood: string;
        public city: string;
        public region: string;
        public postcode: string;
        public country: string;
        public static encode(
          message: signalservice.DataMessage.Contact.IPostalAddress,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IPostalAddress,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.PostalAddress;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.PostalAddress;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace PostalAddress {
        enum Type {
          HOME = 1,
          WORK = 2,
          CUSTOM = 3,
        }
      }

      interface IAvatar {
        avatar?: signalservice.IAttachmentPointer | null;
        isProfile?: boolean | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Avatar implements IAvatar {
        constructor(properties?: signalservice.DataMessage.Contact.IAvatar);
        public avatar?: signalservice.IAttachmentPointer | null;
        public isProfile: boolean;
        public static encode(
          message: signalservice.DataMessage.Contact.IAvatar,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.DataMessage.Contact.IAvatar,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.DataMessage.Contact.Avatar;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.DataMessage.Contact.Avatar;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }

    interface IPreview {
      url?: string | null;
      title?: string | null;
      image?: signalservice.IAttachmentPointer | null;
      description?: string | null;
      date?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Preview implements IPreview {
      constructor(properties?: signalservice.DataMessage.IPreview);
      public url: string;
      public title: string;
      public image?: signalservice.IAttachmentPointer | null;
      public description: string;
      public date: Long;
      public static encode(
        message: signalservice.DataMessage.IPreview,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IPreview,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Preview;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Preview;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface ISticker {
      packId?: Uint8Array | null;
      packKey?: Uint8Array | null;
      stickerId?: number | null;
      data?: signalservice.IAttachmentPointer | null;
      emoji?: string | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Sticker implements ISticker {
      constructor(properties?: signalservice.DataMessage.ISticker);
      public packId: Uint8Array;
      public packKey: Uint8Array;
      public stickerId: number;
      public data?: signalservice.IAttachmentPointer | null;
      public emoji: string;
      public static encode(
        message: signalservice.DataMessage.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Sticker;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Sticker;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IReaction {
      emoji?: string | null;
      remove?: boolean | null;
      targetAuthorAci?: string | null;
      targetTimestamp?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Reaction implements IReaction {
      constructor(properties?: signalservice.DataMessage.IReaction);
      public emoji: string;
      public remove: boolean;
      public targetAuthorAci: string;
      public targetTimestamp: Long;
      public static encode(
        message: signalservice.DataMessage.IReaction,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IReaction,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Reaction;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Reaction;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IDelete {
      targetSentTimestamp?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Delete implements IDelete {
      constructor(properties?: signalservice.DataMessage.IDelete);
      public targetSentTimestamp: Long;
      public static encode(
        message: signalservice.DataMessage.IDelete,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IDelete,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.Delete;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.Delete;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IBodyRange {
      start?: number | null;
      length?: number | null;
      mentionAci?: string | null;
      style?: signalservice.DataMessage.BodyRange.Style | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class BodyRange implements IBodyRange {
      constructor(properties?: signalservice.DataMessage.IBodyRange);
      public start: number;
      public length: number;
      public mentionAci?: string | null;
      public style?: signalservice.DataMessage.BodyRange.Style | null;
      public associatedValue?: 'mentionAci' | 'style';
      public static encode(
        message: signalservice.DataMessage.IBodyRange,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IBodyRange,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.BodyRange;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.BodyRange;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace BodyRange {
      enum Style {
        NONE = 0,
        BOLD = 1,
        ITALIC = 2,
        SPOILER = 3,
        STRIKETHROUGH = 4,
        MONOSPACE = 5,
      }
    }

    interface IGroupCallUpdate {
      eraId?: string | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class GroupCallUpdate implements IGroupCallUpdate {
      constructor(properties?: signalservice.DataMessage.IGroupCallUpdate);
      public eraId: string;
      public static encode(
        message: signalservice.DataMessage.IGroupCallUpdate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IGroupCallUpdate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.GroupCallUpdate;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.GroupCallUpdate;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IStoryContext {
      authorAci?: string | null;
      sentTimestamp?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class StoryContext implements IStoryContext {
      constructor(properties?: signalservice.DataMessage.IStoryContext);
      public authorAci: string;
      public sentTimestamp: Long;
      public static encode(
        message: signalservice.DataMessage.IStoryContext,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IStoryContext,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.StoryContext;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.StoryContext;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    enum ProtocolVersion {
      INITIAL = 0,
      MESSAGE_TIMERS = 1,
      VIEW_ONCE = 2,
      VIEW_ONCE_VIDEO = 3,
      REACTIONS = 4,
      CDN_SELECTOR_ATTACHMENTS = 5,
      MENTIONS = 6,
      PAYMENTS = 7,
      // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
      CURRENT = 7,
    }

    interface IGiftBadge {
      receiptCredentialPresentation?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class GiftBadge implements IGiftBadge {
      constructor(properties?: signalservice.DataMessage.IGiftBadge);
      public receiptCredentialPresentation: Uint8Array;
      public static encode(
        message: signalservice.DataMessage.IGiftBadge,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.DataMessage.IGiftBadge,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.DataMessage.GiftBadge;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.DataMessage.GiftBadge;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface INullMessage {
    padding?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class NullMessage implements INullMessage {
    constructor(properties?: signalservice.INullMessage);
    public padding: Uint8Array;
    public static encode(
      message: signalservice.INullMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.INullMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.NullMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.NullMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IReceiptMessage {
    type?: signalservice.ReceiptMessage.Type | null;
    timestamp?: Long[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ReceiptMessage implements IReceiptMessage {
    constructor(properties?: signalservice.IReceiptMessage);
    public type: signalservice.ReceiptMessage.Type;
    public timestamp: Long[];
    public static encode(
      message: signalservice.IReceiptMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IReceiptMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ReceiptMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ReceiptMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ReceiptMessage {
    enum Type {
      DELIVERY = 0,
      READ = 1,
      VIEWED = 2,
    }
  }

  interface ITypingMessage {
    timestamp?: Long | null;
    action?: signalservice.TypingMessage.Action | null;
    groupId?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class TypingMessage implements ITypingMessage {
    constructor(properties?: signalservice.ITypingMessage);
    public timestamp: Long;
    public action: signalservice.TypingMessage.Action;
    public groupId: Uint8Array;
    public static encode(
      message: signalservice.ITypingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ITypingMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.TypingMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.TypingMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace TypingMessage {
    enum Action {
      STARTED = 0,
      STOPPED = 1,
    }
  }

  interface IStoryMessage {
    profileKey?: Uint8Array | null;
    group?: signalservice.IGroupContextV2 | null;
    fileAttachment?: signalservice.IAttachmentPointer | null;
    textAttachment?: signalservice.ITextAttachment | null;
    allowsReplies?: boolean | null;
    bodyRanges?: signalservice.DataMessage.IBodyRange[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StoryMessage implements IStoryMessage {
    constructor(properties?: signalservice.IStoryMessage);
    public profileKey: Uint8Array;
    public group?: signalservice.IGroupContextV2 | null;
    public fileAttachment?: signalservice.IAttachmentPointer | null;
    public textAttachment?: signalservice.ITextAttachment | null;
    public allowsReplies: boolean;
    public bodyRanges: signalservice.DataMessage.IBodyRange[];
    public attachment?: 'fileAttachment' | 'textAttachment';
    public static encode(
      message: signalservice.IStoryMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStoryMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StoryMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StoryMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface ITextAttachment {
    text?: string | null;
    textStyle?: signalservice.TextAttachment.Style | null;
    textForegroundColor?: number | null;
    textBackgroundColor?: number | null;
    preview?: signalservice.DataMessage.IPreview | null;
    gradient?: signalservice.TextAttachment.IGradient | null;
    color?: number | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class TextAttachment implements ITextAttachment {
    constructor(properties?: signalservice.ITextAttachment);
    public text: string;
    public textStyle: signalservice.TextAttachment.Style;
    public textForegroundColor: number;
    public textBackgroundColor: number;
    public preview?: signalservice.DataMessage.IPreview | null;
    public gradient?: signalservice.TextAttachment.IGradient | null;
    public color?: number | null;
    public background?: 'gradient' | 'color';
    public static encode(
      message: signalservice.ITextAttachment,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ITextAttachment,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.TextAttachment;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.TextAttachment;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace TextAttachment {
    enum Style {
      DEFAULT = 0,
      REGULAR = 1,
      BOLD = 2,
      SERIF = 3,
      SCRIPT = 4,
      CONDENSED = 5,
    }

    interface IGradient {
      startColor?: number | null;
      endColor?: number | null;
      angle?: number | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Gradient implements IGradient {
      constructor(properties?: signalservice.TextAttachment.IGradient);
      public startColor: number;
      public endColor: number;
      public angle: number;
      public static encode(
        message: signalservice.TextAttachment.IGradient,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.TextAttachment.IGradient,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.TextAttachment.Gradient;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.TextAttachment.Gradient;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface IVerified {
    destination?: string | null;
    destinationAci?: string | null;
    identityKey?: Uint8Array | null;
    state?: signalservice.Verified.State | null;
    nullMessage?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class Verified implements IVerified {
    constructor(properties?: signalservice.IVerified);
    public destination: string;
    public destinationAci: string;
    public identityKey: Uint8Array;
    public state: signalservice.Verified.State;
    public nullMessage: Uint8Array;
    public static encode(
      message: signalservice.IVerified,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IVerified,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.Verified;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.Verified;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace Verified {
    enum State {
      DEFAULT = 0,
      VERIFIED = 1,
      UNVERIFIED = 2,
    }
  }

  interface ISyncMessage {
    sent?: signalservice.SyncMessage.ISent | null;
    contacts?: signalservice.SyncMessage.IContacts | null;
    request?: signalservice.SyncMessage.IRequest | null;
    read?: signalservice.SyncMessage.IRead[] | null;
    blocked?: signalservice.SyncMessage.IBlocked | null;
    verified?: signalservice.IVerified | null;
    configuration?: signalservice.SyncMessage.IConfiguration | null;
    padding?: Uint8Array | null;
    stickerPackOperation?:
      | signalservice.SyncMessage.IStickerPackOperation[]
      | null;
    viewOnceOpen?: signalservice.SyncMessage.IViewOnceOpen | null;
    fetchLatest?: signalservice.SyncMessage.IFetchLatest | null;
    keys?: signalservice.SyncMessage.IKeys | null;
    messageRequestResponse?: signalservice.SyncMessage.IMessageRequestResponse | null;
    viewed?: signalservice.SyncMessage.IViewed[] | null;
    pniChangeNumber?: signalservice.SyncMessage.IPniChangeNumber | null;
    callEvent?: signalservice.SyncMessage.ICallEvent | null;
    callLogEvent?: signalservice.SyncMessage.ICallLogEvent | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class SyncMessage implements ISyncMessage {
    constructor(properties?: signalservice.ISyncMessage);
    public sent?: signalservice.SyncMessage.ISent | null;
    public contacts?: signalservice.SyncMessage.IContacts | null;
    public request?: signalservice.SyncMessage.IRequest | null;
    public read: signalservice.SyncMessage.IRead[];
    public blocked?: signalservice.SyncMessage.IBlocked | null;
    public verified?: signalservice.IVerified | null;
    public configuration?: signalservice.SyncMessage.IConfiguration | null;
    public padding: Uint8Array;
    public stickerPackOperation: signalservice.SyncMessage.IStickerPackOperation[];
    public viewOnceOpen?: signalservice.SyncMessage.IViewOnceOpen | null;
    public fetchLatest?: signalservice.SyncMessage.IFetchLatest | null;
    public keys?: signalservice.SyncMessage.IKeys | null;
    public messageRequestResponse?: signalservice.SyncMessage.IMessageRequestResponse | null;
    public viewed: signalservice.SyncMessage.IViewed[];
    public pniChangeNumber?: signalservice.SyncMessage.IPniChangeNumber | null;
    public callEvent?: signalservice.SyncMessage.ICallEvent | null;
    public callLogEvent?: signalservice.SyncMessage.ICallLogEvent | null;
    public static encode(
      message: signalservice.ISyncMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ISyncMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.SyncMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.SyncMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace SyncMessage {
    interface ISent {
      destination?: string | null;
      destinationServiceId?: string | null;
      timestamp?: Long | null;
      message?: signalservice.IDataMessage | null;
      expirationStartTimestamp?: Long | null;
      unidentifiedStatus?:
        | signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus[]
        | null;
      isRecipientUpdate?: boolean | null;
      storyMessage?: signalservice.IStoryMessage | null;
      storyMessageRecipients?:
        | signalservice.SyncMessage.Sent.IStoryMessageRecipient[]
        | null;
      editMessage?: signalservice.IEditMessage | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Sent implements ISent {
      constructor(properties?: signalservice.SyncMessage.ISent);
      public destination: string;
      public destinationServiceId: string;
      public timestamp: Long;
      public message?: signalservice.IDataMessage | null;
      public expirationStartTimestamp: Long;
      public unidentifiedStatus: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus[];
      public isRecipientUpdate: boolean;
      public storyMessage?: signalservice.IStoryMessage | null;
      public storyMessageRecipients: signalservice.SyncMessage.Sent.IStoryMessageRecipient[];
      public editMessage?: signalservice.IEditMessage | null;
      public static encode(
        message: signalservice.SyncMessage.ISent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.ISent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Sent;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Sent;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Sent {
      interface IUnidentifiedDeliveryStatus {
        destination?: string | null;
        destinationServiceId?: string | null;
        unidentified?: boolean | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class UnidentifiedDeliveryStatus implements IUnidentifiedDeliveryStatus {
        constructor(
          properties?: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus
        );
        public destination: string;
        public destinationServiceId: string;
        public unidentified: boolean;
        public static encode(
          message: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.SyncMessage.Sent.IUnidentifiedDeliveryStatus,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.SyncMessage.Sent.UnidentifiedDeliveryStatus;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IStoryMessageRecipient {
        destinationServiceId?: string | null;
        distributionListIds?: string[] | null;
        isAllowedToReply?: boolean | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class StoryMessageRecipient implements IStoryMessageRecipient {
        constructor(
          properties?: signalservice.SyncMessage.Sent.IStoryMessageRecipient
        );
        public destinationServiceId: string;
        public distributionListIds: string[];
        public isAllowedToReply: boolean;
        public static encode(
          message: signalservice.SyncMessage.Sent.IStoryMessageRecipient,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.SyncMessage.Sent.IStoryMessageRecipient,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.SyncMessage.Sent.StoryMessageRecipient;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.SyncMessage.Sent.StoryMessageRecipient;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }

    interface IContacts {
      blob?: signalservice.IAttachmentPointer | null;
      complete?: boolean | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Contacts implements IContacts {
      constructor(properties?: signalservice.SyncMessage.IContacts);
      public blob?: signalservice.IAttachmentPointer | null;
      public complete: boolean;
      public static encode(
        message: signalservice.SyncMessage.IContacts,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IContacts,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Contacts;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Contacts;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IBlocked {
      numbers?: string[] | null;
      acis?: string[] | null;
      groupIds?: Uint8Array[] | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Blocked implements IBlocked {
      constructor(properties?: signalservice.SyncMessage.IBlocked);
      public numbers: string[];
      public acis: string[];
      public groupIds: Uint8Array[];
      public static encode(
        message: signalservice.SyncMessage.IBlocked,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IBlocked,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Blocked;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Blocked;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IRequest {
      type?: signalservice.SyncMessage.Request.Type | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Request implements IRequest {
      constructor(properties?: signalservice.SyncMessage.IRequest);
      public type: signalservice.SyncMessage.Request.Type;
      public static encode(
        message: signalservice.SyncMessage.IRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Request;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Request;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Request {
      enum Type {
        UNKNOWN = 0,
        CONTACTS = 1,
        BLOCKED = 3,
        CONFIGURATION = 4,
        KEYS = 5,
        PNI_IDENTITY = 6,
      }
    }

    interface IKeys {
      storageService?: Uint8Array | null;
      master?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Keys implements IKeys {
      constructor(properties?: signalservice.SyncMessage.IKeys);
      public storageService: Uint8Array;
      public master: Uint8Array;
      public static encode(
        message: signalservice.SyncMessage.IKeys,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IKeys,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Keys;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Keys;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IRead {
      sender?: string | null;
      senderAci?: string | null;
      timestamp?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Read implements IRead {
      constructor(properties?: signalservice.SyncMessage.IRead);
      public sender: string;
      public senderAci: string;
      public timestamp: Long;
      public static encode(
        message: signalservice.SyncMessage.IRead,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IRead,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Read;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Read;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IViewed {
      senderE164?: string | null;
      senderAci?: string | null;
      timestamp?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Viewed implements IViewed {
      constructor(properties?: signalservice.SyncMessage.IViewed);
      public senderE164: string;
      public senderAci: string;
      public timestamp: Long;
      public static encode(
        message: signalservice.SyncMessage.IViewed,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IViewed,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Viewed;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Viewed;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IConfiguration {
      readReceipts?: boolean | null;
      unidentifiedDeliveryIndicators?: boolean | null;
      typingIndicators?: boolean | null;
      provisioningVersion?: number | null;
      linkPreviews?: boolean | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Configuration implements IConfiguration {
      constructor(properties?: signalservice.SyncMessage.IConfiguration);
      public readReceipts: boolean;
      public unidentifiedDeliveryIndicators: boolean;
      public typingIndicators: boolean;
      public provisioningVersion: number;
      public linkPreviews: boolean;
      public static encode(
        message: signalservice.SyncMessage.IConfiguration,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IConfiguration,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.Configuration;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.Configuration;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IStickerPackOperation {
      packId?: Uint8Array | null;
      packKey?: Uint8Array | null;
      type?: signalservice.SyncMessage.StickerPackOperation.Type | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class StickerPackOperation implements IStickerPackOperation {
      constructor(properties?: signalservice.SyncMessage.IStickerPackOperation);
      public packId: Uint8Array;
      public packKey: Uint8Array;
      public type: signalservice.SyncMessage.StickerPackOperation.Type;
      public static encode(
        message: signalservice.SyncMessage.IStickerPackOperation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IStickerPackOperation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.StickerPackOperation;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.StickerPackOperation;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace StickerPackOperation {
      enum Type {
        INSTALL = 0,
        REMOVE = 1,
      }
    }

    interface IViewOnceOpen {
      sender?: string | null;
      senderAci?: string | null;
      timestamp?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class ViewOnceOpen implements IViewOnceOpen {
      constructor(properties?: signalservice.SyncMessage.IViewOnceOpen);
      public sender: string;
      public senderAci: string;
      public timestamp: Long;
      public static encode(
        message: signalservice.SyncMessage.IViewOnceOpen,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IViewOnceOpen,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.ViewOnceOpen;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.ViewOnceOpen;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface IMessageRequestResponse {
      threadE164?: string | null;
      threadAci?: string | null;
      groupId?: Uint8Array | null;
      type?: signalservice.SyncMessage.MessageRequestResponse.Type | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class MessageRequestResponse implements IMessageRequestResponse {
      constructor(
        properties?: signalservice.SyncMessage.IMessageRequestResponse
      );
      public threadE164: string;
      public threadAci: string;
      public groupId: Uint8Array;
      public type: signalservice.SyncMessage.MessageRequestResponse.Type;
      public static encode(
        message: signalservice.SyncMessage.IMessageRequestResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IMessageRequestResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.MessageRequestResponse;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.MessageRequestResponse;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace MessageRequestResponse {
      enum Type {
        UNKNOWN = 0,
        ACCEPT = 1,
        DELETE = 2,
        BLOCK = 3,
        BLOCK_AND_DELETE = 4,
      }
    }

    interface IFetchLatest {
      type?: signalservice.SyncMessage.FetchLatest.Type | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class FetchLatest implements IFetchLatest {
      constructor(properties?: signalservice.SyncMessage.IFetchLatest);
      public type: signalservice.SyncMessage.FetchLatest.Type;
      public static encode(
        message: signalservice.SyncMessage.IFetchLatest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IFetchLatest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.FetchLatest;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.FetchLatest;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace FetchLatest {
      enum Type {
        UNKNOWN = 0,
        LOCAL_PROFILE = 1,
        STORAGE_MANIFEST = 2,
        SUBSCRIPTION_STATUS = 3,
      }
    }

    interface IPniChangeNumber {
      identityKeyPair?: Uint8Array | null;
      signedPreKey?: Uint8Array | null;
      lastResortKyberPreKey?: Uint8Array | null;
      registrationId?: number | null;
      newE164?: string | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class PniChangeNumber implements IPniChangeNumber {
      constructor(properties?: signalservice.SyncMessage.IPniChangeNumber);
      public identityKeyPair: Uint8Array;
      public signedPreKey: Uint8Array;
      public lastResortKyberPreKey: Uint8Array;
      public registrationId: number;
      public newE164: string;
      public static encode(
        message: signalservice.SyncMessage.IPniChangeNumber,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.IPniChangeNumber,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.PniChangeNumber;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.PniChangeNumber;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    interface ICallEvent {
      peerId?: Uint8Array | null;
      callId?: Long | null;
      timestamp?: Long | null;
      type?: signalservice.SyncMessage.CallEvent.Type | null;
      direction?: signalservice.SyncMessage.CallEvent.Direction | null;
      event?: signalservice.SyncMessage.CallEvent.Event | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class CallEvent implements ICallEvent {
      constructor(properties?: signalservice.SyncMessage.ICallEvent);
      public peerId: Uint8Array;
      public callId: Long;
      public timestamp: Long;
      public type: signalservice.SyncMessage.CallEvent.Type;
      public direction: signalservice.SyncMessage.CallEvent.Direction;
      public event: signalservice.SyncMessage.CallEvent.Event;
      public static encode(
        message: signalservice.SyncMessage.ICallEvent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.ICallEvent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.CallEvent;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.CallEvent;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace CallEvent {
      enum Type {
        UNKNOWN = 0,
        AUDIO_CALL = 1,
        VIDEO_CALL = 2,
        GROUP_CALL = 3,
        AD_HOC_CALL = 4,
      }

      enum Direction {
        UNKNOWN = 0,
        INCOMING = 1,
        OUTGOING = 2,
      }

      enum Event {
        UNKNOWN = 0,
        ACCEPTED = 1,
        NOT_ACCEPTED = 2,
        DELETE = 3,
      }
    }

    interface ICallLogEvent {
      type?: signalservice.SyncMessage.CallLogEvent.Type | null;
      timestamp?: Long | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class CallLogEvent implements ICallLogEvent {
      constructor(properties?: signalservice.SyncMessage.ICallLogEvent);
      public type: signalservice.SyncMessage.CallLogEvent.Type;
      public timestamp: Long;
      public static encode(
        message: signalservice.SyncMessage.ICallLogEvent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SyncMessage.ICallLogEvent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SyncMessage.CallLogEvent;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SyncMessage.CallLogEvent;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace CallLogEvent {
      enum Type {
        CLEAR = 0,
      }
    }
  }

  interface IAttachmentPointer {
    cdnId?: Long | null;
    cdnKey?: string | null;
    contentType?: string | null;
    key?: Uint8Array | null;
    size?: number | null;
    thumbnail?: Uint8Array | null;
    digest?: Uint8Array | null;
    fileName?: string | null;
    flags?: number | null;
    width?: number | null;
    height?: number | null;
    caption?: string | null;
    blurHash?: string | null;
    uploadTimestamp?: Long | null;
    cdnNumber?: number | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class AttachmentPointer implements IAttachmentPointer {
    constructor(properties?: signalservice.IAttachmentPointer);
    public cdnId?: Long | null;
    public cdnKey?: string | null;
    public contentType: string;
    public key: Uint8Array;
    public size: number;
    public thumbnail: Uint8Array;
    public digest: Uint8Array;
    public fileName: string;
    public flags: number;
    public width: number;
    public height: number;
    public caption: string;
    public blurHash: string;
    public uploadTimestamp: Long;
    public cdnNumber: number;
    public attachmentIdentifier?: 'cdnId' | 'cdnKey';
    public static encode(
      message: signalservice.IAttachmentPointer,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IAttachmentPointer,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AttachmentPointer;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AttachmentPointer;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace AttachmentPointer {
    enum Flags {
      VOICE_MESSAGE = 1,
      BORDERLESS = 2,
      GIF = 8,
    }
  }

  interface IGroupContextV2 {
    masterKey?: Uint8Array | null;
    revision?: number | null;
    groupChange?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupContextV2 implements IGroupContextV2 {
    constructor(properties?: signalservice.IGroupContextV2);
    public masterKey: Uint8Array;
    public revision: number;
    public groupChange: Uint8Array;
    public static encode(
      message: signalservice.IGroupContextV2,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupContextV2,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupContextV2;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupContextV2;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IContactDetails {
    number?: string | null;
    aci?: string | null;
    name?: string | null;
    avatar?: signalservice.ContactDetails.IAvatar | null;
    expireTimer?: number | null;
    inboxPosition?: number | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ContactDetails implements IContactDetails {
    constructor(properties?: signalservice.IContactDetails);
    public number: string;
    public aci: string;
    public name: string;
    public avatar?: signalservice.ContactDetails.IAvatar | null;
    public expireTimer: number;
    public inboxPosition: number;
    public static encode(
      message: signalservice.IContactDetails,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IContactDetails,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ContactDetails;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ContactDetails;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ContactDetails {
    interface IAvatar {
      contentType?: string | null;
      length?: number | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Avatar implements IAvatar {
      constructor(properties?: signalservice.ContactDetails.IAvatar);
      public contentType: string;
      public length: number;
      public static encode(
        message: signalservice.ContactDetails.IAvatar,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.ContactDetails.IAvatar,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.ContactDetails.Avatar;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.ContactDetails.Avatar;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface IPniSignatureMessage {
    pni?: Uint8Array | null;
    signature?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class PniSignatureMessage implements IPniSignatureMessage {
    constructor(properties?: signalservice.IPniSignatureMessage);
    public pni: Uint8Array;
    public signature: Uint8Array;
    public static encode(
      message: signalservice.IPniSignatureMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IPniSignatureMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.PniSignatureMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.PniSignatureMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IEditMessage {
    targetSentTimestamp?: Long | null;
    dataMessage?: signalservice.IDataMessage | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class EditMessage implements IEditMessage {
    constructor(properties?: signalservice.IEditMessage);
    public targetSentTimestamp: Long;
    public dataMessage?: signalservice.IDataMessage | null;
    public static encode(
      message: signalservice.IEditMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IEditMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.EditMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.EditMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  enum OptionalBool {
    UNSET = 0,
    ENABLED = 1,
    DISABLED = 2,
  }

  interface IStorageManifest {
    version?: Long | null;
    value?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StorageManifest implements IStorageManifest {
    constructor(properties?: signalservice.IStorageManifest);
    public version: Long;
    public value: Uint8Array;
    public static encode(
      message: signalservice.IStorageManifest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStorageManifest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageManifest;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageManifest;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IStorageItem {
    key?: Uint8Array | null;
    value?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StorageItem implements IStorageItem {
    constructor(properties?: signalservice.IStorageItem);
    public key: Uint8Array;
    public value: Uint8Array;
    public static encode(
      message: signalservice.IStorageItem,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStorageItem,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageItem;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageItem;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IStorageItems {
    items?: signalservice.IStorageItem[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StorageItems implements IStorageItems {
    constructor(properties?: signalservice.IStorageItems);
    public items: signalservice.IStorageItem[];
    public static encode(
      message: signalservice.IStorageItems,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStorageItems,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageItems;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageItems;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IReadOperation {
    readKey?: Uint8Array[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ReadOperation implements IReadOperation {
    constructor(properties?: signalservice.IReadOperation);
    public readKey: Uint8Array[];
    public static encode(
      message: signalservice.IReadOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IReadOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ReadOperation;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ReadOperation;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IWriteOperation {
    manifest?: signalservice.IStorageManifest | null;
    insertItem?: signalservice.IStorageItem[] | null;
    deleteKey?: Uint8Array[] | null;
    clearAll?: boolean | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class WriteOperation implements IWriteOperation {
    constructor(properties?: signalservice.IWriteOperation);
    public manifest?: signalservice.IStorageManifest | null;
    public insertItem: signalservice.IStorageItem[];
    public deleteKey: Uint8Array[];
    public clearAll: boolean;
    public static encode(
      message: signalservice.IWriteOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IWriteOperation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WriteOperation;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WriteOperation;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IManifestRecord {
    version?: Long | null;
    sourceDevice?: number | null;
    keys?: signalservice.ManifestRecord.IIdentifier[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ManifestRecord implements IManifestRecord {
    constructor(properties?: signalservice.IManifestRecord);
    public version: Long;
    public sourceDevice: number;
    public keys: signalservice.ManifestRecord.IIdentifier[];
    public static encode(
      message: signalservice.IManifestRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IManifestRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ManifestRecord;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ManifestRecord;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ManifestRecord {
    interface IIdentifier {
      raw?: Uint8Array | null;
      type?: signalservice.ManifestRecord.Identifier.Type | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Identifier implements IIdentifier {
      constructor(properties?: signalservice.ManifestRecord.IIdentifier);
      public raw: Uint8Array;
      public type: signalservice.ManifestRecord.Identifier.Type;
      public static encode(
        message: signalservice.ManifestRecord.IIdentifier,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.ManifestRecord.IIdentifier,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.ManifestRecord.Identifier;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.ManifestRecord.Identifier;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Identifier {
      enum Type {
        UNKNOWN = 0,
        CONTACT = 1,
        GROUPV1 = 2,
        GROUPV2 = 3,
        ACCOUNT = 4,
        STORY_DISTRIBUTION_LIST = 5,
        STICKER_PACK = 6,
      }
    }
  }

  interface IStorageRecord {
    contact?: signalservice.IContactRecord | null;
    groupV1?: signalservice.IGroupV1Record | null;
    groupV2?: signalservice.IGroupV2Record | null;
    account?: signalservice.IAccountRecord | null;
    storyDistributionList?: signalservice.IStoryDistributionListRecord | null;
    stickerPack?: signalservice.IStickerPackRecord | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StorageRecord implements IStorageRecord {
    constructor(properties?: signalservice.IStorageRecord);
    public contact?: signalservice.IContactRecord | null;
    public groupV1?: signalservice.IGroupV1Record | null;
    public groupV2?: signalservice.IGroupV2Record | null;
    public account?: signalservice.IAccountRecord | null;
    public storyDistributionList?: signalservice.IStoryDistributionListRecord | null;
    public stickerPack?: signalservice.IStickerPackRecord | null;
    public record?:
      | 'contact'
      | 'groupV1'
      | 'groupV2'
      | 'account'
      | 'storyDistributionList'
      | 'stickerPack';
    public static encode(
      message: signalservice.IStorageRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStorageRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StorageRecord;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StorageRecord;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IContactRecord {
    aci?: string | null;
    serviceE164?: string | null;
    pni?: string | null;
    profileKey?: Uint8Array | null;
    identityKey?: Uint8Array | null;
    identityState?: signalservice.ContactRecord.IdentityState | null;
    givenName?: string | null;
    familyName?: string | null;
    username?: string | null;
    blocked?: boolean | null;
    whitelisted?: boolean | null;
    archived?: boolean | null;
    markedUnread?: boolean | null;
    mutedUntilTimestamp?: Long | null;
    hideStory?: boolean | null;
    unregisteredAtTimestamp?: Long | null;
    systemGivenName?: string | null;
    systemFamilyName?: string | null;
    systemNickname?: string | null;
    hidden?: boolean | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ContactRecord implements IContactRecord {
    constructor(properties?: signalservice.IContactRecord);
    public aci: string;
    public serviceE164: string;
    public pni: string;
    public profileKey: Uint8Array;
    public identityKey: Uint8Array;
    public identityState: signalservice.ContactRecord.IdentityState;
    public givenName: string;
    public familyName: string;
    public username: string;
    public blocked: boolean;
    public whitelisted: boolean;
    public archived: boolean;
    public markedUnread: boolean;
    public mutedUntilTimestamp: Long;
    public hideStory: boolean;
    public unregisteredAtTimestamp: Long;
    public systemGivenName: string;
    public systemFamilyName: string;
    public systemNickname: string;
    public hidden: boolean;
    public static encode(
      message: signalservice.IContactRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IContactRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ContactRecord;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ContactRecord;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ContactRecord {
    enum IdentityState {
      DEFAULT = 0,
      VERIFIED = 1,
      UNVERIFIED = 2,
    }
  }

  interface IGroupV1Record {
    id?: Uint8Array | null;
    blocked?: boolean | null;
    whitelisted?: boolean | null;
    archived?: boolean | null;
    markedUnread?: boolean | null;
    mutedUntilTimestamp?: Long | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupV1Record implements IGroupV1Record {
    constructor(properties?: signalservice.IGroupV1Record);
    public id: Uint8Array;
    public blocked: boolean;
    public whitelisted: boolean;
    public archived: boolean;
    public markedUnread: boolean;
    public mutedUntilTimestamp: Long;
    public static encode(
      message: signalservice.IGroupV1Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupV1Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupV1Record;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupV1Record;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IGroupV2Record {
    masterKey?: Uint8Array | null;
    blocked?: boolean | null;
    whitelisted?: boolean | null;
    archived?: boolean | null;
    markedUnread?: boolean | null;
    mutedUntilTimestamp?: Long | null;
    dontNotifyForMentionsIfMuted?: boolean | null;
    hideStory?: boolean | null;
    storySendMode?: signalservice.GroupV2Record.StorySendMode | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class GroupV2Record implements IGroupV2Record {
    constructor(properties?: signalservice.IGroupV2Record);
    public masterKey: Uint8Array;
    public blocked: boolean;
    public whitelisted: boolean;
    public archived: boolean;
    public markedUnread: boolean;
    public mutedUntilTimestamp: Long;
    public dontNotifyForMentionsIfMuted: boolean;
    public hideStory: boolean;
    public storySendMode: signalservice.GroupV2Record.StorySendMode;
    public static encode(
      message: signalservice.IGroupV2Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IGroupV2Record,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.GroupV2Record;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.GroupV2Record;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace GroupV2Record {
    enum StorySendMode {
      DEFAULT = 0,
      DISABLED = 1,
      ENABLED = 2,
    }
  }

  interface IAccountRecord {
    profileKey?: Uint8Array | null;
    givenName?: string | null;
    familyName?: string | null;
    avatarUrl?: string | null;
    noteToSelfArchived?: boolean | null;
    readReceipts?: boolean | null;
    sealedSenderIndicators?: boolean | null;
    typingIndicators?: boolean | null;
    proxiedLinkPreviews?: boolean | null;
    noteToSelfMarkedUnread?: boolean | null;
    linkPreviews?: boolean | null;
    phoneNumberSharingMode?: signalservice.AccountRecord.PhoneNumberSharingMode | null;
    notDiscoverableByPhoneNumber?: boolean | null;
    pinnedConversations?:
      | signalservice.AccountRecord.IPinnedConversation[]
      | null;
    preferContactAvatars?: boolean | null;
    universalExpireTimer?: number | null;
    primarySendsSms?: boolean | null;
    e164?: string | null;
    preferredReactionEmoji?: string[] | null;
    subscriberId?: Uint8Array | null;
    subscriberCurrencyCode?: string | null;
    displayBadgesOnProfile?: boolean | null;
    keepMutedChatsArchived?: boolean | null;
    hasSetMyStoriesPrivacy?: boolean | null;
    hasViewedOnboardingStory?: boolean | null;
    storiesDisabled?: boolean | null;
    storyViewReceiptsEnabled?: signalservice.OptionalBool | null;
    username?: string | null;
    hasCompletedUsernameOnboarding?: boolean | null;
    usernameLink?: signalservice.AccountRecord.IUsernameLink | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class AccountRecord implements IAccountRecord {
    constructor(properties?: signalservice.IAccountRecord);
    public profileKey: Uint8Array;
    public givenName: string;
    public familyName: string;
    public avatarUrl: string;
    public noteToSelfArchived: boolean;
    public readReceipts: boolean;
    public sealedSenderIndicators: boolean;
    public typingIndicators: boolean;
    public proxiedLinkPreviews: boolean;
    public noteToSelfMarkedUnread: boolean;
    public linkPreviews: boolean;
    public phoneNumberSharingMode: signalservice.AccountRecord.PhoneNumberSharingMode;
    public notDiscoverableByPhoneNumber: boolean;
    public pinnedConversations: signalservice.AccountRecord.IPinnedConversation[];
    public preferContactAvatars: boolean;
    public universalExpireTimer: number;
    public primarySendsSms: boolean;
    public e164: string;
    public preferredReactionEmoji: string[];
    public subscriberId: Uint8Array;
    public subscriberCurrencyCode: string;
    public displayBadgesOnProfile: boolean;
    public keepMutedChatsArchived: boolean;
    public hasSetMyStoriesPrivacy: boolean;
    public hasViewedOnboardingStory: boolean;
    public storiesDisabled: boolean;
    public storyViewReceiptsEnabled: signalservice.OptionalBool;
    public username: string;
    public hasCompletedUsernameOnboarding: boolean;
    public usernameLink?: signalservice.AccountRecord.IUsernameLink | null;
    public static encode(
      message: signalservice.IAccountRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IAccountRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.AccountRecord;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.AccountRecord;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace AccountRecord {
    enum PhoneNumberSharingMode {
      EVERYBODY = 0,
      CONTACTS_ONLY = 1,
      NOBODY = 2,
    }

    interface IPinnedConversation {
      contact?: signalservice.AccountRecord.PinnedConversation.IContact | null;
      legacyGroupId?: Uint8Array | null;
      groupMasterKey?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class PinnedConversation implements IPinnedConversation {
      constructor(properties?: signalservice.AccountRecord.IPinnedConversation);
      public contact?: signalservice.AccountRecord.PinnedConversation.IContact | null;
      public legacyGroupId?: Uint8Array | null;
      public groupMasterKey?: Uint8Array | null;
      public identifier?: 'contact' | 'legacyGroupId' | 'groupMasterKey';
      public static encode(
        message: signalservice.AccountRecord.IPinnedConversation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.AccountRecord.IPinnedConversation,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.AccountRecord.PinnedConversation;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.AccountRecord.PinnedConversation;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace PinnedConversation {
      interface IContact {
        serviceId?: string | null;
        e164?: string | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class Contact implements IContact {
        constructor(
          properties?: signalservice.AccountRecord.PinnedConversation.IContact
        );
        public serviceId: string;
        public e164: string;
        public static encode(
          message: signalservice.AccountRecord.PinnedConversation.IContact,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signalservice.AccountRecord.PinnedConversation.IContact,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signalservice.AccountRecord.PinnedConversation.Contact;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signalservice.AccountRecord.PinnedConversation.Contact;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }

    interface IUsernameLink {
      entropy?: Uint8Array | null;
      serverId?: Uint8Array | null;
      color?: signalservice.AccountRecord.UsernameLink.Color | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class UsernameLink implements IUsernameLink {
      constructor(properties?: signalservice.AccountRecord.IUsernameLink);
      public entropy: Uint8Array;
      public serverId: Uint8Array;
      public color: signalservice.AccountRecord.UsernameLink.Color;
      public static encode(
        message: signalservice.AccountRecord.IUsernameLink,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.AccountRecord.IUsernameLink,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.AccountRecord.UsernameLink;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.AccountRecord.UsernameLink;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace UsernameLink {
      enum Color {
        UNKNOWN = 0,
        BLUE = 1,
        WHITE = 2,
        GREY = 3,
        OLIVE = 4,
        GREEN = 5,
        ORANGE = 6,
        PINK = 7,
        PURPLE = 8,
      }
    }
  }

  interface IStoryDistributionListRecord {
    identifier?: Uint8Array | null;
    name?: string | null;
    recipientServiceIds?: string[] | null;
    deletedAtTimestamp?: Long | null;
    allowsReplies?: boolean | null;
    isBlockList?: boolean | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StoryDistributionListRecord implements IStoryDistributionListRecord {
    constructor(properties?: signalservice.IStoryDistributionListRecord);
    public identifier: Uint8Array;
    public name: string;
    public recipientServiceIds: string[];
    public deletedAtTimestamp: Long;
    public allowsReplies: boolean;
    public isBlockList: boolean;
    public static encode(
      message: signalservice.IStoryDistributionListRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStoryDistributionListRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StoryDistributionListRecord;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StoryDistributionListRecord;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IStickerPackRecord {
    packId?: Uint8Array | null;
    packKey?: Uint8Array | null;
    position?: number | null;
    deletedAtTimestamp?: Long | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StickerPackRecord implements IStickerPackRecord {
    constructor(properties?: signalservice.IStickerPackRecord);
    public packId: Uint8Array;
    public packKey: Uint8Array;
    public position: number;
    public deletedAtTimestamp: Long;
    public static encode(
      message: signalservice.IStickerPackRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStickerPackRecord,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StickerPackRecord;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StickerPackRecord;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IStickerPack {
    title?: string | null;
    author?: string | null;
    cover?: signalservice.StickerPack.ISticker | null;
    stickers?: signalservice.StickerPack.ISticker[] | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class StickerPack implements IStickerPack {
    constructor(properties?: signalservice.IStickerPack);
    public title: string;
    public author: string;
    public cover?: signalservice.StickerPack.ISticker | null;
    public stickers: signalservice.StickerPack.ISticker[];
    public static encode(
      message: signalservice.IStickerPack,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IStickerPack,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.StickerPack;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.StickerPack;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace StickerPack {
    interface ISticker {
      id?: number | null;
      emoji?: string | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Sticker implements ISticker {
      constructor(properties?: signalservice.StickerPack.ISticker);
      public id: number;
      public emoji: string;
      public static encode(
        message: signalservice.StickerPack.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.StickerPack.ISticker,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.StickerPack.Sticker;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.StickerPack.Sticker;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface IWebSocketRequestMessage {
    verb?: string | null;
    path?: string | null;
    body?: Uint8Array | null;
    headers?: string[] | null;
    id?: Long | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class WebSocketRequestMessage implements IWebSocketRequestMessage {
    constructor(properties?: signalservice.IWebSocketRequestMessage);
    public verb: string;
    public path: string;
    public body: Uint8Array;
    public headers: string[];
    public id: Long;
    public static encode(
      message: signalservice.IWebSocketRequestMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IWebSocketRequestMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WebSocketRequestMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WebSocketRequestMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IWebSocketResponseMessage {
    id?: Long | null;
    status?: number | null;
    message?: string | null;
    headers?: string[] | null;
    body?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class WebSocketResponseMessage implements IWebSocketResponseMessage {
    constructor(properties?: signalservice.IWebSocketResponseMessage);
    public id: Long;
    public status: number;
    public message: string;
    public headers: string[];
    public body: Uint8Array;
    public static encode(
      message: signalservice.IWebSocketResponseMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IWebSocketResponseMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WebSocketResponseMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WebSocketResponseMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  interface IWebSocketMessage {
    type?: signalservice.WebSocketMessage.Type | null;
    request?: signalservice.IWebSocketRequestMessage | null;
    response?: signalservice.IWebSocketResponseMessage | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class WebSocketMessage implements IWebSocketMessage {
    constructor(properties?: signalservice.IWebSocketMessage);
    public type: signalservice.WebSocketMessage.Type;
    public request?: signalservice.IWebSocketRequestMessage | null;
    public response?: signalservice.IWebSocketResponseMessage | null;
    public static encode(
      message: signalservice.IWebSocketMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IWebSocketMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.WebSocketMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.WebSocketMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace WebSocketMessage {
    enum Type {
      UNKNOWN = 0,
      REQUEST = 1,
      RESPONSE = 2,
    }
  }

  interface IServerCertificate {
    certificate?: Uint8Array | null;
    signature?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class ServerCertificate implements IServerCertificate {
    constructor(properties?: signalservice.IServerCertificate);
    public certificate: Uint8Array;
    public signature: Uint8Array;
    public static encode(
      message: signalservice.IServerCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IServerCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.ServerCertificate;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.ServerCertificate;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace ServerCertificate {
    interface ICertificate {
      id?: number | null;
      key?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Certificate implements ICertificate {
      constructor(properties?: signalservice.ServerCertificate.ICertificate);
      public id: number;
      public key: Uint8Array;
      public static encode(
        message: signalservice.ServerCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.ServerCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.ServerCertificate.Certificate;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.ServerCertificate.Certificate;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface ISenderCertificate {
    certificate?: Uint8Array | null;
    signature?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class SenderCertificate implements ISenderCertificate {
    constructor(properties?: signalservice.ISenderCertificate);
    public certificate: Uint8Array;
    public signature: Uint8Array;
    public static encode(
      message: signalservice.ISenderCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.ISenderCertificate,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.SenderCertificate;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.SenderCertificate;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace SenderCertificate {
    interface ICertificate {
      senderE164?: string | null;
      senderUuid?: string | null;
      senderDevice?: number | null;
      expires?: Long | null;
      identityKey?: Uint8Array | null;
      signer?: signalservice.IServerCertificate | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Certificate implements ICertificate {
      constructor(properties?: signalservice.SenderCertificate.ICertificate);
      public senderE164: string;
      public senderUuid: string;
      public senderDevice: number;
      public expires: Long;
      public identityKey: Uint8Array;
      public signer?: signalservice.IServerCertificate | null;
      public static encode(
        message: signalservice.SenderCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.SenderCertificate.ICertificate,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.SenderCertificate.Certificate;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.SenderCertificate.Certificate;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }
  }

  interface IUnidentifiedSenderMessage {
    ephemeralPublic?: Uint8Array | null;
    encryptedStatic?: Uint8Array | null;
    encryptedMessage?: Uint8Array | null;

    $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  class UnidentifiedSenderMessage implements IUnidentifiedSenderMessage {
    constructor(properties?: signalservice.IUnidentifiedSenderMessage);
    public ephemeralPublic: Uint8Array;
    public encryptedStatic: Uint8Array;
    public encryptedMessage: Uint8Array;
    public static encode(
      message: signalservice.IUnidentifiedSenderMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static encodeDelimited(
      message: signalservice.IUnidentifiedSenderMessage,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): signalservice.UnidentifiedSenderMessage;
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): signalservice.UnidentifiedSenderMessage;

    public $unknownFields?: ReadonlyArray<Uint8Array>;
  }

  namespace UnidentifiedSenderMessage {
    interface IMessage {
      type?: signalservice.UnidentifiedSenderMessage.Message.Type | null;
      senderCertificate?: signalservice.ISenderCertificate | null;
      content?: Uint8Array | null;
      contentHint?: signalservice.UnidentifiedSenderMessage.Message.ContentHint | null;
      groupId?: Uint8Array | null;

      $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    class Message implements IMessage {
      constructor(
        properties?: signalservice.UnidentifiedSenderMessage.IMessage
      );
      public type: signalservice.UnidentifiedSenderMessage.Message.Type;
      public senderCertificate?: signalservice.ISenderCertificate | null;
      public content: Uint8Array;
      public contentHint: signalservice.UnidentifiedSenderMessage.Message.ContentHint;
      public groupId: Uint8Array;
      public static encode(
        message: signalservice.UnidentifiedSenderMessage.IMessage,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static encodeDelimited(
        message: signalservice.UnidentifiedSenderMessage.IMessage,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): signalservice.UnidentifiedSenderMessage.Message;
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): signalservice.UnidentifiedSenderMessage.Message;

      public $unknownFields?: ReadonlyArray<Uint8Array>;
    }

    namespace Message {
      enum Type {
        PREKEY_MESSAGE = 1,
        MESSAGE = 2,
        SENDERKEY_MESSAGE = 7,
        PLAINTEXT_CONTENT = 8,
      }

      enum ContentHint {
        DEFAULT = 0,
        RESENDABLE = 1,
        IMPLICIT = 2,
      }
    }
  }
}

export namespace signal {
  namespace proto {
    namespace storage {
      interface ISessionStructure {
        sessionVersion?: number | null;
        localIdentityPublic?: Uint8Array | null;
        remoteIdentityPublic?: Uint8Array | null;
        rootKey?: Uint8Array | null;
        previousCounter?: number | null;
        senderChain?: signal.proto.storage.SessionStructure.IChain | null;
        receiverChains?: signal.proto.storage.SessionStructure.IChain[] | null;
        pendingPreKey?: signal.proto.storage.SessionStructure.IPendingPreKey | null;
        remoteRegistrationId?: number | null;
        localRegistrationId?: number | null;
        needsRefresh?: boolean | null;
        aliceBaseKey?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class SessionStructure implements ISessionStructure {
        constructor(properties?: signal.proto.storage.ISessionStructure);
        public sessionVersion: number;
        public localIdentityPublic: Uint8Array;
        public remoteIdentityPublic: Uint8Array;
        public rootKey: Uint8Array;
        public previousCounter: number;
        public senderChain?: signal.proto.storage.SessionStructure.IChain | null;
        public receiverChains: signal.proto.storage.SessionStructure.IChain[];
        public pendingPreKey?: signal.proto.storage.SessionStructure.IPendingPreKey | null;
        public remoteRegistrationId: number;
        public localRegistrationId: number;
        public needsRefresh: boolean;
        public aliceBaseKey: Uint8Array;
        public static encode(
          message: signal.proto.storage.ISessionStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signal.proto.storage.ISessionStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SessionStructure;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SessionStructure;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace SessionStructure {
        interface IChain {
          senderRatchetKey?: Uint8Array | null;
          senderRatchetKeyPrivate?: Uint8Array | null;
          chainKey?: signal.proto.storage.SessionStructure.Chain.IChainKey | null;
          messageKeys?:
            | signal.proto.storage.SessionStructure.Chain.IMessageKey[]
            | null;

          $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class Chain implements IChain {
          constructor(
            properties?: signal.proto.storage.SessionStructure.IChain
          );
          public senderRatchetKey: Uint8Array;
          public senderRatchetKeyPrivate: Uint8Array;
          public chainKey?: signal.proto.storage.SessionStructure.Chain.IChainKey | null;
          public messageKeys: signal.proto.storage.SessionStructure.Chain.IMessageKey[];
          public static encode(
            message: signal.proto.storage.SessionStructure.IChain,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static encodeDelimited(
            message: signal.proto.storage.SessionStructure.IChain,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SessionStructure.Chain;
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SessionStructure.Chain;

          public $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        namespace Chain {
          interface IChainKey {
            index?: number | null;
            key?: Uint8Array | null;

            $unknownFields?: ReadonlyArray<Uint8Array>;
          }

          class ChainKey implements IChainKey {
            constructor(
              properties?: signal.proto.storage.SessionStructure.Chain.IChainKey
            );
            public index: number;
            public key: Uint8Array;
            public static encode(
              message: signal.proto.storage.SessionStructure.Chain.IChainKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;
            public static encodeDelimited(
              message: signal.proto.storage.SessionStructure.Chain.IChainKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;
            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number
            ): signal.proto.storage.SessionStructure.Chain.ChainKey;
            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array
            ): signal.proto.storage.SessionStructure.Chain.ChainKey;

            public $unknownFields?: ReadonlyArray<Uint8Array>;
          }

          interface IMessageKey {
            index?: number | null;
            cipherKey?: Uint8Array | null;
            macKey?: Uint8Array | null;
            iv?: Uint8Array | null;

            $unknownFields?: ReadonlyArray<Uint8Array>;
          }

          class MessageKey implements IMessageKey {
            constructor(
              properties?: signal.proto.storage.SessionStructure.Chain.IMessageKey
            );
            public index: number;
            public cipherKey: Uint8Array;
            public macKey: Uint8Array;
            public iv: Uint8Array;
            public static encode(
              message: signal.proto.storage.SessionStructure.Chain.IMessageKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;
            public static encodeDelimited(
              message: signal.proto.storage.SessionStructure.Chain.IMessageKey,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;
            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number
            ): signal.proto.storage.SessionStructure.Chain.MessageKey;
            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array
            ): signal.proto.storage.SessionStructure.Chain.MessageKey;

            public $unknownFields?: ReadonlyArray<Uint8Array>;
          }
        }

        interface IPendingPreKey {
          preKeyId?: number | null;
          signedPreKeyId?: number | null;
          baseKey?: Uint8Array | null;

          $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class PendingPreKey implements IPendingPreKey {
          constructor(
            properties?: signal.proto.storage.SessionStructure.IPendingPreKey
          );
          public preKeyId: number;
          public signedPreKeyId: number;
          public baseKey: Uint8Array;
          public static encode(
            message: signal.proto.storage.SessionStructure.IPendingPreKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static encodeDelimited(
            message: signal.proto.storage.SessionStructure.IPendingPreKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SessionStructure.PendingPreKey;
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SessionStructure.PendingPreKey;

          public $unknownFields?: ReadonlyArray<Uint8Array>;
        }
      }

      interface IRecordStructure {
        currentSession?: signal.proto.storage.ISessionStructure | null;
        previousSessions?: signal.proto.storage.ISessionStructure[] | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class RecordStructure implements IRecordStructure {
        constructor(properties?: signal.proto.storage.IRecordStructure);
        public currentSession?: signal.proto.storage.ISessionStructure | null;
        public previousSessions: signal.proto.storage.ISessionStructure[];
        public static encode(
          message: signal.proto.storage.IRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signal.proto.storage.IRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.RecordStructure;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.RecordStructure;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IPreKeyRecordStructure {
        id?: number | null;
        publicKey?: Uint8Array | null;
        privateKey?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class PreKeyRecordStructure implements IPreKeyRecordStructure {
        constructor(properties?: signal.proto.storage.IPreKeyRecordStructure);
        public id: number;
        public publicKey: Uint8Array;
        public privateKey: Uint8Array;
        public static encode(
          message: signal.proto.storage.IPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signal.proto.storage.IPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.PreKeyRecordStructure;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.PreKeyRecordStructure;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface ISignedPreKeyRecordStructure {
        id?: number | null;
        publicKey?: Uint8Array | null;
        privateKey?: Uint8Array | null;
        signature?: Uint8Array | null;
        timestamp?: Long | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class SignedPreKeyRecordStructure
        implements ISignedPreKeyRecordStructure
      {
        constructor(
          properties?: signal.proto.storage.ISignedPreKeyRecordStructure
        );
        public id: number;
        public publicKey: Uint8Array;
        public privateKey: Uint8Array;
        public signature: Uint8Array;
        public timestamp: Long;
        public static encode(
          message: signal.proto.storage.ISignedPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signal.proto.storage.ISignedPreKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SignedPreKeyRecordStructure;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SignedPreKeyRecordStructure;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface IIdentityKeyPairStructure {
        publicKey?: Uint8Array | null;
        privateKey?: Uint8Array | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class IdentityKeyPairStructure implements IIdentityKeyPairStructure {
        constructor(
          properties?: signal.proto.storage.IIdentityKeyPairStructure
        );
        public publicKey: Uint8Array;
        public privateKey: Uint8Array;
        public static encode(
          message: signal.proto.storage.IIdentityKeyPairStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signal.proto.storage.IIdentityKeyPairStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.IdentityKeyPairStructure;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.IdentityKeyPairStructure;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      interface ISenderKeyStateStructure {
        senderKeyId?: number | null;
        senderChainKey?: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey | null;
        senderSigningKey?: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey | null;
        senderMessageKeys?:
          | signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey[]
          | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class SenderKeyStateStructure implements ISenderKeyStateStructure {
        constructor(properties?: signal.proto.storage.ISenderKeyStateStructure);
        public senderKeyId: number;
        public senderChainKey?: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey | null;
        public senderSigningKey?: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey | null;
        public senderMessageKeys: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey[];
        public static encode(
          message: signal.proto.storage.ISenderKeyStateStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signal.proto.storage.ISenderKeyStateStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SenderKeyStateStructure;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SenderKeyStateStructure;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      namespace SenderKeyStateStructure {
        interface ISenderChainKey {
          iteration?: number | null;
          seed?: Uint8Array | null;

          $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class SenderChainKey implements ISenderChainKey {
          constructor(
            properties?: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey
          );
          public iteration: number;
          public seed: Uint8Array;
          public static encode(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static encodeDelimited(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderChainKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SenderKeyStateStructure.SenderChainKey;
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SenderKeyStateStructure.SenderChainKey;

          public $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        interface ISenderMessageKey {
          iteration?: number | null;
          seed?: Uint8Array | null;

          $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class SenderMessageKey implements ISenderMessageKey {
          constructor(
            properties?: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey
          );
          public iteration: number;
          public seed: Uint8Array;
          public static encode(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static encodeDelimited(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderMessageKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SenderKeyStateStructure.SenderMessageKey;
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SenderKeyStateStructure.SenderMessageKey;

          public $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        interface ISenderSigningKey {
          public?: Uint8Array | null;
          private?: Uint8Array | null;

          $unknownFields?: ReadonlyArray<Uint8Array>;
        }

        class SenderSigningKey implements ISenderSigningKey {
          constructor(
            properties?: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey
          );
          public public: Uint8Array;
          public private: Uint8Array;
          public static encode(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static encodeDelimited(
            message: signal.proto.storage.SenderKeyStateStructure.ISenderSigningKey,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): signal.proto.storage.SenderKeyStateStructure.SenderSigningKey;
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): signal.proto.storage.SenderKeyStateStructure.SenderSigningKey;

          public $unknownFields?: ReadonlyArray<Uint8Array>;
        }
      }

      interface ISenderKeyRecordStructure {
        senderKeyStates?:
          | signal.proto.storage.ISenderKeyStateStructure[]
          | null;

        $unknownFields?: ReadonlyArray<Uint8Array>;
      }

      class SenderKeyRecordStructure implements ISenderKeyRecordStructure {
        constructor(
          properties?: signal.proto.storage.ISenderKeyRecordStructure
        );
        public senderKeyStates: signal.proto.storage.ISenderKeyStateStructure[];
        public static encode(
          message: signal.proto.storage.ISenderKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static encodeDelimited(
          message: signal.proto.storage.ISenderKeyRecordStructure,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): signal.proto.storage.SenderKeyRecordStructure;
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): signal.proto.storage.SenderKeyRecordStructure;

        public $unknownFields?: ReadonlyArray<Uint8Array>;
      }
    }
  }
}
