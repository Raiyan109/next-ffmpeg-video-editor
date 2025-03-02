import React from 'react'
import { Button } from './ui/button'
import { Clock, Pause, Play, RotateCcw, Save, Scissors, Upload } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Card, CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'

const VideoEditor = () => {
    return (
        <div>
            <div className="grid gap-6">
                <>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                                {/* <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                /> */}

                                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                                    // onClick={togglePlayPause}
                                    >
                                        {/* {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />} */}
                                        <Play className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-4">
                                {/* <VideoTimeline
                  currentTime={currentTime}
                  duration={duration}
                  startTime={startTime}
                  endTime={endTime}
                  onSeek={handleSliderChange}
                /> */}

                                {/* <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div> */}
                            </div>
                        </div>

                        <div>
                            <Tabs defaultValue="trim">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="trim">Trim</TabsTrigger>
                                    <TabsTrigger value="cut">Cut</TabsTrigger>
                                </TabsList>

                                <TabsContent value="trim" className="space-y-4">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="space-y-4">
                                                <div className="grid gap-2">
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="start-time">Start Time</Label>
                                                        {/* <span className="text-sm font-medium">{formatTime(startTime)}</span> */}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <Input
                                                            id="start-time"
                                                            type="number"
                                                            min={0}
                                                            //   max={endTime}
                                                            step={0.1}
                                                            //   value={startTime}
                                                            //   onChange={(e) => setStartTime(Number.parseFloat(e.target.value))}
                                                            className="flex-1"
                                                        />
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            //   onClick={handleTrimStart}
                                                            title="Set to current position"
                                                        >
                                                            <Clock className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="grid gap-2">
                                                    <div className="flex items-center justify-between">
                                                        <Label htmlFor="end-time">End Time</Label>
                                                        {/* <span className="text-sm font-medium">{formatTime(endTime)}</span> */}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <Input
                                                            id="end-time"
                                                            type="number"
                                                            //   min={startTime}
                                                            //   max={duration}
                                                            step={0.1}
                                                            //   value={endTime}
                                                            //   onChange={(e) => setEndTime(Number.parseFloat(e.target.value))}
                                                            className="flex-1"
                                                        />
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            //   onClick={handleTrimEnd}
                                                            title="Set to current position"
                                                        >
                                                            <Clock className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between">
                                                    <Button variant="outline"
                                                    //   onClick={handleReset}
                                                    >
                                                        <RotateCcw className="h-4 w-4 mr-2" />
                                                        Reset
                                                    </Button>
                                                    <Button>
                                                        <Save className="h-4 w-4 mr-2" />
                                                        Save Trim
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="cut" className="space-y-4">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="space-y-4">
                                                <p className="text-sm text-gray-500">
                                                    Position the playhead where you want to cut the video, then click the Cut button.
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    {/* <span className="text-sm font-medium">Current Position: {formatTime(currentTime)}</span> */}
                                                    <Button variant="outline" size="sm">
                                                        <Scissors className="h-4 w-4 mr-2" />
                                                        Cut at Position
                                                    </Button>
                                                </div>

                                                <div className="border rounded-lg p-4 bg-gray-50">
                                                    <h3 className="text-sm font-medium mb-2">Cut Segments</h3>
                                                    <p className="text-sm text-gray-500">No segments created yet.</p>
                                                </div>

                                                <Button className="w-full">
                                                    <Save className="h-4 w-4 mr-2" />
                                                    Save Cut Video
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <Button variant="outline"
                        // onClick={() => setVideoSrc(null)}
                        >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload New Video
                        </Button>
                    </div>
                </>
                {/* {!videoSrc ? (
        <VideoUploader onFileSelect={handleFileChange} />
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <VideoTimeline
                  currentTime={currentTime}
                  duration={duration}
                  startTime={startTime}
                  endTime={endTime}
                  onSeek={handleSliderChange}
                />

                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <div>
              <Tabs defaultValue="trim">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="trim">Trim</TabsTrigger>
                  <TabsTrigger value="cut">Cut</TabsTrigger>
                </TabsList>

                <TabsContent value="trim" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="start-time">Start Time</Label>
                            <span className="text-sm font-medium">{formatTime(startTime)}</span>
                          </div>
                          <div className="flex gap-2">
                            <Input
                              id="start-time"
                              type="number"
                              min={0}
                              max={endTime}
                              step={0.1}
                              value={startTime}
                              onChange={(e) => setStartTime(Number.parseFloat(e.target.value))}
                              className="flex-1"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={handleTrimStart}
                              title="Set to current position"
                            >
                              <Clock className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="end-time">End Time</Label>
                            <span className="text-sm font-medium">{formatTime(endTime)}</span>
                          </div>
                          <div className="flex gap-2">
                            <Input
                              id="end-time"
                              type="number"
                              min={startTime}
                              max={duration}
                              step={0.1}
                              value={endTime}
                              onChange={(e) => setEndTime(Number.parseFloat(e.target.value))}
                              className="flex-1"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={handleTrimEnd}
                              title="Set to current position"
                            >
                              <Clock className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button variant="outline" onClick={handleReset}>
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Reset
                          </Button>
                          <Button>
                            <Save className="h-4 w-4 mr-2" />
                            Save Trim
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="cut" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500">
                          Position the playhead where you want to cut the video, then click the Cut button.
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Current Position: {formatTime(currentTime)}</span>
                          <Button variant="outline" size="sm">
                            <Scissors className="h-4 w-4 mr-2" />
                            Cut at Position
                          </Button>
                        </div>

                        <div className="border rounded-lg p-4 bg-gray-50">
                          <h3 className="text-sm font-medium mb-2">Cut Segments</h3>
                          <p className="text-sm text-gray-500">No segments created yet.</p>
                        </div>

                        <Button className="w-full">
                          <Save className="h-4 w-4 mr-2" />
                          Save Cut Video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setVideoSrc(null)}>
              <Upload className="h-4 w-4 mr-2" />
              Upload New Video
            </Button>
          </div>
        </>
      )} */}
            </div>
        </div>
    )
}

export default VideoEditor