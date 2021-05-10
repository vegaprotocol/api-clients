// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: commands/v1/oracles.proto

#include "commands/v1/oracles.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
namespace vega {
namespace commands {
namespace v1 {
class OracleDataSubmissionDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<OracleDataSubmission> _instance;
} _OracleDataSubmission_default_instance_;
}  // namespace v1
}  // namespace commands
}  // namespace vega
static void InitDefaultsscc_info_OracleDataSubmission_commands_2fv1_2foracles_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::vega::commands::v1::_OracleDataSubmission_default_instance_;
    new (ptr) ::vega::commands::v1::OracleDataSubmission();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_OracleDataSubmission_commands_2fv1_2foracles_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_OracleDataSubmission_commands_2fv1_2foracles_2eproto}, {}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_commands_2fv1_2foracles_2eproto[1];
static const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* file_level_enum_descriptors_commands_2fv1_2foracles_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_commands_2fv1_2foracles_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_commands_2fv1_2foracles_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::vega::commands::v1::OracleDataSubmission, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::vega::commands::v1::OracleDataSubmission, source_),
  PROTOBUF_FIELD_OFFSET(::vega::commands::v1::OracleDataSubmission, payload_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::vega::commands::v1::OracleDataSubmission)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::vega::commands::v1::_OracleDataSubmission_default_instance_),
};

const char descriptor_table_protodef_commands_2fv1_2foracles_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\031commands/v1/oracles.proto\022\020vega.comman"
  "ds.v1\"\313\001\n\024OracleDataSubmission\022K\n\006source"
  "\030\001 \001(\01623.vega.commands.v1.OracleDataSubm"
  "ission.OracleSourceR\006source\022\030\n\007payload\030\002"
  " \001(\014R\007payload\"L\n\014OracleSource\022\035\n\031ORACLE_"
  "SOURCE_UNSPECIFIED\020\000\022\035\n\031ORACLE_SOURCE_OP"
  "EN_ORACLE\020\001BO\n io.vegaprotocol.vega.comm"
  "ands.v1Z+code.vegaprotocol.io/vega/proto"
  "/commands/v1b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_commands_2fv1_2foracles_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_commands_2fv1_2foracles_2eproto_sccs[1] = {
  &scc_info_OracleDataSubmission_commands_2fv1_2foracles_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_commands_2fv1_2foracles_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_commands_2fv1_2foracles_2eproto = {
  false, false, descriptor_table_protodef_commands_2fv1_2foracles_2eproto, "commands/v1/oracles.proto", 340,
  &descriptor_table_commands_2fv1_2foracles_2eproto_once, descriptor_table_commands_2fv1_2foracles_2eproto_sccs, descriptor_table_commands_2fv1_2foracles_2eproto_deps, 1, 0,
  schemas, file_default_instances, TableStruct_commands_2fv1_2foracles_2eproto::offsets,
  file_level_metadata_commands_2fv1_2foracles_2eproto, 1, file_level_enum_descriptors_commands_2fv1_2foracles_2eproto, file_level_service_descriptors_commands_2fv1_2foracles_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_commands_2fv1_2foracles_2eproto = (static_cast<void>(::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_commands_2fv1_2foracles_2eproto)), true);
namespace vega {
namespace commands {
namespace v1 {
const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* OracleDataSubmission_OracleSource_descriptor() {
  ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&descriptor_table_commands_2fv1_2foracles_2eproto);
  return file_level_enum_descriptors_commands_2fv1_2foracles_2eproto[0];
}
bool OracleDataSubmission_OracleSource_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
      return true;
    default:
      return false;
  }
}

#if (__cplusplus < 201703) && (!defined(_MSC_VER) || _MSC_VER >= 1900)
constexpr OracleDataSubmission_OracleSource OracleDataSubmission::ORACLE_SOURCE_UNSPECIFIED;
constexpr OracleDataSubmission_OracleSource OracleDataSubmission::ORACLE_SOURCE_OPEN_ORACLE;
constexpr OracleDataSubmission_OracleSource OracleDataSubmission::OracleSource_MIN;
constexpr OracleDataSubmission_OracleSource OracleDataSubmission::OracleSource_MAX;
constexpr int OracleDataSubmission::OracleSource_ARRAYSIZE;
#endif  // (__cplusplus < 201703) && (!defined(_MSC_VER) || _MSC_VER >= 1900)

// ===================================================================

class OracleDataSubmission::_Internal {
 public:
};

