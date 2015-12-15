var fs = require('fs');
var omx = require('../');

var VideoDecode = omx.VideoDecode();
var VideoRender = omx.VideoRender();

VideoDecode.setVideoPortFormat(omx.OMX_VIDEO_CODINGTYPE.OMX_VIDEO_CodingAVC);

fs.createReadStream("test/test.h264")
    .pipe(VideoDecode)
    .tunnel(VideoRender);
