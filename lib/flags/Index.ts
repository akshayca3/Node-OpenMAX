export enum INDEXTYPE {
  IndexComponentStartUnused = 0x1000000,
  IndexParamPriorityMgmt = 0x1000001,
  IndexParamAudioInit = 0x1000002,
  IndexParamImageInit = 0x1000003,
  IndexParamVideoInit = 0x1000004,
  IndexParamOtherInit = 0x1000005,
  IndexParamNumAvailableStreams = 0x1000006,
  IndexParamActiveStream = 0x1000007,
  IndexParamSuspensionPolicy = 0x1000008,
  IndexParamComponentSuspended = 0x1000009,
  IndexConfigCapturing = 0x100000A,
  IndexConfigCaptureMode = 0x100000B,
  IndexAutoPauseAfterCapture = 0x100000C,
  IndexParamContentURI = 0x100000D,
  IndexParamCustomContentPipe = 0x100000E,
  IndexParamDisableResourceConcealment = 0x100000F,
  IndexConfigMetadataItemCount = 0x1000010,
  IndexConfigContainerNodeCount = 0x1000011,
  IndexConfigMetadataItem = 0x1000012,
  IndexConfigCounterNodeID = 0x1000013,
  IndexParamMetadataFilterType = 0x1000014,
  IndexParamMetadataKeyFilter = 0x1000015,
  IndexConfigPriorityMgmt = 0x1000016,
  IndexParamStandardComponentRole = 0x1000017,
  IndexPortStartUnused = 0x2000000,
  IndexParamPortDefinition = 0x2000001,
  IndexParamCompBufferSupplier = 0x2000002,
  IndexReservedStartUnused = 0x3000000,
  IndexAudioStartUnused = 0x4000000,
  IndexParamAudioPortFormat = 0x4000001,
  IndexParamAudioPcm = 0x4000002,
  IndexParamAudioAac = 0x4000003,
  IndexParamAudioRa = 0x4000004,
  IndexParamAudioMp3 = 0x4000005,
  IndexParamAudioAdpcm = 0x4000006,
  IndexParamAudioG723 = 0x4000007,
  IndexParamAudioG729 = 0x4000008,
  IndexParamAudioAmr = 0x4000009,
  IndexParamAudioWma = 0x400000A,
  IndexParamAudioSbc = 0x400000B,
  IndexParamAudioMidi = 0x400000C,
  IndexParamAudioGsm_FR = 0x400000D,
  IndexParamAudioMidiLoadUserSound = 0x400000E,
  IndexParamAudioG726 = 0x400000F,
  IndexParamAudioGsm_EFR = 0x4000010,
  IndexParamAudioGsm_HR = 0x4000011,
  IndexParamAudioPdc_FR = 0x4000012,
  IndexParamAudioPdc_EFR = 0x4000013,
  IndexParamAudioPdc_HR = 0x4000014,
  IndexParamAudioTdma_FR = 0x4000015,
  IndexParamAudioTdma_EFR = 0x4000016,
  IndexParamAudioQcelp8 = 0x4000017,
  IndexParamAudioQcelp13 = 0x4000018,
  IndexParamAudioEvrc = 0x4000019,
  IndexParamAudioSmv = 0x400001A,
  IndexParamAudioVorbis = 0x400001B,
  IndexConfigAudioMidiImmediateEvent = 0x400001C,
  IndexConfigAudioMidiControl = 0x400001D,
  IndexConfigAudioMidiSoundBankProgram = 0x400001E,
  IndexConfigAudioMidiStatus = 0x400001F,
  IndexConfigAudioMidiMetaEvent = 0x4000020,
  IndexConfigAudioMidiMetaEventData = 0x4000021,
  IndexConfigAudioVolume = 0x4000022,
  IndexConfigAudioBalance = 0x4000023,
  IndexConfigAudioChannelMute = 0x4000024,
  IndexConfigAudioMute = 0x4000025,
  IndexConfigAudioLoudness = 0x4000026,
  IndexConfigAudioEchoCancelation = 0x4000027,
  IndexConfigAudioNoiseReduction = 0x4000028,
  IndexConfigAudioBass = 0x4000029,
  IndexConfigAudioTreble = 0x400002A,
  IndexConfigAudioStereoWidening = 0x400002B,
  IndexConfigAudioChorus = 0x400002C,
  IndexConfigAudioEqualizer = 0x400002D,
  IndexConfigAudioReverberation = 0x400002E,
  IndexConfigAudioChannelVolume = 0x400002F,
  IndexImageStartUnused = 0x5000000,
  IndexParamImagePortFormat = 0x5000001,
  IndexParamFlashControl = 0x5000002,
  IndexConfigFocusControl = 0x5000003,
  IndexParamQFactor = 0x5000004,
  IndexParamQuantizationTable = 0x5000005,
  IndexParamHuffmanTable = 0x5000006,
  IndexConfigFlashControl = 0x5000007,
  IndexVideoStartUnused = 0x6000000,
  IndexParamVideoPortFormat = 0x6000001,
  IndexParamVideoQuantization = 0x6000002,
  IndexParamVideoFastUpdate = 0x6000003,
  IndexParamVideoBitrate = 0x6000004,
  IndexParamVideoMotionVector = 0x6000005,
  IndexParamVideoIntraRefresh = 0x6000006,
  IndexParamVideoErrorCorrection = 0x6000007,
  IndexParamVideoVBSMC = 0x6000008,
  IndexParamVideoMpeg2 = 0x6000009,
  IndexParamVideoMpeg4 = 0x600000A,
  IndexParamVideoWmv = 0x600000B,
  IndexParamVideoRv = 0x600000C,
  IndexParamVideoAvc = 0x600000D,
  IndexParamVideoH263 = 0x600000E,
  IndexParamVideoProfileLevelQuerySupported = 0x600000F,
  IndexParamVideoProfileLevelCurrent = 0x6000010,
  IndexConfigVideoBitrate = 0x6000011,
  IndexConfigVideoFramerate = 0x6000012,
  IndexConfigVideoIntraVOPRefresh = 0x6000013,
  IndexConfigVideoIntraMBRefresh = 0x6000014,
  IndexConfigVideoMBErrorReporting = 0x6000015,
  IndexParamVideoMacroblocksPerFrame = 0x6000016,
  IndexConfigVideoMacroBlockErrorMap = 0x6000017,
  IndexParamVideoSliceFMO = 0x6000018,
  IndexConfigVideoAVCIntraPeriod = 0x6000019,
  IndexConfigVideoNalSize = 0x600001A,
  IndexCommonStartUnused = 0x7000000,
  IndexParamCommonDeblocking = 0x7000001,
  IndexParamCommonSensorMode = 0x7000002,
  IndexParamCommonInterleave = 0x7000003,
  IndexConfigCommonColorFormatConversion = 0x7000004,
  IndexConfigCommonScale = 0x7000005,
  IndexConfigCommonImageFilter = 0x7000006,
  IndexConfigCommonColorEnhancement = 0x7000007,
  IndexConfigCommonColorKey = 0x7000008,
  IndexConfigCommonColorBlend = 0x7000009,
  IndexConfigCommonFrameStabilisation = 0x700000A,
  IndexConfigCommonRotate = 0x700000B,
  IndexConfigCommonMirror = 0x700000C,
  IndexConfigCommonOutputPosition = 0x700000D,
  IndexConfigCommonInputCrop = 0x700000E,
  IndexConfigCommonOutputCrop = 0x700000F,
  IndexConfigCommonDigitalZoom = 0x7000010,
  IndexConfigCommonOpticalZoom = 0x7000011,
  IndexConfigCommonWhiteBalance = 0x7000012,
  IndexConfigCommonExposure = 0x7000013,
  IndexConfigCommonContrast = 0x7000014,
  IndexConfigCommonBrightness = 0x7000015,
  IndexConfigCommonBacklight = 0x7000016,
  IndexConfigCommonGamma = 0x7000017,
  IndexConfigCommonSaturation = 0x7000018,
  IndexConfigCommonLightness = 0x7000019,
  IndexConfigCommonExclusionRect = 0x700001A,
  IndexConfigCommonDithering = 0x700001B,
  IndexConfigCommonPlaneBlend = 0x700001C,
  IndexConfigCommonExposureValue = 0x700001D,
  IndexConfigCommonOutputSize = 0x700001E,
  IndexParamCommonExtraQuantData = 0x700001F,
  IndexConfigCommonFocusRegion = 0x7000020,
  IndexConfigCommonFocusStatus = 0x7000021,
  IndexConfigCommonTransitionEffect = 0x7000022,
  IndexOtherStartUnused = 0x8000000,
  IndexParamOtherPortFormat = 0x8000001,
  IndexConfigOtherPower = 0x8000002,
  IndexConfigOtherStats = 0x8000003,
  IndexTimeStartUnused = 0x9000000,
  IndexConfigTimeScale = 0x9000001,
  IndexConfigTimeClockState = 0x9000002,
  IndexConfigTimeActiveRefClock = 0x9000003,
  IndexConfigTimeCurrentMediaTime = 0x9000004,
  IndexConfigTimeCurrentWallTime = 0x9000005,
  IndexConfigTimeCurrentAudioReference = 0x9000006,
  IndexConfigTimeCurrentVideoReference = 0x9000007,
  IndexConfigTimeMediaTimeRequest = 0x9000008,
  IndexConfigTimeClientStartTime = 0x9000009,
  IndexConfigTimePosition = 0x900000A,
  IndexConfigTimeSeekMode = 0x900000B,
  IndexKhronosExtensions = 0x6F000000,
  IndexVendorStartUnused = 0x7F000000,
  IndexParamMarkComparison = 0x7F000001,
  IndexParamPortSummary = 0x7F000002,
  IndexParamTunnelStatus = 0x7F000003,
  IndexParamBrcmRecursionUnsafe = 0x7F000004,
  IndexParamBufferAddress = 0x7F000005,
  IndexParamTunnelSetup = 0x7F000006,
  IndexParamBrcmPortEGL = 0x7F000007,
  IndexParamIdleResourceCount = 0x7F000008,
  IndexParamImagePoolDisplayFunction = 0x7F000009,
  IndexParamBrcmDataUnit = 0x7F00000A,
  IndexParamCodecConfig = 0x7F00000B,
  IndexParamCameraPoolToEncoderFunction = 0x7F00000C,
  IndexParamCameraStripeFunction = 0x7F00000D,
  IndexParamCameraCaptureEventFunction = 0x7F00000E,
  IndexParamTestInterface = 0x7F00000F,
  IndexConfigDisplayRegion = 0x7F000010,
  IndexParamSource = 0x7F000011,
  IndexParamSourceSeed = 0x7F000012,
  IndexParamResize = 0x7F000013,
  IndexConfigVisualisation = 0x7F000014,
  IndexConfigSingleStep = 0x7F000015,
  IndexConfigPlayMode = 0x7F000016,
  IndexParamCameraCamplusId = 0x7F000017,
  IndexConfigCommonImageFilterParameters = 0x7F000018,
  IndexConfigTransitionControl = 0x7F000019,
  IndexConfigPresentationOffset = 0x7F00001A,
  IndexParamSourceFunctions = 0x7F00001B,
  IndexConfigAudioMonoTrackControl = 0x7F00001C,
  IndexParamCameraImagePool = 0x7F00001D,
  IndexConfigCameraISPOutputPoolHeight = 0x7F00001E,
  IndexParamImagePoolSize = 0x7F00001F,
  IndexParamImagePoolExternal = 0x7F000020,
  IndexParamRUTILFifoInfo = 0x7F000021,
  IndexParamILFifoConfig = 0x7F000022,
  IndexConfigCameraSensorModes = 0x7F000023,
  IndexConfigBrcmPortStats = 0x7F000024,
  IndexConfigBrcmPortBufferStats = 0x7F000025,
  IndexConfigBrcmCameraStats = 0x7F000026,
  IndexConfigBrcmIOPerfStats = 0x7F000027,
  IndexConfigCommonSharpness = 0x7F000028,
  IndexConfigCommonFlickerCancellation = 0x7F000029,
  IndexParamCameraSwapImagePools = 0x7F00002A,
  IndexParamCameraSingleBufferCaptureInput = 0x7F00002B,
  IndexConfigCommonRedEyeRemoval = 0x7F00002C,
  IndexConfigCommonFaceDetectionControl = 0x7F00002D,
  IndexConfigCommonFaceDetectionRegion = 0x7F00002E,
  IndexConfigCommonInterlace = 0x7F00002F,
  IndexParamISPTunerName = 0x7F000030,
  IndexParamCameraDeviceNumber = 0x7F000031,
  IndexParamCameraDevicesPresent = 0x7F000032,
  IndexConfigCameraInputFrame = 0x7F000033,
  IndexConfigStillColourDenoiseEnable = 0x7F000034,
  IndexConfigVideoColourDenoiseEnable = 0x7F000035,
  IndexConfigAFAssistLight = 0x7F000036,
  IndexConfigSmartShakeReductionEnable = 0x7F000037,
  IndexConfigInputCropPercentages = 0x7F000038,
  IndexConfigStillsAntiShakeEnable = 0x7F000039,
  IndexConfigWaitForFocusBeforeCapture = 0x7F00003A,
  IndexConfigAudioRenderingLatency = 0x7F00003B,
  IndexConfigDrawBoxAroundFaces = 0x7F00003C,
  IndexParamCodecRequirements = 0x7F00003D,
  IndexConfigBrcmEGLImageMemHandle = 0x7F00003E,
  IndexConfigPrivacyIndicator = 0x7F00003F,
  IndexParamCameraFlashType = 0x7F000040,
  IndexConfigCameraEnableStatsPass = 0x7F000041,
  IndexConfigCameraFlashConfig = 0x7F000042,
  IndexConfigCaptureRawImageURI = 0x7F000043,
  IndexConfigCameraStripeFuncMinLines = 0x7F000044,
  IndexConfigCameraAlgorithmVersionDeprecated = 0x7F000045,
  IndexConfigCameraIsoReferenceValue = 0x7F000046,
  IndexConfigCameraCaptureAbortsAutoFocus = 0x7F000047,
  IndexConfigBrcmClockMissCount = 0x7F000048,
  IndexConfigFlashChargeLevel = 0x7F000049,
  IndexConfigBrcmVideoEncodedSliceSize = 0x7F00004A,
  IndexConfigBrcmAudioTrackGaplessPlayback = 0x7F00004B,
  IndexConfigBrcmAudioTrackChangeControl = 0x7F00004C,
  IndexParamBrcmPixelAspectRatio = 0x7F00004D,
  IndexParamBrcmPixelValueRange = 0x7F00004E,
  IndexParamCameraDisableAlgorithm = 0x7F00004F,
  IndexConfigBrcmVideoIntraPeriodTime = 0x7F000050,
  IndexConfigBrcmVideoIntraPeriod = 0x7F000051,
  IndexConfigBrcmAudioEffectControl = 0x7F000052,
  IndexConfigBrcmMinimumProcessingLatency = 0x7F000053,
  IndexParamBrcmVideoAVCSEIEnable = 0x7F000054,
  IndexParamBrcmAllowMemChange = 0x7F000055,
  IndexConfigBrcmVideoEncoderMBRowsPerSlice = 0x7F000056,
  IndexParamCameraAFAssistDeviceNumber_Deprecated = 0x7F000057,
  IndexParamCameraPrivacyIndicatorDeviceNumber_Deprecated = 0x7F000058,
  IndexConfigCameraUseCase = 0x7F000059,
  IndexParamBrcmDisableProprietaryTunnels = 0x7F00005A,
  IndexParamBrcmOutputBufferSize = 0x7F00005B,
  IndexParamBrcmRetainMemory = 0x7F00005C,
  IndexConfigCanFocus_Deprecated = 0x7F00005D,
  IndexParamBrcmImmutableInput = 0x7F00005E,
  IndexParamDynamicParameterFile = 0x7F00005F,
  IndexParamUseDynamicParameterFile = 0x7F000060,
  IndexConfigCameraInfo = 0x7F000061,
  IndexConfigCameraFeatures = 0x7F000062,
  IndexConfigRequestCallback = 0x7F000063,
  IndexConfigBrcmOutputBufferFullCount = 0x7F000064,
  IndexConfigCommonFocusRegionXY = 0x7F000065,
  IndexParamBrcmDisableEXIF = 0x7F000066,
  IndexConfigUserSettingsId = 0x7F000067,
  IndexConfigCameraSettings = 0x7F000068,
  IndexConfigDrawBoxLineParams = 0x7F000069,
  IndexParamCameraRmiControl_Deprecated = 0x7F00006A,
  IndexConfigBurstCapture = 0x7F00006B,
  IndexParamBrcmEnableIJGTableScaling = 0x7F00006C,
  IndexConfigPowerDown = 0x7F00006D,
  IndexConfigBrcmSyncOutput = 0x7F00006E,
  IndexParamBrcmFlushCallback = 0x7F00006F,
  IndexConfigBrcmVideoRequestIFrame = 0x7F000070,
  IndexParamBrcmNALSSeparate = 0x7F000071,
  IndexConfigConfirmView = 0x7F000072,
  IndexConfigDrmView = 0x7F000073,
  IndexConfigBrcmVideoIntraRefresh = 0x7F000074,
  IndexParamBrcmMaxFileSize = 0x7F000075,
  IndexParamBrcmCRCEnable = 0x7F000076,
  IndexParamBrcmCRC = 0x7F000077,
  IndexConfigCameraRmiInUse_Deprecated = 0x7F000078,
  IndexConfigBrcmAudioSource = 0x7F000079,
  IndexConfigBrcmAudioDestination = 0x7F00007A,
  IndexParamAudioDdp = 0x7F00007B,
  IndexParamBrcmThumbnail = 0x7F00007C,
  IndexParamBrcmDisableLegacyBlocks_Deprecated = 0x7F00007D,
  IndexParamBrcmCameraInputAspectRatio = 0x7F00007E,
  IndexParamDynamicParameterFileFailFatal = 0x7F00007F,
  IndexParamBrcmVideoDecodeErrorConcealment = 0x7F000080,
  IndexParamBrcmInterpolateMissingTimestamps = 0x7F000081,
  IndexParamBrcmSetCodecPerformanceMonitoring = 0x7F000082,
  IndexConfigFlashInfo = 0x7F000083,
  IndexParamBrcmMaxFrameSkips = 0x7F000084,
  IndexConfigDynamicRangeExpansion = 0x7F000085,
  IndexParamBrcmFlushCallbackId = 0x7F000086,
  IndexParamBrcmTransposeBufferCount = 0x7F000087,
  IndexConfigFaceRecognitionControl = 0x7F000088,
  IndexConfigFaceRecognitionSaveFace = 0x7F000089,
  IndexConfigFaceRecognitionDatabaseUri = 0x7F00008A,
  IndexConfigClockAdjustment = 0x7F00008B,
  IndexParamBrcmThreadAffinity = 0x7F00008C,
  IndexParamAsynchronousOutput = 0x7F00008D,
  IndexConfigAsynchronousFailureURI = 0x7F00008E,
  IndexConfigCommonFaceBeautification = 0x7F00008F,
  IndexConfigCommonSceneDetectionControl = 0x7F000090,
  IndexConfigCommonSceneDetected = 0x7F000091,
  IndexParamDisableVllPool = 0x7F000092,
  IndexParamVideoMvc = 0x7F000093,
  IndexConfigBrcmDrawStaticBox = 0x7F000094,
  IndexConfigBrcmClockReferenceSource = 0x7F000095,
  IndexParamPassBufferMarks = 0x7F000096,
  IndexConfigPortCapturing = 0x7F000097,
  IndexConfigBrcmDecoderPassThrough = 0x7F000098,
  IndexParamBrcmDecoderPassThrough = 0x7F000098,
  IndexParamBrcmMaxCorruptMBs = 0x7F000099,
  IndexConfigBrcmGlobalAudioMute = 0x7F00009A,
  IndexParamCameraCaptureMode = 0x7F00009B,
  IndexParamBrcmDrmEncryption = 0x7F00009C,
  IndexConfigBrcmCameraRnDPreprocess = 0x7F00009D,
  IndexConfigBrcmCameraRnDPostprocess = 0x7F00009E,
  IndexConfigBrcmAudioTrackChangeCount = 0x7F00009F,
  IndexParamCommonUseStcTimestamps = 0x7F0000A0,
  IndexConfigBufferStall = 0x7F0000A1,
  IndexConfigRefreshCodec = 0x7F0000A2,
  IndexParamCaptureStatus = 0x7F0000A3,
  IndexConfigTimeInvalidStartTime = 0x7F0000A4,
  IndexConfigLatencyTarget = 0x7F0000A5,
  IndexConfigMinimiseFragmentation = 0x7F0000A6,
  IndexConfigBrcmUseProprietaryCallback = 0x7F0000A7,
  IndexParamPortMaxFrameSize = 0x7F0000A8,
  IndexParamComponentName = 0x7F0000A9,
  IndexConfigEncLevelExtension = 0x7F0000AA,
  IndexConfigTemporalDenoiseEnable = 0x7F0000AB,
  IndexParamBrcmLazyImagePoolDestroy = 0x7F0000AC,
  IndexParamBrcmEEDEEnable = 0x7F0000AD,
  IndexParamBrcmEEDELossRate = 0x7F0000AE,
  IndexParamAudioDts = 0x7F0000AF,
  IndexParamNumOutputChannels = 0x7F0000B0,
  IndexConfigBrcmHighDynamicRange = 0x7F0000B1,
  IndexConfigBrcmPoolMemAllocSize = 0x7F0000B2,
  IndexConfigBrcmBufferFlagFilter = 0x7F0000B3,
  IndexParamBrcmVideoEncodeMinQuant = 0x7F0000B4,
  IndexParamBrcmVideoEncodeMaxQuant = 0x7F0000B5,
  IndexParamRateControlModel = 0x7F0000B6,
  IndexParamBrcmExtraBuffers = 0x7F0000B7,
  IndexConfigFieldOfView = 0x7F0000B8,
  IndexParamBrcmAlignHoriz = 0x7F0000B9,
  IndexParamBrcmAlignVert = 0x7F0000BA,
  IndexParamColorSpace = 0x7F0000BB,
  IndexParamBrcmDroppablePFrames = 0x7F0000BC,
  IndexParamBrcmVideoInitialQuant = 0x7F0000BD,
  IndexParamBrcmVideoEncodeQpP = 0x7F0000BE,
  IndexParamBrcmVideoRCSliceDQuant = 0x7F0000BF,
  IndexParamBrcmVideoFrameLimitBits = 0x7F0000C0,
  IndexParamBrcmVideoPeakRate = 0x7F0000C1,
  IndexConfigBrcmVideoH264DisableCABAC = 0x7F0000C2,
  IndexConfigBrcmVideoH264LowLatency = 0x7F0000C3,
  IndexConfigBrcmVideoH264AUDelimiters = 0x7F0000C4,
  IndexConfigBrcmVideoH264DeblockIDC = 0x7F0000C5,
  IndexConfigBrcmVideoH264IntraMBMode = 0x7F0000C6,
  IndexConfigContrastEnhance = 0x7F0000C7,
  IndexParamCameraCustomSensorConfig = 0x7F0000C8,
  IndexParamBrcmHeaderOnOpen = 0x7F0000C9,
  IndexConfigBrcmUseRegisterFile = 0x7F0000CA,
  IndexConfigBrcmRegisterFileFailFatal = 0x7F0000CB,
  IndexParamBrcmConfigFileRegisters = 0x7F0000CC,
  IndexParamBrcmConfigFileChunkRegisters = 0x7F0000CD,
  IndexParamBrcmAttachLog = 0x7F0000CE,
  IndexParamCameraZeroShutterLag = 0x7F0000CF,
  IndexParamBrcmFpsRange = 0x7F0000D0,
  IndexParamCaptureExposureCompensation = 0x7F0000D1,
  IndexParamBrcmVideoPrecodeForQP = 0x7F0000D2,
  IndexParamBrcmVideoTimestampFifo = 0x7F0000D3,
  IndexParamSWSharpenDisable = 0x7F0000D4,
  IndexConfigBrcmFlashRequired = 0x7F0000D5,
  IndexParamBrcmVideoDrmProtectBuffer = 0x7F0000D6,
  IndexParamSWSaturationDisable = 0x7F0000D7,
  IndexParamBrcmVideoDecodeConfigVD3 = 0x7F0000D8,
  IndexConfigBrcmPowerMonitor = 0x7F0000D9,
  IndexParamBrcmZeroCopy = 0x7F0000DA,
  IndexParamBrcmVideoEGLRenderDiscardMode = 0x7F0000DB,
  IndexParamBrcmVideoAVC_VCLHRDEnable = 0x7F0000DC,
  IndexParamBrcmVideoAVC_LowDelayHRDEnable = 0x7F0000DD,
  IndexParamBrcmVideoCroppingDisable = 0x7F0000DE,
  IndexParamBrcmVideoAVCInlineHeaderEnable = 0x7F0000DF,
  IndexConfigBrcmAudioDownmixCoefficients = 0x7F0000F0,
  IndexConfigBrcmAudioDownmixCoefficients8x8 = 0x7F0000F1,
  IndexConfigBrcmAudioMaxSample = 0x7F0000F2,
  IndexConfigCustomAwbGains = 0x7F0000F3,
  IndexParamRemoveImagePadding = 0x7F0000F4,
  IndexParamBrcmVideoAVCInlineVectorsEnable = 0x7F0000F5,
  IndexConfigBrcmRenderStats = 0x7F0000F6,
  IndexConfigBrcmCameraAnnotate = 0x7F0000F7,
  IndexParamBrcmStereoscopicMode = 0x7F0000F8,
  IndexParamBrcmLockStepEnable = 0x7F0000F9,
  IndexParamBrcmTimeScale = 0x7F0000FA,
  IndexParamCameraInterface = 0x7F0000FB,
  IndexParamCameraClockingMode = 0x7F0000FC,
  IndexParamCameraRxConfig = 0x7F0000FD,
  IndexParamCameraRxTiming = 0x7F0000FE,
  IndexParamDynamicParameterConfig = 0x7F0000FF,
  IndexParamBrcmVideoAVCSPSTimingEnable = 0x7F000100,
  IndexParamBrcmBayerOrder = 0x7F000101,
  IndexParamBrcmMaxNumCallbacks = 0x7F000102,
  IndexMax = 0x7FFFFFFF
}