OracleDataSubmission::OracleDataSubmission(::PROTOBUF_NAMESPACE_ID::Arena* arena)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena) {
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:vega.commands.v1.OracleDataSubmission)
}
OracleDataSubmission::OracleDataSubmission(const OracleDataSubmission& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  payload_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_payload().empty()) {
    payload_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_payload(),
      GetArena());
  }
  source_ = from.source_;
  // @@protoc_insertion_point(copy_constructor:vega.commands.v1.OracleDataSubmission)
}

void OracleDataSubmission::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_OracleDataSubmission_commands_2fv1_2foracles_2eproto.base);
  payload_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  source_ = 0;
}

OracleDataSubmission::~OracleDataSubmission() {
  // @@protoc_insertion_point(destructor:vega.commands.v1.OracleDataSubmission)
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

void OracleDataSubmission::SharedDtor() {
  GOOGLE_DCHECK(GetArena() == nullptr);
  payload_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void OracleDataSubmission::ArenaDtor(void* object) {
  OracleDataSubmission* _this = reinterpret_cast< OracleDataSubmission* >(object);
  (void)_this;
}
void OracleDataSubmission::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void OracleDataSubmission::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const OracleDataSubmission& OracleDataSubmission::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_OracleDataSubmission_commands_2fv1_2foracles_2eproto.base);
  return *internal_default_instance();
}


void OracleDataSubmission::Clear() {
// @@protoc_insertion_point(message_clear_start:vega.commands.v1.OracleDataSubmission)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  payload_.ClearToEmpty();
  source_ = 0;
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* OracleDataSubmission::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // .vega.commands.v1.OracleDataSubmission.OracleSource source = 1 [json_name = "source"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 8)) {
          ::PROTOBUF_NAMESPACE_ID::uint64 val = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
          _internal_set_source(static_cast<::vega::commands::v1::OracleDataSubmission_OracleSource>(val));
        } else goto handle_unusual;
        continue;
      // bytes payload = 2 [json_name = "payload"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_payload();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* OracleDataSubmission::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:vega.commands.v1.OracleDataSubmission)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .vega.commands.v1.OracleDataSubmission.OracleSource source = 1 [json_name = "source"];
  if (this->source() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteEnumToArray(
      1, this->_internal_source(), target);
  }

  // bytes payload = 2 [json_name = "payload"];
  if (this->payload().size() > 0) {
    target = stream->WriteBytesMaybeAliased(
        2, this->_internal_payload(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:vega.commands.v1.OracleDataSubmission)
  return target;
}

size_t OracleDataSubmission::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:vega.commands.v1.OracleDataSubmission)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // bytes payload = 2 [json_name = "payload"];
  if (this->payload().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::BytesSize(
        this->_internal_payload());
  }

  // .vega.commands.v1.OracleDataSubmission.OracleSource source = 1 [json_name = "source"];
  if (this->source() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::EnumSize(this->_internal_source());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void OracleDataSubmission::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:vega.commands.v1.OracleDataSubmission)
  GOOGLE_DCHECK_NE(&from, this);
  const OracleDataSubmission* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<OracleDataSubmission>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:vega.commands.v1.OracleDataSubmission)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:vega.commands.v1.OracleDataSubmission)
    MergeFrom(*source);
  }
}

void OracleDataSubmission::MergeFrom(const OracleDataSubmission& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:vega.commands.v1.OracleDataSubmission)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.payload().size() > 0) {
    _internal_set_payload(from._internal_payload());
  }
  if (from.source() != 0) {
    _internal_set_source(from._internal_source());
  }
}

void OracleDataSubmission::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:vega.commands.v1.OracleDataSubmission)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void OracleDataSubmission::CopyFrom(const OracleDataSubmission& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:vega.commands.v1.OracleDataSubmission)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool OracleDataSubmission::IsInitialized() const {
  return true;
}

void OracleDataSubmission::InternalSwap(OracleDataSubmission* other) {
  using std::swap;
  _internal_metadata_.Swap<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(&other->_internal_metadata_);
  payload_.Swap(&other->payload_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
  swap(source_, other->source_);
}

::PROTOBUF_NAMESPACE_ID::Metadata OracleDataSubmission::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace v1
}  // namespace commands
}  // namespace vega
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::vega::commands::v1::OracleDataSubmission* Arena::CreateMaybeMessage< ::vega::commands::v1::OracleDataSubmission >(Arena* arena) {
  return Arena::CreateMessageInternal< ::vega::commands::v1::OracleDataSubmission >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>